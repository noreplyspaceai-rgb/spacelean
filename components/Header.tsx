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
    email: "usa@pmspace.ai",
    address: "2500 MARCONI AVE, STE 101,\nSACRAMENTO, CA 95821, USA",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=2500+Marconi+Ave+STE+101+Sacramento+CA+95821+USA",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    phone: "+971 56 256 7509",
    email: "uae@pmspace.ai",
    address: "Middle East Regional Office,\nDubai, UAE",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Middle+East+Regional+Office+Dubai+UAE",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    phone: "+65 86 111 900",
    email: "sg@pmspace.ai",
    address: "7 Soon Lee St,\n#04-39 ISPACE BUILDING,\nSingapore 627608",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=7+Soon+Lee+St+%2304-39+ISPACE+BUILDING+Singapore+627608",
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-full ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border border-black/5"
          : "bg-transparent border border-transparent"
          }`}
      >
        <div className="flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:scale-105 transition-transform duration-200"
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
              <span className="text-[22px] font-black tracking-tight bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent leading-[36px]">
                SPACE
              </span>
              <span className="text-[22px] font-light tracking-tight text-secondary-text ml-1 leading-[36px]">
                LEAN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 rounded-full p-1">
            <Link
              href="/about"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              About
            </Link>
            <Link
              href="/space-lean-core"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Space Lean Core
            </Link>
            <Link
              href="/blogs"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Blog
            </Link>
            <Link
              href="/compare"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Compare
            </Link>
            <Link
              href="/solutions"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Solutions
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Contact Dropdown */}
            <div 
              ref={containerRef}
              onBlur={handleBlur}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="relative hidden lg:block mr-1"
            >
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/60 hover:bg-gray-100/80 rounded-full border border-gray-200/60 transition-all duration-200 cursor-pointer select-none text-xs font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span className="text-sm leading-none">{selectedContact.flag}</span>
                <span className="font-semibold text-gray-700">{selectedContact.country}</span>
                <span className="text-gray-500 font-medium whitespace-nowrap">{selectedContact.phone}</span>
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

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 top-full mt-2 w-[350px] bg-white border border-gray-200/80 rounded-2xl shadow-[0_10px_40px_-10px_rgba(147,51,234,0.12)] transition-all duration-300 ease-out origin-top-right z-50 ${
                  isOpen 
                    ? "opacity-100 translate-y-0 scale-100 visible" 
                    : "opacity-0 -translate-y-2 scale-95 invisible pointer-events-none"
                }`}
              >
                <div className="flex flex-col">
                  {CONTACTS.map((contact) => (
                    <div
                      key={contact.country}
                      tabIndex={0}
                      role="button"
                      onClick={() => {
                        setSelectedContact(contact);
                        setIsOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedContact(contact);
                          setIsOpen(false);
                        }
                      }}
                      className="p-3.5 outline-none focus-visible:bg-purple-50/30 focus-visible:ring-2 focus-visible:ring-purple-500/20 cursor-pointer hover:bg-gray-50/70 transition-all duration-200 flex flex-col gap-2 w-full text-left first:rounded-t-2xl last:rounded-b-2xl border-b border-gray-100 last:border-b-0"
                    >
                      {/* Row 1: Flag, Phone Number, Call Icon */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <span className="text-base leading-none">{contact.flag}</span>
                          <a 
                            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedContact(contact);
                              setTimeout(() => {
                                setIsOpen(false);
                              }, 150);
                            }}
                            className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors duration-150 cursor-pointer"
                            aria-label={`Call ${contact.country} office phone at ${contact.phone}`}
                          >
                            {contact.phone}
                          </a>
                        </div>
                        <a
                          href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedContact(contact);
                            setTimeout(() => {
                              setIsOpen(false);
                            }, 150);
                          }}
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-600 flex items-center justify-center transition-all duration-200 cursor-pointer"
                          aria-label={`Call ${contact.country} office`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.155-.44.01-1.049.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </a>
                      </div>

                      {/* Row 2: Email Only */}
                      <div className="text-xs text-gray-500">
                        <a 
                          href={`mailto:${contact.email}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedContact(contact);
                            setTimeout(() => {
                              setIsOpen(false);
                            }, 150);
                          }}
                          className="hover:text-purple-600 transition-colors duration-150 font-medium cursor-pointer"
                          aria-label={`Send email to ${contact.email}`}
                        >
                          {contact.email}
                        </a>
                      </div>

                      {/* Row 3: Address Only */}
                      <a
                        href={contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedContact(contact);
                          setTimeout(() => {
                            setIsOpen(false);
                          }, 150);
                        }}
                        className="block text-[11px] text-gray-400 hover:text-gray-600 transition-colors duration-150 font-normal leading-normal w-full cursor-pointer"
                        aria-label={`View ${contact.country} office address on Google Maps`}
                      >
                        {contact.address.replace(/\n/g, " ")}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <StartFreeTrialButton className="px-4 py-2 text-sm" />
            <Link
              href="/request-a-demo"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300/80 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transition-all duration-200"
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 border border-transparent hover:border-gray-200 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-gradient-to-br from-white via-purple-50 to-blue-50 border border-gray-200 shadow-2xl shadow-purple-900/20 rounded-2xl overflow-hidden">
            <div className="flex flex-col p-4 bg-white/90">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                About
              </Link>
              <Link
                href="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                href="/compare"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                Compare
              </Link>
              <Link
                href="/space-lean-core"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                Space Lean Core
              </Link>
              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                Solutions
              </Link>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200/60">
                {/* Phone Numbers (Mobile) */}
                <div className="flex flex-col gap-1 px-1">
                  {CONTACTS.map((contact) => (
                    <a
                      key={contact.country}
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                    >
                      <span className="text-base leading-none">{contact.flag}</span>
                      <span className="flex-1 text-left">
                        <span className="font-semibold text-gray-700 mr-1.5">{contact.country}</span>
                        <span className="text-gray-500">{contact.phone}</span>
                      </span>
                      <svg className="w-4 h-4 text-purple-600 flex-shrink-0 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.155-.44.01-1.049.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </a>
                  ))}
                </div>
                <Link
                  href="/request-a-demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 text-base font-medium rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  Request a Demo
                </Link>
                <Link
                  href="https://cad.spaceaiapp.com/lean"
                  onClick={() => setMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white text-base font-medium rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 transition-all duration-200"
                >
                  Try for free
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
