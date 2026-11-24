"use client";

import { useEffect } from "react";

const FRAMES = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1a1917"/><circle cx="16" cy="16" r="5" fill="#f6f5f0"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1a1917"/><rect x="14" y="7" width="4" height="18" fill="#f6f5f0"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#1a1917"/><path d="M9 9h14v4H13v10H9V9z" fill="#f6f5f0"/></svg>`,
];

export function AnimatedFavicon() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";

    let frame = 0;
    const updateIcon = () => {
      link!.href = `data:image/svg+xml,${encodeURIComponent(FRAMES[frame])}`;
      frame = (frame + 1) % FRAMES.length;
    };

    updateIcon();
    const timer = window.setInterval(updateIcon, 900);
    return () => window.clearInterval(timer);
  }, []);

  return null;
}
