"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  FileText,
  Clipboard,
  Printer,
  ChevronLeft,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  CloudSun,
  Users,
  HardHat,
  Package,
  Wrench,
  AlertTriangle,
  TrendingUp,
  FileSpreadsheet
} from "lucide-react";

// --- Configurable Constants ---
const VARIANCE_THRESHOLD = 5; // percentage points

// --- TypeScript Interfaces ---
export interface ProjectInfo {
  name: string;
  location: string;
  date: string;
  reportNumber: string;
  preparedBy: string;
  contractor: string;
  client: string;
}

export interface WeatherInfo {
  condition: "Sunny" | "Partly Cloudy" | "Cloudy" | "Rain";
  temperature: string;
  workingConditions: string;
}

export interface ManpowerEntry {
  trade: string;
  planned: number;
  present: number;
}

export interface WorkActivity {
  activity: string;
  location: string;
  description: string;
  progress: number;
}

export interface MaterialEntry {
  name: string;
  quantity: number;
  unit: string;
  status: "Received" | "Used" | "Pending" | "Rejected";
  remarks: string;
}

export interface EquipmentEntry {
  name: string;
  quantity: number;
  hours: number;
  status: "Working" | "Idle" | "Maintenance";
  remarks: string;
}

export interface IssueEntry {
  issue: string;
  location: string;
  impact: string;
  action: string;
  status: "Open" | "In Progress" | "Resolved";
}

export interface SafetyInfo {
  ppeCompliance: "Yes" | "No" | "N/A";
  housekeeping: "Yes" | "No" | "N/A";
  scaffolding: "Yes" | "No" | "N/A";
  electricalSafety: "Yes" | "No" | "N/A";
  fireSafety: "Yes" | "No" | "N/A";
  incident: "No" | "Yes";
  incidentDetails: {
    description: string;
    location: string;
    action: string;
  };
}

export interface ProgressInfo {
  planned: number;
  actual: number;
}

export interface DailySiteReport {
  project: ProjectInfo;
  weather: WeatherInfo;
  manpower: ManpowerEntry[];
  workCompleted: WorkActivity[];
  materials: MaterialEntry[];
  equipment: EquipmentEntry[];
  issues: IssueEntry[];
  safety: SafetyInfo;
  progress: ProgressInfo;
  remarks: string;
}

const INITIAL_REPORT: DailySiteReport = {
  project: {
    name: "",
    location: "",
    date: "",
    reportNumber: "",
    preparedBy: "",
    contractor: "",
    client: ""
  },
  weather: {
    condition: "Sunny",
    temperature: "",
    workingConditions: "Normal"
  },
  manpower: [],
  workCompleted: [],
  materials: [],
  equipment: [],
  issues: [],
  safety: {
    ppeCompliance: "Yes",
    housekeeping: "Yes",
    scaffolding: "Yes",
    electricalSafety: "Yes",
    fireSafety: "Yes",
    incident: "No",
    incidentDetails: {
      description: "",
      location: "",
      action: ""
    }
  },
  progress: {
    planned: 0,
    actual: 0
  },
  remarks: ""
};

