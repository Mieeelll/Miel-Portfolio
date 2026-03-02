"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      const isHover =
        (e.target as Element)?.closest?.(
          "a, button, [data-project-item], .skill-pill, input, textarea"
        ) != null;
      setHovered(isHover);
    };

    const animateRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top = `${ry.current}px`;
      }
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hovered ? "hovered" : ""}`}
        aria-hidden
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovered ? "hovered" : ""}`}
        aria-hidden
      />
    </>
  );
}
