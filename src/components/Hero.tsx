"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const designerTypeStyle = {
  "--typing-chars": "8ch",
  "--typing-steps": "8",
  "--typing-delay": "120ms",
} as CSSProperties;

const builderTypeStyle = {
  "--typing-chars": "7ch",
  "--typing-steps": "7",
  "--typing-delay": "980ms",
} as CSSProperties;

const creatorTypeStyle = {
  "--typing-chars": "7ch",
  "--typing-steps": "7",
  "--typing-delay": "1780ms",
} as CSSProperties;

const storytellerTypeStyle = {
  "--typing-chars": "12ch",
  "--typing-steps": "12",
  "--typing-delay": "2580ms",
} as CSSProperties;

const thinkerTypeStyle = {
  "--typing-chars": "8ch",
  "--typing-steps": "8",
  "--typing-delay": "3620ms",
} as CSSProperties;

const researcherTypeStyle = {
  "--typing-chars": "11ch",
  "--typing-steps": "11",
  "--typing-delay": "4340ms",
} as CSSProperties;

export default function Hero() {
  return (
    <section className="relative w-full h-[849px] flex flex-col justify-center pl-[40px] pt-[54px] pb-[380px] overflow-hidden bg-black">
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          
          muted
          playsInline
          className="absolute w-[120%] h-full object-cover"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mt-[80px] text-[64px] leading-[1] text-black whitespace-nowrap">
        <p className="text-black">
          <Link href="/about" className="inline-block text-black hover:text-[#ff2525] transition-colors">
            Lu.
          </Link>
        </p>
        <p className="text-[#ff2525] mb-[64px]">&gt;&gt;&gt;</p>
        <p className="hero-type-line text-black" style={designerTypeStyle}>
          designer
        </p>
        <p className="hero-type-line text-black" style={builderTypeStyle}>
          builder
        </p>
        <p className="hero-type-line text-black" style={creatorTypeStyle}>
          creator
        </p>
        <p className="hero-type-line text-black" style={storytellerTypeStyle}>
          Storyteller
        </p>
        <p className="hero-type-line text-black" style={thinkerTypeStyle}>
          Thinker
        </p>
        <p className="hero-type-line text-black" style={researcherTypeStyle}>
          Researcher
        </p>
      </div>
    </section>
  );
}
