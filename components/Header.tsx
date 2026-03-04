"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              href="/features"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-text hover:bg-white rounded-full transition-all duration-200 hover:shadow-sm"
            >
              Pricing
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
            {/* Phone Numbers */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-100/60 rounded-full border border-gray-200/60 mr-1">
              <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a
                href="tel:+19169690451"
                className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
              >
                +1 916-969-0451
              </a>
              <span className="text-gray-300 text-xs select-none">|</span>
              <a
                href="tel:+6586111900"
                className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
              >
                +65 8611 1900
              </a>
            </div>
            <Link
              href="/request-a-demo"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-300/80 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transition-all duration-200"
            >
              Request a Demo
            </Link>
            <Link
              href="https://cad.spaceaiapp.com/lean"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-sm font-medium rounded-full hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 shadow-lg shadow-gray-900/25 hover:shadow-xl hover:shadow-gray-900/30 hover:scale-[1.02] transition-all duration-200"
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
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
              >
                Pricing
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
                  <a
                    href="tel:+19169690451"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 916-969-0451
                  </a>
                  <a
                    href="tel:+6586111900"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +65 8611 1900
                  </a>
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