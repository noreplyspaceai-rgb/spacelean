"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, X, CheckCircle2, Zap, Shield, Users } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ButtonHTMLAttributes, MouseEvent } from "react";

type StartFreeTrialButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  label?: string;
  showArrow?: boolean;
  trialUrl?: string;
  modalTitle?: string;
  modalDescription?: string;
  submitLabel?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function StartFreeTrialButton({
  label = "Start free trial",
  showArrow = true,
  trialUrl = "https://cad.spaceaiapp.com/lean",
  modalTitle = "Start building smarter.",
  modalDescription = "Enter your details and we'll take you straight to your free account - no credit card needed.",
  submitLabel = "Get started free",
  className = "",
  type = "button",
  onClick,
  ...props
}: StartFreeTrialButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    setIsOpen(true);
  };

  const mergedClassName = [
    "group inline-flex items-center gap-2 bg-black text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <button
        type={type}
        className={mergedClassName}
        onClick={handleButtonClick}
        {...props}
      >
        {label}
        {showArrow ? (
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        ) : null}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <TrialModal
            onClose={() => setIsOpen(false)}
            trialUrl={trialUrl}
            modalTitle={modalTitle}
            modalDescription={modalDescription}
            submitLabel={submitLabel}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

const FEATURES = [
  { icon: Zap, text: "Set up in under 5 minutes" },
  { icon: Shield, text: "SOC 2 Type II certified" },
  { icon: Users, text: "Trusted by 10,000+ teams" },
  { icon: CheckCircle2, text: "No credit card required" },
];

function TrialModal({
  onClose,
  trialUrl,
  modalTitle,
  modalDescription,
  submitLabel,
}: {
  onClose: () => void;
  trialUrl: string;
  modalTitle: string;
  modalDescription: string;
  submitLabel: string;
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.company.trim()) newErrors.company = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (form.phone && !/^\+?[\d\s\-().]{7,}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number";
    return newErrors;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    const destination = new URL(trialUrl, window.location.origin);
    destination.searchParams.set("email", form.email);
    destination.searchParams.set("firstName", form.firstName);
    destination.searchParams.set("lastName", form.lastName);
    destination.searchParams.set("company", form.company);
    if (form.phone) destination.searchParams.set("phone", form.phone);
    window.open(destination.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="fixed inset-0 z-[997] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-4xl z-[998]  overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.35)] flex flex-col md:flex-row"
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxHeight: "90vh" }}
      >
        {/* ── LEFT PANEL ── */}
        <div
          className="relative md:w-[42%] flex-shrink-0 flex flex-col justify-end p-8 min-h-[260px] md:min-h-0 overflow-hidden"
          style={{
            background: `
              linear-gradient(
                160deg,
                rgba(10,10,10,0.55) 0%,
                rgba(10,10,10,0.72) 60%,
                rgba(10,10,10,0.92) 100%
              ),
              url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />

          {/* Top badge */}
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-white/70 border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              Free Trial
            </span>
          </div>

          {/* Bottom content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold !text-white leading-tight tracking-tight mb-3">
              {modalTitle}
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              {modalDescription}
            </p>

            <ul className="space-y-3">
              {FEATURES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="w-2.5 h-2.5 text-white" />
                  </span>
                  <span className="text-xs text-white/75 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* Decorative line */}
            <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
            <p className="mt-4 text-[11px] text-white/35 leading-relaxed">
              Join thousands of teams already building with us. Cancel anytime.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="flex-1 bg-white flex flex-col overflow-y-auto">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors z-20"
          >
            <X className="w-4 h-4 text-neutral-500" />
          </button>

          {!submitted ? (
            <div className="p-8 md:p-10 flex flex-col gap-5 flex-1">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-1">
                  Create your account
                </p>
                <h3 className="text-xl font-bold text-[#0a0a0a]">
                  Get started in seconds
                </h3>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="First name"
                  placeholder="Jane"
                  value={form.firstName}
                  error={errors.firstName}
                  onChange={(v) => handleChange("firstName", v)}
                  onEnter={handleSubmit}
                />
                <Field
                  label="Last name"
                  placeholder="Smith"
                  value={form.lastName}
                  error={errors.lastName}
                  onChange={(v) => handleChange("lastName", v)}
                  onEnter={handleSubmit}
                />
              </div>

              {/* Company */}
              <Field
                label="Company name"
                placeholder="Acme Corp"
                value={form.company}
                error={errors.company}
                onChange={(v) => handleChange("company", v)}
                onEnter={handleSubmit}
              />

              {/* Email */}
              <Field
                label="Work email"
                type="email"
                placeholder="jane@acmecorp.com"
                value={form.email}
                error={errors.email}
                onChange={(v) => handleChange("email", v)}
                onEnter={handleSubmit}
              />

              {/* Phone */}
              <Field
                label={
                  <span>
                    Phone number{" "}
                    <span className="font-normal text-neutral-400">(optional)</span>
                  </span>
                }
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                error={errors.phone}
                onChange={(v) => handleChange("phone", v)}
                onEnter={handleSubmit}
              />

              {/* CTA */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full group inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-neutral-800 active:scale-[0.99] transition-all mt-1"
              >
                {submitLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-[11px] text-neutral-400 text-center -mt-1">
                By continuing, you agree to our{" "}
                <a href="#" className="underline underline-offset-2 hover:text-neutral-600 transition-colors">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-2 hover:text-neutral-600 transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-10 flex-1 gap-4">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-1">
                  Welcome aboard, {form.firstName}!
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                  Your free trial has opened in a new tab. Check your inbox for a confirmation email.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Close this window
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Reusable field ── */
function Field({
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  onEnter,
}: {
  label: React.ReactNode;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onEnter?: () => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-neutral-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter?.()}
        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-neutral-50 text-[#0a0a0a] placeholder:text-neutral-400 outline-none transition-all focus:bg-white focus:ring-2 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-neutral-200 focus:border-neutral-400 focus:ring-neutral-100"
        }`}
      />
      {error ? (
        <p className="text-[11px] text-red-500 pl-0.5">{error}</p>
      ) : null}
    </div>
  );
}