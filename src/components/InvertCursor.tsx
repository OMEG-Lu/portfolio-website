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

    const render = () => {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      const target = event.target as Element | null;
      const hoverable = target?.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      cursor.classList.toggle("is-hover", Boolean(hoverable));
    };

    animationFrameId = requestAnimationFrame(render);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="invert-cursor" ref={cursorRef} aria-hidden="true" />;
}
