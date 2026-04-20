import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollCarousel from "../../../components/ScrollCarousel";

const mainRendering = "/images/proton-motor-design/renderings/4658.jpg";

const renderingGridImages = [
  "/images/proton-motor-design/renderings/4662.jpg",
  "/images/proton-motor-design/renderings/4663.jpg",
  "/images/proton-motor-design/renderings/4707.jpg",
  "/images/proton-motor-design/renderings/4712.jpg",
];

const processImages = [
  "/images/proton-motor-design/process/4080.jpg",
  "/images/proton-motor-design/process/4081.jpg",
  "/images/proton-motor-design/process/4082.jpg",
  "/images/proton-motor-design/process/4083.jpg",
  "/images/proton-motor-design/process/4084.jpg",
  "/images/proton-motor-design/process/4088.jpg",
  "/images/proton-motor-design/process/4123.jpg",
  "/images/proton-motor-design/process/4164.jpg",
  "/images/proton-motor-design/process/4165.jpg",
  "/images/proton-motor-design/process/4166.jpg",
  "/images/proton-motor-design/process/4190.jpg",
  "/images/proton-motor-design/process/4191.jpg",
  "/images/proton-motor-design/process/4192.jpg",
  "/images/proton-motor-design/process/4193.jpg",
  "/images/proton-motor-design/process/4194.jpg",
  "/images/proton-motor-design/process/4195.jpg",
  "/images/proton-motor-design/process/4206.jpg",
  "/images/proton-motor-design/process/4209.jpg",
  "/images/proton-motor-design/process/4225.jpg",
  "/images/proton-motor-design/process/4226.jpg",
  "/images/proton-motor-design/process/4303.jpg",
  "/images/proton-motor-design/process/4326.jpg",
  "/images/proton-motor-design/process/4338.jpg",
];

const resultImages = [
  "/images/proton-motor-design/results/caab712630142881363ad6497f9d9b56.jpg",
  "/images/proton-motor-design/results/fea4ef144e8fc48c9e0af6ac817c803a.jpg",
];

export default function ProtonMotorDesignPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Proton Motor Design
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
                Boat motor design completed in MatteLab, translating marine power
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "56ch",
                    "--typing-steps": "56",
                    "--typing-delay": "820ms",
                  } as React.CSSProperties
                }
              >
                hardware into a refined industrial product language.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                Proton Motor Design provides a product design direction for boat motors,
                balancing compact form, marine durability, and a more refined surface language
                for electric propulsion hardware.
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
                <p className="text-[13px] text-black/60 mb-[4px]">Studio</p>
                <p className="text-[15px] text-black">MatteLab</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, C4D, Grasshopper</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Industrial design</p>
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
                alt="Proton motor main rendering"
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
                    alt="Proton motor rendering"
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
                      alt="Proton motor process"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ScrollCarousel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {resultImages.map((src, index) => (
                <div key={src} className="overflow-hidden bg-white/50 md:h-[460px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Proton motor final result"
                    className={
                      index === 0
                        ? "w-full h-full object-cover md:scale-[1.08] md:translate-x-[3%]"
                        : "w-full h-full object-cover"
                    }
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
