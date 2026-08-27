"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import StartFreeTrialButton from "@/components/StartFreeTrialButton";
import US from "country-flag-icons/react/3x2/US";
import CA from "country-flag-icons/react/3x2/CA";
import AE from "country-flag-icons/react/3x2/AE";
import SA from "country-flag-icons/react/3x2/SA";
import KW from "country-flag-icons/react/3x2/KW";
import SG from "country-flag-icons/react/3x2/SG";
import MY from "country-flag-icons/react/3x2/MY";

const FlagsMap: Record<string, React.ComponentType<any>> = {
  US,
  CA,
  AE,
  SA,
  KW,
  SG,
  MY,
};

interface Contact {
  country: string;
  code: string;      // Short display code shown in the button
  iso: string;       // ISO 3166-1 alpha-2 for SVG flag lookup
  phone: string;
}

const CONTACTS: Contact[] = [
  {
    country: "United States",
    code: "USA",
    iso: "US",
    phone: "+1 646 421 5740",
  },
  {
    country: "Canada",
    code: "CAN",
    iso: "CA",
    phone: "+1 (979) 326-9493",
  },
  {
    country: "UAE",
    code: "UAE",
    iso: "AE",
    phone: "+971 56 256 7509",
  },
  {
    country: "Saudi Arabia",
    code: "KSA",
    iso: "SA",
    phone: "+966 56 208 1999",
  },
  {
    country: "Kuwait",
    code: "KWT",
    iso: "KW",
    phone: "+965 9724 3755",
  },
  {
    country: "Singapore",
    code: "SGP",
    iso: "SG",
    phone: "+65 86 111 900",
  },
  {
    country: "Malaysia",
    code: "MYS",
    iso: "MY",
    phone: "+60 10 660 7357",
  },
];

