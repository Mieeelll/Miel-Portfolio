"use client";

import { useEffect, useState } from "react";
import LogoIcon from "./LogoIcon";
import { useLoading } from "@/app/LoadingContext";

const LOGO = "Miel";
const SUFFIX = ".tsx";
const PROMPT = 'const logo = "';
const TYPE_MS = 90;
const CURSOR_BLINK_MS = 530;
const MIN_DISPLAY_MS = 1800;

export default function Loader() {
  const [visible, setVisible] = useState<boolean | null>(true);
  const [step, setStep] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const { setLoading } = useLoading();
  const maxStep = PROMPT.length + LOGO.length + 2; // +2 for .tsx and closing "

  useEffect(() => {
    const start = Date.now();

    const typeInterval = setInterval(() => {
      setStep((s) => (s < maxStep ? s + 1 : s));
    }, TYPE_MS);

    const cursorInterval = setInterval(() => {
      setCursorOn((c) => !c);
    }, CURSOR_BLINK_MS);

    const hide = () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        setLoading(false);
        setVisible(false);
        setTimeout(() => setVisible(null), 500);
      }, delay);
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
      window.removeEventListener("load", hide);
    };
  }, [maxStep]);

  if (visible === null) return null;

  const codePart = PROMPT.slice(0, Math.min(step, PROMPT.length));
  const logoPart = LOGO.slice(0, Math.min(Math.max(0, step - PROMPT.length), LOGO.length));
  const showSuffix = step > PROMPT.length + LOGO.length;
  const suffixPart = showSuffix ? SUFFIX : "";
  const closeQuote = step > PROMPT.length + LOGO.length + 1 ? '"' : "";

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-paper transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden
    >
      <div className="px-6 max-w-[90vw] overflow-x-auto">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-accent shrink-0" aria-hidden>
            <LogoIcon className="w-8 h-8 md:w-10 md:h-10" />
          </span>
          <div className="flex items-baseline flex-wrap gap-0 text-lg md:text-xl">
          <span
            className="text-muted"
            style={{ fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
          >
            {codePart}
          </span>
          <span
            className="text-3xl md:text-4xl font-medium tracking-tight text-ink"
            style={{ fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
          >
            {logoPart}
          </span>
          {showSuffix && (
            <span
              className="text-3xl md:text-4xl font-medium tracking-tight text-accent animate-loaderFadeIn"
              style={{ fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
            >
              {suffixPart}
            </span>
          )}
          <span
            className="text-muted"
            style={{ fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
          >
            {closeQuote}
          </span>
          <span
            className={`inline-block w-2 h-[0.85em] ml-0.5 bg-accent align-middle transition-opacity duration-75 ${
              cursorOn ? "opacity-100" : "opacity-0"
            }`}
            style={{ minHeight: "1em", fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
