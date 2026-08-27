"use client";

import React, { useState, useMemo } from "react";
import {
  Plus,
  Trash2,
  FileText,
  Clipboard,
  Printer,
  RotateCcw,
  AlertCircle,
  Calculator,
  Info,
  DollarSign
} from "lucide-react";

// --- TypeScript Interfaces ---
export interface ProjectInfo {
  name: string;
  location: string;
  currency: "INR (₹)" | "USD ($)" | "EUR (€)" | "GBP (£)";
}

export interface CostItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  customUnit?: string;
  unitRate: number;
}

export interface ConstructionCostEstimate {
  project: ProjectInfo;
  items: CostItem[];
  contingencyPercent: number;
  taxPercent: number;
}

const UNIT_OPTIONS = [
  "m³",
  "m²",
  "m",
  "ton",
  "kg",
  "bags",
  "pcs",
  "hours",
  "days",
  "lot",
  "other"
];

const CURRENCY_SYMBOLS: Record<string, string> = {
  "INR (₹)": "₹",
  "USD ($)": "$",
  "EUR (€)": "€",
  "GBP (£)": "£"
};

const INITIAL_ESTIMATE: ConstructionCostEstimate = {
  project: {
    name: "",
    location: "",
    currency: "INR (₹)"
  },
  items: [
    {
      id: "1",
      name: "Concrete",
      description: "Structural concrete",
      quantity: 25,
      unit: "m³",
      unitRate: 7000
    },
    {
      id: "2",
      name: "Steel",
      description: "Reinforcement steel",
      quantity: 2,
      unit: "ton",
      unitRate: 60000
    },
    {
      id: "3",
      name: "Cement",
      description: "Cement bags",
      quantity: 100,
      unit: "bags",
      unitRate: 400
    }
  ],
  contingencyPercent: 0,
  taxPercent: 0
};

