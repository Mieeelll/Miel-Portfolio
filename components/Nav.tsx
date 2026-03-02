"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LogoIcon from "./LogoIcon";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6 tablet:px-10 lg:px-16 py-4 sm:py-5 tablet:py-6 transition-colors duration-400 ${
          scrolled
            ? "bg-paper/92 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <Link
          href="#home"
          className="flex items-center gap-2 text-ink no-underline group min-h-[44px] min-w-[44px] items-center justify-start"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-accent transition-transform group-hover:scale-110">
            <LogoIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          <span
            className="font-medium text-lg sm:text-xl tablet:text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
          >
            Miel
          </span>
        </Link>

        {/* Desktop/tablet nav - visible from 834px (iPad Pro, tablet landscape) */}
        <ul className="hidden tablet:flex gap-6 lg:gap-10 list-none">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="nav-link-underline text-ink text-[0.8rem] font-medium tracking-[0.12em] uppercase no-underline py-2 min-h-[44px] flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile/tablet menu button - until 834px (iPad portrait uses this) */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="tablet:hidden flex flex-col justify-center gap-1.5 w-11 h-11 rounded-lg border border-border bg-cream/50 text-ink min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-paper/95 backdrop-blur-md tablet:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden
      >
        <ul className="flex flex-col items-center justify-center min-h-full gap-2 list-none pt-20 pb-32">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-4 px-6 text-ink text-lg font-medium tracking-wide no-underline hover:text-accent transition-colors min-h-[48px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
