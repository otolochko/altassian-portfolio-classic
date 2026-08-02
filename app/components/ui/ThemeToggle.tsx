"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ label }: { label: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button type="button" className="icon-button theme-toggle" aria-label={label} onClick={toggleTheme}>
      <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
