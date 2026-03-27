import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const projectImages = [
  "/images/ihc-stainer/ihc-01.jpg",
  "/images/ihc-stainer/ihc-02.jpg",
  "/images/ihc-stainer/ihc-03.jpg",
  "/images/ihc-stainer/ihc-04.jpg",
  "/images/ihc-stainer/ihc-05.jpg",
  "/images/ihc-stainer/ihc-06.jpg",
  "/images/ihc-stainer/ihc-07.jpg",
  "/images/ihc-stainer/ihc-08.jpg",
];

export default function AutomatedIhcStainerPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Automated Immunohistochemistry (IHC) Stainer
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[900px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "52ch",
                    "--typing-steps": "52",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                An automated IHC stainer is an automated device used for
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "28ch",
                    "--typing-steps": "28",
                    "--typing-delay": "660ms",
                  } as React.CSSProperties
                }
              >
                pathological diagnosis.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                It can automatically complete the staining process of tissue samples, helping
                doctors detect tumor markers such as P16, Ki67, PD-L1, and more.
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
                <p className="text-[15px] text-black">2021</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, 3D visualization</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Industrial medical design + 3D visualization</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            {projectImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Automated IHC stainer visual" className="w-full h-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
