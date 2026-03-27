import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ViewportVideo from "../../../components/ViewportVideo";
import ScrollCarousel from "../../../components/ScrollCarousel";

const projectImages = [
  "/images/gripflow/gripflow-01.jpg",
  "/images/gripflow/gripflow-02.jpg",
  "/images/gripflow/gripflow-03.jpg",
  "/images/gripflow/gripflow-04.jpg",
  "/images/gripflow/gripflow-05.jpg",
  "/images/gripflow/gripflow-07.jpg",
  "/images/gripflow/gripflow-08.jpg",
  "/images/gripflow/gripflow-09.jpg",
  "/images/gripflow/gripflow-10.jpg",
  "/images/gripflow/gripflow-13.jpg",
  "/images/gripflow/gripflow-shot-14.jpg",
  "/images/gripflow/gripflow-shot-15.jpg",
  "/images/gripflow/gripflow-poster.jpg",
];

const heroRendering = projectImages[0];
const detailImages = projectImages.slice(1);
const replaceWithVideoImage = "/images/gripflow/gripflow-10.jpg";
const posterImage = "/images/gripflow/gripflow-poster.jpg";
const processGridImages = [
  "/images/gripflow/gripflow-shot-14.jpg",
  "/images/gripflow/gripflow-shot-15.jpg",
  "/images/gripflow/process-152948.jpg",
  "/images/gripflow/process-153009.jpg",
];
const detailImagesMain = detailImages.filter(
  (src) => ![...processGridImages, posterImage].includes(src)
);

export default function GripFlowProjectPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              GripFlow: Healthy Aging Ritual
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
                A product + service design concept that turns grip-strength training into a daily,
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "36ch",
                    "--typing-steps": "36",
                    "--typing-delay": "860ms",
                  } as React.CSSProperties
                }
              >
                motivating ritual for older adults.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                GripFlow explores a healthier aging experience through a tangible daily routine.
                The project combines behavior design, product interaction, and visual storytelling
                to make rehabilitation feel more approachable and sustainable.
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
                <p className="text-[15px] text-black">Design researcher</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Timeline</p>
                <p className="text-[15px] text-black">2025 - 2026</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, Blender, Figma</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Industrial design + design research</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroRendering}
                alt="GripFlow main rendering"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            <div className="overflow-hidden bg-white/50">
              <div className="relative w-full h-[260px] md:h-[560px]">
                <iframe
                  src="https://www.youtube.com/embed/SFwljfsg19k?start=44"
                  title="GripFlow project video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-[14px] py-[10px] border-t border-black/10">
                <a
                  href="https://www.youtube.com/watch?v=SFwljfsg19k&t=44s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-black/70 hover:text-black transition-colors"
                >
                  If the embedded video is blank, open it on YouTube
                </a>
              </div>
            </div>

            {/* Initial presentation carousel */}
            <ScrollCarousel>
              <div className="flex gap-0 w-max">
                {Array.from({ length: 29 }, (_, i) => `/images/gripflow/presentation/pres-${i + 1}.jpg`).map((src) => (
                  <div key={src} className="shrink-0 w-[calc(100vw-120px)] max-w-[1600px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </ScrollCarousel>

            {detailImagesMain.map((src, i) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {src === replaceWithVideoImage ? (
                  <ViewportVideo
                    src="/video/gripflow/gripflow-22-35-18.mov"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`GripFlow project visual ${i + 2}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </>
                )}
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {processGridImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="GripFlow process visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={posterImage} alt="GripFlow project poster" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
