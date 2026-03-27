import type { CSSProperties } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ViewportVideo from "../../../components/ViewportVideo";
import CvoBrandBookLoader from "../../../components/cvoglasses/CvoBrandBookLoader";
import ScrollCarousel from "../../../components/ScrollCarousel";


export default function SportsGlassesCvoPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Sports glasses design for CVO
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[860px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "82ch",
                    "--typing-steps": "82",
                    "--typing-delay": "0ms",
                  } as CSSProperties
                }
              >
                Industrial design and visual identity direction for performance eyewear focused on
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "62ch",
                    "--typing-steps": "62",
                    "--typing-delay": "860ms",
                  } as CSSProperties
                }
              >
                athletes with disabilities and high-intensity sport scenarios.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                The concept takes inspiration from apex predators and speed-driven movement,
                translating that energy into an expressive sports glasses language. The project
                combines form development, rendering, and brand-oriented visual storytelling.
              </p>
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                User group: athletes with disabilities and high-performance athletes. These people
                never give up - they push themselves beyond limits, and their determination became
                the core emotional direction for this project.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Project info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Role</p>
                <p className="text-[15px] text-black">Industrial Designer</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Timeline</p>
                <p className="text-[15px] text-black">2026</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, Blender, Figma</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Industrial design + visual identity</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full overflow-x-clip px-[40px] md:px-[80px] pb-[80px]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[24px]">
            {/* Title row matches other sections */}
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px] items-start">
              <h2 className="text-[20px] text-black capitalize">Presentation</h2>
              <div className="hidden md:block" aria-hidden />
            </div>
            {/*
              Full-bleed book: break out of max-w-[1200px] to use viewport width minus gutters.
              ml/mr calc(50% - 50vw) aligns to screen edges from within the centered column.
            */}
            <div className="w-full min-w-0">
              <div className="box-border w-screen max-w-[100vw] shrink-0 px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px] xl:px-[48px] ml-[calc(50%-50vw)]">
                <CvoBrandBookLoader />
              </div>
            </div>

            <div className="w-full h-px bg-black/10" />

            <div className="flex flex-col gap-[16px]">
                <div className="overflow-hidden bg-white/50">
                  <ViewportVideo
                    src="/video/cvo/final-video.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                  <div className="overflow-hidden bg-white/50">
                    <ViewportVideo
                      src="/video/cvo/video-pages-01.mp4"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="overflow-hidden bg-white/50">
                    <ViewportVideo
                      src="/video/cvo/0204-1.mp4"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="overflow-hidden bg-white/50">
                    <ViewportVideo
                      src="/video/cvo/video-pages-02.mp4"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="overflow-hidden bg-white/50">
                    <ViewportVideo
                      src="/video/cvo/videos-pages-03.mp4"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden bg-white/50">
                    <ViewportVideo
                      src="/video/cvo/video-pages-05.mp4"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="overflow-hidden bg-white">
                    <ViewportVideo
                      src="/video/cvo/video-pages-06.mp4"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-black/10" />

                {/* Horizontal scrollable image carousel */}
                <ScrollCarousel>
                  <div className="flex gap-4 w-max">
                    {[
                      "/images/cvo/display.jpg",
                      "/images/cvo/wearing-1.jpg",
                      "/images/cvo/wearing-2.jpg",
                      "/images/cvo/wearing-3.jpg",
                      "/images/cvo/wearing-4.jpg",
                    ].map((src) => (
                      <div key={src} className="shrink-0 w-[500px] h-[340px] overflow-hidden">
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollCarousel>

                <div className="w-full h-px bg-black/10" />

                {/* Model making carousel */}
                <ScrollCarousel>
                  <div className="flex gap-4 w-max">
                    {Array.from({ length: 12 }, (_, i) => `/images/cvo/making/making-${i + 1}.jpg`).map((src) => (
                      <div key={src} className="shrink-0 w-[500px] h-[340px] overflow-hidden">
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollCarousel>

                <div className="w-full h-px bg-black/10" />

                {/* Model images carousel */}
                <ScrollCarousel>
                  <div className="flex gap-4 w-max">
                    {Array.from({ length: 10 }, (_, i) => `/images/cvo/models/model-${i + 1}.jpg`).map((src) => (
                      <div key={src} className="shrink-0 w-[500px] h-[340px] overflow-hidden">
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollCarousel>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
