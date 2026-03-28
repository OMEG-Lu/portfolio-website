"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";

export default function ScrollCarousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const userControlRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const loopWidthRef = useRef(0);
  const initializedRef = useRef(false);

  const syncLayout = useCallback(() => {
    const el = ref.current;
    const setEl = setRef.current;
    if (!el || !setEl) return;

    const loopWidth = setEl.offsetWidth;
    loopWidthRef.current = loopWidth;
    setHasOverflow(loopWidth > el.clientWidth + 2);

    if (!initializedRef.current && loopWidth > 0) {
      el.scrollLeft = loopWidth;
      initializedRef.current = true;
      return;
    }

    if (loopWidth <= 0) return;

    if (el.scrollLeft < loopWidth * 0.5) {
      el.scrollLeft += loopWidth;
    } else if (el.scrollLeft >= loopWidth * 1.5) {
      el.scrollLeft -= loopWidth;
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    const setEl = setRef.current;
    if (!el || !setEl) return;

    const sync = () => syncLayout();

    sync();

    const resizeObserver = new ResizeObserver(sync);
    resizeObserver.observe(el);
    resizeObserver.observe(setEl);

    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [syncLayout]);

  // Auto-scroll logic
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const autoScroll = () => {
      if (userControlRef.current || !hasOverflow) return;
      el.scrollLeft += 1;

      const loopWidth = loopWidthRef.current;
      if (loopWidth > 0 && el.scrollLeft >= loopWidth * 2) {
        el.scrollLeft -= loopWidth;
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, [hasOverflow]);

  // Pause auto-scroll on user interaction, resume after 3s
  const pauseAutoScroll = useCallback(() => {
    userControlRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      userControlRef.current = false;
    }, 3000);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = () => pauseAutoScroll();
    const onPointerDown = () => pauseAutoScroll();
    const onTouchStart = () => pauseAutoScroll();
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("touchstart", onTouchStart);
    };
  }, [pauseAutoScroll]);

  const scroll = (dir: -1 | 1) => {
    if (!hasOverflow) return;
    pauseAutoScroll();
    const el = ref.current;
    if (!el) return;

    const loopWidth = loopWidthRef.current;
    el.scrollBy({ left: dir * 400, behavior: "smooth" });

    window.setTimeout(() => {
      if (loopWidth <= 0) return;
      if (el.scrollLeft < loopWidth * 0.5) {
        el.scrollLeft += loopWidth;
      } else if (el.scrollLeft >= loopWidth * 1.5) {
        el.scrollLeft -= loopWidth;
      }
    }, 350);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Scroll carousel left"
        className="absolute left-[12px] top-1/2 z-10 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-[10px] border border-white/24 bg-white/8 text-black/58 shadow-[0_10px_24px_rgba(255,255,255,0.08),0_8px_18px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-8px_16px_rgba(255,255,255,0.04)] backdrop-blur-[16px] backdrop-saturate-170 transition-all duration-300 hover:scale-[1.06] hover:bg-white/12 active:scale-[0.96]"
        style={{
          opacity: hasOverflow ? 1 : 0,
          pointerEvents: hasOverflow ? "auto" : "none",
        }}
        onClick={() => scroll(-1)}
      >
        <span className="pointer-events-none absolute inset-[1px] rounded-[9px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.1)_38%,rgba(255,255,255,0.03)_100%)]" />
        <span className="pointer-events-none absolute left-[10%] top-[10%] h-[28%] w-[58%] rounded-full bg-white/42 blur-[7px]" />
        <span className="pointer-events-none absolute bottom-[12%] right-[14%] h-[24%] w-[34%] rounded-full bg-white/10 blur-[10px]" />
        <svg className="relative z-10" width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 4.5L7.5 10L12.5 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Scrollable area */}
      <div ref={ref} className="overflow-x-auto scrollbar-hide">
        <div className="flex w-max">
          <div aria-hidden="true">{children}</div>
          <div ref={setRef}>{children}</div>
          <div aria-hidden="true">{children}</div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll carousel right"
        className="absolute right-[12px] top-1/2 z-10 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-[10px] border border-white/24 bg-white/8 text-black/58 shadow-[0_10px_24px_rgba(255,255,255,0.08),0_8px_18px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-8px_16px_rgba(255,255,255,0.04)] backdrop-blur-[16px] backdrop-saturate-170 transition-all duration-300 hover:scale-[1.06] hover:bg-white/12 active:scale-[0.96]"
        style={{
          opacity: hasOverflow ? 1 : 0,
          pointerEvents: hasOverflow ? "auto" : "none",
        }}
        onClick={() => scroll(1)}
      >
        <span className="pointer-events-none absolute inset-[1px] rounded-[9px] bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.1)_38%,rgba(255,255,255,0.03)_100%)]" />
        <span className="pointer-events-none absolute right-[10%] top-[10%] h-[28%] w-[58%] rounded-full bg-white/42 blur-[7px]" />
        <span className="pointer-events-none absolute bottom-[12%] left-[14%] h-[24%] w-[34%] rounded-full bg-white/10 blur-[10px]" />
        <svg className="relative z-10" width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 4.5L12.5 10L7.5 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
