"use client";

const OVERVIEW = {
  education: "BS Information Technology",
  major: "Mobile & Web Application",
  status: "Open to opportunities",
  roles: [
    "Web Developer",
    "Mobile Developer",
    "Full-stack / QA",
    "And more...",
  ],
  available: true,
};

export default function OverviewCodeBlock() {
  return (
    <div className="overview-code-block w-full max-w-full min-w-0 rounded-xl border border-border bg-cream/95 overflow-hidden shadow-xl">
      {/* Window controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-paper/80">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span
          className="ml-3 text-[0.75rem] text-muted font-mono"
          style={{ fontFamily: "var(--font-loader-mono), monospace" }}
        >
          overview.tsx
        </span>
      </div>
      <div
        className="p-4 tablet:p-5 text-xs sm:text-sm tablet:text-[0.85rem] font-mono leading-relaxed overflow-x-auto"
        style={{ fontFamily: "var(--font-loader-mono), monospace" }}
      >
        <div>
          <span className="text-accent">const</span>{" "}
          <span className="text-ink font-medium">overview</span>{" "}
          <span className="text-muted">=</span>{" "}
          <span className="text-muted">{"{"}</span>
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-ink/90">education</span>
          <span className="text-muted">: </span>
          <span className="text-green-400">"{OVERVIEW.education}"</span>
          <span className="text-muted">,</span>
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-ink/90">major</span>
          <span className="text-muted">: </span>
          <span className="text-green-400">"{OVERVIEW.major}"</span>
          <span className="text-muted">,</span>
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-ink/90">status</span>
          <span className="text-muted">: </span>
          <span className="text-green-400">"{OVERVIEW.status}"</span>
          <span className="text-muted">,</span>
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-ink/90">roles</span>
          <span className="text-muted">: [</span>
        </div>
        {OVERVIEW.roles.map((role, i) => (
          <div key={role} className="pl-4 md:pl-6">
            <span className="text-green-400">"{role}"</span>
            {i < OVERVIEW.roles.length - 1 ? (
              <span className="text-muted">,</span>
            ) : null}
          </div>
        ))}
        <div className="pl-2 md:pl-4">
          <span className="text-muted">],</span>
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-ink/90">available</span>
          <span className="text-muted">: </span>
          <span className="text-purple-400">
            {OVERVIEW.available ? "true" : "false"}
          </span>
        </div>
        <div>
          <span className="text-muted">{"}"}</span>
        </div>
      </div>
    </div>
  );
}
