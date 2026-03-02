"use client";

/** Vertical social links – no Notion icon */
const LINKS = [
  { href: "https://github.com/Mieeelll", label: "GitHub", icon: "gh" },
  { href: "https://linkedin.com/in/amiel-metiam", label: "LinkedIn", icon: "in" },
  // Add more if you have: Instagram, TikTok, X, Discord, YouTube, Spotify – no Notion
];

export default function SocialSidebar() {
  return (
    <aside
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-4 tablet:gap-5 pl-3 tablet:pl-6 py-4"
      aria-label="Social links"
    >
      {LINKS.map(({ href, label, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink/70 hover:text-accent transition-colors text-sm font-medium tracking-wide flex items-center gap-2 group"
          title={label}
        >
          <span className="w-6 text-center text-[0.65rem] uppercase font-mono opacity-80 group-hover:opacity-100">
            {icon}
          </span>
        </a>
      ))}
    </aside>
  );
}
