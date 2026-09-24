"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme: Theme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <Sun className="theme-option-light" size={17} aria-hidden="true" />
      <Moon className="theme-option-dark" size={17} aria-hidden="true" />
      <span className="theme-option-light">Light</span>
      <span className="theme-option-dark">Dark</span>
    </button>
  );
}
