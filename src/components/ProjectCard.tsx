"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  href?: string;
  hoverVideo?: string;
  hoverVideos?: string[];
  hoverZoom?: boolean;
  cardClassName?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  index,
  href,
  hoverVideo,
  hoverVideos,
  hoverZoom,
  cardClassName,
}: ProjectCardProps) {
  const videoSources = useMemo(() => {
    if (hoverVideos && hoverVideos.length > 0) {
      return hoverVideos;
    }
    if (hoverVideo) {
      return [hoverVideo];
    }
    return [];
  }, [hoverVideo, hoverVideos]);

  const hasHoverVideo = videoSources.length > 0;
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentHoverVideo = hasHoverVideo ? videoSources[activeVideoIndex] : undefined;
  const isActive = hasHoverVideo && (isHovered || (isTouchDevice && isInView));
  const shouldShowVideo = isActive && isVideoReady;

  const handleSequenceEnd = () => {
    if (videoSources.length <= 1) return;
    setActiveVideoIndex((prev) => (prev + 1) % videoSources.length);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchMode = () => setIsTouchDevice(mediaQuery.matches);

    updateTouchMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateTouchMode);
      return () => mediaQuery.removeEventListener("change", updateTouchMode);
    }

    mediaQuery.addListener(updateTouchMode);
    return () => mediaQuery.removeListener(updateTouchMode);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || !hasHoverVideo || !isTouchDevice) {
      setIsInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: "-8% 0px -8% 0px",
      }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [hasHoverVideo, isTouchDevice]);

  useEffect(() => {
    setIsVideoReady(false);
  }, [currentHoverVideo]);

  useEffect(() => {
    if (!currentHoverVideo || !videoRef.current) return;
    const video = videoRef.current;

    if (!isActive) {
      video.pause();
      video.currentTime = 0;
      if (videoSources.length > 1) {
        setActiveVideoIndex(0);
      }
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Ignore autoplay/play promise interruptions from quick hover/touch transitions.
      });
    }
  }, [isActive, currentHoverVideo, videoSources.length]);

  const card = (
    <section
      ref={cardRef}
      style={{ position: "relative" }}
      className={`h-[335px] rounded-[15px] overflow-hidden group cursor-pointer ${cardClassName ?? ""}`}
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoSources.length > 1) setActiveVideoIndex(0);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveVideoIndex(0);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        draggable={false}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          hasHoverVideo && shouldShowVideo ? "opacity-0" : "opacity-100"
        } ${
          hoverZoom ? (isHovered ? "scale-[1.06]" : "scale-100") : ""
        }`}
      />
      {currentHoverVideo && (
        <video
          key={currentHoverVideo}
          ref={videoRef}
          draggable={false}
          muted
          loop={videoSources.length === 1}
          playsInline
          preload="none"
          onEnded={handleSequenceEnd}
          onLoadedData={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            shouldShowVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={currentHoverVideo} type="video/mp4" />
        </video>
      )}

      {/* Frosted glass overlay — fixed 88px for all cards */}
      <div className="absolute bottom-0 left-0 right-0 h-[88px] backdrop-blur-[4px] bg-white/35 rounded-b-[15px] flex flex-col justify-center px-[16px] overflow-hidden">
        <h2 className="text-[20px] leading-[1.2] text-black capitalize line-clamp-1">
          {title}
        </h2>
        <p className="text-[12px] leading-[1.3] text-black capitalize mt-[4px] line-clamp-2">
          {description}
        </p>
      </div>
    </section>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}
