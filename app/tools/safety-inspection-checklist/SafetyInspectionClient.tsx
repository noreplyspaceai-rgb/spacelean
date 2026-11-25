"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ShieldCheck,
  HardHat,
  Layers,
  Zap,
  Flame,
  Sparkles,
  AlertTriangle,
  Wrench,
  HeartPulse,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Camera,
  Trash2,
  FileDown,
  Printer,
  ChevronDown,
  ChevronUp,
  Save,
  RotateCcw,
  Calendar,
  MapPin,
  User,
  Building,
  CloudSun,
  ClipboardCheck,
  ChevronLeft,
  ArrowRight,
  Filter,
  AlertCircle,
  Check,
  Clock,
  Info,
} from "lucide-react";

// --- Types ---
export type ItemStatus = "pass" | "fail" | "na" | "pending";

export interface InspectionDetails {
  projectName: string;
  siteLocation: string;
  inspectionDate: string;
  inspectorName: string;
  contractorName: string;
  weather: string;
  inspectionType: "Daily" | "Weekly" | "Monthly" | "Special Inspection";
}

export interface InspectionItem {
  id: string;
  title: string;
  status: ItemStatus;
  observations: string;
  hazards: string;
  correctiveAction: string;
  responsiblePerson: string;
  targetDate: string;
  photos: string[]; // base64 strings
}

export interface CategoryDefinition {
  id: string;
  name: string;
  description: string;
  iconName: string;
  items: string[];
}

// --- Categories & Items Definitions (8 Categories, 48 Total Items) ---
const INITIAL_CATEGORIES: CategoryDefinition[] = [
  {
    id: "ppe",
    name: "1. Personal Protective Equipment (PPE)",
    description: "Inspection of head, foot, eye, hearing, body protection, and height safety gear.",
    iconName: "HardHat",
    items: [
      "Safety helmets available and properly worn",
      "Safety shoes worn by workers",
      "High-visibility safety vests available",
      "Protective gloves used where required",
      "Eye and face protection available",
      "Hearing protection provided where necessary",
      "Safety harnesses used for applicable work at height",
    ],
  },
  {
    id: "scaffolding",
    name: "2. Scaffolding and Ladders",
    description: "Structural stability, guardrails, secured platforms, and ladder safety standards.",
    iconName: "Layers",
    items: [
      "Scaffolding properly erected and stable",
      "Guardrails and toe boards installed where required",
      "Scaffold platforms properly secured",
      "Ladders inspected and in good condition",
      "Safe access and exit provided",
      "Scaffolding inspection records maintained",
    ],
  },
  {
    id: "electrical",
    name: "3. Electrical Safety",
    description: "Cable condition, panels, earthing/grounding, water ingress, and hazard warnings.",
    iconName: "Zap",
    items: [
      "Electrical cables free from visible damage",
      "Electrical panels properly secured",
      "Appropriate grounding and protection provided",
      "Electrical connections protected from water",
      "Temporary electrical installations inspected",
      "Warning signs displayed near electrical hazards",
    ],
  },
  {
    id: "fire_safety",
    name: "4. Fire Safety",
    description: "Extinguisher readiness, egress routes, flammable storage, and emergency signage.",
    iconName: "Flame",
    items: [
      "Fire extinguishers available and accessible",
      "Fire extinguishers inspected and maintained",
      "Emergency exits unobstructed",
      "Flammable materials stored appropriately",
      "Fire safety signage displayed",
      "Emergency response arrangements communicated",
    ],
  },
  {
    id: "housekeeping",
    name: "5. Housekeeping",
    description: "Walkways, waste clearing, material stacking, lighting, and trip/slip control.",
    iconName: "Sparkles",
    items: [
      "Walkways and access routes clear",
      "Construction waste removed regularly",
      "Materials stored safely",
      "Floors free from unnecessary obstructions",
      "Tools and equipment stored properly",
      "Adequate lighting available",
    ],
  },
  {
    id: "working_at_height",
    name: "6. Working at Height",
    description: "Fall arrest systems, edge/opening protection, training, and certified access.",
    iconName: "AlertTriangle",
    items: [
      "Fall protection measures provided",
      "Safety harnesses and lifelines inspected",
      "Safety nets provided where required",
      "Open edges and floor openings protected",
      "Workers trained for applicable work-at-height activities",
      "Safe access equipment available",
    ],
  },
  {
    id: "machinery",
    name: "7. Machinery and Equipment",
    description: "Pre-use checks, physical guards, certified operators, and emergency stops.",
    iconName: "Wrench",
    items: [
      "Equipment inspected before use",
      "Machine guards installed where required",
      "Operators appropriately trained",
      "Emergency stop mechanisms functional",
      "Equipment maintenance records maintained",
      "Unauthorized access to machinery restricted",
    ],
  },
  {
    id: "emergency",
    name: "8. First Aid and Emergency Preparedness",
    description: "Medical kits, emergency contacts, muster points, evacuation, and incident protocols.",
    iconName: "HeartPulse",
    items: [
      "First-aid kit available and accessible",
      "Emergency contact information displayed",
      "Emergency assembly point identified",
      "Workers informed about emergency procedures",
      "Incident reporting procedure available",
    ],
  },
];

const WEATHER_OPTIONS = [
  "Clear / Sunny",
  "Cloudy / Overcast",
  "Rainy / Wet",
  "High Winds",
  "Extreme Heat",
  "Cold / Freezing",
  "Dust / Foggy",
];

const DRAFT_STORAGE_KEY = "spacelean_safety_inspection_draft_v1";

