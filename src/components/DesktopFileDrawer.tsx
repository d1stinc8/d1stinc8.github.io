"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionId } from "@/data/portfolio";
import {
  AboutContent,
  ContactContent,
  FILE_TABS,
  PassionsContent,
  ResearchContent,
  WorkContent,
} from "./FileContent";

interface DesktopFileDrawerProps {
  activeFile: SectionId | null;
  setActiveFile: (id: SectionId | null) => void;
}

export function DesktopFileDrawer({
  activeFile,
  setActiveFile,
}: DesktopFileDrawerProps) {
  const [drawerWidth, setDrawerWidth] = useState(740);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      // Leave clean breathing room on the left so the blurred hero remains legible as context
      setDrawerWidth(Math.min(window.innerWidth - 52 - 160, 820));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeFile) {
        setActiveFile(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeFile, setActiveFile]);

  // Reset internal scroll position whenever switching to a different file
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeFile]);

  const spineWidth = 52;
  const totalSpines = FILE_TABS.length;
  const activeTab = FILE_TABS.find((t) => t.id === activeFile) || null;

  const handleToggle = (id: SectionId) => {
    setActiveFile(activeFile === id ? null : id);
  };

  return (
    <div
      className="hidden md:block fixed inset-0 z-30 pointer-events-none"
      aria-label="Portfolio sections"
    >
      {/* STATE A: No tab open -> All 5 vertical spines sit side-by-side along the right edge */}
      {!activeTab &&
        FILE_TABS.map((tab, idx) => {
          const tabsToRight = totalSpines - 1 - idx;
          const rightOffset = tabsToRight * spineWidth;

          return (
            <motion.button
              key={tab.id}
              type="button"
              layoutId={`desktop-tab-${tab.id}`}
              onClick={() => handleToggle(tab.id)}
              aria-label={`Open ${tab.label}`}
              style={{
                backgroundColor: tab.bgVar,
                width: spineWidth,
                right: rightOffset,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 32,
              }}
              className="fixed inset-y-0 pointer-events-auto flex flex-col items-center justify-between py-12 cursor-pointer select-none group focus:outline-none"
            >
              <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                {tab.index}
              </span>

              <span className="vertical-spine font-sans text-sm tracking-[0.18em] uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors whitespace-nowrap">
                {tab.label}
              </span>

              <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                +
              </span>
            </motion.button>
          );
        })}

      {/* STATE B: A tab is open -> All 5 tabs stack vertically one below another on the right edge,
          and the active file sheet slides out cleanly next to the stack */}
      {activeTab && (
        <>
          <nav
            aria-label="Stacked section tabs"
            style={{ width: spineWidth }}
            className="fixed inset-y-0 right-0 z-40 pointer-events-auto flex flex-col"
          >
            {FILE_TABS.map((tab) => {
              const isCurrent = tab.id === activeTab.id;
              return (
                <motion.button
                  key={tab.id}
                  type="button"
                  layoutId={`desktop-tab-${tab.id}`}
                  onClick={() => handleToggle(tab.id)}
                  aria-expanded={isCurrent}
                  aria-label={`${isCurrent ? "Close" : "Open"} ${tab.label}`}
                  style={{ backgroundColor: tab.bgVar }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 32,
                  }}
                  className={`flex-1 w-full flex flex-col items-center justify-center gap-1.5 py-3 cursor-pointer select-none group focus:outline-none transition-opacity duration-200 ${
                    isCurrent
                      ? "opacity-100"
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-widest ${
                      isCurrent
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {tab.index}
                  </span>
                  <span
                    className={`vertical-spine font-sans text-[11px] tracking-[0.16em] uppercase whitespace-nowrap ${
                      isCurrent
                        ? "text-[var(--text-primary)] font-medium"
                        : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {tab.shortLabel}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-primary)]">
                    {isCurrent ? "×" : ""}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Opened File Sheet docked flush left of the 52px stacked tab rail */}
          <div
            style={{ right: spineWidth }}
            className="fixed inset-y-0 z-30 pointer-events-none overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.section
                key={activeTab.id}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{
                  backgroundColor: activeTab.bgVar,
                  width: Math.max(drawerWidth, 420),
                  willChange: "transform",
                }}
                className="h-full flex flex-col pointer-events-auto"
              >
                <div
                  ref={scrollContainerRef}
                  className="flex-1 h-full overflow-y-auto file-scroll px-12 lg:px-16 py-20"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-baseline justify-between mb-16">
                      <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-muted)]">
                        File {activeTab.index} — {activeTab.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveFile(null)}
                        className="font-mono text-xs tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        Close [ESC]
                      </button>
                    </div>

                    {activeTab.id === "about" && <AboutContent />}
                    {activeTab.id === "work" && <WorkContent />}
                    {activeTab.id === "research" && <ResearchContent />}
                    {activeTab.id === "passions" && <PassionsContent />}
                    {activeTab.id === "contact" && <ContactContent />}
                  </div>
                </div>
              </motion.section>
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
