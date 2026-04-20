import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollCarousel from "../../../components/ScrollCarousel";

const mainRendering = "/images/2x4-package-design/renderings/main-rendering.png";

const renderingGridImages = [
  "/images/2x4-package-design/renderings/rendering-01.jpg",
  "/images/2x4-package-design/renderings/rendering-02.jpg",
  "/images/2x4-package-design/renderings/rendering-03.jpg",
  "/images/2x4-package-design/renderings/rendering-04.jpg",
  "/images/2x4-package-design/renderings/rendering-05.jpg",
  "/images/2x4-package-design/renderings/rendering-06.jpg",
  "/images/2x4-package-design/renderings/rendering-07.jpg",
  "/images/2x4-package-design/renderings/rendering-08.jpg",
  "/images/2x4-package-design/renderings/rendering-10.jpg",
  "/images/2x4-package-design/renderings/rendering-11.png",
  "/images/2x4-package-design/renderings/rendering-12.jpg",
  "/images/2x4-package-design/renderings/rendering-13.png",
];

const processImages = [
  "/images/2x4-package-design/process/process-01.jpg",
  "/images/2x4-package-design/process/process-02.jpg",
  "/images/2x4-package-design/process/process-03.jpg",
  "/images/2x4-package-design/process/process-04.jpg",
  "/images/2x4-package-design/process/process-05.jpg",
  "/images/2x4-package-design/process/process-06.jpg",
  "/images/2x4-package-design/process/process-07.jpg",
  "/images/2x4-package-design/process/process-08.jpg",
  "/images/2x4-package-design/process/process-09.jpg",
  "/images/2x4-package-design/process/process-10.jpg",
  "/images/2x4-package-design/process/process-11.jpg",
  "/images/2x4-package-design/process/process-12.jpg",
  "/images/2x4-package-design/process/process-13.jpg",
  "/images/2x4-package-design/process/process-14.jpg",
  "/images/2x4-package-design/process/process-15.jpg",
  "/images/2x4-package-design/process/process-16.jpg",
];

const resultImages = [
  "/images/2x4-package-design/results/result-01.jpg",
  "/images/2x4-package-design/results/result-02.jpg",
];

export default function TwoByFourPackageDesignPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              2X4 package design
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[900px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "67ch",
                    "--typing-steps": "67",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                Packaging design for a wellness liquid vitamin nutrition brand,
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "58ch",
                    "--typing-steps": "58",
                    "--typing-delay": "820ms",
                  } as React.CSSProperties
                }
              >
                built around simple shopping and easy personal nutrition.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                2X4 is a wellness brand created by doctors and wellness advocates.
                The package design focuses on liquid vitamin nutrition, clear shelf
                navigation, and a visual system that makes personal nutrition feel
                simple, direct, and easy to shop.
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
                <p className="text-[15px] text-black">Package Designer</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Studio</p>
                <p className="text-[15px] text-black">MatteLab</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Focus</p>
                <p className="text-[15px] text-black">Liquid vitamin nutrition packaging</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Package design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainRendering}
                alt="2X4 package design main rendering"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {renderingGridImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="2X4 package design rendering"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <ScrollCarousel>
              <div className="flex gap-0 w-max">
                {processImages.map((src) => (
                  <div key={src} className="shrink-0 w-[calc(72vw-80px)] max-w-[1040px] h-[320px] md:h-[460px] overflow-hidden bg-white/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt="2X4 package design process"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ScrollCarousel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {resultImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="2X4 package design final result"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
