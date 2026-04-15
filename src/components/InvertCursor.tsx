"use client";

import { useEffect, useRef } from "react";

export default function InvertCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    let animationFrameId = 0;

    const setCursorVisible = (isVisible: boolean) => {
      cursor.classList.toggle("is-visible", isVisible);

      if (!isVisible) {
        cursor.classList.remove("is-hover");
      }
    };

    const render = () => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      setCursorVisible(true);

      const target = event.target as Element | null;
      const hoverable = target?.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      cursor.classList.toggle("is-hover", Boolean(hoverable));
    };

    const hideCursor = () => {
      setCursorVisible(false);
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        hideCursor();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        hideCursor();
      }
    };

    animationFrameId = requestAnimationFrame(render);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <div id="invert-cursor" ref={cursorRef} aria-hidden="true" />;
}
