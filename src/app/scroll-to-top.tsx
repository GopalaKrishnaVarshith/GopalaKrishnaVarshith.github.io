"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("main-content");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={"back-to-top" + (visible ? " is-visible" : "")}
      href="#top"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={19} aria-hidden="true" />
    </a>
  );
}