function FlagIcon({ iso, className }: { iso: string; className?: string }) {
  const FlagComponent = FlagsMap[iso];
  if (!FlagComponent) return null;
  return <FlagComponent className={className} />;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("menuToggle", { detail: { open: true } }));
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.dispatchEvent(new CustomEvent("menuToggle", { detail: { open: false } }));
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.dispatchEvent(new CustomEvent("menuToggle", { detail: { open: false } }));
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleBlur = (event: React.FocusEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 lg:px-4 xl:px-8 overflow-x-clip transition-all duration-500 ${scrolled ? "pt-2" : "pt-4"}`}>
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border border-black/5"
          : "bg-transparent border border-transparent"
          }`}
      >
        {/* ─── Main bar ─────────────────────────────────────────── */}
        <div className={`flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-4 xl:px-6 min-w-0 transition-all duration-500 ${scrolled ? "h-12" : "h-14 sm:h-16"}`}>

          {/* Logo — always visible, never shrinks */}
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-200 flex-shrink-0"
          >
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/icononly_transparent_nobuffer.png"
                alt="Space Lean Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center h-9">
              <span className="text-lg sm:text-[22px] font-black tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent leading-[36px] whitespace-nowrap">
                SPACE
              </span>
              <span className="text-lg sm:text-[22px] font-light tracking-tight text-secondary-text ml-1 leading-[36px] whitespace-nowrap">
                LEAN
              </span>
            </div>
          </Link>

          {/* Desktop nav pill — lg+ only, shrinks before overflowing */}
          {/* Nav pill: gap-0 at 1024–1279px, gap-1 at 1280px+ — compresses before hiding anything */}
          <div className="hidden lg:flex items-center gap-0 xl:gap-1 bg-gray-100/50 rounded-full p-0.5 xl:p-1 flex-shrink min-w-0 overflow-hidden">
            <Link
              href="/about"
              className="px-2 xl:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/space-lean-core"
              className="px-2 xl:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Space Lean Core
            </Link>
            <Link
              href="/tools"
              className="px-2 xl:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Tools
            </Link>
            <Link
              href="/blogs"
              className="px-2 xl:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/compare"
              className="px-2 xl:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Compare
            </Link>
            <Link
              href="/solutions"
              className="px-2 xl:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Solutions
            </Link>
          </div>

          {/* Actions — right side, never shrinks, all elements flex-shrink-0 */}
          <div className="flex items-center gap-1.5 flex-shrink-0">

            {/* ── Contact Dropdown ─────────────────────────────── */}
            <div
              ref={containerRef}
              onBlur={handleBlur}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 lg:px-4 py-2.5 bg-gray-100/60 hover:bg-gray-100/80 rounded-full border border-gray-200/60 transition-all duration-200 cursor-pointer select-none font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50 min-h-[44px] whitespace-nowrap"
              >
                {/* SVG flag — always visible */}
                <FlagIcon
                  iso={selectedContact.iso}
                  className="w-5 h-[13px] sm:w-[22px] sm:h-[15px] rounded-[2px] flex-shrink-0 shadow-sm"
                />
                {/* Country code — always visible */}
                <span className="font-semibold text-gray-700 text-[11px] sm:text-xs">
                  {selectedContact.code}
                </span>
                {/* Phone — hidden <640px, visible 640–1023px and 1280px+ */}
                <span className="hidden sm:inline lg:hidden xl:inline text-gray-500 font-medium text-[11px] xl:text-xs">
                  {selectedContact.phone}
                </span>
                <svg
                  className={`w-3 h-3 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* ── Dropdown panel ────────────────────────────── */}
              <div
                className={`absolute right-0 top-full mt-2 w-[min(480px,94vw)] bg-white border border-gray-200/80 rounded-2xl shadow-[0_10px_40px_-10px_rgba(147,51,234,0.15),0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out origin-top-right z-50
                  max-sm:fixed max-sm:top-20 max-sm:left-4 max-sm:right-4 max-sm:w-auto max-sm:origin-top
                  before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] ${
                  isOpen
                    ? "opacity-100 translate-y-0 scale-100 visible"
                    : "opacity-0 -translate-y-2 scale-95 invisible pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 p-2.5 sm:p-3">
                  {CONTACTS.map((contact) => (
                    <a
                      key={contact.iso}
                      href={`tel:${contact.phone.replace(/[\s()+-]/g, "")}`}
                      onClick={() => {
                        setSelectedContact(contact);
                        setIsOpen(false);
                      }}
                      className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                        selectedContact.iso === contact.iso
                          ? "bg-purple-50 ring-1 ring-purple-200/60"
                          : "hover:bg-gray-50/80"
                      }`}
                    >
                      <FlagIcon
                        iso={contact.iso}
                        className="w-7 h-[18px] rounded-[3px] flex-shrink-0 shadow-sm"
                      />
                      <span className={`text-xs font-bold flex-shrink-0 transition-colors duration-200 ${
                        selectedContact.iso === contact.iso ? "text-purple-700" : "text-gray-700 group-hover:text-purple-600"
                      }`}>
                        {contact.code}
                      </span>
                      <span className={`text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                        selectedContact.iso === contact.iso ? "text-purple-600" : "text-gray-500 group-hover:text-gray-700"
                      }`}>
                        {contact.phone}
                      </span>
                      {selectedContact.iso === contact.iso && (
                        <svg className="w-3.5 h-3.5 text-purple-500 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Start Free Trial ─────────────────────────────────
                Hidden on phones (<640px) — surfaces inside mobile menu.
                Visible on 640px+. Compact padding at lg, full at xl.   */}
            <div className="hidden sm:block flex-shrink-0">
              <StartFreeTrialButton className="px-2.5 lg:px-3 xl:px-4 py-2 text-sm whitespace-nowrap" />
            </div>

            {/* ── Request a Demo ───────────────────────────────────
                Visible at lg (≥1024px). Phone is hidden in the contact
                button at lg so there is ample room for this button.
                Hides below lg — available in the hamburger menu.        */}
            <Link
              href="/request-a-demo"
              className="hidden lg:inline-flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300/80 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transition-all duration-200 whitespace-nowrap flex-shrink-0"
            >
              Request a Demo
            </Link>

            {/* ── Hamburger — visible below lg (< 1024px) ──────── */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 border border-transparent hover:border-gray-200 transition-all duration-200 w-11 h-11 flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile / Tablet drawer (< 1024px) ───────────────────── */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4 bg-gradient-to-br from-white via-purple-50 to-blue-50 border border-gray-200 shadow-2xl shadow-purple-900/20 rounded-2xl overflow-hidden transition-all duration-300 ease-out origin-top z-50 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100 visible"
            : "opacity-0 -translate-y-4 scale-95 invisible pointer-events-none"
        }`}
        style={{
          background: "#ffffff",
          backgroundImage: "linear-gradient(to bottom right, #ffffff, #faf5ff, #eff6ff)"
        }}
      >
        <div 
          className="flex flex-col p-4 bg-white/90 gap-1.5"
          style={{ background: "rgba(255, 255, 255, 0.9)" }}
        >
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center">
            About
          </Link>
          <Link href="/space-lean-core" onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center">
            Space Lean Core
          </Link>
          <Link href="/tools" onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center">
            Tools
          </Link>
          <Link href="/blogs" onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center">
            Blog
          </Link>
          <Link href="/compare" onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center">
            Compare
          </Link>
          <Link href="/solutions" onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center">
            Solutions
          </Link>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200/60">
            {/* Start Free — inside menu for phones only (the navbar already shows it at sm+) */}
            <div className="sm:hidden w-full">
              <StartFreeTrialButton
                label="Start free trial"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center px-5 py-3 text-base font-medium rounded-xl transition-all duration-200 min-h-[48px] flex items-center"
              />
            </div>

            {/* Request a Demo — always inside the hamburger menu */}
            <Link
              href="/request-a-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 text-base font-medium rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200 min-h-[48px]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
