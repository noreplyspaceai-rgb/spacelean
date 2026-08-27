"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Mail, ShieldCheck, RotateCcw, AlertCircle, Loader2 } from "lucide-react";
import { graphqlRequest } from "@/lib/graphql-request";

// ── Environment config ─────────────────────────────────────────────────────
const WEBSITE_ID = process.env.NEXT_PUBLIC_SPACELEAN_WEBSITE_ID!;

// ── GraphQL mutations ──────────────────────────────────────────────────────
const REQUEST_OTP_MUTATION = `
  mutation RequestLoginOtp($websiteId: String!, $email: String!) {
    websiteRequestLoginOtp(websiteId: $websiteId, email: $email) {
      otpSent
      message
      email
    }
  }
`;

const VERIFY_OTP_MUTATION = `
  mutation VerifyLoginOtp($websiteId: String!, $email: String!, $otp: String!) {
    websiteVerifyLoginOtp(websiteId: $websiteId, email: $email, otp: $otp) {
      token
      userId
      email
      firstName
      lastName
      role
      websiteId
    }
  }
`;

// ── Response types ──────────────────────────────────────────────────────────
interface RequestOtpData {
  websiteRequestLoginOtp: {
    otpSent: boolean;
    message: string;
    email: string;
  };
}

interface VerifyOtpData {
  websiteVerifyLoginOtp: {
    token: string;
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    websiteId: string;
  };
}

// ── Email validation ────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  // Basic RFC-5322-ish check: user@domain.tld
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

// ── Resend cooldown seconds ─────────────────────────────────────────────────
const RESEND_COOLDOWN = 30;

// ── Props ───────────────────────────────────────────────────────────────────
export interface AuthSession {
  token: string;   // kept in memory only — never logged or exposed
  email: string;
}

interface CPMAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: (session: AuthSession) => void;
}

// ── Component ───────────────────────────────────────────────────────────────
type Step = "email" | "otp";

