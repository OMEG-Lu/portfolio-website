import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollCarousel from "../../../components/ScrollCarousel";
import ViewportVideo from "../../../components/ViewportVideo";

const realProductionHeroImages = [
  "/images/ddk/real-production/b16.jpg",
  "/images/ddk/real-production/b17.jpg",
];

const realProductionGridImages = [
  "/images/ddk/real-production/b11.jpg",
  "/images/ddk/real-production/b12.jpg",
  "/images/ddk/real-production/b13.jpg",
  "/images/ddk/real-production/b14.jpg",
];

const realProductionProcessImages = [
  "/images/ddk/real-production-process/0172B999-D44B-433A-8C5D-1E7CF39EB43B.jpeg",
  "/images/ddk/real-production-process/03EE1DB9-27C1-475A-BD6B-E8E6EBFA734A.jpeg",
  "/images/ddk/real-production-process/0BB00FFC-C2B1-4EE1-A7C3-87FA3D55F8C6.jpeg",
  "/images/ddk/real-production-process/0DF03226-F456-48F2-AC2A-0958F438F6FD.jpeg",
  "/images/ddk/real-production-process/2C1B55CC-E251-421D-8B3F-0DD0F95C1E0C.jpeg",
  "/images/ddk/real-production-process/53373003-FC5A-4AB6-88DA-BF1D4D852E48.jpeg",
  "/images/ddk/real-production-process/729AC64C-F558-4373-84ED-8766043FEFEF.jpeg",
  "/images/ddk/real-production-process/B3AE27D0-ECA6-4C28-8159-0A9C2769643A.jpeg",
  "/images/ddk/real-production-process/C3D0B0D5-4FB0-4D17-BD23-4DBFA0C85CB9.jpeg",
  "/images/ddk/real-production-process/CF2B31FA-3A53-473B-A9A3-04EA253D5AD1.jpeg",
  "/images/ddk/real-production-process/D090E0EC-FC8C-48C7-8E15-C4E79D168A97.jpeg",
  "/images/ddk/real-production-process/E6F7F66C-4580-470B-8220-93DD430A81EA.jpeg",
  "/images/ddk/real-production-process/FB31917E-467E-4F83-BEBD-90F5718129A9.jpeg",
  "/images/ddk/real-production-process/FD9FEAA7-0146-42DC-A221-3D70FAF8F09C.jpeg",
];

const finalRealImages = [
  "/images/ddk/final-real/2026-04-20_11-01-31.png",
  "/images/ddk/final-real/DDK-VP830EV Y 2800 1800-1.20251229.png",
  "/images/ddk/final-real/DDK-VP830EV Y-2800 1800-2.20251229.png",
  "/images/ddk/final-real/DDK-VP830EV Y 2800 1800-3.20251229.png",
];

export default function DdkBikeSeatProductionLinePage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              DDK Bike Seat Production Line System Design
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[900px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "68ch",
                    "--typing-steps": "68",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                Production line system design focusing on visualizing manufacturing
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "52ch",
                    "--typing-steps": "52",
                    "--typing-delay": "820ms",
                  } as React.CSSProperties
                }
              >
                processes and optimizing the assembly sequence.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                This project focuses on production line system design for DDK bike seats,
                visualizing the production and manufacturing workflow, and optimizing the
                entire manufacturing sequence. The design was developed on MatteLab to analyze
                and improve production efficiency.
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
                <p className="text-[15px] text-black">2024</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Blender, Rhino, After Effects</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">System Design + Visualization</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            {/* Process images grid - black & white */}
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, i) => `/images/ddk/process/proc-${i + 1}.jpg`).map((src) => (
                <div key={src} className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-black/10" />

            {/* PDF slides carousel */}
            <ScrollCarousel>
              <div className="flex gap-0 w-max">
                {Array.from({ length: 48 }, (_, i) => {
                  const num = String(i + 1).padStart(2, '0');
                  return `/images/ddk/slides/slide-${num}.jpg`;
                }).map((src) => (
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

            <div className="w-full h-px bg-black/10" />

            {/* Rendering videos - 2x2 grid */}
            <div className="grid grid-cols-2 gap-2">
              {['010001-0250', '020001-0250', '030001-0250', '040001-0250'].map((name) => (
                <div key={name} className="overflow-hidden">
                  <ViewportVideo
                    src={`/video/ddk/${name}.mp4`}
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ddk/production-animation.jpg"
                alt=""
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden">
              <ViewportVideo
                src="/video/ddk/ae-full.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Blender rendered images grid */}
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 10 }, (_, i) => `/images/ddk/renders/render-${i + 1}.jpg`).map((src) => (
                <div key={src} className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-black/10" />

            {realProductionHeroImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="DDK real production rendering"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {realProductionGridImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="DDK real production rendering detail"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <ScrollCarousel>
              <div className="flex gap-0 w-max">
                {realProductionProcessImages.map((src) => (
                  <div key={src} className="shrink-0 w-[calc(72vw-80px)] max-w-[1040px] h-[320px] md:h-[460px] overflow-hidden bg-white/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt="DDK real production process"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ScrollCarousel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {finalRealImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="DDK final real production visual"
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
