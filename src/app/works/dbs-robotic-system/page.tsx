import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollCarousel from "../../../components/ScrollCarousel";
import ViewportVideo from "../../../components/ViewportVideo";

const projectImages = [
  "/images/dbs/main-render-01.jpg",
  "/images/dbs/dbs-0005-hires.jpg",
  "/images/dbs/dbs-0006-hires.jpg",
  "/images/dbs/dbs-0007-hires.jpg",
  "/images/dbs/dbs-0008-hires.jpg",
  "/images/dbs/dbs-0009-hires.jpg",
  "/images/dbs/dbs-0010-hires.jpg",
  "/images/dbs/dbs-0011-hires.jpg",
  "/images/dbs/dbs-0012-hires.jpg",
];

const heroRendering = projectImages[0];
const detailImages = projectImages.slice(1);

export default function DbsProjectPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              MRI-guided DBS robotic system
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[860px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "82ch",
                    "--typing-steps": "82",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                Industrial design for an MRI-guided deep brain stimulation robotic platform
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "86ch",
                    "--typing-steps": "86",
                    "--typing-delay": "900ms",
                  } as React.CSSProperties
                }
              >
                focused on surgical precision, workflow clarity, and trust in high-stress clinical environments.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                DBS (Deep Brain Stimulation) surgery is the main surgery for the treatment of
                Parkinson&apos;s and other brain diseases today. The traditional manual implantation of
                electrodes is not only a long and inefficient procedure but also requires repeated
                testing for the accuracy of electrode implantation.
              </p>
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                But now our team has reconstructed DBS surgery through a series of intelligent
                automated robotic systems, allowing patients and doctors to complete the implantation
                of electrode parts in a safe and efficient process.
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
                <p className="text-[15px] text-black">2021 - 2024</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, Cinema4D, Octane Render</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Medical design, Product design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] pb-[80px]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroRendering}
                alt="DBS project main rendering"
                className="w-full object-cover h-[420px] md:h-[640px]"
                loading="eager"
              />
            </div>

            <div className="overflow-hidden bg-white/50">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/-OgYLyAP1Zc?si=xBnEPmkLEcu_EAT2"
                  title="YouTube video player"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {detailImages.map((src, i) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`DBS project rendering ${i + 2}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}

            <div className="w-full h-px bg-black/10" />

            {/* Making process carousel */}
            <ScrollCarousel>
              <div className="flex gap-4 w-max">
                {Array.from({ length: 10 }, (_, i) => `/images/dbs/making/making-${i + 1}.jpg`).map((src) => (
                  <div key={src} className="shrink-0 w-[500px] h-[340px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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

            {/* Model making grid - black & white */}
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => `/images/dbs/model-making/mm-${i + 1}.jpg`).map((src) => (
                <div key={src} className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>

            <div className="overflow-hidden bg-white/50">
              <ViewportVideo
                src="/video/dbs-model-2682.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="overflow-hidden bg-white/50">
              <ViewportVideo
                src="/video/dbs-model-2686.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="w-full h-px bg-black/10" />

            {/* Award images carousel */}
            <ScrollCarousel>
              <div className="flex gap-4 w-max">
                {Array.from({ length: 5 }, (_, i) => `/images/dbs/award/award-${i + 1}.jpg`).map((src) => (
                  <div key={src} className="shrink-0 w-[500px] h-[340px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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

            {/* Table cart images grid */}
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }, (_, i) => `/images/dbs/table-cart/cart-${i + 1}.jpg`).map((src) => (
                <div key={src} className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover"
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
