"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const panels = [
  {
    title: "Bachelor of Science in Information Technology",
    company: "Major in Mobile and Web Application",
    date: "2021 — Present · National University — Manila",
    points: [
      "Focus on mobile and web application development",
      "College of Computing and Information Technology",
      "Relevant coursework and projects in full-stack and mobile development",
    ],
  },
  {
    title: "Accountancy, Business and Management (ABM)",
    company: "Senior High School",
    date: "2019 — 2021 · APEC Schools Pateros",
    points: [
      "Completed ABM strand with focus on business and management fundamentals",
      "Foundation for problem-solving and project collaboration",
    ],
  },
];

const tabs = ["National University", "APEC Schools"];

export default function Education() {
  const [active, setActive] = useState(0);

  return (
    <section id="education" className="py-12 sm:py-16 tablet:py-20 lg:py-24 px-4 sm:px-6 tablet:px-10 lg:px-16">
      <div className="flex items-center gap-4 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-accent mb-4">
        <span>Education</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <Reveal>
        <h2 className="font-bebas text-4xl md:text-5xl leading-tight tracking-tight mb-12">
          Where I <em className="font-serif italic text-accent">learned</em>
        </h2>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 tablet:grid-cols-[1fr_2fr] gap-6 tablet:gap-12 lg:gap-16">
          <div className="flex flex-row tablet:flex-col overflow-x-auto tablet:overflow-visible gap-0 border-b border-border tablet:border-b-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 py-4 px-4 sm:px-6 text-left text-[0.75rem] sm:text-[0.8rem] font-medium tracking-[0.08em] uppercase border-b-2 tablet:border-b-0 tablet:border-l-2 transition-colors font-sans ${
                  active === i
                    ? "border-accent text-ink bg-cream tablet:pl-8"
                    : "border-border text-muted hover:text-ink tablet:hover:pl-8 hover:border-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            {panels.map((panel, i) => (
              <div
                key={i}
                className={active === i ? "block" : "hidden"}
              >
                <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide mb-1 break-words">
                  {panel.title}
                </h3>
                <div className="text-[0.75rem] sm:text-[0.8rem] tracking-[0.1em] uppercase text-accent mb-1">
                  {panel.company}
                </div>
                <div className="text-[0.72rem] sm:text-[0.78rem] text-muted mb-4 sm:mb-6">
                  {panel.date}
                </div>
                <ul className="list-none flex flex-col gap-3">
                  {panel.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-[0.9rem] text-muted leading-relaxed pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-accent before:text-xs"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
