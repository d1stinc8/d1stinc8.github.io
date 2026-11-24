"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  if (!mounted) return <div className="h-8 w-20" />;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className="group flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-[var(--bg-sheet-2)] text-[var(--text-primary)] hover:bg-[var(--bg-sheet-3)] transition-colors duration-300 cursor-pointer"
    >
      <span
        className={`h-2 w-2 rounded-full transition-all duration-300 ${
          dark
            ? "bg-[#eae8e1] shadow-[0_0_8px_rgba(234,232,225,0.6)]"
            : "bg-[#1a1917]"
        }`}
      />
      <span className="font-mono text-[11px] tracking-[0.18em] uppercase">
        {dark ? "LIGHT" : "DARK"}
      </span>
    </button>
  );
}
