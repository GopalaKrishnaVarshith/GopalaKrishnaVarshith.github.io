import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      className="theme-toggle"
      type="button"
      data-theme-toggle
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
