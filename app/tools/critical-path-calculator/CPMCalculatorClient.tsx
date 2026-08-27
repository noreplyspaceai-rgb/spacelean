"use client";

import { useState } from "react";
import { 
  Plus, 
  Trash2, 
  RotateCcw, 
  Play, 
  Upload, 
  FileUp, 
  Calculator, 
  Info,
  Network,
  AlertCircle
} from "lucide-react";
import { calculateCPM, CPMResult } from "./cpm-engine";
import { parseXER } from "./xer-parser";
import CPMAuthModal, { type AuthSession } from "@/components/tools/CPMAuthModal";

interface Activity {
  id: string;
  name: string;
  duration: number;
  predecessors: string;
}

const SAMPLE_ACTIVITIES: Activity[] = [
  { id: "A", name: "Site Preparation", duration: 2, predecessors: "-" },
  { id: "B", name: "Excavation", duration: 4, predecessors: "A" },
  { id: "C", name: "Foundation", duration: 5, predecessors: "B" },
  { id: "D", name: "Framing & Structure", duration: 8, predecessors: "C" },
  { id: "E", name: "Roofing & Cladding", duration: 6, predecessors: "D" },
  { id: "F", name: "MEP Rough-Ins", duration: 7, predecessors: "D" },
  { id: "G", name: "Drywall & Finishes", duration: 5, predecessors: "E, F" },
  { id: "H", name: "Final Inspections", duration: 2, predecessors: "G" }
];

