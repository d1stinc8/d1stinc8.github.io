"use client";

import { useState } from "react";
import { DesktopFileDrawer } from "@/components/DesktopFileDrawer";
import { EasterEggs } from "@/components/EasterEggs";
import { MobileFileDrawer } from "@/components/MobileFileDrawer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HERO_DATA, SectionId } from "@/data/portfolio";

export default function Home() {
  const [activeFile, setActiveFile] = useState<SectionId | null>(null);
  const [showCoords, setShowCoords] = useState(false);

  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden flex flex-col justify-between pl-6 sm:pl-14 md:pl-24 pr-16 md:pr-[290px] py-7 sm:py-12 md:py-16">
      <EasterEggs setActiveFile={setActiveFile} />

      {/* Clicking the blurred desktop hero space when a file is open closes the file */}
      {activeFile && (
        <div
          onClick={() => setActiveFile(null)}
          aria-hidden="true"
          className="hidden md:block fixed inset-0 z-20 cursor-pointer"
        />
      )}

      {/* Top Bar: Full Name & LIGHT / DARK Toggle */}
      <header
        className={`relative z-10 flex items-center justify-between gap-4 transition-all duration-500 ${
          activeFile ? "md:blur-sm md:opacity-45" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setActiveFile(null)}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-primary)] hover:opacity-70 transition-opacity cursor-pointer"
        >
          {HERO_DATA.name}
        </button>

        <ThemeToggle />
      </header>

      {/* Center Hero Typography */}
      <section
        className={`relative z-10 max-w-2xl space-y-5 md:space-y-7 my-auto transition-all duration-400 ease-out ${
          activeFile
            ? "md:blur-[5px] md:opacity-40 md:scale-[0.99] md:pointer-events-none"
            : "blur-0 opacity-100 scale-100"
        }`}
      >
        <div className="space-y-2">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[var(--text-muted)]">
            {HERO_DATA.tagline}
          </p>
          <p className="font-mono text-xs sm:text-sm tracking-[0.12em] uppercase text-[var(--text-primary)]">
            {HERO_DATA.affiliation}
          </p>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight font-normal text-[var(--text-primary)]">
          {HERO_DATA.name}.
        </h1>

        <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-light text-[var(--text-secondary)] max-w-xl">
          {HERO_DATA.statement}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-3">
          <button
            type="button"
            onClick={() => setActiveFile("work")}
            className="font-mono text-xs tracking-widest uppercase text-[var(--text-primary)] hover:opacity-60 transition-opacity cursor-pointer"
          >
            Explore Work →
          </button>
          <button
            type="button"
            onClick={() => setActiveFile("about")}
            className="font-mono text-xs tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            Read Profile
          </button>
        </div>
      </section>

      {/* Bottom Metadata — Click location to reveal Pune coordinates */}
      <footer
        className={`relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] sm:text-xs tracking-wider text-[var(--text-secondary)] pr-4 transition-all duration-500 ${
          activeFile ? "md:blur-sm md:opacity-45" : ""
        }`}
      >
        <span>{HERO_DATA.status}</span>
        <button
          type="button"
          onClick={() => setShowCoords((prev) => !prev)}
          className="hidden sm:inline text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          {showCoords ? "18.5204° N, 73.8567° E · IST (UTC+5:30)" : HERO_DATA.location}
        </button>
      </footer>

      <MobileFileDrawer activeFile={activeFile} setActiveFile={setActiveFile} />
      <DesktopFileDrawer activeFile={activeFile} setActiveFile={setActiveFile} />
    </main>
  );
}