export default function DailySiteReportClient() {
  const [view, setView] = useState<"edit" | "preview">("edit");
  const [report, setReport] = useState<DailySiteReport>(INITIAL_REPORT);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copySuccess, setCopySuccess] = useState(false);

  // --- Handlers for Basic Project Info & Remarks ---
  const handleProjectChange = (field: keyof ProjectInfo, value: string) => {
    setReport((prev) => ({
      ...prev,
      project: { ...prev.project, [field]: value }
    }));
    // Clear validation error for that field if it is set
    if (errors[`project.${field}`]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`project.${field}`];
        return next;
      });
    }
  };

  const handleWeatherChange = (field: keyof WeatherInfo, value: string) => {
    setReport((prev) => ({
      ...prev,
      weather: { ...prev.weather, [field]: value }
    }));
  };

  const handleRemarksChange = (value: string) => {
    setReport((prev) => ({
      ...prev,
      remarks: value
    }));
  };

  // --- Handlers for Manpower ---
  const addManpowerRow = () => {
    setReport((prev) => ({
      ...prev,
      manpower: [...prev.manpower, { trade: "", planned: 0, present: 0 }]
    }));
  };

  const updateManpowerRow = (index: number, field: keyof ManpowerEntry, value: any) => {
    setReport((prev) => {
      const updated = [...prev.manpower];
      if (field === "planned" || field === "present") {
        const numValue = Math.max(0, parseInt(value) || 0);
        updated[index] = { ...updated[index], [field]: numValue };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return { ...prev, manpower: updated };
    });

    // Clear inline error if we edit
    const errKey = `manpower.${index}.${field}`;
    if (errors[errKey] || errors[`manpower.${index}.maxPresent`]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        delete next[`manpower.${index}.maxPresent`];
        return next;
      });
    }
  };

  const deleteManpowerRow = (index: number) => {
    setReport((prev) => ({
      ...prev,
      manpower: prev.manpower.filter((_, i) => i !== index)
    }));
    // Clean up error keys
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`manpower.${index}.`)) {
          delete next[key];
        }
      });
      return next;
    });
  };

  // --- Handlers for Work Completed ---
  const addWorkRow = () => {
    setReport((prev) => ({
      ...prev,
      workCompleted: [...prev.workCompleted, { activity: "", location: "", description: "", progress: 0 }]
    }));
  };

  const updateWorkRow = (index: number, field: keyof WorkActivity, value: any) => {
    setReport((prev) => {
      const updated = [...prev.workCompleted];
      if (field === "progress") {
        const clampedVal = Math.min(100, Math.max(0, parseInt(value) || 0));
        updated[index] = { ...updated[index], [field]: clampedVal };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return { ...prev, workCompleted: updated };
    });

    const errKey = `workCompleted.${index}.${field}`;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const deleteWorkRow = (index: number) => {
    setReport((prev) => ({
      ...prev,
      workCompleted: prev.workCompleted.filter((_, i) => i !== index)
    }));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`workCompleted.${index}.`)) {
          delete next[key];
        }
      });
      return next;
    });
  };

  // --- Handlers for Materials ---
  const addMaterialRow = () => {
    setReport((prev) => ({
      ...prev,
      materials: [...prev.materials, { name: "", quantity: 0, unit: "", status: "Received", remarks: "" }]
    }));
  };

  const updateMaterialRow = (index: number, field: keyof MaterialEntry, value: any) => {
    setReport((prev) => {
      const updated = [...prev.materials];
      if (field === "quantity") {
        const numValue = Math.max(0, parseFloat(value) || 0);
        updated[index] = { ...updated[index], [field]: numValue };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return { ...prev, materials: updated };
    });

    const errKey = `materials.${index}.${field}`;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const deleteMaterialRow = (index: number) => {
    setReport((prev) => ({
      ...prev,
      materials: prev.materials.filter((_, i) => i !== index)
    }));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`materials.${index}.`)) {
          delete next[key];
        }
      });
      return next;
    });
  };

  // --- Handlers for Equipment ---
  const addEquipmentRow = () => {
    setReport((prev) => ({
      ...prev,
      equipment: [...prev.equipment, { name: "", quantity: 0, hours: 0, status: "Working", remarks: "" }]
    }));
  };

  const updateEquipmentRow = (index: number, field: keyof EquipmentEntry, value: any) => {
    setReport((prev) => {
      const updated = [...prev.equipment];
      if (field === "quantity" || field === "hours") {
        const numValue = Math.max(0, parseFloat(value) || 0);
        updated[index] = { ...updated[index], [field]: numValue };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return { ...prev, equipment: updated };
    });

    const errKey = `equipment.${index}.${field}`;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const deleteEquipmentRow = (index: number) => {
    setReport((prev) => ({
      ...prev,
      equipment: prev.equipment.filter((_, i) => i !== index)
    }));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`equipment.${index}.`)) {
          delete next[key];
        }
      });
      return next;
    });
  };

  // --- Handlers for Issues / Delays ---
  const addIssueRow = () => {
    setReport((prev) => ({
      ...prev,
      issues: [...prev.issues, { issue: "", location: "", impact: "", action: "", status: "Open" }]
    }));
  };

  const updateIssueRow = (index: number, field: keyof IssueEntry, value: any) => {
    setReport((prev) => {
      const updated = [...prev.issues];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, issues: updated };
    });

    const errKey = `issues.${index}.${field}`;
    if (errors[errKey]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const deleteIssueRow = (index: number) => {
    setReport((prev) => ({
      ...prev,
      issues: prev.issues.filter((_, i) => i !== index)
    }));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`issues.${index}.`)) {
          delete next[key];
        }
      });
      return next;
    });
  };

  // --- Handlers for Safety ---
  const handleSafetyChange = (field: keyof Omit<SafetyInfo, "incidentDetails">, value: string) => {
    setReport((prev) => ({
      ...prev,
      safety: { ...prev.safety, [field]: value as any }
    }));
  };

  const handleSafetyDetailsChange = (field: keyof SafetyInfo["incidentDetails"], value: string) => {
    setReport((prev) => ({
      ...prev,
      safety: {
        ...prev.safety,
        incidentDetails: { ...prev.safety.incidentDetails, [field]: value }
      }
    }));

    if (errors[`safety.incidentDetails.${field}`]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`safety.incidentDetails.${field}`];
        return next;
      });
    }
  };

  // --- Handlers for Progress Summary ---
  const handleProgressChange = (field: keyof ProgressInfo, value: any) => {
    const clampedVal = Math.min(100, Math.max(0, parseInt(value) || 0));
    setReport((prev) => ({
      ...prev,
      progress: { ...prev.progress, [field]: clampedVal }
    }));

    if (errors[`progress.${field}`]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[`progress.${field}`];
        return next;
      });
    }
  };

  // --- Helpers for Calculations ---
  const calculateManpowerTotals = () => {
    let totalPlanned = 0;
    let totalPresent = 0;
    report.manpower.forEach((entry) => {
      totalPlanned += entry.planned;
      totalPresent += entry.present;
    });
    return { totalPlanned, totalPresent };
  };

  const getVarianceAndStatus = () => {
    const variance = report.progress.actual - report.progress.planned;
    let status: "AHEAD" | "ON TRACK" | "BEHIND" = "ON TRACK";
    if (variance > VARIANCE_THRESHOLD) {
      status = "AHEAD";
    } else if (variance < -VARIANCE_THRESHOLD) {
      status = "BEHIND";
    }
    return { variance, status };
  };

  // --- Validation ---
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // 1. Required Fields
    if (!report.project.name.trim()) {
      newErrors["project.name"] = "Project Name is required.";
    }
    if (!report.project.date.trim()) {
      newErrors["project.date"] = "Report Date is required.";
    }

    // 2. Manpower validation
    report.manpower.forEach((entry, idx) => {
      if (!entry.trade.trim()) {
        newErrors[`manpower.${idx}.trade`] = "Trade / Role is required.";
      }
      if (entry.planned < 0) {
        newErrors[`manpower.${idx}.planned`] = "Planned manpower cannot be negative.";
      }
      if (entry.present < 0) {
        newErrors[`manpower.${idx}.present`] = "Present manpower cannot be negative.";
      }
      if (entry.present > entry.planned) {
        newErrors[`manpower.${idx}.maxPresent`] = "Present manpower should not exceed planned manpower.";
      }
    });

    // 3. Work Completed validation
    report.workCompleted.forEach((entry, idx) => {
      if (!entry.activity.trim()) {
        newErrors[`workCompleted.${idx}.activity`] = "Activity name is required.";
      }
      if (entry.progress < 0 || entry.progress > 100) {
        newErrors[`workCompleted.${idx}.progress`] = "Progress must be between 0% and 100%.";
      }
    });

    // 4. Materials validation
    report.materials.forEach((entry, idx) => {
      if (!entry.name.trim()) {
        newErrors[`materials.${idx}.name`] = "Material Name is required.";
      }
      if (entry.quantity < 0) {
        newErrors[`materials.${idx}.quantity`] = "Quantity cannot be negative.";
      }
    });

    // 5. Equipment validation
    report.equipment.forEach((entry, idx) => {
      if (!entry.name.trim()) {
        newErrors[`equipment.${idx}.name`] = "Equipment Name is required.";
      }
      if (entry.quantity < 0) {
        newErrors[`equipment.${idx}.quantity`] = "Quantity cannot be negative.";
      }
      if (entry.hours < 0) {
        newErrors[`equipment.${idx}.hours`] = "Operating hours cannot be negative.";
      }
    });

    // 6. Issues validation
    report.issues.forEach((entry, idx) => {
      if (!entry.issue.trim()) {
        newErrors[`issues.${idx}.issue`] = "Issue description is required.";
      }
    });

    // 7. Safety Validation
    if (report.safety.incident === "Yes") {
      if (!report.safety.incidentDetails.description.trim()) {
        newErrors["safety.incidentDetails.description"] = "Incident details description is required.";
      }
      if (!report.safety.incidentDetails.action.trim()) {
        newErrors["safety.incidentDetails.action"] = "Incident action taken is required.";
      }
    }

    // 8. Progress inputs validation
    if (report.progress.planned < 0 || report.progress.planned > 100) {
      newErrors["progress.planned"] = "Planned progress must be between 0% and 100%.";
    }
    if (report.progress.actual < 0 || report.progress.actual > 100) {
      newErrors["progress.actual"] = "Actual progress must be between 0% and 100%.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Generate Report action ---
  const handleGenerateReport = () => {
    const isValid = validateForm();
    if (isValid) {
      setView("preview");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Find the first error element and scroll to it
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const el = document.getElementById(firstError);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  // --- Copy Text Version ---
  const handleCopyReport = () => {
    const { totalPlanned, totalPresent } = calculateManpowerTotals();
    const { variance, status } = getVarianceAndStatus();

    let text = `DAILY SITE REPORT\n`;
    text += `========================================\n\n`;

    text += `PROJECT INFORMATION\n`;
    text += `----------------------------------------\n`;
    text += `Project: ${report.project.name}\n`;
    text += `Location: ${report.project.location || "N/A"}\n`;
    text += `Date: ${report.project.date}\n`;
    text += `Report #: ${report.project.reportNumber || "N/A"}\n`;
    text += `Prepared By: ${report.project.preparedBy || "N/A"}\n`;
    text += `Contractor: ${report.project.contractor || "N/A"}\n`;
    text += `Client: ${report.project.client || "N/A"}\n\n`;

    text += `WEATHER INFORMATION\n`;
    text += `----------------------------------------\n`;
    text += `Condition: ${report.weather.condition}\n`;
    text += `Temperature: ${report.weather.temperature || "N/A"}\n`;
    text += `Working Conditions: ${report.weather.workingConditions || "N/A"}\n\n`;

    text += `MANPOWER\n`;
    text += `----------------------------------------\n`;
    if (report.manpower.length === 0) {
      text += `No manpower recorded.\n`;
    } else {
      report.manpower.forEach((m) => {
        text += `${m.trade}: ${m.present} Present / ${m.planned} Planned\n`;
      });
      text += `Total Planned: ${totalPlanned} | Total Present: ${totalPresent}\n`;
    }
    text += `\n`;

    text += `WORK COMPLETED\n`;
    text += `----------------------------------------\n`;
    if (report.workCompleted.length === 0) {
      text += `No work activities recorded.\n`;
    } else {
      report.workCompleted.forEach((wc) => {
        text += `- ${wc.activity} (${wc.location || "No Location"}): ${wc.progress}%\n`;
        if (wc.description) text += `  Description: ${wc.description}\n`;
      });
    }
    text += `\n`;

    text += `MATERIALS DELIVERED/USED\n`;
    text += `----------------------------------------\n`;
    if (report.materials.length === 0) {
      text += `No materials recorded.\n`;
    } else {
      report.materials.forEach((mat) => {
        text += `- ${mat.name}: ${mat.quantity} ${mat.unit || "units"} [${mat.status}]\n`;
        if (mat.remarks) text += `  Remarks: ${mat.remarks}\n`;
      });
    }
    text += `\n`;

    text += `EQUIPMENT ON SITE\n`;
    text += `----------------------------------------\n`;
    if (report.equipment.length === 0) {
      text += `No equipment recorded.\n`;
    } else {
      report.equipment.forEach((eq) => {
        text += `- ${eq.name}: ${eq.quantity} units, ${eq.hours} hours [${eq.status}]\n`;
        if (eq.remarks) text += `  Remarks: ${eq.remarks}\n`;
      });
    }
    text += `\n`;

    text += `ISSUES & DELAYS\n`;
    text += `----------------------------------------\n`;
    if (report.issues.length === 0) {
      text += `No issues or delays recorded.\n`;
    } else {
      report.issues.forEach((iss) => {
        text += `- [${iss.status}] ${iss.issue} (${iss.location || "No Location"})\n`;
        text += `  Impact: ${iss.impact || "N/A"} | Action: ${iss.action || "N/A"}\n`;
      });
    }
    text += `\n`;

    text += `SAFETY\n`;
    text += `----------------------------------------\n`;
    text += `PPE Compliance: ${report.safety.ppeCompliance}\n`;
    text += `Housekeeping: ${report.safety.housekeeping}\n`;
    text += `Scaffolding: ${report.safety.scaffolding}\n`;
    text += `Electrical Safety: ${report.safety.electricalSafety}\n`;
    text += `Fire Safety: ${report.safety.fireSafety}\n`;
    text += `Safety Incidents: ${report.safety.incident}\n`;
    if (report.safety.incident === "Yes") {
      text += `  Incident Description: ${report.safety.incidentDetails.description}\n`;
      text += `  Location: ${report.safety.incidentDetails.location || "N/A"}\n`;
      text += `  Action Taken: ${report.safety.incidentDetails.action}\n`;
    }
    text += `\n`;

    text += `PROGRESS SUMMARY\n`;
    text += `----------------------------------------\n`;
    text += `Planned Progress: ${report.progress.planned}%\n`;
    text += `Actual Progress: ${report.progress.actual}%\n`;
    text += `Variance: ${variance >= 0 ? "+" : ""}${variance}%\n`;
    text += `Project Status: ${status}\n\n`;

    text += `ADDITIONAL REMARKS\n`;
    text += `----------------------------------------\n`;
    text += `${report.remarks || "No additional remarks."}\n`;

    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  // --- Print Trigger ---
  const handlePrintReport = () => {
    window.print();
  };

  // --- Calculations for Display ---
  const { totalPlanned, totalPresent } = calculateManpowerTotals();
  const { variance, status: progressStatus } = getVarianceAndStatus();

  return (
    <div className="space-y-8 print:space-y-0">
      {/* 
        Tailwind style overrides specifically for print.
        Only print the container with ID "report-preview-container", hide everything else.
      */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          /* Hide non-report layout elements */
          main {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          header, footer, nav, button, .print\\:hidden, div.absolute {
            display: none !important;
          }
          #report-preview-container {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
          /* Prevent page breaks inside critical preview panels */
          .preview-section {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {view === "edit" ? (
        /* ==================== FORM VIEW ==================== */
        <div className="space-y-8 print:hidden">
          {/* Main Form container */}
          <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-8">
            
            {/* 1. PROJECT INFORMATION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                <FileText className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold text-neutral-800">Project Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="project-name" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Project Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="project-name"
                    value={report.project.name}
                    onChange={(e) => handleProjectChange("name", e.target.value)}
                    placeholder="e.g. ABC Commercial Building"
                    className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                      errors["project.name"] ? "border-red-500" : "border-neutral-200/80"
                    }`}
                  />
                  {errors["project.name"] && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors["project.name"]}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="project-location" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="project-location"
                    value={report.project.location}
                    onChange={(e) => handleProjectChange("location", e.target.value)}
                    placeholder="e.g. Bangalore"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="report-date" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Report Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="report-date"
                    value={report.project.date}
                    onChange={(e) => handleProjectChange("date", e.target.value)}
                    className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                      errors["project.date"] ? "border-red-500" : "border-neutral-200/80"
                    }`}
                  />
                  {errors["project.date"] && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors["project.date"]}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="report-number" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Report Number
                  </label>
                  <input
                    type="text"
                    id="report-number"
                    value={report.project.reportNumber}
                    onChange={(e) => handleProjectChange("reportNumber", e.target.value)}
                    placeholder="e.g. DSR-001"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="prepared-by" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Prepared By
                  </label>
                  <input
                    type="text"
                    id="prepared-by"
                    value={report.project.preparedBy}
                    onChange={(e) => handleProjectChange("preparedBy", e.target.value)}
                    placeholder="e.g. Site Engineer"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="contractor" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Contractor
                  </label>
                  <input
                    type="text"
                    id="contractor"
                    value={report.project.contractor}
                    onChange={(e) => handleProjectChange("contractor", e.target.value)}
                    placeholder="e.g. ABC Construction"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="client" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Client
                  </label>
                  <input
                    type="text"
                    id="client"
                    value={report.project.client}
                    onChange={(e) => handleProjectChange("client", e.target.value)}
                    placeholder="e.g. XYZ Developers"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>
              </div>
            </section>

            {/* 2. WEATHER INFORMATION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                <CloudSun className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold text-neutral-800">Weather Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="weather-condition" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Weather Condition
                  </label>
                  <select
                    id="weather-condition"
                    value={report.weather.condition}
                    onChange={(e) => handleWeatherChange("condition", e.target.value)}
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  >
                    <option value="Sunny">Sunny</option>
                    <option value="Partly Cloudy">Partly Cloudy</option>
                    <option value="Cloudy">Cloudy</option>
                    <option value="Rain">Rain</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="weather-temperature" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Temperature
                  </label>
                  <input
                    type="text"
                    id="weather-temperature"
                    value={report.weather.temperature}
                    onChange={(e) => handleWeatherChange("temperature", e.target.value)}
                    placeholder="e.g. 29°C"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>

                <div>
                  <label htmlFor="weather-conditions-working" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Working Conditions
                  </label>
                  <input
                    type="text"
                    id="weather-conditions-working"
                    value={report.weather.workingConditions}
                    onChange={(e) => handleWeatherChange("workingConditions", e.target.value)}
                    placeholder="e.g. Normal"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>
              </div>
            </section>

            {/* 3. MANPOWER SECTION */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-500" />
                  <h2 className="text-xl font-bold text-neutral-800">Manpower</h2>
                </div>
                <button
                  type="button"
                  onClick={addManpowerRow}
                  className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Manpower
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-neutral-50/20">
                <table className="w-full text-sm text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-500 uppercase text-xs font-bold tracking-wider border-b border-neutral-200/60">
                      <th className="py-3 px-4 w-1/2">Trade / Role</th>
                      <th className="py-3 px-4 w-1/5">Planned</th>
                      <th className="py-3 px-4 w-1/5">Present</th>
                      <th className="py-3 px-4 w-[60px] text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 bg-white">
                    {report.manpower.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-neutral-450 italic">
                          No manpower items recorded. Click "Add Manpower" to record site workers.
                        </td>
                      </tr>
                    ) : (
                      report.manpower.map((row, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/30 transition-colors">
                          <td className="py-2.5 px-4">
                            <input
                              type="text"
                              value={row.trade}
                              onChange={(e) => updateManpowerRow(idx, "trade", e.target.value)}
                              placeholder="e.g. Masons"
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`manpower.${idx}.trade`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`manpower.${idx}.trade`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`manpower.${idx}.trade`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="number"
                              min="0"
                              value={row.planned}
                              onChange={(e) => updateManpowerRow(idx, "planned", e.target.value)}
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`manpower.${idx}.planned`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`manpower.${idx}.planned`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`manpower.${idx}.planned`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="number"
                              min="0"
                              value={row.present}
                              onChange={(e) => updateManpowerRow(idx, "present", e.target.value)}
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-755 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`manpower.${idx}.present`] || errors[`manpower.${idx}.maxPresent`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`manpower.${idx}.present`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`manpower.${idx}.present`]}</p>
                            )}
                            {errors[`manpower.${idx}.maxPresent`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`manpower.${idx}.maxPresent`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => deleteManpowerRow(idx)}
                              className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-55 rounded-lg transition-colors"
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

              {/* Total calculations view */}
              <div className="flex justify-end gap-6 py-2 px-4 border-t border-neutral-100 text-sm font-semibold">
                <div className="text-neutral-500">
                  Total Planned: <span className="text-neutral-800 font-bold">{totalPlanned}</span>
                </div>
                <div className="text-neutral-500">
                  Total Present: <span className="text-neutral-800 font-bold">{totalPresent}</span>
                </div>
              </div>
            </section>

            {/* 4. WORK COMPLETED SECTION */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <HardHat className="w-5 h-5 text-cyan-500" />
                  <h2 className="text-xl font-bold text-neutral-800">Work Activities</h2>
                </div>
                <button
                  type="button"
                  onClick={addWorkRow}
                  className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Activity
                </button>
              </div>

              <div className="space-y-4">
                {report.workCompleted.length === 0 ? (
                  <div className="py-8 text-center text-neutral-450 italic border border-neutral-200/60 rounded-2xl bg-neutral-50/20">
                    No work activities recorded. Click "Add Activity" to document site progress.
                  </div>
                ) : (
                  report.workCompleted.map((row, idx) => (
                    <div key={idx} className="p-4 border border-neutral-200/60 rounded-2xl bg-neutral-50/10 space-y-3 relative group">
                      <button
                        type="button"
                        onClick={() => deleteWorkRow(idx)}
                        className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-55 rounded-lg transition-colors"
                        title="Delete Activity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Activity <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={row.activity}
                            onChange={(e) => updateWorkRow(idx, "activity", e.target.value)}
                            placeholder="e.g. Foundation Excavation"
                            className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                              errors[`workCompleted.${idx}.activity`] ? "border-red-500" : "border-neutral-200/80"
                            }`}
                          />
                          {errors[`workCompleted.${idx}.activity`] && (
                            <p className="text-xs text-red-500 mt-1">{errors[`workCompleted.${idx}.activity`]}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={row.location}
                            onChange={(e) => updateWorkRow(idx, "location", e.target.value)}
                            placeholder="e.g. Block A"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Description
                          </label>
                          <input
                            type="text"
                            value={row.description}
                            onChange={(e) => updateWorkRow(idx, "description", e.target.value)}
                            placeholder="e.g. Excavation completed for foundation footings."
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider">
                              Progress
                            </label>
                            <span className="text-xs font-mono font-bold text-cyan-600">{row.progress}%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={row.progress}
                              onChange={(e) => updateWorkRow(idx, "progress", e.target.value)}
                              className="w-full accent-cyan-500"
                            />
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={row.progress}
                              onChange={(e) => updateWorkRow(idx, "progress", e.target.value)}
                              className="w-16 bg-white border border-neutral-200/80 rounded-lg px-2 py-1 text-xs text-center text-neutral-700 focus:outline-none focus:border-cyan-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* 5. MATERIALS SECTION */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-cyan-500" />
                  <h2 className="text-xl font-bold text-neutral-800">Materials</h2>
                </div>
                <button
                  type="button"
                  onClick={addMaterialRow}
                  className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Material
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-neutral-50/20">
                <table className="w-full text-sm text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-500 uppercase text-xs font-bold tracking-wider border-b border-neutral-200/60">
                      <th className="py-3 px-4 w-1/3">Material Name</th>
                      <th className="py-3 px-4 w-1/8">Quantity</th>
                      <th className="py-3 px-4 w-1/8">Unit</th>
                      <th className="py-3 px-4 w-1/5">Status</th>
                      <th className="py-3 px-4 w-1/4">Remarks</th>
                      <th className="py-3 px-4 w-[60px] text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 bg-white">
                    {report.materials.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-neutral-450 italic">
                          No materials items recorded. Click "Add Material".
                        </td>
                      </tr>
                    ) : (
                      report.materials.map((row, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/30 transition-colors">
                          <td className="py-2.5 px-4">
                            <input
                              type="text"
                              value={row.name}
                              onChange={(e) => updateMaterialRow(idx, "name", e.target.value)}
                              placeholder="e.g. Cement"
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`materials.${idx}.name`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`materials.${idx}.name`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`materials.${idx}.name`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="number"
                              min="0"
                              step="any"
                              value={row.quantity}
                              onChange={(e) => updateMaterialRow(idx, "quantity", e.target.value)}
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`materials.${idx}.quantity`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`materials.${idx}.quantity`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`materials.${idx}.quantity`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="text"
                              value={row.unit}
                              onChange={(e) => updateMaterialRow(idx, "unit", e.target.value)}
                              placeholder="e.g. Bags"
                              className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                            />
                          </td>
                          <td className="py-2.5 px-4">
                            <select
                              value={row.status}
                              onChange={(e) => updateMaterialRow(idx, "status", e.target.value)}
                              className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500"
                            >
                              <option value="Received">Received</option>
                              <option value="Used">Used</option>
                              <option value="Pending">Pending</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="text"
                              value={row.remarks}
                              onChange={(e) => updateMaterialRow(idx, "remarks", e.target.value)}
                              placeholder="Remarks"
                              className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                            />
                          </td>
                          <td className="py-2.5 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => deleteMaterialRow(idx)}
                              className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-55 rounded-lg transition-colors"
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
            </section>

            {/* 6. EQUIPMENT SECTION */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-cyan-500" />
                  <h2 className="text-xl font-bold text-neutral-800">Equipment</h2>
                </div>
                <button
                  type="button"
                  onClick={addEquipmentRow}
                  className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Equipment
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-neutral-50/20">
                <table className="w-full text-sm text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-500 uppercase text-xs font-bold tracking-wider border-b border-neutral-200/60">
                      <th className="py-3 px-4 w-1/3">Equipment</th>
                      <th className="py-3 px-4 w-1/8">Quantity</th>
                      <th className="py-3 px-4 w-1/8">Hours</th>
                      <th className="py-3 px-4 w-1/5">Status</th>
                      <th className="py-3 px-4 w-1/4">Remarks</th>
                      <th className="py-3 px-4 w-[60px] text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 bg-white">
                    {report.equipment.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-neutral-450 italic">
                          No equipment items recorded. Click "Add Equipment".
                        </td>
                      </tr>
                    ) : (
                      report.equipment.map((row, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/30 transition-colors">
                          <td className="py-2.5 px-4">
                            <input
                              type="text"
                              value={row.name}
                              onChange={(e) => updateEquipmentRow(idx, "name", e.target.value)}
                              placeholder="e.g. Excavator"
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`equipment.${idx}.name`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`equipment.${idx}.name`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`equipment.${idx}.name`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="number"
                              min="0"
                              value={row.quantity}
                              onChange={(e) => updateEquipmentRow(idx, "quantity", e.target.value)}
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`equipment.${idx}.quantity`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`equipment.${idx}.quantity`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`equipment.${idx}.quantity`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="number"
                              min="0"
                              step="any"
                              value={row.hours}
                              onChange={(e) => updateEquipmentRow(idx, "hours", e.target.value)}
                              className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                                errors[`equipment.${idx}.hours`] ? "border-red-500" : "border-neutral-200/80"
                              }`}
                            />
                            {errors[`equipment.${idx}.hours`] && (
                              <p className="text-[10px] text-red-500 mt-0.5">{errors[`equipment.${idx}.hours`]}</p>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <select
                              value={row.status}
                              onChange={(e) => updateEquipmentRow(idx, "status", e.target.value)}
                              className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500"
                            >
                              <option value="Working">Working</option>
                              <option value="Idle">Idle</option>
                              <option value="Maintenance">Maintenance</option>
                            </select>
                          </td>
                          <td className="py-2.5 px-4">
                            <input
                              type="text"
                              value={row.remarks}
                              onChange={(e) => updateEquipmentRow(idx, "remarks", e.target.value)}
                              placeholder="Remarks"
                              className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                            />
                          </td>
                          <td className="py-2.5 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => deleteEquipmentRow(idx)}
                              className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-55 rounded-lg transition-colors"
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
            </section>

            {/* 7. ISSUES / DELAYS SECTION */}
            <section className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-cyan-500" />
                  <h2 className="text-xl font-bold text-neutral-800">Issues & Delays</h2>
                </div>
                <button
                  type="button"
                  onClick={addIssueRow}
                  className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Issue
                </button>
              </div>

              <div className="space-y-4">
                {report.issues.length === 0 ? (
                  <div className="py-8 text-center text-neutral-450 italic border border-neutral-200/60 rounded-2xl bg-neutral-50/20">
                    No issues or delays recorded. Click "Add Issue" to log site incidents.
                  </div>
                ) : (
                  report.issues.map((row, idx) => (
                    <div key={idx} className="p-4 border border-neutral-200/60 rounded-2xl bg-neutral-50/10 space-y-3 relative group">
                      <button
                        type="button"
                        onClick={() => deleteIssueRow(idx)}
                        className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-55 rounded-lg transition-colors"
                        title="Delete Issue"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Issue / Delay <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={row.issue}
                            onChange={(e) => updateIssueRow(idx, "issue", e.target.value)}
                            placeholder="e.g. Steel delivery delayed"
                            className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                              errors[`issues.${idx}.issue`] ? "border-red-500" : "border-neutral-200/80"
                            }`}
                          />
                          {errors[`issues.${idx}.issue`] && (
                            <p className="text-xs text-red-500 mt-1">{errors[`issues.${idx}.issue`]}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={row.location}
                            onChange={(e) => updateIssueRow(idx, "location", e.target.value)}
                            placeholder="e.g. Block A"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                        <div className="lg:col-span-2">
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Impact
                          </label>
                          <input
                            type="text"
                            value={row.impact}
                            onChange={(e) => updateIssueRow(idx, "impact", e.target.value)}
                            placeholder="e.g. Foundation reinforcement delayed by 3 hours"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Action Taken
                          </label>
                          <input
                            type="text"
                            value={row.action}
                            onChange={(e) => updateIssueRow(idx, "action", e.target.value)}
                            placeholder="e.g. Supplier contacted"
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                            Status
                          </label>
                          <select
                            value={row.status}
                            onChange={(e) => updateIssueRow(idx, "status", e.target.value)}
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500"
                          >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* 8. SAFETY SECTION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold text-neutral-800">Safety Checklist</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { field: "ppeCompliance", label: "PPE Compliance" },
                  { field: "housekeeping", label: "Housekeeping" },
                  { field: "scaffolding", label: "Scaffolding" },
                  { field: "electricalSafety", label: "Electrical Safety" },
                  { field: "fireSafety", label: "Fire Safety" }
                ].map((item) => (
                  <div key={item.field}>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </label>
                    <select
                      value={report.safety[item.field as keyof Omit<SafetyInfo, "incidentDetails">]}
                      onChange={(e) => handleSafetyChange(item.field as any, e.target.value)}
                      className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="N/A">N/A</option>
                    </select>
                  </div>
                ))}
              </div>

              {/* Safety Incidents Today? */}
              <div className="pt-4 border-t border-neutral-100 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Any Safety Incidents Today?
                  </label>
                  <div className="flex gap-4">
                    {["No", "Yes"].map((val) => (
                      <label key={val} className="inline-flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                        <input
                          type="radio"
                          name="safety-incident"
                          value={val}
                          checked={report.safety.incident === val}
                          onChange={(e) => handleSafetyChange("incident", e.target.value)}
                          className="accent-cyan-500"
                        />
                        {val}
                      </label>
                    ))}
                  </div>
                </div>

                {report.safety.incident === "Yes" && (
                  <div className="p-4 bg-red-50/30 border border-red-200/50 rounded-2xl space-y-4">
                    <h4 className="text-sm font-bold text-red-800">Incident Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          Incident Description <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={report.safety.incidentDetails.description}
                          onChange={(e) => handleSafetyDetailsChange("description", e.target.value)}
                          placeholder="Describe what happened"
                          className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-red-500 ${
                            errors["safety.incidentDetails.description"] ? "border-red-500" : "border-neutral-200/80"
                          }`}
                        />
                        {errors["safety.incidentDetails.description"] && (
                          <p className="text-xs text-red-500 mt-1">{errors["safety.incidentDetails.description"]}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          Incident Location
                        </label>
                        <input
                          type="text"
                          value={report.safety.incidentDetails.location}
                          onChange={(e) => handleSafetyDetailsChange("location", e.target.value)}
                          placeholder="Where on site"
                          className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                          Action Taken <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={report.safety.incidentDetails.action}
                          onChange={(e) => handleSafetyDetailsChange("action", e.target.value)}
                          placeholder="Action taken in response to incident"
                          className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-red-500 ${
                            errors["safety.incidentDetails.action"] ? "border-red-500" : "border-neutral-200/80"
                          }`}
                        />
                        {errors["safety.incidentDetails.action"] && (
                          <p className="text-xs text-red-500 mt-1">{errors["safety.incidentDetails.action"]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 9. PROGRESS SUMMARY */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                <TrendingUp className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold text-neutral-800">Project Progress</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                      Planned Progress (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={report.progress.planned}
                      onChange={(e) => handleProgressChange("planned", e.target.value)}
                      className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 ${
                        errors["progress.planned"] ? "border-red-500" : "border-neutral-200/80"
                      }`}
                    />
                    {errors["progress.planned"] && (
                      <p className="text-xs text-red-500 mt-1">{errors["progress.planned"]}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                      Actual Progress (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={report.progress.actual}
                      onChange={(e) => handleProgressChange("actual", e.target.value)}
                      className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 ${
                        errors["progress.actual"] ? "border-red-500" : "border-neutral-200/80"
                      }`}
                    />
                    {errors["progress.actual"] && (
                      <p className="text-xs text-red-500 mt-1">{errors["progress.actual"]}</p>
                    )}
                  </div>
                </div>

                {/* Progress Status Calculations Card */}
                <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Variance</span>
                    <div className="text-2xl font-black text-neutral-800 mt-1">
                      {variance >= 0 ? "+" : ""}{variance} pp
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Project Status</span>
                    <div className="mt-1">
                      {progressStatus === "AHEAD" && (
                        <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100 shadow-sm shadow-emerald-500/5">
                          AHEAD
                        </span>
                      )}
                      {progressStatus === "ON TRACK" && (
                        <span className="inline-block px-2.5 py-0.5 bg-cyan-50 text-cyan-600 rounded-full text-xs font-bold border border-cyan-100 shadow-sm shadow-cyan-500/5">
                          ON TRACK
                        </span>
                      )}
                      {progressStatus === "BEHIND" && (
                        <span className="inline-block px-2.5 py-0.5 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100 shadow-sm shadow-red-500/5">
                          BEHIND
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. ADDITIONAL REMARKS */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                <FileSpreadsheet className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold text-neutral-800">Additional Remarks</h2>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Remarks / Notes
                </label>
                <textarea
                  value={report.remarks}
                  onChange={(e) => handleRemarksChange(e.target.value)}
                  placeholder="Provide general remarks about the day..."
                  rows={4}
                  className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-2 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                />
              </div>
            </section>

            {/* Global Errors Warning */}
            {Object.keys(errors).length > 0 && (
              <div className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-850">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-650 mt-0.5" />
                <div>
                  <p className="font-bold text-red-800">Validation Error</p>
                  <p className="text-xs leading-relaxed text-red-700 mt-0.5">
                    Please correct the highlighted fields before generating the report.
                  </p>
                </div>
              </div>
            )}

            {/* Generate Button */}
            <div className="flex justify-end pt-4 border-t border-neutral-100">
              <button
                type="button"
                onClick={handleGenerateReport}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm shadow-cyan-500/10"
              >
                <FileText className="w-4 h-4" />
                Generate Daily Report
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* ==================== PREVIEW VIEW ==================== */
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
            <button
              type="button"
              onClick={() => setView("edit")}
              className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Edit Report
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopyReport}
                className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 relative"
              >
                <Clipboard className="w-3.5 h-3.5" />
                {copySuccess ? "Copied!" : "Copy Report"}
              </button>
              <button
                type="button"
                onClick={handlePrintReport}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm shadow-cyan-500/10"
              >
                <Printer className="w-3.5 h-3.5" />
                Print Report
              </button>
            </div>
          </div>

          {/* Actual Report Preview Panel */}
          <div
            id="report-preview-container"
            className="bg-white border border-neutral-200/60 rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-8"
          >
            {/* Report Header */}
            <div className="text-center pb-6 border-b-2 border-neutral-900/10 space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 uppercase">Daily Site Report</h2>
              {report.project.reportNumber && (
                <p className="text-sm font-mono text-neutral-500">Report No: {report.project.reportNumber}</p>
              )}
            </div>

            {/* Grid 1: Project Info & Weather */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Info Panel */}
              <div className="space-y-3 preview-section">
                <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                  Project Information
                </h3>
                <div className="grid grid-cols-3 gap-y-2 text-sm">
                  <span className="text-neutral-400">Project:</span>
                  <span className="col-span-2 font-bold text-neutral-800">{report.project.name}</span>

                  <span className="text-neutral-400">Location:</span>
                  <span className="col-span-2 font-medium text-neutral-800">{report.project.location || "—"}</span>

                  <span className="text-neutral-400">Date:</span>
                  <span className="col-span-2 font-semibold text-neutral-800">{report.project.date}</span>

                  <span className="text-neutral-400">Prepared By:</span>
                  <span className="col-span-2 font-medium text-neutral-800">{report.project.preparedBy || "—"}</span>

                  <span className="text-neutral-400">Contractor:</span>
                  <span className="col-span-2 font-medium text-neutral-800">{report.project.contractor || "—"}</span>

                  <span className="text-neutral-400">Client:</span>
                  <span className="col-span-2 font-medium text-neutral-800">{report.project.client || "—"}</span>
                </div>
              </div>

              {/* Weather Panel */}
              <div className="space-y-3 preview-section">
                <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                  Weather & Site Condition
                </h3>
                <div className="grid grid-cols-3 gap-y-2 text-sm">
                  <span className="text-neutral-400">Condition:</span>
                  <span className="col-span-2 font-bold text-neutral-800">{report.weather.condition}</span>

                  <span className="text-neutral-400">Temperature:</span>
                  <span className="col-span-2 font-medium text-neutral-800">{report.weather.temperature || "—"}</span>

                  <span className="text-neutral-400">Site Status:</span>
                  <span className="col-span-2 font-medium text-neutral-800">{report.weather.workingConditions || "—"}</span>
                </div>
              </div>
            </div>

            {/* Manpower Summary */}
            <div className="space-y-3 preview-section">
              <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                Manpower Status
              </h3>
              {report.manpower.length === 0 ? (
                <p className="text-sm text-neutral-400 italic">No manpower entries recorded today.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse text-left">
                    <thead>
                      <tr className="border-b border-neutral-200 text-neutral-400 text-xs font-semibold uppercase">
                        <th className="py-2 w-1/2">Trade / Role</th>
                        <th className="py-2 text-right">Planned</th>
                        <th className="py-2 text-right">Present</th>
                        <th className="py-2 text-right">Attendance %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {report.manpower.map((m, i) => {
                        const pct = m.planned > 0 ? Math.round((m.present / m.planned) * 100) : 0;
                        return (
                          <tr key={i} className="text-neutral-800">
                            <td className="py-2 font-medium">{m.trade}</td>
                            <td className="py-2 text-right">{m.planned}</td>
                            <td className="py-2 text-right">{m.present}</td>
                            <td className="py-2 text-right font-mono text-neutral-500">{pct}%</td>
                          </tr>
                        );
                      })}
                      <tr className="font-bold border-t-2 border-neutral-200">
                        <td className="py-3">Total Attendance</td>
                        <td className="py-3 text-right">{totalPlanned}</td>
                        <td className="py-3 text-right">{totalPresent}</td>
                        <td className="py-3 text-right font-mono">
                          {totalPlanned > 0 ? Math.round((totalPresent / totalPlanned) * 100) : 0}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Work Completed */}
            <div className="space-y-3 preview-section">
              <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                Work Completed
              </h3>
              {report.workCompleted.length === 0 ? (
                <p className="text-sm text-neutral-400 italic">No work activities recorded today.</p>
              ) : (
                <div className="space-y-3">
                  {report.workCompleted.map((wc, i) => (
                    <div key={i} className="text-sm border-b border-neutral-100/50 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="font-bold text-neutral-800">
                          {wc.activity} {wc.location && <span className="text-xs font-normal text-neutral-450">({wc.location})</span>}
                        </div>
                        <span className="font-mono text-cyan-600 font-bold">{wc.progress}% Done</span>
                      </div>
                      {wc.description && (
                        <p className="text-neutral-550 text-xs mt-1 leading-relaxed">{wc.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Materials & Equipment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Materials Panel */}
              <div className="space-y-3 preview-section">
                <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                  Materials Summary
                </h3>
                {report.materials.length === 0 ? (
                  <p className="text-sm text-neutral-400 italic">No materials activities logged.</p>
                ) : (
                  <div className="space-y-2 text-sm">
                    {report.materials.map((mat, i) => (
                      <div key={i} className="flex justify-between items-start border-b border-neutral-100/50 pb-1">
                        <div>
                          <span className="font-bold text-neutral-800">{mat.name}</span>
                          <span className="text-neutral-500 text-xs block">{mat.remarks}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-neutral-800">{mat.quantity} {mat.unit}</span>
                          <span className={`block text-[10px] font-bold uppercase ${
                            mat.status === "Received" ? "text-emerald-600" :
                            mat.status === "Used" ? "text-cyan-600" :
                            mat.status === "Rejected" ? "text-red-600" : "text-yellow-600"
                          }`}>{mat.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Equipment Panel */}
              <div className="space-y-3 preview-section">
                <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                  Equipment Status
                </h3>
                {report.equipment.length === 0 ? (
                  <p className="text-sm text-neutral-400 italic">No equipment activities logged.</p>
                ) : (
                  <div className="space-y-2 text-sm">
                    {report.equipment.map((eq, i) => (
                      <div key={i} className="flex justify-between items-start border-b border-neutral-100/50 pb-1">
                        <div>
                          <span className="font-bold text-neutral-800">{eq.name}</span>
                          <span className="text-neutral-500 text-xs block">{eq.remarks}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-neutral-800">{eq.quantity} units ({eq.hours} hrs)</span>
                          <span className={`block text-[10px] font-bold uppercase ${
                            eq.status === "Working" ? "text-emerald-600" :
                            eq.status === "Idle" ? "text-yellow-600" : "text-red-650"
                          }`}>{eq.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Issues & Delays */}
            <div className="space-y-3 preview-section">
              <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                Issues & Delays
              </h3>
              {report.issues.length === 0 ? (
                <p className="text-sm text-neutral-400 italic">No active issues logged.</p>
              ) : (
                <div className="space-y-3">
                  {report.issues.map((iss, i) => (
                    <div key={i} className="text-sm border-l-2 border-yellow-500 pl-3 py-1 space-y-1">
                      <div className="flex justify-between">
                        <span className="font-bold text-neutral-800">{iss.issue}</span>
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          iss.status === "Resolved" ? "bg-emerald-50 text-emerald-600" :
                          iss.status === "In Progress" ? "bg-yellow-50 text-yellow-600" : "bg-red-50 text-red-600"
                        }`}>{iss.status}</span>
                      </div>
                      <div className="text-xs text-neutral-500">
                        {iss.location && <span>Location: {iss.location} | </span>}
                        {iss.impact && <span>Impact: {iss.impact} | </span>}
                        {iss.action && <span>Action: {iss.action}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Safety Checklist */}
            <div className="space-y-3 preview-section">
              <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                Safety & Compliance
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-sm pb-3">
                {[
                  { label: "PPE Compliance", value: report.safety.ppeCompliance },
                  { label: "Housekeeping", value: report.safety.housekeeping },
                  { label: "Scaffolding", value: report.safety.scaffolding },
                  { label: "Electrical Safety", value: report.safety.electricalSafety },
                  { label: "Fire Safety", value: report.safety.fireSafety }
                ].map((item, i) => (
                  <div key={i} className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                    <span className="text-[10px] text-neutral-400 font-bold block uppercase tracking-wider">{item.label}</span>
                    <span className={`font-semibold ${item.value === "Yes" ? "text-emerald-600" : item.value === "No" ? "text-red-500" : "text-neutral-500"}`}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Incidents Details */}
              <div className="text-sm pt-2">
                <div className="flex gap-2">
                  <span className="text-neutral-400">Safety Incidents Today:</span>
                  <span className={`font-bold ${report.safety.incident === "Yes" ? "text-red-600" : "text-emerald-600"}`}>
                    {report.safety.incident}
                  </span>
                </div>
                {report.safety.incident === "Yes" && (
                  <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-xl space-y-1 text-xs">
                    <p className="text-red-800 font-bold">Incident Details:</p>
                    <p className="text-neutral-700"><span className="font-semibold text-neutral-800">Description:</span> {report.safety.incidentDetails.description}</p>
                    {report.safety.incidentDetails.location && (
                      <p className="text-neutral-700"><span className="font-semibold text-neutral-800">Location:</span> {report.safety.incidentDetails.location}</p>
                    )}
                    <p className="text-neutral-750"><span className="font-semibold text-neutral-800">Action Taken:</span> {report.safety.incidentDetails.action}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Summary & Status */}
            <div className="space-y-3 preview-section">
              <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                Progress & Variance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                  <span className="text-[10px] text-neutral-400 font-bold block uppercase">Planned Progress</span>
                  <span className="text-lg font-mono font-bold text-neutral-800">{report.progress.planned}%</span>
                </div>
                <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                  <span className="text-[10px] text-neutral-400 font-bold block uppercase">Actual Progress</span>
                  <span className="text-lg font-mono font-bold text-neutral-800">{report.progress.actual}%</span>
                </div>
                <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                  <span className="text-[10px] text-neutral-400 font-bold block uppercase">Variance</span>
                  <span className="text-lg font-mono font-bold text-neutral-800">{variance >= 0 ? "+" : ""}{variance}%</span>
                </div>
                <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 flex flex-col justify-center">
                  <span className="text-[10px] text-neutral-400 font-bold block uppercase">Project Status</span>
                  <div className="mt-1">
                    {progressStatus === "AHEAD" && (
                      <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">
                        AHEAD
                      </span>
                    )}
                    {progressStatus === "ON TRACK" && (
                      <span className="inline-block px-2.5 py-0.5 bg-cyan-50 text-cyan-600 rounded-full text-xs font-bold border border-cyan-100">
                        ON TRACK
                      </span>
                    )}
                    {progressStatus === "BEHIND" && (
                      <span className="inline-block px-2.5 py-0.5 bg-red-50 text-red-650 rounded-full text-xs font-bold border border-red-100">
                        BEHIND
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Remarks */}
            <div className="space-y-2 preview-section">
              <h3 className="text-xs font-bold text-neutral-450 uppercase tracking-wider border-b border-neutral-100 pb-1">
                Additional Remarks
              </h3>
              <p className="text-sm text-neutral-700 whitespace-pre-line leading-relaxed">
                {report.remarks || "No additional remarks or notes were logged."}
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
