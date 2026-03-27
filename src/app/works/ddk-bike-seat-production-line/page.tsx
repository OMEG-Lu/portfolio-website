import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollCarousel from "../../../components/ScrollCarousel";
import ViewportVideo from "../../../components/ViewportVideo";

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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
