import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const projectImages = [
  "/images/reaction/reaction-01.jpg",
  "/images/reaction/reaction-02.jpg",
  "/images/reaction/reaction-03.jpg",
  "/images/reaction/reaction-04.jpg",
  "/images/reaction/reaction-05.jpg",
  "/images/reaction/reaction-06.jpg",
  "/images/reaction/reaction-07.jpg",
  "/images/reaction/reaction-08.jpg",
  "/images/reaction/reaction-09.jpg",
  "/images/reaction/reaction-10.jpg",
  "/images/reaction/reaction-11.jpg",
];

const reactionGridImages = projectImages.slice(3, 9);
const reactionLeadImages = projectImages.slice(0, 3);
const reactionTailImages = projectImages.slice(9);

export default function ProjectReactionPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              Project-Reaction
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
                A sneaker design exploration combining computational structure
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
                with visual storytelling.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[860px]">
                Project-Reaction presents a footwear concept developed through computational form
                exploration and high-fidelity render storytelling.
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
                <p className="text-[15px] text-black">Grasshopper, Rhino, Blender</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Sneaker design / Computational form</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] pb-[80px]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[16px]">
            {reactionLeadImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Project-Reaction visual" className="w-full h-auto" loading="lazy" />
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {reactionGridImages.map((src) => (
                <div key={src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="Project-Reaction visual" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>

            {reactionTailImages.map((src) => (
              <div key={src} className="overflow-hidden bg-white/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Project-Reaction visual" className="w-full h-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
