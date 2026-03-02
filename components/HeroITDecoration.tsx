/** IT-themed decorative elements for the hero section */
export default function HeroITDecoration() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      {/* Subtle glowing dots (starry/digital feel) */}
      <div className="absolute inset-0 opacity-[0.4]">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-ink/50"
            style={{
              left: `${(i * 7 + 11) % 100}%`,
              top: `${(i * 13 + 5) % 100}%`,
            }}
          />
        ))}
      </div>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(to right, #2d2a26 1px, transparent 1px), linear-gradient(to bottom, #2d2a26 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Floating code brackets - left side */}
      <div className="absolute left-[8%] top-[25%] text-border opacity-[0.15] font-mono text-2xl md:text-3xl select-none" style={{ fontFamily: "var(--font-loader-mono), monospace" }}>
        {"</>"}
      </div>
      <div className="absolute left-[12%] bottom-[30%] text-border opacity-[0.1] font-mono text-lg md:text-xl select-none" style={{ fontFamily: "var(--font-loader-mono), monospace" }}>
        {"{ }"}
      </div>
      {/* Right side - binary / brackets */}
      <div className="absolute right-[15%] top-[35%] text-border opacity-[0.08] font-mono text-sm md:text-base select-none tracking-widest" style={{ fontFamily: "var(--font-loader-mono), monospace" }}>
        1010
      </div>
      <div className="absolute right-[20%] bottom-[25%] text-border opacity-[0.12] font-mono text-xl md:text-2xl select-none" style={{ fontFamily: "var(--font-loader-mono), monospace" }}>
        {"</>"}
      </div>
      {/* Accent corner bracket */}
      <div className="absolute right-[10%] top-[20%] text-accent opacity-[0.2] font-mono text-3xl md:text-4xl select-none" style={{ fontFamily: "var(--font-loader-mono), monospace" }}>
        {"<>"}
      </div>
      {/* Extra IT touch: curly brace */}
      <div className="absolute left-[5%] top-[45%] text-accent/20 font-mono text-xl md:text-2xl select-none" style={{ fontFamily: "var(--font-loader-mono), monospace" }}>
        {"{ }"}
      </div>
    </div>
  );
}
