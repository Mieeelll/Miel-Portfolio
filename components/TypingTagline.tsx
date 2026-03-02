"use client";

import { useEffect, useState } from "react";

const PHRASES = ["Web & Mobile Developer", "Problem Solver", "UI Enthusiast"];
const TYPE_MS = 80;
const PAUSE_MS = 2000;
const DELETE_MS = 50;

export default function TypingTagline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < phrase.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), PAUSE_MS);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % PHRASES.length);
          }
        }
      },
      isDeleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(timeout);
  }, [phraseIndex, charIndex, isDeleting]);

  const text = PHRASES[phraseIndex].slice(0, charIndex);
  return (
    <span className="inline-block min-h-[1.5em]">
      {text}
      <span className="animate-cursor-blink text-accent">|</span>
    </span>
  );
}
