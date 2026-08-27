"use client";

import React, { useState, useMemo } from "react";
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
  FolderOpen,
  Search,
  Filter,
  CheckSquare,
  Square,
  RotateCcw,
  Sparkles,
  Info
} from "lucide-react";

// --- TypeScript Interfaces ---
export interface ProjectInfo {
  name: string;
  type: "Residential" | "Commercial" | "Industrial" | "Infrastructure" | "";
  location: string;
  handoverType: "Preliminary Handover" | "Final Handover" | "Client Handover" | "";
  handoverDate: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
  remarks: string;
}

export interface ChecklistCategory {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export interface HandoverChecklist {
  project: ProjectInfo;
  categories: ChecklistCategory[];
}

// --- Predefined Templates Mapped by Category, Project Type, and Handover Type ---
const BASE_CHECKLIST_ITEMS: Record<string, string[]> = {
  "Final Inspection": [
    "Complete final building inspection walk-through",
    "Verify outstanding construction work logs",
    "Verify approved as-built drawings are stamped",
    "Verify completed work complies with contract documents"
  ],
  "Defects / Punch List": [
    "Review outstanding defect lists from previous inspections",
    "Verify punch-list corrective actions",
    "Confirm major structural and cosmetic defects are resolved",
    "Obtain sub-contractor defect rectification sign-offs"
  ],
  "Architectural / Finishing Works": [
    "Inspect doors and windows operation and sealants",
    "Inspect flooring finish and alignment",
    "Verify wall finishes, plastering, and verticality",
    "Verify ceiling tiles and access panel installation",
    "Check fittings and architectural metalwork"
  ],
  "Electrical Systems": [
    "Check electrical main and sub panels labeling and safety switches",
    "Check all light fittings, switches, and dimmers operation",
    "Verify power outlets grounding and polarization tests",
    "Verify emergency lighting and exit signage battery backup",
    "Verify electrical system continuity and insulation resistance tests"
  ],
  "Plumbing / Mechanical Systems": [
    "Check main and domestic water supply pressure and flow",
    "Verify drainage and sewer flow tests, inspect for leaks",
    "Inspect plumbing fixtures, valves, and water meters",
    "Verify sanitary vent system operation"
  ],
  "Fire & Life Safety": [
    "Test main fire alarm panel, smoke detectors, and sounders",
    "Verify fire extinguishers placement, pressure, and tags",
    "Verify emergency exits pathways and panic hardware release"
  ],
  "Documentation": [
    "Collect final as-built drawings package",
    "Collect Operation & Maintenance (O&M) manuals",
    "Collect warranties and manufacturer warranty cards",
    "Collect material test certificates and quality records",
    "Collect local authority approvals and occupancy permits"
  ],
  "Testing & Commissioning": [
    "Verify testing logs for major systems",
    "Verify systems commissioning records are signed",
    "Review test reports against engineering design parameters",
    "Confirm commissioning punch items are closed"
  ],
  "Cleaning & Site Readiness": [
    "Complete final deep post-construction cleaning of interior spaces",
    "Remove construction debris, skips, and temporary site offices",
    "Confirm external walkways and vehicle access routes are clear",
    "Verify site perimeter security and fencing removal"
  ],
  "Client Handover": [
    "Conduct client joint walk-through inspection",
    "Record final client punch-list comments",
    "Prepare operations handover documentation and keys/access cards list",
    "Obtain client handover document sign-offs"
  ]
};

// Project Type Specific Items
const PROJECT_TYPE_ITEMS: Record<string, Record<string, string[]>> = {
  Residential: {
    "Architectural / Finishing Works": [
      "Inspect residential kitchens cabinetry and countertop finishes",
      "Verify unit bathrooms wall tiles grouting and floor slopes",
      "Verify wardrobe door sliders and internal shelving"
    ],
    "Plumbing / Mechanical Systems": [
      "Check unit domestic water heaters installation and safety relief valves",
      "Check unit balcony drainage traps"
    ],
    "Client Handover": [
      "Assemble resident handover boxes containing keys, manuals, and access cards"
    ]
  },
  Commercial: {
    "Plumbing / Mechanical Systems": [
      "Verify commercial HVAC system air balancing (TAB) reports",
      "Check cooling towers and chiller systems test logs",
      "Inspect central water booster pumps and booster sets"
    ],
    "Fire & Life Safety": [
      "Verify commercial card access control and fire alarm trip integration",
      "Verify emergency evacuation speaker/PA system audibility"
    ],
    "Documentation": [
      "Collect vertical transportation (lifts/escalators) safety certificates"
    ]
  },
  Industrial: {
    "Final Inspection": [
      "Verify process equipment zones and heavy load flooring clearances",
      "Inspect overhead crane structural tracks and alignment"
    ],
    "Electrical Systems": [
      "Verify high-voltage switchgear and substations test records",
      "Verify industrial Motor Control Centers (MCC) wiring and insulation"
    ],
    "Plumbing / Mechanical Systems": [
      "Test compressed air lines and industrial process pipes pressure logs",
      "Verify industrial roof extractors and factory ventilation systems"
    ]
  },
  Infrastructure: {
    "Architectural / Finishing Works": [
      "Inspect roadway paving asphalt compaction and thickness profiles",
      "Check road markings, traffic signs, and guardrail heights",
      "Verify landscaping, turfing, and slope stabilization structures"
    ],
    "Plumbing / Mechanical Systems": [
      "Verify stormwater culverts, culvert channels, and open drain flows",
      "Test main municipal water distribution pipes hydrostatic tests"
    ],
    "Documentation": [
      "Collect environmental compliance reports and highway authority approvals"
    ]
  }
};

// Handover Type Specific Items
const HANDOVER_TYPE_ITEMS: Record<string, Record<string, string[]>> = {
  "Preliminary Handover": {
    "Final Inspection": [
      "Compile preliminary construction punch list",
      "Record unfinished work items for contractor completion"
    ],
    "Testing & Commissioning": [
      "Review preliminary commissioning testing checklists"
    ]
  },
  "Final Handover": {
    "Defects / Punch List": [
      "Verify 100% of internal punch list defects are rectified"
    ],
    "Documentation": [
      "Compile finalized operation & maintenance manuals folder"
    ]
  },
  "Client Handover": {
    "Client Handover": [
      "Obtain signed client handover certificate and official transfer document",
      "Conduct facilities management (FM) operation handover training session"
    ]
  }
};

export default function HandoverChecklistClient() {
  const [view, setView] = useState<"setup" | "checklist">("setup");
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    name: "",
    type: "",
    location: "",
    handoverType: "",
    handoverDate: ""
  });
  const [checklist, setChecklist] = useState<ChecklistCategory[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Completed" | "Remaining">("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All Categories");

  // --- Handlers ---
  const handleInputChange = (field: keyof ProjectInfo, value: string) => {
    setProjectInfo((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleToggleItem = (catId: string, itemId: string) => {
    setChecklist((prev) =>
      prev.map((cat) => {
        if (cat.id === catId) {
          return {
            ...cat,
            items: cat.items.map((item: ChecklistItem) => {
              if (item.id === itemId) {
                return { ...item, completed: !item.completed };
              }
              return item;
            })
          };
        }
        return cat;
      })
    );
  };

  const handleRemarksChange = (catId: string, itemId: string, val: string) => {
    setChecklist((prev) =>
      prev.map((cat) => {
        if (cat.id === catId) {
          return {
            ...cat,
            items: cat.items.map((item: ChecklistItem) => {
              if (item.id === itemId) {
                return { ...item, remarks: val };
              }
              return item;
            })
          };
        }
        return cat;
      })
    );
  };

  // --- Generator Logic ---
  const generateChecklistData = (info: ProjectInfo) => {
    const categoriesList = Object.keys(BASE_CHECKLIST_ITEMS);
    let itemCounter = 1;

    const generatedCategories: ChecklistCategory[] = categoriesList.map((catName) => {
      const baseItems = BASE_CHECKLIST_ITEMS[catName] || [];
      const projectSpecific = (info.type && PROJECT_TYPE_ITEMS[info.type]?.[catName]) || [];
      const handoverSpecific = (info.handoverType && HANDOVER_TYPE_ITEMS[info.handoverType]?.[catName]) || [];

      // Merge items and remove duplicate strings
      const mergedTitles = Array.from(new Set([...baseItems, ...projectSpecific, ...handoverSpecific]));

      const items: ChecklistItem[] = mergedTitles.map((title) => ({
        id: `item-${itemCounter++}`,
        title,
        completed: false,
        remarks: ""
      }));

      return {
        id: catName.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        name: catName,
        items
      };
    });

    setChecklist(generatedCategories);
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!projectInfo.name.trim()) {
      newErrors.name = "Project Name is required.";
    }
    if (!projectInfo.type) {
      newErrors.type = "Please select a Project Type.";
    }
    if (!projectInfo.handoverType) {
      newErrors.handoverType = "Please select a Handover Type.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    generateChecklistData(projectInfo);
    setView("checklist");
    setSearchTerm("");
    setStatusFilter("All");
    setCategoryFilter("All Categories");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartNew = () => {
    // Check if any items are completed
    const completedCount = checklist.reduce(
      (sum, cat) => sum + cat.items.filter((item) => item.completed).length,
      0
    );

    if (completedCount > 0) {
      const confirmReset = window.confirm(
        "You have completed items on your current checklist. Starting a new checklist will discard all progress. Do you want to proceed?"
      );
      if (!confirmReset) return;
    }

    setProjectInfo({
      name: "",
      type: "",
      location: "",
      handoverType: "",
      handoverDate: ""
    });
    setChecklist([]);
    setErrors({});
    setView("setup");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Print View Trigger ---
  const handlePrint = () => {
    window.print();
  };

  // --- Progress Metrics ---
  const stats = useMemo(() => {
    let totalItems = 0;
    let completedItems = 0;

    checklist.forEach((cat) => {
      totalItems += cat.items.length;
      completedItems += cat.items.filter((item) => item.completed).length;
    });

    const remainingItems = totalItems - completedItems;
    const completionPct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    return {
      totalItems,
      completedItems,
      remainingItems,
      completionPct
    };
  }, [checklist]);

  // Category wise counts
  const categoryStats = useMemo(() => {
    return checklist.map((cat) => {
      const total = cat.items.length;
      const completed = cat.items.filter((item) => item.completed).length;
      return {
        id: cat.id,
        name: cat.name,
        total,
        completed
      };
    });
  }, [checklist]);

  // --- Filtering & Searching checklist items ---
  const filteredChecklist = useMemo(() => {
    return checklist
      .map((cat) => {
        // Filter within categories
        const matchedItems = cat.items.filter((item) => {
          // Status filter
          if (statusFilter === "Completed" && !item.completed) return false;
          if (statusFilter === "Remaining" && item.completed) return false;

          // Search term filter
          if (
            searchTerm &&
            !item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return false;
          }

          return true;
        });

        return {
          ...cat,
          items: matchedItems
        };
      })
      // Filter category by selection
      .filter((cat) => {
        if (categoryFilter === "All Categories") return true;
        return cat.name === categoryFilter;
      })
      // Remove empty categories from display if a search is active
      .filter((cat) => cat.items.length > 0);
  }, [checklist, searchTerm, statusFilter, categoryFilter]);

  return (
    <div className="space-y-8 print:space-y-0">
      {/* Printable CSS overrides */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          main {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          header, footer, nav, button, .print\\:hidden, div.absolute, input, select {
            display: none !important;
          }
          #print-checklist-container {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
          .print-badge {
            border: 1px solid #ddd !important;
            padding: 2px 6px !important;
            border-radius: 4px !important;
            font-size: 10px !important;
          }
          .print-category-block {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {view === "setup" ? (
        /* ==================== INPUT SETUP VIEW ==================== */
        <div className="max-w-2xl mx-auto print:hidden">
          <form onSubmit={handleGenerate} className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6">
            <div>
              <h3 className="text-xl font-bold text-neutral-800">Project Handover Details</h3>
              <p className="text-xs text-neutral-450 mt-1">Enter your project specifications to generate the tailored handover checklist templates.</p>
            </div>

            <div className="space-y-4">
              {/* Project Name */}
              <div>
                <label htmlFor="project-name" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="project-name"
                  value={projectInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g. ABC Commercial Building"
                  className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                    errors.name ? "border-red-500" : "border-neutral-200/80"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Type */}
                <div>
                  <label htmlFor="project-type" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="project-type"
                    value={projectInfo.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                      errors.type ? "border-red-500" : "border-neutral-200/80"
                    }`}
                  >
                    <option value="">Select Project Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Infrastructure">Infrastructure</option>
                  </select>
                  {errors.type && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.type}
                    </p>
                  )}
                </div>

                {/* Handover Type */}
                <div>
                  <label htmlFor="handover-type" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Handover Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="handover-type"
                    value={projectInfo.handoverType}
                    onChange={(e) => handleInputChange("handoverType", e.target.value)}
                    className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                      errors.handoverType ? "border-red-500" : "border-neutral-200/80"
                    }`}
                  >
                    <option value="">Select Handover Type</option>
                    <option value="Preliminary Handover">Preliminary Handover</option>
                    <option value="Final Handover">Final Handover</option>
                    <option value="Client Handover">Client Handover</option>
                  </select>
                  {errors.handoverType && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.handoverType}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={projectInfo.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g. Bangalore"
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>

                {/* Handover Date */}
                <div>
                  <label htmlFor="handover-date" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Handover Date
                  </label>
                  <input
                    type="date"
                    id="handover-date"
                    value={projectInfo.handoverDate}
                    onChange={(e) => handleInputChange("handoverDate", e.target.value)}
                    className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-neutral-100">
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm shadow-cyan-500/10"
              >
                <Sparkles className="w-4 h-4" />
                Generate Checklist
              </button>
            </div>
          </form>

          {/* Disclaimer Note */}
          <div className="mt-6 flex gap-3 bg-neutral-50 border border-neutral-200/60 rounded-2xl p-4 text-xs text-neutral-500">
            <Info className="w-4.5 h-4.5 text-neutral-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Please Note:</strong> This tool generates a generic starter checklist based on standard engineering and project management frameworks. It does not replace contractual, regulatory, structural, or legal requirements specific to your construction site.
            </p>
          </div>
        </div>
      ) : (
        /* ==================== CHECKLIST INTERACTIVE VIEW ==================== */
        <div className="space-y-6" id="print-checklist-container">
          
          {/* Action Bar (Print Hidden) */}
          <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
            <button
              type="button"
              onClick={handleStartNew}
              className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Start New Checklist
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm shadow-cyan-500/10"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Checklist
            </button>
          </div>

          {/* Summary Dashboard Block */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Total Items</span>
              <div className="text-3xl font-black text-neutral-800 mt-2">{stats.totalItems}</div>
            </div>
            <div className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Completed</span>
              <div className="text-3xl font-black text-emerald-600 mt-2">{stats.completedItems}</div>
            </div>
            <div className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Remaining</span>
              <div className="text-3xl font-black text-neutral-700 mt-2">{stats.remainingItems}</div>
            </div>
            <div className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">Completion Progress</span>
                <div className="text-3xl font-black text-cyan-600 mt-2">{stats.completionPct}%</div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-neutral-100">
                <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${stats.completionPct}%` }} />
              </div>
            </div>
          </div>

          {/* Overall Handover Status Notification */}
          <div className="bg-white border border-neutral-200/60 rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Handover Status Assessment</span>
              <div className="flex items-center gap-2 mt-1">
                {stats.completionPct === 100 ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-base font-bold text-emerald-600 uppercase">READY FOR HANDOVER REVIEW</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0" />
                    <span className="text-base font-bold text-yellow-600 uppercase">HANDOVER ITEMS REMAINING</span>
                  </>
                )}
              </div>
            </div>
            <div className="text-[10px] text-neutral-400 max-w-sm sm:text-right italic">
              Checklist completion indicator only. Does not constitute contract completion.
            </div>
          </div>

          {/* Project Details Panel */}
          <div className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-4">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-100 pb-1.5">
              Project Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-sm">
              <div>
                <span className="text-neutral-400 block text-xs uppercase tracking-wider font-semibold">Project Name</span>
                <span className="font-bold text-neutral-800">{projectInfo.name}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-xs uppercase tracking-wider font-semibold">Project Type</span>
                <span className="font-semibold text-neutral-800">{projectInfo.type}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-xs uppercase tracking-wider font-semibold">Handover Type</span>
                <span className="font-semibold text-neutral-800">{projectInfo.handoverType}</span>
              </div>
              {projectInfo.location && (
                <div>
                  <span className="text-neutral-400 block text-xs uppercase tracking-wider font-semibold">Location</span>
                  <span className="font-medium text-neutral-800">{projectInfo.location}</span>
                </div>
              )}
              {projectInfo.handoverDate && (
                <div>
                  <span className="text-neutral-400 block text-xs uppercase tracking-wider font-semibold">Handover Date</span>
                  <span className="font-medium text-neutral-800">{projectInfo.handoverDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Main Grid: Categories Selector Sidebar & Interactive Items */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar: Categories Navigation (Print Hidden) */}
            <div className="lg:col-span-4 bg-white border border-neutral-200/60 rounded-3xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-4 print:hidden">
              <div>
                <h4 className="text-sm font-bold text-neutral-800">Categories progress</h4>
                <p className="text-[10px] text-neutral-450 mt-0.5">Filter items by category</p>
              </div>

              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setCategoryFilter("All Categories")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex justify-between items-center ${
                    categoryFilter === "All Categories"
                      ? "bg-cyan-50 text-cyan-600 border-l-4 border-cyan-500 font-bold"
                      : "text-neutral-500 hover:bg-neutral-50"
                  }`}
                >
                  <span>All Categories</span>
                  <span className="font-mono">{stats.completedItems}/{stats.totalItems}</span>
                </button>

                {categoryStats.map((cat) => {
                  const pct = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategoryFilter(cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex justify-between items-center ${
                        categoryFilter === cat.name
                          ? "bg-cyan-50 text-cyan-600 border-l-4 border-cyan-500 font-bold"
                          : "text-neutral-500 hover:bg-neutral-50"
                      }`}
                    >
                      <span className="truncate mr-2">{cat.name}</span>
                      <span className={`font-mono text-[10px] flex-shrink-0 ${pct === 100 ? "text-emerald-600" : "text-neutral-450"}`}>
                        {cat.completed}/{cat.total}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Search/Filter & Checklists Items */}
            <div className="lg:col-span-8 bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] space-y-6">
              
              {/* Search and Filters Block (Print Hidden) */}
              <div className="flex flex-col sm:flex-row gap-3 print:hidden">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search checklist items..."
                    className="w-full bg-white border border-neutral-200/80 rounded-xl pl-9 pr-4 py-2 text-xs text-neutral-750 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                
                <div className="flex gap-2">
                  {/* Status Filters */}
                  {["All", "Completed", "Remaining"].map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setStatusFilter(filter as any)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        statusFilter === filter
                          ? "bg-neutral-800 text-white border-neutral-800"
                          : "bg-white text-neutral-500 border-neutral-200 hover:bg-neutral-50"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checklist Content */}
              <div className="space-y-8">
                {filteredChecklist.length === 0 ? (
                  <div className="py-12 text-center text-neutral-400 italic">
                    No items found matching the current search criteria or category filter.
                  </div>
                ) : (
                  filteredChecklist.map((cat) => (
                    <div key={cat.id} className="space-y-4 print-category-block">
                      {/* Category Header */}
                      <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider border-b border-neutral-150 pb-1.5 flex justify-between items-center">
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-neutral-450 font-mono font-medium lowercase">
                          {cat.items.filter(i => i.completed).length}/{cat.items.length} completed
                        </span>
                      </h4>

                      {/* Items List */}
                      <div className="space-y-3.5">
                        {cat.items.map((item) => (
                          <div
                            key={item.id}
                            className={`p-3.5 border rounded-2xl transition-all ${
                              item.completed
                                ? "bg-emerald-50/10 border-emerald-200/50"
                                : "bg-white border-neutral-200/60"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {/* Custom Interactive Checkbox button */}
                              <button
                                type="button"
                                onClick={() => handleToggleItem(cat.id, item.id)}
                                className="mt-0.5 text-neutral-400 hover:text-cyan-600 transition-colors shrink-0 print:hidden cursor-pointer"
                                aria-label={item.completed ? "Mark pending" : "Mark completed"}
                              >
                                {item.completed ? (
                                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                                ) : (
                                  <Square className="w-5 h-5 text-neutral-300" />
                                )}
                              </button>

                              {/* Print status checkbox */}
                              <span className="hidden print:inline-block shrink-0 mt-0.5 font-mono text-sm mr-1.5">
                                {item.completed ? "[✓]" : "[ ]"}
                              </span>

                              {/* Item Text */}
                              <div className="flex-grow space-y-2">
                                <div className="flex justify-between items-start gap-4">
                                  <span
                                    className={`text-xs md:text-sm font-medium ${
                                      item.completed
                                        ? "text-neutral-500 line-through"
                                        : "text-neutral-800"
                                    }`}
                                  >
                                    {item.title}
                                  </span>

                                  {/* Print status badge */}
                                  <span
                                    className={`print:inline-block print-badge hidden font-bold text-[8px] uppercase tracking-wider ${
                                      item.completed ? "text-emerald-600" : "text-neutral-400"
                                    }`}
                                  >
                                    {item.completed ? "Completed" : "Pending"}
                                  </span>
                                </div>

                                {/* Remarks input (Editable in Form View, printed statically) */}
                                <div className="pt-1.5">
                                  <div className="print:hidden">
                                    <input
                                      type="text"
                                      value={item.remarks}
                                      onChange={(e) =>
                                        handleRemarksChange(cat.id, item.id, e.target.value)
                                      }
                                      placeholder="Add remarks or notes..."
                                      className="w-full bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200/50 rounded-lg px-2.5 py-1 text-[11px] text-neutral-700 focus:outline-none focus:bg-white focus:border-cyan-500"
                                    />
                                  </div>
                                  {item.remarks && (
                                    <p className="hidden print:block text-[10px] text-neutral-500 italic mt-0.5">
                                      Remarks: {item.remarks}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
