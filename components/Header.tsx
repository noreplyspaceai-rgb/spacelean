"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import StartFreeTrialButton from "@/components/StartFreeTrialButton";

const CONTACTS = [
  {
    country: "USA",
    flag: "🇺🇸",
    phone: "+1 646 421 5740",
    email: "usa@aibizmod.com",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    phone: "+1 (979) 326-9493",
    email: "canada@aibizmod.com",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    phone: "+971 56 256 7509",
    email: "uae@aibizmod.com",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    phone: "+966 56 208 1999",
    email: "saudi@aibizmod.com",
  },
  {
    country: "Kuwait",
    flag: "🇰🇼",
    phone: "+965 9724 3755",
    email: "kuwait@aibizmod.com",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    phone: "+65 86 111 900",
    email: "sg@aibizmod.com",
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    phone: "+60 10 660 7357",
    email: "malaysia@aibizmod.com",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 lg:px-4 min-[1200px]:px-8 pt-4">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border border-black/5"
          : "bg-transparent border border-transparent"
          }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4 lg:px-3 min-[1200px]:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-200 whitespace-nowrap flex-shrink-0"
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

          {/* Navigation Links (visible on Desktop) */}
          <div className="hidden lg:flex items-center gap-0.5 min-[1200px]:gap-1 bg-gray-100/50 rounded-full p-0.5 min-[1200px]:p-1">
            <Link
              href="/about"
              className="px-2.5 min-[1200px]:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/space-lean-core"
              className="px-2.5 min-[1200px]:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Space Lean Core
            </Link>
            <Link
              href="/blogs"
              className="px-2.5 min-[1200px]:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Blog
            </Link>
            <Link
              href="/compare"
              className="px-2.5 min-[1200px]:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Compare
            </Link>
            <Link
              href="/solutions"
              className="px-2.5 min-[1200px]:px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm whitespace-nowrap"
            >
              Solutions
            </Link>
          </div>

          {/* Actions Container */}
          <div className="flex items-center gap-1.5 min-[1200px]:gap-2 flex-shrink-0">
            {/* Contact Dropdown (always visible in navbar) */}
            <div 
              ref={containerRef}
              onBlur={handleBlur}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="relative mr-1"
            >
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 min-[1200px]:gap-2 px-2.5 min-[1200px]:px-3 py-1.5 bg-gray-100/60 hover:bg-gray-100/80 rounded-full border border-gray-200/60 transition-all duration-200 cursor-pointer select-none text-xs font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50 min-h-[44px] md:min-h-[32px] whitespace-nowrap"
              >
                <span className="text-sm leading-none">{selectedContact.flag}</span>
                <span className="font-semibold text-gray-700">{selectedContact.country}</span>
                <span className="hidden sm:inline lg:hidden min-[1200px]:inline text-gray-500 font-medium whitespace-nowrap">{selectedContact.phone}</span>
                <svg 
                  className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Redesigned Dropdown Menu */}
              <div
                className={`absolute right-0 top-full mt-2 w-[500px] md:w-[460px] bg-white border border-gray-200/80 rounded-2xl shadow-[0_10px_40px_-10px_rgba(147,51,234,0.12)] transition-all duration-300 ease-out origin-top-right z-50 max-md:fixed max-md:top-[76px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[90vw] max-md:max-h-[70vh] max-md:overflow-y-auto max-md:origin-top ${
                  isOpen 
                    ? "opacity-100 translate-y-0 scale-100 visible" 
                    : "opacity-0 -translate-y-2 scale-95 invisible pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 p-4">
                  {CONTACTS.map((contact) => (
                    <a
                      key={contact.country}
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      onClick={() => {
                        setSelectedContact(contact);
                        setIsOpen(false);
                      }}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50/70 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 cursor-pointer text-left"
                    >
                      <span className="text-base leading-none mt-0.5">{contact.flag}</span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 whitespace-nowrap">
                          {contact.phone}
                        </span>
                        <span className="text-xs text-gray-500 font-medium mt-0.5">
                          {contact.country}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Start Free Button */}
            {/* On desktop/tablet (lg+), always visible if space allows (sm+) */}
            <div className="hidden sm:block">
              <StartFreeTrialButton className="px-3 min-[1200px]:px-4 py-2 text-sm whitespace-nowrap" />
            </div>

            {/* Request a Demo Button (visible on lg+) */}
            <Link
              href="/request-a-demo"
              className="hidden lg:inline-flex items-center gap-1.5 min-[1200px]:gap-2 px-3 min-[1200px]:px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300/80 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              Request a Demo
            </Link>

            {/* Mobile menu button (visible on < lg) */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 border border-transparent hover:border-gray-200 transition-all duration-200 w-11 h-11"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-gradient-to-br from-white via-purple-50 to-blue-50 border border-gray-200 shadow-2xl shadow-purple-900/20 rounded-2xl overflow-hidden transition-all duration-300 ease-out origin-top z-50 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 -translate-y-4 scale-95 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-4 bg-white/90 gap-1.5">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center"
            >
              About
            </Link>
            <Link
              href="/space-lean-core"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center"
            >
              Space Lean Core
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center"
            >
              Blog
            </Link>
            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center"
            >
              Compare
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 min-h-[44px] flex items-center"
            >
              Solutions
            </Link>

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200/60">
              {/* Start Free Button on Mobile: visible only inside mobile menu if screen is small (< sm) */}
              <div className="sm:hidden w-full">
                <StartFreeTrialButton
                  label="Start free trial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center px-5 py-3 text-base font-medium rounded-xl transition-all duration-200 min-h-[48px] flex items-center"
                />
              </div>

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
      </nav>
    </header>
  );
}
