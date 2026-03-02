"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

interface ViewportVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  /** Fraction of the video that must be visible to start playing (0–1). Default 0.25 */
  visibleThreshold?: number;
}

export default function ViewportVideo({
  src,
  visibleThreshold = 0.25,
  className,
  ...videoProps
}: ViewportVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== container) continue;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay may be blocked (e.g. unmuted); ignore
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: visibleThreshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [visibleThreshold]);

  return (
    <div ref={containerRef} className="w-full">
      <video
        ref={videoRef}
        src={src}
        className={className}
        playsInline
        {...videoProps}
      />
    </div>
  );
}
