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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentHoverVideo = hasHoverVideo ? videoSources[activeVideoIndex] : undefined;

  const handleSequenceEnd = () => {
    if (videoSources.length <= 1) return;
    setActiveVideoIndex((prev) => (prev + 1) % videoSources.length);
  };

  useEffect(() => {
    if (!isHovered || !currentHoverVideo || !videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Ignore autoplay/play promise interruptions from quick hover transitions.
      });
    }
  }, [isHovered, currentHoverVideo]);

  const card = (
    <section
      style={{ position: "relative" }}
      className="h-[335px] rounded-[15px] overflow-hidden group cursor-pointer"
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
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
          hasHoverVideo ? "opacity-100 group-hover:opacity-0" : ""
        } ${
          hoverZoom ? "group-hover:scale-[1.06]" : ""
        }`}
      />
      {currentHoverVideo && (
        <video
          key={currentHoverVideo}
          ref={videoRef}
          muted
          loop={videoSources.length === 1}
          playsInline
          preload="metadata"
          onEnded={handleSequenceEnd}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
