"use client";

import { useState } from "react";
import {
  ABOUT_DATA,
  CONTACT_DATA,
  PASSIONS_DATA,
  RESEARCH_ITEMS,
  SectionId,
  WORK_ITEMS,
} from "@/data/portfolio";

export interface FileTabConfig {
  id: SectionId;
  index: string;
  label: string;
  shortLabel: string;
  bgVar: string;
}

export const FILE_TABS: FileTabConfig[] = [
  { id: "about", index: "01", label: "About", shortLabel: "About", bgVar: "var(--bg-sheet-1)" },
  { id: "work", index: "02", label: "Work", shortLabel: "Work", bgVar: "var(--bg-sheet-2)" },
  { id: "research", index: "03", label: "Research", shortLabel: "Research", bgVar: "var(--bg-sheet-3)" },
  { id: "passions", index: "04", label: "What I love to do", shortLabel: "Passions", bgVar: "var(--bg-sheet-4)" },
  { id: "contact", index: "05", label: "Contact", shortLabel: "Contact", bgVar: "var(--bg-sheet-5)" },
];

export function AboutContent() {
  return (
    <div className="space-y-12">
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug font-normal text-[var(--text-primary)]">
        {ABOUT_DATA.lead}
      </h2>

      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
        {ABOUT_DATA.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="pt-8 space-y-8">
        {ABOUT_DATA.highlights.map((item) => (
          <div key={item.label} className="space-y-1.5">
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]">
              {item.label}
            </div>
            <div className="text-base sm:text-lg text-[var(--text-primary)]">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkContent() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <div className="space-y-14">
      <p className="font-serif text-2xl sm:text-3xl leading-snug text-[var(--text-primary)]">
        Selected systems, numerical simulators, and open-source engineering.
      </p>

      <div className="space-y-12">
        {WORK_ITEMS.map((item, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <article key={item.title} className="space-y-3">
              <button
                type="button"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="w-full text-left group focus:outline-none"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] group-hover:opacity-75 transition-opacity">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {item.year}
                  </span>
                </div>
                <div className="font-mono text-xs tracking-wider uppercase text-[var(--text-muted)] mt-1">
                  {item.role}
                </div>
              </button>

              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                {item.summary}
              </p>

              {isExpanded && (
                <div className="pt-2 space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                  {item.details.map((detail, dIdx) => (
                    <p key={dIdx} className="leading-relaxed">
                      {detail}
                    </p>
                  ))}
                  {item.link && (
                    <div className="pt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--text-primary)] hover:opacity-65 transition-opacity"
                      >
                        <span>View Repository</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ResearchContent() {
  return (
    <div className="space-y-14">
      <p className="font-serif text-2xl sm:text-3xl leading-snug text-[var(--text-primary)]">
        Investigations in neutral-atom quantum computing, error correction, and computational methods.
      </p>

      <div className="space-y-12">
        {RESEARCH_ITEMS.map((item) => (
          <article key={item.title} className="space-y-2.5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-xs tracking-wider uppercase text-[var(--text-muted)]">
                {item.venue}
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                {item.year}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)]">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PassionsContent() {
  return (
    <div className="space-y-14">
      <p className="font-serif text-2xl sm:text-3xl leading-snug text-[var(--text-primary)]">
        {PASSIONS_DATA.lead}
      </p>

      <div className="space-y-10">
        {PASSIONS_DATA.entries.map((entry) => (
          <div key={entry.title} className="space-y-2">
            <h3 className="font-serif text-xl text-[var(--text-primary)]">
              {entry.title}
            </h3>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              {entry.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-14">
      <p className="font-serif text-2xl sm:text-3xl leading-snug text-[var(--text-primary)]">
        {CONTACT_DATA.lead}
      </p>

      <div className="space-y-3">
        <div className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]">
          Direct Correspondence
        </div>
        <div className="flex flex-wrap items-baseline gap-6">
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] hover:opacity-70 transition-opacity"
          >
            {CONTACT_DATA.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="font-mono text-xs tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <div className="space-y-6 pt-4">
        <div className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]">
          Elsewhere
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
          {CONTACT_DATA.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-1"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                {social.label} ↗
              </div>
              <div className="text-base text-[var(--text-primary)]">
                {social.handle}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="pt-8 font-mono text-xs text-[var(--text-muted)]">
        Based in {CONTACT_DATA.location}
      </div>
    </div>
  );
}