export default function CPMCalculatorClient() {
  const [inputMethod, setInputMethod] = useState<"manual" | "xer">("manual");
  const [activities, setActivities] = useState<Activity[]>([
    { id: "A", name: "Site Preparation", duration: 2, predecessors: "-" },
    { id: "B", name: "Excavation", duration: 4, predecessors: "A" },
    { id: "C", name: "Foundation", duration: 5, predecessors: "B" }
  ]);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [cpmResult, setCpmResult] = useState<CPMResult | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState<string | null>(null);

  // ── Auth state ─────────────────────────────────────────────────────────
  // Token kept in memory only — never logged, displayed or put in the URL.
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAddActivity = () => {
    let nextId = "A";
    if (activities.length > 0) {
      const lastId = activities[activities.length - 1].id.trim().toUpperCase();
      if (lastId.length === 1) {
        const charCode = lastId.charCodeAt(0);
        if (charCode >= 65 && charCode < 90) { // A to Y
          nextId = String.fromCharCode(charCode + 1);
        } else {
          nextId = `ACT-${activities.length + 1}`;
        }
      } else {
        const match = lastId.match(/^ACT-(\d+)$/);
        if (match) {
          nextId = `ACT-${parseInt(match[1]) + 1}`;
        } else {
          nextId = `ACT-${activities.length + 1}`;
        }
      }
    }
    setActivities([...activities, { id: nextId, name: "", duration: 1, predecessors: "" }]);
  };

  const handleDeleteActivity = (index: number) => {
    const updated = activities.filter((_, i) => i !== index);
    setActivities(updated);
  };

  const handleUpdateActivity = (index: number, field: keyof Activity, value: any) => {
    const updated = [...activities];
    if (field === "duration") {
      updated[index] = { 
        ...updated[index], 
        duration: Math.max(0, parseInt(value) || 0) 
      };
    } else {
      updated[index] = { 
        ...updated[index], 
        [field]: value 
      };
    }
    setActivities(updated);
  };

  const handleClear = () => {
    setActivities([]);
    setHasCalculated(false);
    setCpmResult(null);
    setValidationError(null);
    setSelectedFile(null);
    setFileError(null);
    setImportSuccess(null);
  };

  const handleLoadSample = () => {
    setActivities(SAMPLE_ACTIVITIES);
    setHasCalculated(false);
    setCpmResult(null);
    setValidationError(null);
    setSelectedFile(null);
    setFileError(null);
    setImportSuccess(null);
  };

  // ── Run the CPM engine (called after auth is confirmed) ────────────────
  const runCPMCalculation = () => {
    const result = calculateCPM(activities);
    if (result.error) {
      setValidationError(result.error);
      setCpmResult(null);
      setHasCalculated(false);
    } else {
      setValidationError(null);
      setCpmResult(result);
      setHasCalculated(true);
    }
  };

  const handleCalculate = () => {
    if (activities.length === 0) {
      setValidationError("Activity list is empty. Please add at least one activity.");
      setCpmResult(null);
      setHasCalculated(false);
      return;
    }

    // If user is already authenticated this session, run directly.
    if (authSession) {
      runCPMCalculation();
      return;
    }

    // Otherwise, open auth modal. CPM runs after successful authentication.
    setShowAuthModal(true);
  };

  // Called by CPMAuthModal after successful OTP verification.
  const handleAuthSuccess = (session: AuthSession) => {
    setAuthSession(session);
    setShowAuthModal(false);
    runCPMCalculation();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    setImportSuccess(null);
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      return;
    }

    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension !== "xer") {
      setFileError("Invalid file type. Please select a valid Primavera P6 .xer file.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    setFileError(null);
    setImportSuccess(null);
  };

  const handleImportXER = () => {
    if (!selectedFile) {
      setFileError("No file selected. Please select a Primavera P6 .xer file.");
      return;
    }

    setFileError(null);
    setImportSuccess(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        if (!text) {
          throw new Error("File is empty or could not be read.");
        }

        const parsed = parseXER(text);
        if (parsed.length === 0) {
          throw new Error("No valid activities found in the XER file.");
        }

        setActivities(parsed);
        setHasCalculated(false);
        setCpmResult(null);
        setValidationError(null);
        setImportSuccess(`Successfully imported ${parsed.length} activities from "${selectedFile.name}".`);
      } catch (err: any) {
        setFileError(err.message || "Unable to read this XER file. Please select a valid Primavera P6 XER file.");
      }
    };

    reader.onerror = () => {
      setFileError("Unable to read this XER file. Please select a valid Primavera P6 XER file.");
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div className="space-y-12">
      {/* Input Options Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-neutral-100 rounded-full border border-neutral-200">
          <button
            type="button"
            onClick={() => setInputMethod("manual")}
            className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
              inputMethod === "manual"
                ? "bg-white text-cyan-600 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Manual Entry
          </button>
          <button
            type="button"
            onClick={() => setInputMethod("xer")}
            className={`px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
              inputMethod === "xer"
                ? "bg-white text-cyan-600 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Import XER
          </button>
        </div>
      </div>

      {/* Main input content container */}
      <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        {inputMethod === "xer" ? (
          /* Import XER Pane */
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center border-2 border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50">
            {!selectedFile ? (
              <label 
                htmlFor="xer-file-upload" 
                className="w-full flex flex-col items-center justify-center cursor-pointer py-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                  <FileUp className="w-7 h-7 text-cyan-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-1">Import Primavera P6 XER</h3>
                <p className="text-sm text-neutral-500 max-w-md leading-relaxed mb-4">
                  Select a Primavera P6 .xer schedule file to automatically populate your project activities.
                </p>
                <span className="px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all shadow-sm">
                  Select File
                </span>
                <input
                  type="file"
                  id="xer-file-upload"
                  accept=".xer"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="w-full max-w-md bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  <FileUp className="w-6 h-6 text-emerald-500" strokeWidth={1.5} />
                </div>
                <div className="text-center w-full mb-6">
                  <h4 className="font-bold text-neutral-800 truncate px-2" title={selectedFile.name}>
                    {selectedFile.name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{formatFileSize(selectedFile.size)}</p>
                </div>
                
                <div className="flex gap-2 w-full justify-center">
                  <button
                    type="button"
                    onClick={handleClearFile}
                    className="px-4 py-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Remove
                  </button>
                  <button
                    type="button"
                    onClick={handleImportXER}
                    className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm shadow-cyan-500/10"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Import Schedule
                  </button>
                </div>
              </div>
            )}

            {fileError && (
              <div className="mt-4 flex gap-2.5 items-start text-left bg-red-50 border border-red-200 rounded-xl p-3.5 text-xs text-red-800 max-w-md w-full">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                <span>{fileError}</span>
              </div>
            )}

            {importSuccess && (
              <div className="mt-4 flex gap-2.5 items-start text-left bg-emerald-50 border border-emerald-250 rounded-xl p-3.5 text-xs text-emerald-800 max-w-md w-full">
                <Info className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                <div>
                  <p className="font-bold mb-0.5">Import Successful</p>
                  <p className="text-emerald-700">{importSuccess}</p>
                  <p className="text-neutral-400 mt-1 italic font-normal">Go to "Manual Entry" to edit these tasks, or click "Calculate CPM" below to run the schedule solver.</p>
                </div>
              </div>
            )}

            <p className="text-[10px] text-neutral-400 mt-6 italic">
              Your XER file is processed locally in your browser and is not uploaded to a server.
            </p>
          </div>
        ) : (
          /* Manual Entry Pane */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-800">Project Activities</h3>
                <p className="text-xs text-neutral-400 mt-1">Enter your project tasks, durations, and dependencies.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Load Sample Project
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-neutral-50/20">
              <table className="w-full text-sm text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-neutral-50 text-neutral-500 uppercase text-xs font-bold tracking-wider border-b border-neutral-200/60">
                    <th className="py-4 px-6 w-1/6">Activity ID</th>
                    <th className="py-4 px-6 w-2/5">Activity Name</th>
                    <th className="py-4 px-6 w-1/5">Duration (Days)</th>
                    <th className="py-4 px-6 w-1/5">Predecessor</th>
                    <th className="py-4 px-6 w-[80px] text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 bg-white">
                  {activities.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-neutral-400 italic">
                        No activities added. Click "Add Activity" to start or "Load Sample Project" to populate.
                      </td>
                    </tr>
                  ) : (
                    activities.map((activity, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="py-3 px-6">
                          <input
                            type="text"
                            value={activity.id}
                            onChange={(e) => handleUpdateActivity(idx, "id", e.target.value)}
                            placeholder="e.g. A"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 font-bold text-neutral-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </td>
                        <td className="py-3 px-6">
                          <input
                            type="text"
                            value={activity.name}
                            onChange={(e) => handleUpdateActivity(idx, "name", e.target.value)}
                            placeholder="e.g. Foundation Pouring"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </td>
                        <td className="py-3 px-6">
                          <input
                            type="number"
                            min="0"
                            value={activity.duration}
                            onChange={(e) => handleUpdateActivity(idx, "duration", e.target.value)}
                            placeholder="Duration"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </td>
                        <td className="py-3 px-6">
                          <input
                            type="text"
                            value={activity.predecessors}
                            onChange={(e) => handleUpdateActivity(idx, "predecessors", e.target.value)}
                            placeholder="e.g. A, B or -"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </td>
                        <td className="py-3 px-6 text-center">
                          <button
                            type="button"
                            onClick={() => handleDeleteActivity(idx)}
                            className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete Activity"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {validationError && (
              <div className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-850">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-650 mt-0.5" />
                <div>
                  <p className="font-bold text-red-800">Validation Error</p>
                  <p className="text-xs leading-relaxed text-red-700 mt-0.5">{validationError}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-neutral-100">
              <button
                type="button"
                onClick={handleAddActivity}
                className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Activity
              </button>
              <button
                type="button"
                disabled={activities.length === 0}
                onClick={handleCalculate}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/10"
              >
                <Calculator className="w-4 h-4" />
                Calculate CPM
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Section Placeholder UI */}
      <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6">
        <div>
          <h3 className="text-xl font-bold text-neutral-800">Calculation Results</h3>
          <p className="text-xs text-neutral-400 mt-1">Output details of critical path analysis and activity floats.</p>
        </div>

        {/* Project summaries: duration & critical path */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Project Duration</span>
            <div className="text-3xl font-black text-neutral-800 mt-2">
              {hasCalculated && cpmResult ? `${cpmResult.projectDuration} days` : "—"}
            </div>
            <p className="text-xs text-neutral-400 mt-1">Total working days to complete project.</p>
          </div>
          <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Critical Path Sequence</span>
            <div className="text-lg font-bold text-neutral-850 mt-3 flex items-center gap-2">
              {hasCalculated && cpmResult ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-650 rounded-lg border border-red-150 text-xs uppercase font-mono font-bold tracking-wide">
                  {cpmResult.criticalPath}
                </span>
              ) : (
                <span className="text-neutral-400">—</span>
              )}
            </div>
            <p className="text-xs text-neutral-400 mt-1">Sequence of critical activities with zero float.</p>
          </div>
        </div>

        {/* Informative Note for Pending Calculations */}
        {!hasCalculated && (
          <div className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 text-sm text-neutral-600">
            <Info className="w-5 h-5 shrink-0 text-neutral-400 mt-0.5" />
            <div>
              <p className="font-semibold text-neutral-700">Ready to Calculate</p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Enter your activities, durations, and predecessors, then click "Calculate CPM" to view the early/late schedules and critical path.
              </p>
            </div>
          </div>
        )}

        {/* Results grid / table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-neutral-50/20">
          <table className="w-full text-sm text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-neutral-50 text-neutral-500 uppercase text-xs font-bold tracking-wider border-b border-neutral-200/60">
                <th className="py-4 px-6">Activity ID</th>
                <th className="py-4 px-6">Early Start (ES)</th>
                <th className="py-4 px-6">Early Finish (EF)</th>
                <th className="py-4 px-6">Late Start (LS)</th>
                <th className="py-4 px-6">Late Finish (LF)</th>
                <th className="py-4 px-6">Total Float</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 bg-white">
              {!hasCalculated ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-neutral-400 italic">
                    Enter activity inputs and click "Calculate CPM" to populate floats and schedules.
                  </td>
                </tr>
              ) : !cpmResult || cpmResult.activities.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-neutral-400 italic">
                    No activities entered to calculate.
                  </td>
                </tr>
              ) : (
                cpmResult.activities.map((activity, idx) => {
                  const isCritical = activity.status === "CRITICAL";
                  return (
                    <tr key={idx} className={`hover:bg-neutral-50/50 transition-colors ${isCritical ? "bg-red-50/20" : ""}`}>
                      <td className="py-4 px-6 font-bold text-neutral-800">
                        {activity.id}
                        {activity.name && <span className="block text-xs font-mono font-medium text-neutral-400 mt-0.5">{activity.name}</span>}
                      </td>
                      <td className="py-4 px-6 font-mono text-neutral-600">{activity.es}</td>
                      <td className="py-4 px-6 font-mono text-neutral-600">{activity.ef}</td>
                      <td className="py-4 px-6 font-mono text-neutral-600">{activity.ls}</td>
                      <td className="py-4 px-6 font-mono text-neutral-600">{activity.lf}</td>
                      <td className="py-4 px-6 font-mono text-neutral-600">{activity.float}</td>
                      <td className="py-4 px-6">
                        {isCritical ? (
                          <span className="inline-block px-2.5 py-0.5 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100 shadow-sm shadow-red-500/5">
                            CRITICAL
                          </span>
                        ) : (
                          <span className="inline-block px-2.5 py-0.5 bg-neutral-100 text-neutral-500 rounded-full text-xs font-semibold border border-neutral-200">
                            NON-CRITICAL
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Authentication Modal ── */}
      <CPMAuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthenticated={handleAuthSuccess}
      />
    </div>
  );
}