export default function CPMAuthModal({
  isOpen,
  onClose,
  onAuthenticated,
}: CPMAuthModalProps) {
  const [step, setStep] = useState<Step>("email");

  // Email step state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);

  // OTP step state
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState<string | null>(null);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);

  // Resend cooldown
  const [cooldown, setCooldown] = useState(0);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus management
  useEffect(() => {
    if (!isOpen) return;
    if (step === "email") {
      setTimeout(() => emailInputRef.current?.focus(), 50);
    } else {
      setTimeout(() => otpInputRef.current?.focus(), 50);
    }
  }, [isOpen, step]);

  // Reset all state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep("email");
      setEmail("");
      setEmailError(null);
      setRequestLoading(false);
      setRequestError(null);
      setOtp("");
      setOtpError(null);
      setVerifyLoading(false);
      setVerifyError(null);
      setCooldown(0);
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    }
  }, [isOpen]);

  // Escape key closes the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const startCooldown = useCallback(() => {
    setCooldown(RESEND_COOLDOWN);
    if (cooldownRef.current) clearInterval(cooldownRef.current);
    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (cooldownRef.current) clearInterval(cooldownRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // ── Request OTP ────────────────────────────────────────────────────────
  const handleRequestOtp = async () => {
    setEmailError(null);
    setRequestError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError("Please enter your business email address.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setEmailError("Please enter a valid business email address.");
      return;
    }

    setRequestLoading(true);
    try {
      const result = await graphqlRequest<RequestOtpData>(REQUEST_OTP_MUTATION, {
        websiteId: WEBSITE_ID,
        email: trimmed,
      });

      if (result.errors?.length) {
        setRequestError(
          result.errors[0].message || "Unable to send the verification code. Please try again."
        );
        return;
      }

      const payload = result.data?.websiteRequestLoginOtp;
      if (!payload?.otpSent) {
        setRequestError(
          payload?.message || "Unable to send the verification code. Please try again."
        );
        return;
      }

      // OTP sent — move to verification step
      setStep("otp");
      startCooldown();
    } catch {
      setRequestError("Something went wrong. Please try again.");
    } finally {
      setRequestLoading(false);
    }
  };

  // ── Resend OTP ─────────────────────────────────────────────────────────
  const handleResend = async () => {
    if (cooldown > 0) return;
    setOtpError(null);
    setVerifyError(null);

    setRequestLoading(true);
    try {
      const result = await graphqlRequest<RequestOtpData>(REQUEST_OTP_MUTATION, {
        websiteId: WEBSITE_ID,
        email: email.trim(),
      });

      const payload = result.data?.websiteRequestLoginOtp;
      if (!payload?.otpSent) {
        setVerifyError(
          payload?.message || "Unable to resend the verification code. Please try again."
        );
        return;
      }
      startCooldown();
      setOtp("");
    } catch {
      setVerifyError("Something went wrong. Please try again.");
    } finally {
      setRequestLoading(false);
    }
  };

  // ── Verify OTP ─────────────────────────────────────────────────────────
  const handleVerifyOtp = async () => {
    setOtpError(null);
    setVerifyError(null);

    const trimmedOtp = otp.trim();
    if (!trimmedOtp) {
      setOtpError("Please enter the 6-digit verification code.");
      return;
    }
    if (!/^\d{6}$/.test(trimmedOtp)) {
      setOtpError("The verification code must be exactly 6 digits.");
      return;
    }

    setVerifyLoading(true);
    try {
      const result = await graphqlRequest<VerifyOtpData>(VERIFY_OTP_MUTATION, {
        websiteId: WEBSITE_ID,
        email: email.trim(),
        otp: trimmedOtp,
      });

      if (result.errors?.length) {
        const msg = result.errors[0].message?.toLowerCase() ?? "";
        if (msg.includes("expired") || msg.includes("expire")) {
          setVerifyError("Your verification code has expired. Please request a new code.");
        } else if (msg.includes("invalid") || msg.includes("incorrect") || msg.includes("wrong")) {
          setVerifyError("The verification code is incorrect. Please try again.");
        } else {
          setVerifyError(result.errors[0].message || "Something went wrong. Please try again.");
        }
        return;
      }

      const payload = result.data?.websiteVerifyLoginOtp;
      if (!payload?.token) {
        setVerifyError("Verification failed. Please try again.");
        return;
      }

      // Authentication successful — pass token to parent (kept in memory only)
      onAuthenticated({ token: payload.token, email: payload.email });
    } catch {
      setVerifyError("Something went wrong. Please try again.");
    } finally {
      setVerifyLoading(false);
    }
  };

  // ── Handle Enter key in inputs ─────────────────────────────────────────
  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !requestLoading) handleRequestOtp();
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !verifyLoading) handleVerifyOtp();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-neutral-200/60 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close authentication modal"
            className="absolute top-4 right-4 p-2 rounded-xl text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-8">
            {step === "email" ? (
              // ── EMAIL STEP ────────────────────────────────────────────
              <>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-5">
                  <Mail className="w-6 h-6 text-cyan-500" strokeWidth={1.5} />
                </div>

                <h2
                  id="auth-modal-title"
                  className="text-xl font-bold text-neutral-800 mb-1"
                >
                  Get Your CPM Results
                </h2>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                  Enter your business email to continue and view your project results.
                </p>

                {/* Email field */}
                <div className="mb-4">
                  <label
                    htmlFor="auth-email"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wider"
                  >
                    Business Email
                  </label>
                  <input
                    ref={emailInputRef}
                    id="auth-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(null);
                    }}
                    onKeyDown={handleEmailKeyDown}
                    placeholder="you@company.com"
                    autoComplete="email"
                    aria-describedby={emailError ? "email-error" : undefined}
                    aria-invalid={!!emailError}
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 transition-all ${
                      emailError
                        ? "border-red-300 focus:border-red-400 focus:ring-red-500/20"
                        : "border-neutral-200 focus:border-cyan-500 focus:ring-cyan-500/20"
                    }`}
                  />
                  {emailError && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {emailError}
                    </p>
                  )}
                </div>

                {/* API error */}
                {requestError && (
                  <div
                    role="alert"
                    className="mb-4 flex gap-2.5 items-start bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    {requestError}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="button"
                  onClick={handleRequestOtp}
                  disabled={requestLoading}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
                >
                  {requestLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending code...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Continue with email
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-400 mt-4">
                  Use your business email to continue.
                </p>
              </>
            ) : (
              // ── OTP STEP ─────────────────────────────────────────────
              <>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" strokeWidth={1.5} />
                </div>

                <h2
                  id="auth-modal-title"
                  className="text-xl font-bold text-neutral-800 mb-1"
                >
                  Check Your Email
                </h2>
                <p className="text-sm text-neutral-500 mb-1 leading-relaxed">
                  We sent a verification code to
                </p>
                <p className="text-sm font-semibold text-cyan-600 mb-6 break-all">
                  {email.trim()}
                </p>

                {/* OTP field */}
                <div className="mb-4">
                  <label
                    htmlFor="auth-otp"
                    className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wider"
                  >
                    6-Digit Verification Code
                  </label>
                  <input
                    ref={otpInputRef}
                    id="auth-otp"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                      setOtp(val);
                      setOtpError(null);
                    }}
                    onKeyDown={handleOtpKeyDown}
                    placeholder="000000"
                    autoComplete="one-time-code"
                    aria-describedby={otpError ? "otp-error" : undefined}
                    aria-invalid={!!otpError}
                    className={`w-full border rounded-xl px-4 py-3 text-sm font-mono tracking-[0.4em] text-center text-neutral-800 focus:outline-none focus:ring-2 transition-all ${
                      otpError
                        ? "border-red-300 focus:border-red-400 focus:ring-red-500/20"
                        : "border-neutral-200 focus:border-cyan-500 focus:ring-cyan-500/20"
                    }`}
                  />
                  {otpError && (
                    <p
                      id="otp-error"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {otpError}
                    </p>
                  )}
                </div>

                {/* API error */}
                {verifyError && (
                  <div
                    role="alert"
                    className="mb-4 flex gap-2.5 items-start bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                    {verifyError}
                  </div>
                )}

                {/* Verify button */}
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={verifyLoading}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
                >
                  {verifyLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      Verify &amp; Continue
                    </>
                  )}
                </button>

                {/* Resend */}
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                  <span>Didn&apos;t receive the code?</span>
                  {cooldown > 0 ? (
                    <span className="text-neutral-400 font-medium flex items-center gap-1">
                      <RotateCcw className="w-3 h-3" />
                      Resend in {cooldown}s
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={requestLoading}
                      className="text-cyan-500 hover:text-cyan-600 font-semibold underline-offset-2 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {requestLoading ? "Sending..." : "Resend OTP"}
                    </button>
                  )}
                </div>

                {/* Back link */}
                <button
                  type="button"
                  onClick={() => {
                    setStep("email");
                    setOtp("");
                    setOtpError(null);
                    setVerifyError(null);
                  }}
                  className="mt-3 w-full text-center text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  ← Use a different email
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
