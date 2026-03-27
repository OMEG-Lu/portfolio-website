import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const projectImages = [
  "/images/hospital-ai/hospital-02.png",
  "/images/hospital-ai/hospital-03.png",
  "/images/hospital-ai/hospital-04.png",
  "/images/hospital-ai/hospital-05.png",
  "/images/hospital-ai/hospital-06.png",
  "/images/hospital-ai/hospital-07.png",
  "/images/hospital-ai/hospital-09.png",
  "/images/hospital-ai/hospital-10.png",
];

const detailGridImages = [
  "/images/hospital-ai/grid-01.png",
  "/images/hospital-ai/grid-02.png",
  "/images/hospital-ai/grid-03.png",
  "/images/hospital-ai/grid-04.png",
  "/images/hospital-ai/grid-05.png",
  "/images/hospital-ai/grid-06.png",
  "/images/hospital-ai/grid-07.png",
  "/images/hospital-ai/grid-08.png",
  "/images/hospital-ai/grid-09.png",
];

export default function AiHospitalMonitoringSystemPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Service Design AI Hospital Mind-Body Monitoring System
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[900px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "76ch",
                    "--typing-steps": "76",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                A service design and product-system concept for AI-supported hospital monitoring,
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "64ch",
                    "--typing-steps": "64",
                    "--typing-delay": "820ms",
                  } as React.CSSProperties
                }
              >
                focusing on wayfinding, visualization, and coordinated care touchpoints.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                This project explores an integrated hospital service ecosystem where AI-driven
                monitoring, wayfinding, and visual communication support patients, caregivers, and
                clinical staff.
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
                <p className="text-[15px] text-black">Industrial design and design researcher</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Timeline</p>
                <p className="text-[15px] text-black">2025 - 2026</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, Blender, and Figma</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Service design + product system</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://embed.figma.com/proto/L5ZwpkwNgiWKtUo1WuwKwV/Presentation--design-research02?node-id=1-841&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
                  title="AI hospital monitoring presentation"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
            </div>

            {projectImages.map((src) => (
              <div key={src} className="flex flex-col gap-[16px]">
                <div className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="AI hospital monitoring visual"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {src === "/images/hospital-ai/hospital-09.png" ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[0] bg-[#d9d9d9] overflow-hidden">
                    {detailGridImages.map((gridSrc) => (
                      <div key={gridSrc} className="">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={gridSrc}
                          alt="AI hospital monitoring detail visual"
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