export default function ConstructionCostCalculatorClient() {
  const [estimate, setEstimate] = useState<ConstructionCostEstimate>(INITIAL_ESTIMATE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copySuccess, setCopySuccess] = useState(false);

  // --- Handlers ---
  const handleProjectChange = (field: keyof ProjectInfo, value: string) => {
    setEstimate((prev) => ({
      ...prev,
      project: { ...prev.project, [field]: value }
    }));
  };

  const handleAdjustmentsChange = (field: "contingencyPercent" | "taxPercent", value: string) => {
    const numVal = Math.max(0, parseFloat(value) || 0);
    setEstimate((prev) => ({
      ...prev,
      [field]: numVal
    }));

    // Inline validation for negative rates / contingency / tax bounds
    const errKey = field;
    if (parseFloat(value) < 0) {
      setErrors((prev) => ({ ...prev, [errKey]: "Percentage cannot be negative." }));
    } else if (field === "contingencyPercent" && parseFloat(value) > 100) {
      setErrors((prev) => ({ ...prev, [errKey]: "Contingency should ideally not exceed 100%." }));
    } else if (field === "taxPercent" && parseFloat(value) > 100) {
      setErrors((prev) => ({ ...prev, [errKey]: "Tax should ideally not exceed 100%." }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        return next;
      });
    }
  };

  const handleAddItem = () => {
    const newItem: CostItem = {
      id: Math.random().toString(36).substring(2, 9),
      name: "",
      description: "",
      quantity: 1,
      unit: "pcs",
      unitRate: 0
    };
    setEstimate((prev) => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleUpdateItem = (id: string, field: keyof CostItem, value: any) => {
    setEstimate((prev) => {
      const updatedItems = prev.items.map((item) => {
        if (item.id === id) {
          if (field === "quantity" || field === "unitRate") {
            const numVal = Math.max(0, parseFloat(value) || 0);
            return { ...item, [field]: numVal };
          }
          return { ...item, [field]: value };
        }
        return item;
      });
      return { ...prev, items: updatedItems };
    });

    // Clear related error
    const errKey = `item.${id}.${field}`;
    if (errors[errKey] || errors[`item.${id}.name`]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[errKey];
        if (field === "name") delete next[`item.${id}.name`];
        return next;
      });
    }
  };

  const handleDeleteItem = (id: string) => {
    setEstimate((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id)
    }));

    // Clean up errors for deleted item
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.startsWith(`item.${id}.`)) {
          delete next[key];
        }
      });
      return next;
    });
  };

  const handleClearAll = () => {
    if (estimate.items.length === 0) return;
    const confirmClear = window.confirm("Are you sure you want to clear all cost items?");
    if (confirmClear) {
      setEstimate((prev) => ({
        ...prev,
        items: []
      }));
      setErrors({});
    }
  };

  // --- Calculations ---
  const calculatedData = useMemo(() => {
    let subtotal = 0;
    const itemsWithAmount = estimate.items.map((item) => {
      const amount = item.quantity * item.unitRate;
      subtotal += amount;
      return {
        ...item,
        amount
      };
    });

    const contingencyAmount = (subtotal * estimate.contingencyPercent) / 100;
    const taxAmount = ((subtotal + contingencyAmount) * estimate.taxPercent) / 100;
    const estimatedTotal = subtotal + contingencyAmount + taxAmount;

    return {
      items: itemsWithAmount,
      subtotal,
      contingencyAmount,
      taxAmount,
      estimatedTotal
    };
  }, [estimate]);

  const currencySymbol = CURRENCY_SYMBOLS[estimate.project.currency] || "₹";

  const formatCurrencyVal = (val: number) => {
    return `${currencySymbol}${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // --- Inline Validation check ---
  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {};

    estimate.items.forEach((item) => {
      if (!item.name.trim()) {
        newErrors[`item.${item.id}.name`] = "Item name cannot be empty.";
      }
      if (item.quantity < 0) {
        newErrors[`item.${item.id}.quantity`] = "Quantity cannot be negative.";
      }
      if (item.unitRate < 0) {
        newErrors[`item.${item.id}.unitRate`] = "Unit rate cannot be negative.";
      }
    });

    if (estimate.contingencyPercent < 0) {
      newErrors.contingencyPercent = "Contingency cannot be negative.";
    }
    if (estimate.taxPercent < 0) {
      newErrors.taxPercent = "Tax cannot be negative.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Copy Clipboard ---
  const handleCopyEstimate = () => {
    const isValid = validateInputs();
    if (!isValid) return;

    let text = `CONSTRUCTION COST ESTIMATE\n`;
    text += `========================================\n\n`;
    text += `Project: ${estimate.project.name || "N/A"}\n`;
    text += `Location: ${estimate.project.location || "N/A"}\n`;
    text += `Currency: ${estimate.project.currency}\n`;
    text += `========================================\n\n`;

    text += `Item description | Qty | Unit | Rate | Amount\n`;
    text += `--------------------------------------------------\n`;
    calculatedData.items.forEach((item) => {
      const unitText = item.unit === "other" ? (item.customUnit || "other") : item.unit;
      text += `${item.name} (${item.description || "No Desc"}): ${item.quantity} ${unitText} @ ${formatCurrencyVal(item.unitRate)} = ${formatCurrencyVal(item.amount)}\n`;
    });
    text += `--------------------------------------------------\n\n`;

    text += `Subtotal: ${formatCurrencyVal(calculatedData.subtotal)}\n`;
    text += `Contingency (${estimate.contingencyPercent}%): ${formatCurrencyVal(calculatedData.contingencyAmount)}\n`;
    text += `Tax (${estimate.taxPercent}%): ${formatCurrencyVal(calculatedData.taxAmount)}\n`;
    text += `Estimated Total: ${formatCurrencyVal(calculatedData.estimatedTotal)}\n\n`;
    text += `--------------------------------------------------\n`;
    text += `* Estimate only. Entered quantities and rates should be verified against spec details.`;

    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  // --- Print View Trigger ---
  const handlePrint = () => {
    const isValid = validateInputs();
    if (isValid) {
      window.print();
    }
  };

  return (
    <div className="space-y-8">
      {/* Print Stylesheet */}
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
          #print-estimate-panel {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
          .print-static-val {
            display: inline-block !important;
          }
          .print-input-hide {
            display: none !important;
          }
          .print-border {
            border-bottom: 1px solid #e5e7eb !important;
          }
        }
      `}</style>

      {/* Main interactive container */}
      <div id="print-estimate-panel" className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-8">
        
        {/* Project details card */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-neutral-100 print-border">
            <DollarSign className="w-5 h-5 text-cyan-500 print:hidden" />
            <h2 className="text-xl font-bold text-neutral-800">Project Estimation Settings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="project-name" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Project Name
              </label>
              <input
                type="text"
                id="project-name"
                value={estimate.project.name}
                onChange={(e) => handleProjectChange("name", e.target.value)}
                placeholder="e.g. ABC Commercial Building"
                className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 print-input-hide"
              />
              <span className="hidden print:inline-block font-bold text-sm text-neutral-800">
                {estimate.project.name || "—"}
              </span>
            </div>

            <div>
              <label htmlFor="project-location" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Location
              </label>
              <input
                type="text"
                id="project-location"
                value={estimate.project.location}
                onChange={(e) => handleProjectChange("location", e.target.value)}
                placeholder="e.g. Bangalore"
                className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 print-input-hide"
              />
              <span className="hidden print:inline-block font-medium text-sm text-neutral-800">
                {estimate.project.location || "—"}
              </span>
            </div>

            <div>
              <label htmlFor="project-currency" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                Display Currency
              </label>
              <select
                id="project-currency"
                value={estimate.project.currency}
                onChange={(e) => handleProjectChange("currency", e.target.value as any)}
                className="w-full bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 print-input-hide"
              >
                <option value="INR (₹)">INR (₹)</option>
                <option value="USD ($)">USD ($)</option>
                <option value="EUR (€)">EUR (€)</option>
                <option value="GBP (£)">GBP (£)</option>
              </select>
              <span className="hidden print:inline-block font-medium text-sm text-neutral-850">
                {estimate.project.currency}
              </span>
            </div>
          </div>
        </section>

        {/* Cost Item Table */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100 print-border">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-500 print:hidden" />
              <h2 className="text-xl font-bold text-neutral-800">Cost Estimation Details</h2>
            </div>
            
            <div className="flex gap-2 print:hidden">
              <button
                type="button"
                onClick={handleClearAll}
                disabled={estimate.items.length === 0}
                className="px-3 py-1.5 bg-neutral-50 hover:bg-neutral-100 disabled:opacity-50 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear All
              </button>
              <button
                type="button"
                onClick={handleAddItem}
                className="px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Item
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200/60 bg-neutral-50/20">
            <table className="w-full text-sm text-left border-collapse min-w-[760px] print:min-w-full">
              <thead>
                <tr className="bg-neutral-50 text-neutral-500 uppercase text-xs font-bold tracking-wider border-b border-neutral-200/60 print:bg-white print:border-b-2 print:border-neutral-900/10">
                  <th className="py-4 px-4 w-1/4">Item</th>
                  <th className="py-4 px-4 w-1/4">Description</th>
                  <th className="py-4 px-4 w-1/12 text-right">Quantity</th>
                  <th className="py-4 px-4 w-1/8 text-center">Unit</th>
                  <th className="py-4 px-4 w-1/8 text-right">Unit Rate</th>
                  <th className="py-4 px-4 w-1/8 text-right">Amount</th>
                  <th className="py-4 px-4 w-[60px] text-center print:hidden">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 bg-white">
                {estimate.items.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-neutral-400 italic">
                      No cost items added yet. Click "+ Add Item" to begin your estimate.
                    </td>
                  </tr>
                ) : (
                  calculatedData.items.map((row) => (
                    <tr key={row.id} className="hover:bg-neutral-50/30 transition-colors">
                      {/* Item Name */}
                      <td className="py-3 px-4">
                        <div className="print-input-hide">
                          <input
                            type="text"
                            value={row.name}
                            onChange={(e) => handleUpdateItem(row.id, "name", e.target.value)}
                            placeholder="e.g. Concrete"
                            className={`w-full bg-white border rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 ${
                              errors[`item.${row.id}.name`] ? "border-red-500" : "border-neutral-200/80"
                            }`}
                          />
                          {errors[`item.${row.id}.name`] && (
                            <p className="text-[10px] text-red-500 mt-0.5">{errors[`item.${row.id}.name`]}</p>
                          )}
                        </div>
                        <span className="hidden print:inline-block font-bold text-neutral-800">
                          {row.name || "—"}
                        </span>
                      </td>

                      {/* Description */}
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          value={row.description}
                          onChange={(e) => handleUpdateItem(row.id, "description", e.target.value)}
                          placeholder="Optional details"
                          className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 print-input-hide"
                        />
                        <span className="hidden print:inline-block text-neutral-500 text-xs">
                          {row.description || "—"}
                        </span>
                      </td>

                      {/* Quantity */}
                      <td className="py-3 px-4 text-right">
                        <div className="print-input-hide">
                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={row.quantity}
                            onChange={(e) => handleUpdateItem(row.id, "quantity", e.target.value)}
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-750 text-right focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                          {errors[`item.${row.id}.quantity`] && (
                            <p className="text-[10px] text-red-500 mt-0.5">{errors[`item.${row.id}.quantity`]}</p>
                          )}
                        </div>
                        <span className="hidden print:inline-block font-mono text-neutral-800">
                          {row.quantity}
                        </span>
                      </td>

                      {/* Unit */}
                      <td className="py-3 px-4 text-center">
                        <div className="print-input-hide space-y-1">
                          <select
                            value={row.unit}
                            onChange={(e) => handleUpdateItem(row.id, "unit", e.target.value)}
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-2 py-1.5 text-xs text-neutral-700 focus:outline-none focus:border-cyan-500"
                          >
                            {UNIT_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          {row.unit === "other" && (
                            <input
                              type="text"
                              value={row.customUnit || ""}
                              onChange={(e) => handleUpdateItem(row.id, "customUnit", e.target.value)}
                              placeholder="Enter unit"
                              className="w-full bg-white border border-neutral-200/80 rounded-lg px-2 py-1 text-xs text-center text-neutral-700 focus:outline-none focus:border-cyan-500"
                            />
                          )}
                        </div>
                        <span className="hidden print:inline-block text-neutral-600">
                          {row.unit === "other" ? (row.customUnit || "other") : row.unit}
                        </span>
                      </td>

                      {/* Unit Rate */}
                      <td className="py-3 px-4 text-right">
                        <div className="print-input-hide">
                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={row.unitRate}
                            onChange={(e) => handleUpdateItem(row.id, "unitRate", e.target.value)}
                            className="w-full bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 text-sm text-neutral-750 text-right focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25"
                          />
                          {errors[`item.${row.id}.unitRate`] && (
                            <p className="text-[10px] text-red-500 mt-0.5">{errors[`item.${row.id}.unitRate`]}</p>
                          )}
                        </div>
                        <span className="hidden print:inline-block font-mono text-neutral-800">
                          {formatCurrencyVal(row.unitRate)}
                        </span>
                      </td>

                      {/* Amount */}
                      <td className="py-3 px-4 text-right font-mono font-bold text-neutral-800">
                        {formatCurrencyVal(row.amount)}
                      </td>

                      {/* Action */}
                      <td className="py-3 px-4 text-center print:hidden">
                        <button
                          type="button"
                          onClick={() => handleDeleteItem(row.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-55 rounded-lg transition-colors cursor-pointer"
                          title="Delete Item"
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

        {/* Adjustments & Totals Summary Panel */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left panel: Contingency & Tax adjustment controls */}
          <div className="space-y-4 print:hidden">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider pb-1.5 border-b border-neutral-100">
              Tax & Contingency Adjustments
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contingency-percent" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Contingency (%)
                </label>
                <input
                  type="number"
                  id="contingency-percent"
                  min="0"
                  max="100"
                  value={estimate.contingencyPercent}
                  onChange={(e) => handleAdjustmentsChange("contingencyPercent", e.target.value)}
                  className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 ${
                    errors.contingencyPercent ? "border-red-500" : "border-neutral-200/80"
                  }`}
                />
                {errors.contingencyPercent && (
                  <p className="text-xs text-red-500 mt-1">{errors.contingencyPercent}</p>
                )}
              </div>

              <div>
                <label htmlFor="tax-percent" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Tax (%)
                </label>
                <input
                  type="number"
                  id="tax-percent"
                  min="0"
                  max="100"
                  value={estimate.taxPercent}
                  onChange={(e) => handleAdjustmentsChange("taxPercent", e.target.value)}
                  className={`w-full bg-white border rounded-lg px-3 py-1.5 text-sm text-neutral-750 focus:outline-none focus:border-cyan-500 ${
                    errors.taxPercent ? "border-red-500" : "border-neutral-200/80"
                  }`}
                />
                {errors.taxPercent && (
                  <p className="text-xs text-red-500 mt-1">{errors.taxPercent}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right panel: Summary totals card */}
          <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-6 space-y-4 print:bg-white print:border-none print:p-0">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider pb-1.5 border-b border-neutral-200/60 print:border-neutral-900/10">
              Calculation Summary
            </h3>

            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between items-center text-neutral-500">
                <span>Subtotal</span>
                <span className="font-mono font-semibold text-neutral-850">{formatCurrencyVal(calculatedData.subtotal)}</span>
              </div>

              {estimate.contingencyPercent > 0 && (
                <div className="flex justify-between items-center text-neutral-500">
                  <span>Contingency ({estimate.contingencyPercent}%)</span>
                  <span className="font-mono font-medium text-neutral-800">
                    +{formatCurrencyVal(calculatedData.contingencyAmount)}
                  </span>
                </div>
              )}

              {estimate.taxPercent > 0 && (
                <div className="flex justify-between items-center text-neutral-500">
                  <span>Tax ({estimate.taxPercent}%)</span>
                  <span className="font-mono font-medium text-neutral-800">
                    +{formatCurrencyVal(calculatedData.taxAmount)}
                  </span>
                </div>
              )}

              <div className="pt-3 border-t border-neutral-200 print:border-t-2 print:border-neutral-900/10 flex justify-between items-end">
                <span className="font-bold text-neutral-800 text-base">Estimated Total</span>
                <span className="text-2xl font-black text-cyan-600 print:text-neutral-900 font-mono">
                  {formatCurrencyVal(calculatedData.estimatedTotal)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Global Errors Alert */}
        {Object.keys(errors).length > 0 && (
          <div className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-850 print:hidden">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-650 mt-0.5" />
            <div>
              <p className="font-bold text-red-800">Validation Errors</p>
              <p className="text-xs leading-relaxed text-red-700 mt-0.5">
                Please fix the highlighted fields in the cost item table or percentages block before copying or printing the estimate.
              </p>
            </div>
          </div>
        )}

        {/* Action Controls (Print Hidden) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-100 print:hidden">
          <button
            type="button"
            onClick={handleCopyEstimate}
            disabled={estimate.items.length === 0}
            className="px-4 py-2.5 bg-neutral-50 hover:bg-neutral-100 disabled:opacity-50 border border-neutral-200 text-neutral-700 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Clipboard className="w-3.5 h-3.5" />
            {copySuccess ? "Copied Estimate!" : "Copy Estimate"}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            disabled={estimate.items.length === 0}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm shadow-cyan-500/10"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Estimate
          </button>
        </div>

        {/* Estimate Disclaimer */}
        <div className="text-[10px] text-neutral-400 mt-6 leading-relaxed italic border-t border-neutral-100 pt-4 print:border-none print:mt-12">
          <strong>Estimation Disclaimer:</strong> Estimate only. Entered quantities and unit rates are user-provided and should be verified against project specifications, quotations, contracts, and current market conditions. The calculations performed do not represent guaranteed project costs or official vendor quotes.
        </div>

      </div>
    </div>
  );
}
