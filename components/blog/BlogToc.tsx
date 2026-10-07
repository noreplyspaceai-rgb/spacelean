"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown, ListOrdered } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface BlogTocProps {
  items: TocItem[];
}

export default function BlogToc({ items }: BlogTocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length < 2) return null;

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className="my-8 rounded-2xl border-2 border-sky-300/80 bg-gradient-to-br from-sky-100/90 via-[#F0F9FF] to-sky-100/70 p-5 sm:p-6 shadow-xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between focus:outline-none group text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2.5 font-bold text-sky-950 text-sm uppercase tracking-wider">
          <ListOrdered className="w-4.5 h-4.5 text-sky-600" />
          Table of Contents
          <span className="text-xs font-semibold text-sky-800 bg-sky-200/80 border border-sky-300 rounded-full px-2.5 py-0.5 ml-1 normal-case tracking-normal">
            {items.length} topics
          </span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-sky-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <nav className="mt-4 pt-4 border-t border-sky-200 space-y-1 max-h-80 overflow-y-auto pr-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToHeading(e, item.id)}
                className={`flex items-start text-xs sm:text-sm leading-relaxed py-2 px-3 rounded-lg transition-all ${
                  item.level === 3 ? "ml-4 text-slate-700" : "font-semibold text-slate-900"
                } ${
                  isActive
                    ? "bg-white text-sky-700 font-bold shadow-xs border-l-4 border-sky-500"
                    : "hover:bg-sky-200/60 hover:text-sky-950"
                }`}
              >
                <span className="line-clamp-2">{item.text}</span>
              </a>
            );
          })}
        </nav>
      )}
    </div>
  );
}
