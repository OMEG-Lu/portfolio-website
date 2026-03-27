import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const projectImages = [
  "/images/endoscope/endoscope-01.jpg",
  "/images/endoscope/endoscope-02.jpg",
  "/images/endoscope/endoscope-03.jpg",
  "/images/endoscope/endoscope-04.jpg",
  "/images/endoscope/endoscope-05.jpg",
  "/images/endoscope/endoscope-06.jpg",
  "/images/endoscope/endoscope-07.jpg",
  "/images/endoscope/endoscope-08.jpg",
  "/images/endoscope/endoscope-09.jpg",
  "/images/endoscope/endoscope-10.jpg",
  "/images/endoscope/endoscope-11.jpg",
  "/images/endoscope/endoscope-12.jpg",
  "/images/endoscope/endoscope-13.jpg",
  "/images/endoscope/endoscope-14.jpg",
  "/images/endoscope/endoscope-15.jpg",
  "/images/endoscope/endoscope-16.jpg",
  "/images/endoscope/endoscope-17.jpg",
  "/images/endoscope/endoscope-18.jpg",
  "/images/endoscope/endoscope-19.jpg",
  "/images/endoscope/endoscope-20.jpg",
  "/images/endoscope/endoscope-21.jpg",
  "/images/endoscope/endoscope-22.jpg",
];

const preGridImages = projectImages.slice(0, 4);
const gridImages = projectImages.slice(4, 10);
const secondGridImages = projectImages.slice(10, 22);
const postGridImages = projectImages.slice(22);

export default function DetachableModularDisposableEndoscopePage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Design of a Detachable Modular Disposable Endoscope
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[900px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "58ch",
                    "--typing-steps": "58",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                A detachable modular disposable endoscope concept for medical
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "28ch",
                    "--typing-steps": "28",
                    "--typing-delay": "740ms",
                  } as React.CSSProperties
                }
              >
                workflow optimization.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                This project explores modular architecture and disposable component strategy to
                improve sterility, handling efficiency, and procedural reliability in endoscopy.
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
                <p className="text-[15px] text-black">2022</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Rhino, 3D rendering</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Industrial medical design + product visualization</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            {/* Research images - 2x2 grid */}
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }, (_, i) => `/images/endoscope/research/research-${i + 1}.jpg`).map((src) => (
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

            {/* Sketches - 2x2 grid */}
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }, (_, i) => `/images/endoscope/sketches/sketch-${i + 1}.jpg`).map((src) => (
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

            {preGridImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Detachable modular disposable endoscope visual"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {gridImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Detachable modular disposable endoscope visual"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {secondGridImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Detachable modular disposable endoscope visual"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {postGridImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Detachable modular disposable endoscope visual"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
