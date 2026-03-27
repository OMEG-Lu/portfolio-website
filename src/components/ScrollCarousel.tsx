"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";

export default function ScrollCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    check();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [check]);

  const scroll = (dir: -1 | 1) => {
    ref.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left shadow + arrow */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[40px] z-10 flex items-center justify-center cursor-pointer transition-opacity duration-300"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.45), transparent)",
          opacity: canScrollLeft ? 1 : 0,
          pointerEvents: canScrollLeft ? "auto" : "none",
        }}
        onClick={() => scroll(-1)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Scrollable area */}
      <div ref={ref} className="overflow-x-auto scrollbar-hide">
        {children}
      </div>

      {/* Right shadow + arrow */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[40px] z-10 flex items-center justify-center cursor-pointer transition-opacity duration-300"
        style={{
          background: "linear-gradient(to left, rgba(0,0,0,0.45), transparent)",
          opacity: canScrollRight ? 1 : 0,
          pointerEvents: canScrollRight ? "auto" : "none",
        }}
        onClick={() => scroll(1)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