export default function SafetyInspectionClient() {
  // --- View State ---
  const [view, setView] = useState<"edit" | "report">("edit");
  const [reportGeneratedAt, setReportGeneratedAt] = useState<string>("");
  const [reportId, setReportId] = useState<string>("");

  // --- Form State ---
  const [details, setDetails] = useState<InspectionDetails>({
    projectName: "",
    siteLocation: "",
    inspectionDate: new Date().toISOString().split("T")[0],
    inspectorName: "",
    contractorName: "",
    weather: "Clear / Sunny",
    inspectionType: "Daily",
  });

  // --- Checklist Data State ---
  const [checklist, setChecklist] = useState<Record<string, InspectionItem[]>>(() => {
    const initial: Record<string, InspectionItem[]> = {};
    INITIAL_CATEGORIES.forEach((cat) => {
      initial[cat.id] = cat.items.map((title, idx) => ({
        id: `${cat.id}-${idx + 1}`,
        title,
        status: "pending",
        observations: "",
        hazards: "",
        correctiveAction: "",
        responsiblePerson: "",
        targetDate: "",
        photos: [],
      }));
    });
    return initial;
  });

  // --- UI Filter & Accordion States ---
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const exp: Record<string, boolean> = {};
    INITIAL_CATEGORIES.forEach((cat) => {
      exp[cat.id] = true; // default expanded
    });
    return exp;
  });

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [filterStatus, setFilterStatus] = useState<"all" | "fail" | "pending" | "pass" | "na">("all");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [saveToast, setSaveToast] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [copyToast, setCopyToast] = useState(false);

  // --- LocalStorage & Query Param Persistence ---
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("view") === "report") {
        setView("report");
        setReportId(`SSI-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-SAMPLE`);
        setReportGeneratedAt(new Date().toLocaleString());
      }

      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.details) setDetails(parsed.details);
        if (parsed.checklist) setChecklist(parsed.checklist);
      }
    } catch (e) {
      console.warn("Could not load inspection draft from localStorage", e);
    }
  }, []);

  const saveDraft = () => {
    try {
      localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({ details, checklist, savedAt: new Date().toISOString() })
      );
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 2500);
    } catch (e) {
      console.warn("Failed to save draft to localStorage", e);
    }
  };

  const handleReset = () => {
    const initial: Record<string, InspectionItem[]> = {};
    INITIAL_CATEGORIES.forEach((cat) => {
      initial[cat.id] = cat.items.map((title, idx) => ({
        id: `${cat.id}-${idx + 1}`,
        title,
        status: "pending",
        observations: "",
        hazards: "",
        correctiveAction: "",
        responsiblePerson: "",
        targetDate: "",
        photos: [],
      }));
    });
    setChecklist(initial);
    setDetails({
      projectName: "",
      siteLocation: "",
      inspectionDate: new Date().toISOString().split("T")[0],
      inspectorName: "",
      contractorName: "",
      weather: "Clear / Sunny",
      inspectionType: "Daily",
    });
    setFormErrors({});
    setShowResetConfirm(false);
    try {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch (e) {}
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Status Toggle Handler ---
  const handleStatusChange = (categoryId: string, itemId: string, newStatus: ItemStatus) => {
    setChecklist((prev) => {
      const items = prev[categoryId] || [];
      const updated = items.map((item) => {
        if (item.id === itemId) {
          const toggledStatus = item.status === newStatus ? "pending" : newStatus;
          return { ...item, status: toggledStatus };
        }
        return item;
      });
      return { ...prev, [categoryId]: updated };
    });

    // Auto-expand detail box when marking Fail
    if (newStatus === "fail") {
      setExpandedItems((prev) => ({ ...prev, [itemId]: true }));
    }
  };

  // --- Mark All in Category Helper ---
  const handleMarkCategoryAll = (categoryId: string, status: ItemStatus) => {
    setChecklist((prev) => {
      const items = prev[categoryId] || [];
      const updated = items.map((item) => ({ ...item, status }));
      return { ...prev, [categoryId]: updated };
    });
  };

  // --- Item Field Change ---
  const handleItemFieldChange = (
    categoryId: string,
    itemId: string,
    field: keyof InspectionItem,
    value: any
  ) => {
    setChecklist((prev) => {
      const items = prev[categoryId] || [];
      const updated = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, [field]: value };
        }
        return item;
      });
      return { ...prev, [categoryId]: updated };
    });
  };

  // --- Photo Upload Handler ---
  const handlePhotoUpload = (categoryId: string, itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setChecklist((prev) => {
          const items = prev[categoryId] || [];
          const updated = items.map((item) => {
            if (item.id === itemId) {
              return { ...item, photos: [...(item.photos || []), base64String] };
            }
            return item;
          });
          return { ...prev, [categoryId]: updated };
        });
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const handleRemovePhoto = (categoryId: string, itemId: string, photoIdx: number) => {
    setChecklist((prev) => {
      const items = prev[categoryId] || [];
      const updated = items.map((item) => {
        if (item.id === itemId) {
          const newPhotos = [...item.photos];
          newPhotos.splice(photoIdx, 1);
          return { ...item, photos: newPhotos };
        }
        return item;
      });
      return { ...prev, [categoryId]: updated };
    });
  };

  // --- Summary Calculations ---
  const stats = useMemo(() => {
    let total = 0;
    let passed = 0;
    let failed = 0;
    let na = 0;
    let pending = 0;

    const categoryStats: Record<
      string,
      { total: number; passed: number; failed: number; na: number; pending: number; percent: number }
    > = {};

    INITIAL_CATEGORIES.forEach((cat) => {
      const items = checklist[cat.id] || [];
      let catTotal = items.length;
      let catPassed = 0;
      let catFailed = 0;
      let catNa = 0;
      let catPending = 0;

      items.forEach((item) => {
        total++;
        if (item.status === "pass") {
          passed++;
          catPassed++;
        } else if (item.status === "fail") {
          failed++;
          catFailed++;
        } else if (item.status === "na") {
          na++;
          catNa++;
        } else {
          pending++;
          catPending++;
        }
      });

      const catApplicable = catTotal - catNa;
      const catAnswered = catPassed + catFailed;
      const catPercent = catApplicable > 0 ? Math.round((catAnswered / catApplicable) * 100) : 100;

      categoryStats[cat.id] = {
        total: catTotal,
        passed: catPassed,
        failed: catFailed,
        na: catNa,
        pending: catPending,
        percent: catPercent,
      };
    });

    // Overall Completion Percentage (Answered items / (Total items - N/A))
    const applicableTotal = total - na;
    const answeredTotal = passed + failed;
    const completionPercentage =
      applicableTotal > 0 ? Math.round((answeredTotal / applicableTotal) * 100) : 100;

    return {
      total,
      passed,
      failed,
      na,
      pending,
      completionPercentage,
      categoryStats,
    };
  }, [checklist]);

  // --- Validate and Generate Report ---
  const handleGenerateReport = () => {
    const errors: Record<string, string> = {};
    if (!details.projectName.trim()) errors.projectName = "Project name is required.";
    if (!details.siteLocation.trim()) errors.siteLocation = "Site location is required.";
    if (!details.inspectionDate) errors.inspectionDate = "Inspection date is required.";
    if (!details.inspectorName.trim()) errors.inspectorName = "Inspector name is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstKey = Object.keys(errors)[0];
      const el = document.getElementById(`input-${firstKey}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setFormErrors({});
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateFormatted = details.inspectionDate.replace(/-/g, "");
    setReportId(`SSI-${dateFormatted}-${randomSuffix}`);
    setReportGeneratedAt(new Date().toLocaleString());
    saveDraft();
    setView("report");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
CONSTRUCTION SITE SAFETY INSPECTION REPORT
------------------------------------------
Report ID: ${reportId}
Project: ${details.projectName}
Site Location: ${details.siteLocation}
Inspection Date: ${details.inspectionDate}
Inspector: ${details.inspectorName}
Contractor: ${details.contractorName || "N/A"}
Weather: ${details.weather}
Type: ${details.inspectionType}

INSPECTION SUMMARY
------------------------------------------
Total Checkpoints: ${stats.total}
Passed Items: ${stats.passed}
Failed Items (Hazards Identified): ${stats.failed}
Not Applicable: ${stats.na}
Pending Items: ${stats.pending}
Checklist Completion: ${stats.completionPercentage}%

CRITICAL ACTION ITEMS (FAILED)
------------------------------------------
${
  stats.failed === 0
    ? "No failed items or immediate hazards logged."
    : INITIAL_CATEGORIES.flatMap((cat) => checklist[cat.id] || [])
        .filter((item) => item.status === "fail")
        .map(
          (item, idx) =>
            `${idx + 1}. ${item.title}\n   Hazard: ${item.hazards || "Not specified"}\n   Corrective Action: ${item.correctiveAction || "Immediate rectification required"}\n   Responsible: ${item.responsiblePerson || "Site Supervisor"} | Target: ${item.targetDate || "Immediate"}`
        )
        .join("\n\n")
}

Generated with SpaceLean Construction Safety Inspection Tool
https://spacelean.ai/tools/safety-inspection-checklist
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2000);
    });
  };

  // --- Category Icon Resolver ---
  const renderCategoryIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "HardHat":
        return <HardHat className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Flame":
        return <Flame className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "AlertTriangle":
        return <AlertTriangle className={className} />;
      case "Wrench":
        return <Wrench className={className} />;
      case "HeartPulse":
        return <HeartPulse className={className} />;
      default:
        return <ShieldCheck className={className} />;
    }
  };

  // =========================================================================
  // VIEW: REPORT PREVIEW / PRINT
  // =========================================================================
  if (view === "report") {
    const failedItemsList = INITIAL_CATEGORIES.flatMap((cat) =>
      (checklist[cat.id] || [])
        .filter((item) => item.status === "fail")
        .map((item) => ({ ...item, categoryName: cat.name }))
    );

    return (
      <div className="space-y-8">
        {/* Print Stylesheet Overrides */}
        <style jsx global>{`
          @media print {
            body {
              background: #ffffff !important;
              color: #0f172a !important;
              margin: 0 !important;
              padding: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            main {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
            }
            header,
            footer,
            nav,
            .print\\:hidden,
            div.absolute {
              display: none !important;
            }
            #inspection-report-document {
              border: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            .page-break-avoid {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
          }
        `}</style>

        {/* Action Bar (Hidden in Print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-neutral-200/80 rounded-2xl p-4 shadow-sm print:hidden">
          <button
            type="button"
            onClick={() => setView("edit")}
            className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Edit Inspection
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <ClipboardCheck className="w-4 h-4" />
              {copyToast ? "Summary Copied!" : "Copy Summary"}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm shadow-cyan-500/20"
            >
              <FileDown className="w-4 h-4" />
              Download PDF / Print
            </button>
          </div>
        </div>

        {/* Printable Inspection Report Container */}
        <div
          id="inspection-report-document"
          className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-8"
        >
          {/* Header Block with SpaceLean Branding */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b-2 border-neutral-900/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-neutral-900">
                  SPACE<span className="text-cyan-500 font-light">LEAN</span>
                </span>
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Site Safety Management System
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-200 mb-1">
                Official Inspection Record
              </span>
              <p className="text-sm font-mono font-bold text-neutral-800">Ref: {reportId}</p>
              <p className="text-[11px] text-neutral-500">Generated: {reportGeneratedAt}</p>
            </div>
          </div>

          {/* Title */}
          <div className="text-center py-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              CONSTRUCTION SAFETY INSPECTION REPORT
            </h2>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest font-mono">
              Site Safety Audit & Hazard Rectification Plan
            </p>
          </div>

          {/* Project & Inspection Details Grid */}
          <div className="page-break-avoid bg-neutral-50/70 border border-neutral-200/80 rounded-2xl p-5 space-y-4">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-200/60 pb-2">
              Inspection Parameters & Project Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-sm">
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Project Name:</span>
                <span className="font-bold text-neutral-800">{details.projectName}</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Site Location:</span>
                <span className="font-bold text-neutral-800">{details.siteLocation}</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Inspection Date:</span>
                <span className="font-bold text-neutral-800">{details.inspectionDate}</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Inspector Name:</span>
                <span className="font-bold text-neutral-800">{details.inspectorName}</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Contractor / Subcontractor:</span>
                <span className="font-bold text-neutral-800">{details.contractorName || "Principal Contractor"}</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Weather & Conditions:</span>
                <span className="font-bold text-neutral-800">{details.weather}</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block font-mono">Inspection Frequency:</span>
                <span className="font-bold text-neutral-800">{details.inspectionType} Safety Audit</span>
              </div>
            </div>
          </div>

          {/* Summary Dashboard Scorecard */}
          <div className="page-break-avoid space-y-3">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Audit Summary & Completion Rate
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                  Total Items
                </span>
                <span className="text-2xl font-black text-neutral-900 mt-1 block">{stats.total}</span>
              </div>
              <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                  Passed
                </span>
                <span className="text-2xl font-black text-emerald-600 mt-1 block">{stats.passed}</span>
              </div>
              <div className="bg-red-50/50 border border-red-200/60 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block">
                  Failed (Hazards)
                </span>
                <span className="text-2xl font-black text-red-600 mt-1 block">{stats.failed}</span>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Not Applicable
                </span>
                <span className="text-2xl font-black text-neutral-600 mt-1 block">{stats.na}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-cyan-50/50 border border-cyan-200/60 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                  Completion
                </span>
                <span className="text-2xl font-black text-cyan-600 mt-1 block">{stats.completionPercentage}%</span>
              </div>
            </div>

            {/* Note regarding calculated percentage */}
            <p className="text-[11px] text-neutral-400 italic">
              * The completion percentage is calculated based on answered items, excluding Not Applicable items. It measures checklist completion and is not an official statutory compliance score or certification.
            </p>
          </div>

          {/* CRITICAL ACTION ITEMS SECTION (Failed Items Table) */}
          <div className="page-break-avoid space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-red-200">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                Action Items & Identified Hazards ({failedItemsList.length})
              </h3>
            </div>

            {failedItemsList.length === 0 ? (
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-sm text-emerald-800 font-medium">
                  Zero critical safety hazards or failed inspection items logged during this inspection. All applicable criteria passed standard evaluation.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {failedItemsList.map((item, idx) => (
                  <div
                    key={item.id}
                    className="border-2 border-red-200 bg-red-50/30 rounded-2xl p-5 space-y-3 page-break-avoid"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-neutral-900 text-sm">{item.title}</h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2.5 py-1 rounded-md border border-red-300">
                        {item.categoryName}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="bg-white/80 p-3 rounded-xl border border-red-100">
                        <span className="font-bold text-red-900 block mb-1">Identified Hazard / Observation:</span>
                        <p className="text-neutral-700">{item.hazards || item.observations || "Non-compliant condition observed. Immediate safety hazard."}</p>
                      </div>
                      <div className="bg-white/80 p-3 rounded-xl border border-red-100">
                        <span className="font-bold text-emerald-900 block mb-1">Mandatory Corrective Action:</span>
                        <p className="text-neutral-700">{item.correctiveAction || "Stop work in affected zone and implement corrective measures."}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs text-neutral-600 font-mono">
                      <span>
                        <strong className="text-neutral-900">Responsible Person:</strong>{" "}
                        {item.responsiblePerson || "Site Supervisor / Safety Officer"}
                      </span>
                      <span>
                        <strong className="text-neutral-900">Target Completion Date:</strong>{" "}
                        {item.targetDate || "Immediate (Before Work Resumes)"}
                      </span>
                    </div>

                    {/* Attached Photos */}
                    {item.photos && item.photos.length > 0 && (
                      <div className="pt-2">
                        <span className="text-xs font-bold text-neutral-700 block mb-2 font-mono">
                          Attached Field Evidence ({item.photos.length}):
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.photos.map((src, pIdx) => (
                            <img
                              key={pIdx}
                              src={src}
                              alt={`Evidence for ${item.title}`}
                              className="w-20 h-20 object-cover rounded-xl border border-red-200"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Full Category-wise Results Tables */}
          <div className="space-y-6 pt-4">
            <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-2">
              Detailed Category-Wise Checklist Results
            </h3>

            {INITIAL_CATEGORIES.map((cat) => {
              const items = checklist[cat.id] || [];
              const catStat = stats.categoryStats[cat.id];

              return (
                <div key={cat.id} className="page-break-avoid space-y-3">
                  <div className="flex items-center justify-between bg-neutral-100/80 px-4 py-2.5 rounded-xl border border-neutral-200">
                    <div className="flex items-center gap-2">
                      {renderCategoryIcon(cat.iconName, "w-4 h-4 text-cyan-600")}
                      <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-600">
                      Passed: {catStat?.passed}/{catStat?.total} | Failed: {catStat?.failed}
                    </span>
                  </div>

                  <table className="w-full text-left text-xs border border-neutral-200 rounded-xl overflow-hidden">
                    <thead className="bg-neutral-50 text-neutral-500 font-mono text-[11px] border-b border-neutral-200">
                      <tr>
                        <th className="p-3 w-1/2">Inspection Item</th>
                        <th className="p-3 w-28 text-center">Status</th>
                        <th className="p-3">Remarks / Corrective Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {items.map((item) => (
                        <tr
                          key={item.id}
                          className={item.status === "fail" ? "bg-red-50/40" : "bg-white"}
                        >
                          <td className="p-3 text-neutral-800 font-medium">{item.title}</td>
                          <td className="p-3 text-center">
                            {item.status === "pass" && (
                              <span className="inline-flex items-center gap-1 font-bold text-emerald-600 text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                <Check className="w-3 h-3" /> PASS
                              </span>
                            )}
                            {item.status === "fail" && (
                              <span className="inline-flex items-center gap-1 font-bold text-red-600 text-[11px] bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                                <XCircle className="w-3 h-3" /> FAIL
                              </span>
                            )}
                            {item.status === "na" && (
                              <span className="inline-flex items-center gap-1 font-bold text-neutral-500 text-[11px] bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200">
                                <MinusCircle className="w-3 h-3" /> N/A
                              </span>
                            )}
                            {item.status === "pending" && (
                              <span className="text-neutral-400 font-mono text-[11px]">PENDING</span>
                            )}
                          </td>
                          <td className="p-3 text-neutral-600 text-[11px]">
                            {item.observations || item.hazards || item.correctiveAction ? (
                              <div className="space-y-1">
                                {item.observations && <p>Obs: {item.observations}</p>}
                                {item.hazards && <p className="text-red-700 font-medium">Hazard: {item.hazards}</p>}
                                {item.correctiveAction && (
                                  <p className="text-emerald-700 font-medium">Action: {item.correctiveAction}</p>
                                )}
                              </div>
                            ) : (
                              <span className="text-neutral-300">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>

          {/* Signatures & Certification Block */}
          <div className="page-break-avoid border-t-2 border-neutral-200 pt-8 mt-8 space-y-6">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Inspector Sign-Off and Verification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-neutral-200 rounded-2xl p-5 space-y-4">
                <span className="text-xs font-bold text-neutral-700 block font-mono">
                  Site Safety Inspector Verification
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  I hereby verify that I have carried out this physical site inspection at the stated location. The observations and recorded statuses accurately reflect conditions at the time of inspection.
                </p>
                <div className="pt-6 border-b border-neutral-300">
                  <span className="font-mono font-bold text-sm text-neutral-800">{details.inspectorName}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400 font-mono">
                  <span>Inspector Signature</span>
                  <span>Date: {details.inspectionDate}</span>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-2xl p-5 space-y-4">
                <span className="text-xs font-bold text-neutral-700 block font-mono">
                  Site Supervisor / Contractor Acknowledgement
                </span>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  I acknowledge receipt of this inspection report and understand that identified critical hazards must be rectified within the stipulated target completion dates.
                </p>
                <div className="pt-6 border-b border-neutral-300">
                  <span className="font-mono text-sm text-neutral-400 italic">Signature / Stamp</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400 font-mono">
                  <span>Authorized Representative</span>
                  <span>Date: ____________</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-center">
              <p className="text-[11px] text-neutral-400 leading-normal">
                <strong>Disclaimer:</strong> This checklist is an operational safety aid provided by SpaceLean to assist construction teams in identifying hazards. It does not constitute official legal, statutory, or regulatory compliance certification with OSHA, local building codes, or government authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: EDIT / INTERACTIVE CHECKLIST
  // =========================================================================
  return (
    <div className="space-y-8">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-neutral-200/80 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-500">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-neutral-900">Safety Inspection Walkthrough</h2>
            <p className="text-xs text-neutral-400 font-mono">
              Auto-saved locally • Complete and generate PDF
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={saveDraft}
            className="px-3.5 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" />
            {saveToast ? "Draft Saved!" : "Save Draft"}
          </button>

          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="px-3.5 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>

          <button
            type="button"
            onClick={handleGenerateReport}
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm shadow-cyan-500/20"
          >
            <span>Generate Inspection Report</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-neutral-200 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Reset Inspection Checklist?</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              This will clear all entered inspection details, status choices, corrective actions, and uploaded photos. This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl text-neutral-600 hover:bg-neutral-100 text-xs font-bold transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION A: Inspection Details Form */}
      <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
          <Building className="w-5 h-5 text-cyan-500" />
          <h3 className="text-lg font-bold text-neutral-900">Inspection & Site Details</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Project Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              id="input-projectName"
              type="text"
              placeholder="e.g. Greenville Tower C"
              value={details.projectName}
              onChange={(e) => {
                setDetails({ ...details, projectName: e.target.value });
                if (formErrors.projectName) setFormErrors({ ...formErrors, projectName: "" });
              }}
              className={`w-full rounded-xl border ${
                formErrors.projectName ? "border-red-400 bg-red-50/20" : "border-neutral-200"
              } px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            />
            {formErrors.projectName && (
              <p className="text-xs text-red-500 font-medium">{formErrors.projectName}</p>
            )}
          </div>

          {/* Site Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Site Location <span className="text-red-500">*</span>
            </label>
            <input
              id="input-siteLocation"
              type="text"
              placeholder="e.g. Sector 4, North Elevation"
              value={details.siteLocation}
              onChange={(e) => {
                setDetails({ ...details, siteLocation: e.target.value });
                if (formErrors.siteLocation) setFormErrors({ ...formErrors, siteLocation: "" });
              }}
              className={`w-full rounded-xl border ${
                formErrors.siteLocation ? "border-red-400 bg-red-50/20" : "border-neutral-200"
              } px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            />
            {formErrors.siteLocation && (
              <p className="text-xs text-red-500 font-medium">{formErrors.siteLocation}</p>
            )}
          </div>

          {/* Inspection Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Inspection Date <span className="text-red-500">*</span>
            </label>
            <input
              id="input-inspectionDate"
              type="date"
              value={details.inspectionDate}
              onChange={(e) => {
                setDetails({ ...details, inspectionDate: e.target.value });
                if (formErrors.inspectionDate) setFormErrors({ ...formErrors, inspectionDate: "" });
              }}
              className={`w-full rounded-xl border ${
                formErrors.inspectionDate ? "border-red-400 bg-red-50/20" : "border-neutral-200"
              } px-3.5 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            />
            {formErrors.inspectionDate && (
              <p className="text-xs text-red-500 font-medium">{formErrors.inspectionDate}</p>
            )}
          </div>

          {/* Inspector Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Inspector Name <span className="text-red-500">*</span>
            </label>
            <input
              id="input-inspectorName"
              type="text"
              placeholder="e.g. Robert Vance (HSE Lead)"
              value={details.inspectorName}
              onChange={(e) => {
                setDetails({ ...details, inspectorName: e.target.value });
                if (formErrors.inspectorName) setFormErrors({ ...formErrors, inspectorName: "" });
              }}
              className={`w-full rounded-xl border ${
                formErrors.inspectorName ? "border-red-400 bg-red-50/20" : "border-neutral-200"
              } px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            />
            {formErrors.inspectorName && (
              <p className="text-xs text-red-500 font-medium">{formErrors.inspectorName}</p>
            )}
          </div>

          {/* Contractor Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Contractor Name
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Structural Contractors"
              value={details.contractorName}
              onChange={(e) => setDetails({ ...details, contractorName: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Weather Conditions */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Weather Conditions
            </label>
            <select
              value={details.weather}
              onChange={(e) => setDetails({ ...details, weather: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
            >
              {WEATHER_OPTIONS.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>

          {/* Inspection Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-700 block font-mono">
              Inspection Type
            </label>
            <select
              value={details.inspectionType}
              onChange={(e) =>
                setDetails({
                  ...details,
                  inspectionType: e.target.value as InspectionDetails["inspectionType"],
                })
              }
              className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
            >
              <option value="Daily">Daily Inspection</option>
              <option value="Weekly">Weekly Inspection</option>
              <option value="Monthly">Monthly Inspection</option>
              <option value="Special Inspection">Special / Incident Inspection</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECTION B: Real-Time Summary Dashboard */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Total */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block font-mono">
              Checkpoints
            </span>
            <div className="text-2xl font-black text-neutral-900 mt-1">{stats.total}</div>
          </div>

          {/* Passed */}
          <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block font-mono">
              Passed
            </span>
            <div className="text-2xl font-black text-emerald-600 mt-1">{stats.passed}</div>
          </div>

          {/* Failed */}
          <div className="bg-red-50/50 border border-red-200/60 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block font-mono">
              Failed (Hazards)
            </span>
            <div className="text-2xl font-black text-red-600 mt-1">{stats.failed}</div>
          </div>

          {/* N/A */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block font-mono">
              N/A Items
            </span>
            <div className="text-2xl font-black text-neutral-600 mt-1">{stats.na}</div>
          </div>

          {/* Pending */}
          <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block font-mono">
              Pending
            </span>
            <div className="text-2xl font-black text-amber-600 mt-1">{stats.pending}</div>
          </div>

          {/* Completion % */}
          <div className="col-span-2 sm:col-span-1 bg-cyan-50/50 border border-cyan-200/60 rounded-2xl p-4 shadow-xs relative overflow-hidden">
            <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block font-mono">
              Completion
            </span>
            <div className="text-2xl font-black text-cyan-600 mt-1">{stats.completionPercentage}%</div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-cyan-100">
              <div
                className="h-full bg-cyan-500 transition-all duration-300"
                style={{ width: `${stats.completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Category Breakdown Chips / Bar */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider font-mono">
              Category-Wise Audit Progress
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              Excluded N/A items from completion calculation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {INITIAL_CATEGORIES.map((cat) => {
              const catStat = stats.categoryStats[cat.id];
              return (
                <div
                  key={cat.id}
                  className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-neutral-800 truncate" title={cat.name}>
                      {cat.name.replace(/^\d+\.\s*/, "")}
                    </span>
                    <span className="text-cyan-600 font-mono font-bold">{catStat?.percent}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        catStat?.failed > 0 ? "bg-red-500" : "bg-cyan-500"
                      }`}
                      style={{ width: `${catStat?.percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-neutral-400 italic">
            * Note: Completion percentage measures answered items and does not guarantee official regulatory or statutory safety certification.
          </p>
        </div>
      </div>

      {/* SECTION C: Safety Inspection Checklist Categories */}
      <div className="space-y-6">
        {/* Filter and Expand Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider font-mono mr-2">
              Filter:
            </span>
            <button
              type="button"
              onClick={() => setFilterStatus("all")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                filterStatus === "all"
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              All ({stats.total})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus("fail")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                filterStatus === "fail"
                  ? "bg-red-600 text-white"
                  : "bg-white border border-red-200 text-red-600 hover:bg-red-50"
              }`}
            >
              Failed ({stats.failed})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus("pending")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                filterStatus === "pending"
                  ? "bg-amber-500 text-white"
                  : "bg-white border border-amber-200 text-amber-700 hover:bg-amber-50"
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus("pass")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                filterStatus === "pass"
                  ? "bg-emerald-600 text-white"
                  : "bg-white border border-emerald-200 text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              Passed ({stats.passed})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus("na")}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                filterStatus === "na"
                  ? "bg-neutral-600 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              N/A ({stats.na})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const allOpen: Record<string, boolean> = {};
                INITIAL_CATEGORIES.forEach((c) => (allOpen[c.id] = true));
                setExpandedCategories(allOpen);
              }}
              className="text-xs font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Expand All
            </button>
            <span className="text-neutral-300">•</span>
            <button
              type="button"
              onClick={() => {
                const allClosed: Record<string, boolean> = {};
                INITIAL_CATEGORIES.forEach((c) => (allClosed[c.id] = false));
                setExpandedCategories(allClosed);
              }}
              className="text-xs font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* 8 Categories Accordions */}
        <div className="space-y-4">
          {INITIAL_CATEGORIES.map((cat) => {
            const items = checklist[cat.id] || [];
            const isCategoryExpanded = !!expandedCategories[cat.id];
            const catStat = stats.categoryStats[cat.id];

            // Filter items based on filterStatus
            const filteredItems = items.filter((item) => {
              if (filterStatus === "all") return true;
              return item.status === filterStatus;
            });

            if (filteredItems.length === 0 && filterStatus !== "all") {
              return null; // hide empty categories when filtering
            }

            return (
              <div
                key={cat.id}
                className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all"
              >
                {/* Category Header Bar */}
                <div
                  onClick={() =>
                    setExpandedCategories({
                      ...expandedCategories,
                      [cat.id]: !isCategoryExpanded,
                    })
                  }
                  className="p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/60 transition-colors select-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-150 flex items-center justify-center text-cyan-600 shrink-0">
                      {renderCategoryIcon(cat.iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">{cat.name}</h3>
                      <p className="text-xs text-neutral-400 mt-0.5">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Category mini badge */}
                    <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold">
                      <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                        {catStat?.passed} Pass
                      </span>
                      {catStat?.failed > 0 && (
                        <span className="text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
                          {catStat?.failed} Fail
                        </span>
                      )}
                      <span className="text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                        {catStat?.percent}%
                      </span>
                    </div>

                    {isCategoryExpanded ? (
                      <ChevronUp className="w-5 h-5 text-neutral-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    )}
                  </div>
                </div>

                {/* Category Body */}
                {isCategoryExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-neutral-100 space-y-4">
                    {/* Category Quick Action Toolbar */}
                    <div className="flex items-center justify-between text-xs py-1 text-neutral-500 border-b border-neutral-100">
                      <span className="font-mono">
                        {filteredItems.length} of {items.length} checkpoints shown
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMarkCategoryAll(cat.id, "pass");
                          }}
                          className="text-xs font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                        >
                          Mark all as Pass
                        </button>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-3">
                      {filteredItems.map((item) => {
                        const isFailed = item.status === "fail";
                        const isItemExpanded = !!expandedItems[item.id] || isFailed;

                        return (
                          <div
                            key={item.id}
                            className={`rounded-2xl border transition-all p-4 ${
                              isFailed
                                ? "border-red-300 bg-red-50/40 shadow-xs"
                                : item.status === "pass"
                                ? "border-emerald-200/80 bg-emerald-50/20"
                                : item.status === "na"
                                ? "border-neutral-200 bg-neutral-50/50"
                                : "border-neutral-200 hover:border-neutral-300 bg-white"
                            }`}
                          >
                            {/* Main Item Row */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="flex items-start gap-2.5">
                                <span
                                  className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                                    item.status === "pass"
                                      ? "bg-emerald-500"
                                      : item.status === "fail"
                                      ? "bg-red-500 animate-pulse"
                                      : item.status === "na"
                                      ? "bg-neutral-400"
                                      : "bg-neutral-300"
                                  }`}
                                />
                                <div>
                                  <span className="text-sm font-semibold text-neutral-800 leading-snug block">
                                    {item.title}
                                  </span>
                                  {isFailed && (
                                    <span className="inline-block mt-1 text-[10px] font-bold tracking-wider uppercase text-red-600 bg-red-100 px-2 py-0.5 rounded border border-red-200">
                                      Hazard Flagged • Action Required
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Three Status Selector Buttons */}
                              <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                                {/* Pass Button */}
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(cat.id, item.id, "pass")}
                                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                                    item.status === "pass"
                                      ? "bg-emerald-600 text-white shadow-xs shadow-emerald-600/30 ring-2 ring-emerald-600/20"
                                      : "bg-white border border-neutral-200 text-neutral-600 hover:border-emerald-300 hover:text-emerald-600"
                                  }`}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Pass</span>
                                </button>

                                {/* Fail Button */}
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(cat.id, item.id, "fail")}
                                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                                    item.status === "fail"
                                      ? "bg-red-600 text-white shadow-xs shadow-red-600/30 ring-2 ring-red-600/20"
                                      : "bg-white border border-neutral-200 text-neutral-600 hover:border-red-300 hover:text-red-600"
                                  }`}
                                >
                                  <XCircle className="w-3.5 h-3.5" />
                                  <span>Fail</span>
                                </button>

                                {/* N/A Button */}
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(cat.id, item.id, "na")}
                                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                                    item.status === "na"
                                      ? "bg-neutral-700 text-white shadow-xs"
                                      : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
                                  }`}
                                >
                                  <MinusCircle className="w-3.5 h-3.5" />
                                  <span>N/A</span>
                                </button>

                                {/* Expand Details Button */}
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedItems({
                                      ...expandedItems,
                                      [item.id]: !isItemExpanded,
                                    })
                                  }
                                  className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors ml-1"
                                  title="Add observations, hazards, corrective actions, or photos"
                                >
                                  {isItemExpanded ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Expandable Details Form (Observations, Hazards, Actions, Person, Date, Photos) */}
                            {isItemExpanded && (
                              <div className="mt-4 pt-4 border-t border-neutral-200/70 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {/* Observations / Comments */}
                                  <div>
                                    <label className="text-[11px] font-bold text-neutral-700 block font-mono mb-1">
                                      Observations & Comments
                                    </label>
                                    <textarea
                                      rows={2}
                                      placeholder="Specific site location, worker condition, or context..."
                                      value={item.observations}
                                      onChange={(e) =>
                                        handleItemFieldChange(cat.id, item.id, "observations", e.target.value)
                                      }
                                      className="w-full text-xs rounded-xl border border-neutral-200 p-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
                                    />
                                  </div>

                                  {/* Identified Hazards */}
                                  <div>
                                    <label className="text-[11px] font-bold text-red-700 block font-mono mb-1">
                                      Identified Hazard (if any)
                                    </label>
                                    <textarea
                                      rows={2}
                                      placeholder="e.g. Missing mid-rail at east scaffolding edge; trip hazard..."
                                      value={item.hazards}
                                      onChange={(e) =>
                                        handleItemFieldChange(cat.id, item.id, "hazards", e.target.value)
                                      }
                                      className={`w-full text-xs rounded-xl border ${
                                        isFailed ? "border-red-300 bg-white" : "border-neutral-200 bg-white"
                                      } p-2.5 focus:outline-none focus:ring-2 focus:ring-red-400`}
                                    />
                                  </div>

                                  {/* Corrective Action */}
                                  <div>
                                    <label className="text-[11px] font-bold text-emerald-800 block font-mono mb-1">
                                      Corrective Action Required
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="e.g. Install toe-board and retie scaffolding platform"
                                      value={item.correctiveAction}
                                      onChange={(e) =>
                                        handleItemFieldChange(cat.id, item.id, "correctiveAction", e.target.value)
                                      }
                                      className="w-full text-xs rounded-xl border border-neutral-200 p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
                                    />
                                  </div>

                                  {/* Person & Target Date */}
                                  <div className="grid grid-cols-2 gap-2">
                                    <div>
                                      <label className="text-[11px] font-bold text-neutral-700 block font-mono mb-1">
                                        Responsible Person
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="e.g. Scaffolding Foreman"
                                        value={item.responsiblePerson}
                                        onChange={(e) =>
                                          handleItemFieldChange(cat.id, item.id, "responsiblePerson", e.target.value)
                                        }
                                        className="w-full text-xs rounded-xl border border-neutral-200 p-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
                                      />
                                    </div>
                                    <div>
                                      <label className="text-[11px] font-bold text-neutral-700 block font-mono mb-1">
                                        Target Date
                                      </label>
                                      <input
                                        type="date"
                                        value={item.targetDate}
                                        onChange={(e) =>
                                          handleItemFieldChange(cat.id, item.id, "targetDate", e.target.value)
                                        }
                                        className="w-full text-xs rounded-xl border border-neutral-200 p-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-white"
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* Photo Attachments Section */}
                                <div className="pt-2">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider font-mono flex items-center gap-1.5">
                                      <Camera className="w-3.5 h-3.5 text-cyan-500" />
                                      Field Photos ({item.photos?.length || 0})
                                    </span>
                                    <label className="cursor-pointer text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center gap-1">
                                      <span>+ Attach Photo</span>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        className="hidden"
                                        onChange={(e) => handlePhotoUpload(cat.id, item.id, e)}
                                      />
                                    </label>
                                  </div>

                                  {item.photos && item.photos.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pt-1">
                                      {item.photos.map((photoBase64, pIdx) => (
                                        <div key={pIdx} className="relative group w-16 h-16 rounded-xl overflow-hidden border border-neutral-200">
                                          <img
                                            src={photoBase64}
                                            alt="Inspection preview"
                                            className="w-full h-full object-cover"
                                          />
                                          <button
                                            type="button"
                                            onClick={() => handleRemovePhoto(cat.id, item.id, pIdx)}
                                            className="absolute inset-0 bg-red-600/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                            title="Delete Photo"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA to Generate Report */}
      <div className="bg-neutral-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold tracking-tight">Ready to export your inspection?</h3>
          <p className="text-xs text-neutral-400 font-mono">
            {stats.pending > 0
              ? `You have answered ${stats.total - stats.pending} of ${stats.total} checkpoints (${stats.pending} remaining).`
              : "All checkpoints evaluated. Generate the official PDF report now."}
          </p>
        </div>

        <button
          type="button"
          onClick={handleGenerateReport}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold rounded-2xl transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-cyan-500/25 shrink-0"
        >
          <span>Generate Inspection Report</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

