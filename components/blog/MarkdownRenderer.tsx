import React from "react";
import Link from "next/link";
import { TocItem } from "./BlogToc";

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractTocFromMarkdown(content: string): TocItem[] {
  const lines = content.split("\n");
  const items: TocItem[] = [];
  let inFaqOrResources = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.match(/^##\s+Frequently Asked Questions/i) ||
      trimmed.match(/^##\s+Related Resources/i)
    ) {
      inFaqOrResources = true;
      continue;
    }

    if (trimmed.startsWith("## ") && !inFaqOrResources) {
      const text = trimmed.replace(/^##\s+/, "").replace(/\*\*/g, "").trim();
      if (text) {
        items.push({ id: slugifyHeading(text), text, level: 2 });
      }
    } else if (trimmed.startsWith("### ") && !inFaqOrResources) {
      const text = trimmed.replace(/^###\s+/, "").replace(/\*\*/g, "").trim();
      if (text) {
        items.push({ id: slugifyHeading(text), text, level: 3 });
      }
    }
  }

  return items;
}

/**
 * Parses inline formatting like **bold**, *italic*, [link](url), and `code`
 */
function renderInlineContent(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("`") && token.endsWith("`")) {
      const codeText = token.slice(1, -1);
      nodes.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-blue-50 text-[#0B1733] border border-blue-200/80 text-xs sm:text-sm font-mono font-medium"
        >
          {codeText}
        </code>
      );
    } else if (token.startsWith("[") && token.includes("](")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkUrl = linkMatch[2];
        const isInternal = linkUrl.startsWith("/") || linkUrl.startsWith("#");
        if (isInternal) {
          nodes.push(
            <Link
              key={match.index}
              href={linkUrl}
              className="text-[#1D4ED8] hover:text-[#2563EB] underline font-semibold transition-colors"
            >
              {linkText}
            </Link>
          );
        } else {
          nodes.push(
            <a
              key={match.index}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D4ED8] hover:text-[#2563EB] underline font-semibold transition-colors"
            >
              {linkText}
            </a>
          );
        }
      } else {
        nodes.push(token);
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      const boldText = token.slice(2, -2);
      nodes.push(
        <strong key={match.index} className="font-semibold text-[#0B1733]">
          {boldText}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      const italicText = token.slice(1, -1);
      nodes.push(
        <em key={match.index} className="italic text-[#14213D]">
          {italicText}
        </em>
      );
    } else {
      nodes.push(token);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.substring(lastIndex));
  }

  return nodes;
}

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const mainContent = content
    .split(/##\s*Frequently Asked Questions/i)[0]
    .split(/##\s*Related Resources/i)[0]
    .trim();

  const lines = mainContent.split("\n");
  const blocks: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal Rule
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      blocks.push(
        <hr key={`hr-${i}`} className="my-10 border-t border-blue-100" />
      );
      i++;
      continue;
    }

    // Headings
    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.replace(/^##\s+/, "").replace(/\*\*/g, "").trim();
      const id = slugifyHeading(headingText);
      blocks.push(
        <h2
          key={`h2-${i}`}
          id={id}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1733] mt-12 mb-5 scroll-mt-28 pb-3 border-b border-blue-100 flex items-center justify-between group"
        >
          <span>{renderInlineContent(headingText)}</span>
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-[#1D4ED8] text-base font-normal transition-opacity"
            aria-label="Link to section"
          >
            #
          </a>
        </h2>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.replace(/^###\s+/, "").replace(/\*\*/g, "").trim();
      const id = slugifyHeading(headingText);
      blocks.push(
        <h3
          key={`h3-${i}`}
          id={id}
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#14213D] mt-8 mb-4 scroll-mt-28 flex items-center justify-between group"
        >
          <span>{renderInlineContent(headingText)}</span>
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-[#1D4ED8] text-sm font-normal transition-opacity"
            aria-label="Link to subsection"
          >
            #
          </a>
        </h3>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("#### ")) {
      const headingText = trimmed.replace(/^####\s+/, "").replace(/\*\*/g, "").trim();
      blocks.push(
        <h4
          key={`h4-${i}`}
          className="text-lg font-semibold text-[#14213D] mt-6 mb-3"
        >
          {renderInlineContent(headingText)}
        </h4>
      );
      i++;
      continue;
    }

    // Code Blocks
    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push(
        <div key={`code-${i}`} className="my-6 rounded-xl overflow-hidden bg-[#0B1733] border border-blue-900/60 shadow-md">
          <div className="flex items-center justify-between px-4 py-2 bg-[#14213D] border-b border-blue-900/80 text-xs text-blue-300 font-mono">
            <span>Snippet</span>
          </div>
          <pre className="p-4 text-xs sm:text-sm font-mono text-blue-100 overflow-x-auto leading-relaxed">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      continue;
    }

    // Blockquotes & Callout Boxes (#EFF6FF light blue background)
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      blocks.push(
        <blockquote
          key={`quote-${i}`}
          className="my-6 pl-5 pr-4 py-4 border-l-4 border-[#1D4ED8] bg-[#EFF6FF] text-[#14213D] font-medium rounded-r-2xl leading-relaxed text-base sm:text-lg shadow-2xs"
        >
          {quoteLines.map((line, idx) => (
            <p key={idx} className={idx > 0 ? "mt-2" : ""}>
              {renderInlineContent(line)}
            </p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Tables
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split("|")
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map((cell) => cell.trim());

        const bodyRows = tableLines.slice(2).map((rowStr) =>
          rowStr
            .split("|")
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
            .map((cell) => cell.trim())
        );

        blocks.push(
          <div key={`table-${i}`} className="my-8 overflow-x-auto rounded-xl border border-blue-200/80 shadow-2xs">
            <table className="w-full text-left text-sm font-normal border-collapse min-w-[500px]">
              <thead className="bg-[#EFF6FF] border-b border-blue-200 text-[#0B1733] font-semibold">
                <tr>
                  {headerRow.map((cell, hIdx) => (
                    <th key={hIdx} className="px-4 py-3.5 font-bold">
                      {renderInlineContent(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 bg-white">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-blue-50/30"}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-[#14213D]">
                        {renderInlineContent(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Unordered / Check Lists (- or *)
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const listItems: { text: string; isChecked?: boolean }[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        let itemText = lines[i].trim().replace(/^[-*]\s+/, "");
        let isChecked: boolean | undefined = undefined;

        if (itemText.startsWith("[ ] ")) {
          isChecked = false;
          itemText = itemText.replace(/^\[ \]\s+/, "");
        } else if (itemText.startsWith("[x] ") || itemText.startsWith("[X] ")) {
          isChecked = true;
          itemText = itemText.replace(/^\[[xX]\]\s+/, "");
        }

        listItems.push({ text: itemText, isChecked });
        i++;
      }

      blocks.push(
        <ul key={`ul-${i}`} className="my-6 space-y-2.5 pl-1">
          {listItems.map((item, lIdx) => (
            <li key={lIdx} className="flex items-start gap-3 text-slate-700 text-base sm:text-[1.0625rem] leading-relaxed">
              {item.isChecked !== undefined ? (
                <span className={`inline-flex items-center justify-center w-4.5 h-4.5 mt-0.5 rounded border text-xs font-bold flex-shrink-0 ${
                  item.isChecked
                    ? "bg-[#1D4ED8] text-white border-[#1D4ED8]"
                    : "border-blue-300 bg-white"
                }`}>
                  {item.isChecked ? "✓" : ""}
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2.5 flex-shrink-0" />
              )}
              <span className="flex-1">{renderInlineContent(item.text)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered Lists (1. 2.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^\d+\.\s+/, "");
        listItems.push(itemText);
        i++;
      }

      blocks.push(
        <ol key={`ol-${i}`} className="my-6 space-y-3 pl-1">
          {listItems.map((itemText, lIdx) => (
            <li key={lIdx} className="flex items-start gap-3 text-slate-700 text-base sm:text-[1.0625rem] leading-relaxed">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-blue-200 font-bold text-xs mt-0.5 flex-shrink-0">
                {lIdx + 1}
              </span>
              <span className="flex-1">{renderInlineContent(itemText)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Standard Paragraph
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("##") &&
      !lines[i].trim().startsWith("###") &&
      !lines[i].trim().startsWith("####") &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("> ") &&
      !lines[i].trim().startsWith("- ") &&
      !lines[i].trim().startsWith("* ") &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !(lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) &&
      lines[i].trim() !== "---"
    ) {
      paragraphLines.push(lines[i].trim());
      i++;
    }

    if (paragraphLines.length > 0) {
      const paragraphText = paragraphLines.join(" ");
      blocks.push(
        <p
          key={`p-${i}`}
          className="text-slate-700 leading-relaxed text-base sm:text-[1.0625rem] mb-6 font-normal tracking-normal"
        >
          {renderInlineContent(paragraphText)}
        </p>
      );
    }
  }

  return <div className="blog-content-body">{blocks}</div>;
}
