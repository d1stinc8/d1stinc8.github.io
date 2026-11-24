"use client";

import { useEffect, useState } from "react";
import { SectionId } from "@/data/portfolio";
import {
  AboutContent,
  ContactContent,
  FILE_TABS,
  PassionsContent,
  ResearchContent,
  WorkContent,
} from "./FileContent";

interface MobileFileDrawerProps {
  activeFile: SectionId | null;
  setActiveFile: (id: SectionId | null) => void;
}

export function MobileFileDrawer({
  activeFile,
  setActiveFile,
}: MobileFileDrawerProps) {
  const [showHomeHint, setShowHomeHint] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeFile) {
        setActiveFile(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeFile, setActiveFile]);

  const activeTab = FILE_TABS.find((t) => t.id === activeFile) || null;

  const handleToggle = (id: SectionId) => {
    setActiveFile(activeFile === id ? null : id);
  };

  return (
    <div className="md:hidden">
      {/* Closed state: compact bottom-right thumb rail for one-handed reach */}
      {!activeFile && (
        <nav
          aria-label="Portfolio sections"
          className="fixed bottom-0 right-0 z-30 w-12 h-[62dvh] max-h-[440px] flex flex-col justify-end"
        >
          {FILE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleToggle(tab.id)}
              aria-label={`Open ${tab.label}`}
              style={{ backgroundColor: tab.bgVar }}
              className="flex-1 w-full flex flex-col items-center justify-center gap-1.5 py-2 cursor-pointer select-none focus:outline-none active:opacity-80"
            >
              <span className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                {tab.index}
              </span>
              <span className="vertical-spine font-sans text-[10px] tracking-[0.14em] uppercase text-[var(--text-primary)] whitespace-nowrap">
                {tab.shortLabel}
              </span>
            </button>
          ))}
        </nav>
      )}

      {/* Open state: Instant full-screen sheet (zero slide animation) */}
      {activeTab && (
        <section
          key={activeTab.id}
          style={{ backgroundColor: activeTab.bgVar }}
          className="fixed inset-0 z-40 h-full w-full flex flex-col overflow-hidden"
        >
          {/* Top header bar inside full-screen mobile view */}
          <div className="px-6 pt-8 pb-4 flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)]">
              File {activeTab.index} — {activeTab.label}
            </span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowHomeHint((prev) => !prev)}
                className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                + Home Screen
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowHomeHint(false);
                  setActiveFile(null);
                }}
                className="font-mono text-[11px] tracking-widest uppercase text-[var(--text-primary)] py-1 px-1.5"
              >
                Close ×
              </button>
            </div>
          </div>

          {/* Optional Add to Home Screen instructions */}
          {showHomeHint && (
            <div className="mx-6 mb-4 py-3 px-4 bg-[var(--bg-canvas)] text-xs leading-relaxed text-[var(--text-secondary)] space-y-1">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-primary)]">
                Add to Home Screen
              </div>
              <p>
                In Safari, tap{" "}
                <strong className="font-medium text-[var(--text-primary)]">
                  Share
                </strong>{" "}
                (□↑) → scroll down and tap{" "}
                <strong className="font-medium text-[var(--text-primary)]">
                  Add to Home Screen
                </strong>
                .
              </p>
            </div>
          )}

          {/* Scrollable file body */}
          <div className="flex-1 overflow-y-auto file-scroll px-6 pt-4 pb-8">
            <div className="max-w-xl">
              {activeTab.id === "about" && <AboutContent />}
              {activeTab.id === "work" && <WorkContent />}
              {activeTab.id === "research" && <ResearchContent />}
              {activeTab.id === "passions" && <PassionsContent />}
              {activeTab.id === "contact" && <ContactContent />}
            </div>
          </div>

          {/* Bottom quick-switch strip so you can jump between any of the 5 files on mobile */}
          <nav
            aria-label="Switch section"
            className="px-4 py-3 bg-[var(--bg-canvas)]/70 flex items-center justify-between gap-1"
          >
            {FILE_TABS.map((t) => {
              const current = t.id === activeTab.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleToggle(t.id)}
                  style={{ backgroundColor: current ? t.bgVar : "transparent" }}
                  className={`flex-1 py-2 font-mono text-[10px] tracking-wider uppercase cursor-pointer ${
                    current
                      ? "text-[var(--text-primary)] font-medium"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {t.shortLabel}
                </button>
              );
            })}
          </nav>
        </section>
      )}
    </div>
  );
}
