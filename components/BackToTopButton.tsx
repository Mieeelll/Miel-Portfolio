"use client";

export default function BackToTopButton() {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Return to top"
      className="inline-flex items-center justify-center rounded-lg border border-border bg-cream/60 w-11 h-11 text-lg text-ink hover:bg-cream hover:border-accent hover:text-accent transition-colors shrink-0"
    >
      <span aria-hidden>↑</span>
    </button>
  );
}
