import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  return (
    <a
      className="back-to-top"
      href="#top"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={19} aria-hidden="true" />
    </a>
  );
}
