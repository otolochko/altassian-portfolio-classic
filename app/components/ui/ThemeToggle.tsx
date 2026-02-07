"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch
    return (
      <button
        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" style={{ color: "#fbbf24" }} />
      ) : (
        <Moon className="w-5 h-5" style={{ color: "#3f3f46" }} />
      )}
    </button>
  );
}
