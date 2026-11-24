"use client";

import { useEffect } from "react";
import { SectionId } from "@/data/portfolio";

interface EasterEggsProps {
  setActiveFile: (id: SectionId | null) => void;
}

const KEY_TO_SECTION: Record<string, SectionId> = {
  "1": "about",
  "2": "work",
  "3": "research",
  "4": "passions",
  "5": "contact",
};

export function EasterEggs({ setActiveFile }: EasterEggsProps) {
  useEffect(() => {
    console.log(
      "%c ANURAG ANGAL — DIGITAL REAL ESTATE %c\nZero borders. Zero scroll. Built for quiet depth.",
      "font-family: monospace; font-size: 12px; letter-spacing: 0.14em; padding: 6px 10px; background: #1a1917; color: #f6f5f0;",
      "font-family: monospace; font-size: 11px; color: #8c887e; padding-top: 4px;"
    );
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (!e.metaKey && !e.ctrlKey && !e.altKey && KEY_TO_SECTION[e.key]) {
        setActiveFile(KEY_TO_SECTION[e.key]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setActiveFile]);

  return null;
}
