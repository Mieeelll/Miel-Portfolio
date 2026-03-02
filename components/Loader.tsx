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
      <div className="w-full px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[980px] flex items-center justify-center gap-3 sm:gap-4">
          <span className="text-accent shrink-0" aria-hidden>
            <LogoIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </span>
          <div
            className="flex flex-wrap items-baseline justify-center gap-x-1 gap-y-1 text-xs sm:text-sm md:text-base leading-tight text-center min-w-0"
            style={{ fontFamily: "var(--font-loader-mono), ui-monospace, monospace" }}
          >
            <span className="text-muted break-words">{codePart}</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              {logoPart}
            </span>
            {showSuffix && (
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-accent animate-loaderFadeIn">
                {suffixPart}
              </span>
            )}
            <span className="text-muted">{closeQuote}</span>
            <span
              className={`inline-block w-1.5 sm:w-2 h-[0.85em] ml-0.5 bg-accent align-middle transition-opacity duration-75 ${
                cursorOn ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "1em" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
