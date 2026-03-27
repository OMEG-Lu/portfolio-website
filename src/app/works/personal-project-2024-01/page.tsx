import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const projectImages = [
  "/images/personal-project-2024-01/personal-2024-01-01.png",
  "/images/personal-project-2024-01/personal-2024-01-02.png",
  "/images/personal-project-2024-01/personal-2024-01-03.png",
  "/images/personal-project-2024-01/personal-2024-01-04.png",
];

const extraPairImages = [
  "/images/personal-project-2024-01/personal-2024-01-extra-01.png",
  "/images/personal-project-2024-01/personal-2024-01-extra-02.png",
];

const firstImage = projectImages[0];
const restImages = projectImages.slice(1);

export default function PersonalProject202401Page() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Personal project 2024-01
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
                A personal project depicting a scene similar to Ghost in the Shell
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "26ch",
                    "--typing-steps": "26",
                    "--typing-delay": "740ms",
                  } as React.CSSProperties
                }
              >
                using dynamic graphics.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                This is a personal project, aiming to depict a scene similar to the one in Ghost in the Shell
                using dynamic graphics. Created with Blender and Blender Cycles.
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
                <p className="text-[15px] text-black">2024</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Blender Cycles</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Digital art / Cartoon / Graphic design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            <div className="overflow-hidden bg-white/50">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/h9fkLW9-Ce8"
                  title="Personal project 2024-01 video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-[14px] py-[10px] border-t border-black/10">
                <a
                  href="https://youtu.be/h9fkLW9-Ce8"
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
                alt="Personal project 2024-01 visual"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {extraPairImages.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden bg-white/50 aspect-[4/3]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Personal project 2024-01 visual"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {restImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Personal project 2024-01 visual"
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
