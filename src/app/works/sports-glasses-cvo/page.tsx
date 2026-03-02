import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ViewportVideo from "../../../components/ViewportVideo";

const heroImage = "/images/cvoglasses/page_2.png";

const marketResearchRow = [
  "/images/cvoglasses/page_2.png",
  "/images/cvoglasses/page_3.png",
  "/images/cvoglasses/page_4.png",
];

const sketchBoardImage = "/images/cvoglasses/page_6.png";
const glassesConceptGrid = [
  "/images/cvoglasses/page_9.png",
  "/images/cvoglasses/page_10.png",
  "/images/cvoglasses/page_11.png",
  "/images/cvoglasses/page_12.png",
];
const adaptiveWaterSportsImage = "/images/cvoglasses/page_16.png";
const sharkInspiredGrid = [
  "/images/cvoglasses/page_18.png",
  "/images/cvoglasses/page_19.png",
  "/images/cvoglasses/page_20.png",
  "/images/cvoglasses/page_21.png",
];
const keepMovingImage = "/images/cvoglasses/page_24.png";
const speedSportsPair = ["/images/cvoglasses/page_25.png", "/images/cvoglasses/page_26.png"];
const motionImage = "/images/cvoglasses/page_29.png";
const guideImage = "/images/cvoglasses/page_30.png";
const finalDetailGrid = [
  "/images/cvoglasses/page_32.png",
  "/images/cvoglasses/page_33.png",
  "/images/cvoglasses/page_34.png",
  "/images/cvoglasses/page_27.png",
];
const closingImage = "/images/cvoglasses/page_37.png";

const quote1 =
  "They are a group of people just like apex predators. They have so much power and passion, but they also possess a sense of restraint. Sports will become their biggest stage-a place where they express themselves and release their powers. Glasses are no longer equipment; they become a form of expression within this group.";
const quote2 =
  "In order to design better sports glasses, I get inspiration from the shark. A shark is an animal that must keep swimming all the time to breathe, and people who have limitations in their bodies also never stop. They keep going, try to stay moving, and push their limits. I think this kind of spirit matches their personality.";
const quote3 =
  "I would like to express the moment that those athletes are chasing speed and breaking limits. I absorb the form and shape of those predators who dive from a higher place to their target, and I use design to mimic this kind of moment.";

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
                    "--typing-chars": "72ch",
                    "--typing-steps": "72",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                Industrial design and visual identity direction for performance eyewear focused on
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "58ch",
                    "--typing-steps": "58",
                    "--typing-delay": "860ms",
                  } as React.CSSProperties
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

        <section className="w-full px-[40px] md:px-[80px] pb-[80px]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt="CVO project main rendering"
                className="w-full object-cover h-[420px] md:h-[640px]"
                loading="eager"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {marketResearchRow.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="CVO research visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="bg-white/50 p-[20px] md:p-[24px]">
              <p className="text-[16px] leading-[1.8] text-black">{quote1}</p>
            </div>

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={sketchBoardImage} alt="CVO sketch board" className="w-full h-auto" loading="lazy" />
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {glassesConceptGrid.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="CVO glasses concept visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={adaptiveWaterSportsImage}
                alt="CVO adaptive water sports visual"
                className="w-full h-auto"
                loading="lazy"
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

            <div className="bg-white/50 p-[20px] md:p-[24px]">
              <p className="text-[16px] leading-[1.8] text-black">{quote2}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {sharkInspiredGrid.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="CVO shark-inspired visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
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

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={keepMovingImage} alt="CVO keep moving visual" className="w-full h-auto" loading="lazy" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {speedSportsPair.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="CVO speed sports visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>

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

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={motionImage} alt="CVO motion visual" className="w-full h-auto" loading="lazy" />
            </div>

            <div className="bg-white/50 p-[20px] md:p-[24px]">
              <p className="text-[16px] leading-[1.8] text-black">{quote3}</p>
            </div>

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={guideImage} alt="CVO guide visual" className="w-full h-auto" loading="lazy" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {finalDetailGrid.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="CVO final detail visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
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

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={closingImage} alt="CVO closing visual" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
