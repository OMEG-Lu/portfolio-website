import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const projectImages = [
  "/images/eva-keyboard/eva-keyboard-01.png",
  "/images/eva-keyboard/eva-keyboard-02.png",
  "/images/eva-keyboard/eva-keyboard-03.png",
  "/images/eva-keyboard/eva-keyboard-04.png",
  "/images/eva-keyboard/eva-keyboard-05.png",
  "/images/eva-keyboard/eva-keyboard-06.png",
];

const sceneGridImages = [
  "/images/eva-keyboard/eva-keyboard-scene-01.png",
  "/images/eva-keyboard/eva-keyboard-scene-02.png",
  "/images/eva-keyboard/eva-keyboard-scene-03.png",
];

const firstImage = projectImages[0];
const restImages = projectImages.slice(1);

export default function EvaKeyboardPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              EVA keyboard
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[900px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "62ch",
                    "--typing-steps": "62",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                Dynamic design of the keyboard from the EVA animation — sci-fi but restrained,
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "24ch",
                    "--typing-steps": "24",
                    "--typing-delay": "820ms",
                  } as React.CSSProperties
                }
              >
                a personal project.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                A video and visualization project showing the keyboard in the EVA animation through
                dynamic design. The sci-fi but restrained design style is very influential. Made with Blender.
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
                <p className="text-[15px] text-black">Designer</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Timeline</p>
                <p className="text-[15px] text-black">2023</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Blender</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Product design / Render animation / Digital art</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/a4uDtiRJ8Ew"
                  title="EVA keyboard video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-[14px] py-[10px] border-t border-black/10">
                <a
                  href="https://youtu.be/a4uDtiRJ8Ew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-black/70 hover:text-black transition-colors"
                >
                  Open video on YouTube
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={firstImage}
                alt="EVA keyboard visual"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {sceneGridImages.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden bg-white/50 aspect-[4/3]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="EVA keyboard scene"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white/50 p-[20px] md:p-[28px]">
              <p className="text-[16px] leading-[1.8] text-black">
                This is a video about the dynamic design of the keyboard in the EVA animation - a personal project.
                It has always been one of my ideas to show the keyboard in the animation through dynamic design. The sci-fi but restrained design style is very influential.
              </p>
            </div>

            {restImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="EVA keyboard visual"
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
