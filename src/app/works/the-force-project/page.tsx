import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ViewportVideo from "../../../components/ViewportVideo";

type ForceModule = { type: "text"; text: string } | { type: "image"; src: string } | { type: "video"; src: string };

const modules: ForceModule[] = [
  { type: "text", text: "The theme this time is furniture design solution targeting Gen Z." },
  { type: "image", src: "/images/force-project/force-02.jpg" },
  { type: "image", src: "/images/force-project/force-03.jpg" },
  {
    type: "text",
    text: "As members of Gen Z, we are very good at using technology and highly value the being real and personalization of content.",
  },
  { type: "image", src: "/images/force-project/force-05.jpg" },
  {
    type: "text",
    text: `Let's move beyond dry data and truly understand Gen Z, so we can design products that suitable for them. I dig deeply into the underlying motivations behind "be real" and personalization, and I've summarized the brand value and core of the brand.`,
  },
  { type: "image", src: "/images/force-project/force-07.jpg" },
  {
    type: "text",
    text: `Pressure and rules often make young people feel like they have no control over their lives, so accept their real and imperfect lives, respect their desire to control their own lives, Embrace Your Rhythms, Your Pace, Your Space will be the core ideology for this serie.`,
  },
  { type: "image", src: "/images/force-project/force-09.jpg" },
  {
    type: "text",
    text: "Now! by using this brand value and also the comparisons and analysis of other brands in the market, there will be two important opportunities to share our brand value: product design, and marketing.",
  },
  { type: "image", src: "/images/force-project/force-11.jpg" },
  {
    type: "text",
    text: "By capturing the deep needs of Gen Z and integrate them into product design and marketing, we anticipate increasing Crate & Barrel's market share by 4%.",
  },
  { type: "image", src: "/images/force-project/force-13.jpg" },
  { type: "text", text: "So, in term of the product design, I designed a collection which is made of three themes." },
  { type: "image", src: "/images/force-project/force-15.jpg" },
  {
    type: "text",
    text: "The first one is organizing clothes, but I won't design a storage space or make Gen Z must tidy up. Instead, I'll allow them to use chairs as temporary hangers, along with their habits of moving clothes between their chairs and beds, so letting them control their space at their own pace.",
  },
  { type: "image", src: "/images/force-project/force-17.jpg" },
  {
    type: "text",
    text: `The theme of this design is "Embrace Your Daily Delay," allowing young people to manage their lives and spaces at their own pace.`,
  },
  { type: "image", src: "/images/force-project/force-19.jpg" },
  {
    type: "text",
    text: "Of course, in a shared space, communication with others is also very important, so I made the chair can transform into a bar chair with a simple change.",
  },
  { type: "image", src: "/images/force-project/force-21.jpg" },
  { type: "text", text: "It can be easily transformed into the way they want, helping everyone's communication and entertainment." },
  { type: "image", src: "/images/force-project/force-23.jpg" },
  {
    type: "text",
    text: "The second point is lighting. More and more young people like to stay up late now. We criticize and educate them, but for busy young people, maybe the night time truly belongs to them.",
  },
  { type: "image", src: "/images/force-project/force-25.jpg" },
  {
    type: "text",
    text: `The theme is "Illuminate your midnight play," so that Crate & Barrel can be there for Gen Z during their own time at night without disturbing others.`,
  },
  { type: "image", src: "/images/force-project/force-27.jpg" },
  { type: "text", text: "To achieve this, I designed the lamp in two parts." },
  { type: "image", src: "/images/force-project/force-29.jpg" },
  { type: "text", text: "This design allows the top part of the lamp to be easily removed from the main part." },
  { type: "image", src: "/images/force-project/force-31.jpg" },
  { type: "text", text: "And attach the part on the chair, so the light won't disrupt anyone and can personalize the light environment." },
  { type: "image", src: "/images/force-project/force-33.jpg" },
  { type: "text", text: "The overall vibe is really like having a close friend keeping you company late at night." },
  { type: "image", src: "/images/force-project/force-35.jpg" },
  {
    type: "text",
    text: "The third idea is about trash cans. In a busy schedule, needing to take out trash is troublesome. Inspired by stackable construction-site forms, I explored boundary-marking and stackability.",
  },
  { type: "image", src: "/images/force-project/force-37.jpg" },
  { type: "text", text: "As a trash can, it can be stacked to save space when not in use, and unfolded when many are needed." },
  { type: "image", src: "/images/force-project/force-39.jpg" },
  { type: "text", text: "When you're busy, it can also warn others not to disturb you, marking boundaries in a humorous way." },
  { type: "image", src: "/images/force-project/force-41.jpg" },
  {
    type: "text",
    text: `This product line uses the core brand value "your pace your space," and passes this message to Gen Z.`,
  },
  { type: "image", src: "/images/force-project/force-43.jpg" },
  {
    type: "text",
    text: "So let's move to the marketing part. I've set three goals: Market Growth, Brand Awareness, and User Engagement.",
  },
  { type: "image", src: "/images/force-project/force-45.jpg" },
  { type: "text", text: "After analyzing touchpoints between our brand and users, we focus on social media and campus." },
  { type: "image", src: "/images/force-project/force-47.jpg" },
  {
    type: "text",
    text: "Social media is essential for Gen Z. Content should be channel-specific while the design language stays consistent.",
  },
  { type: "image", src: "/images/force-project/force-49.jpg" },
  {
    type: "text",
    text: "In terms of design style, we avoid creating an expensive impression and align with Gen Z aesthetics using symbolic culture and a refined, fun style.",
  },
  { type: "video", src: "/video/force-project/desktop-2025-06-22-19-07-04-01.mp4" },
  {
    type: "text",
    text: "These are rough sample animations, showing our content style should combine functional display with emotional connection.",
  },
  { type: "image", src: "/images/force-project/force-53.jpg" },
  { type: "text", text: "For campus, trendy and meme cultures become especially important." },
  { type: "image", src: "/images/force-project/force-55.jpg" },
  {
    type: "text",
    text: "These banners can be attached to bags or phone cases, turning users into expandable points of promotion.",
  },
  { type: "image", src: "/images/force-project/force-57.jpg" },
  {
    type: "text",
    text: `Follow the trend? or lead will be the main slogan, connecting with Gen Z feelings and attention while staying in the same brand philosophy.`,
  },
  { type: "image", src: "/images/force-project/force-59.jpg" },
];

export default function TheForceProjectPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[18px]">
              GenZ furniture design - Crate & Barrel
            </h1>
            <p className="text-[18px] text-white leading-[1.6] max-w-[860px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "72ch",
                    "--typing-steps": "72",
                    "--typing-delay": "0ms",
                  } as React.CSSProperties
                }
              >
                Case Study_GenZ_furniture design - product design and marketing system for Gen Z
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "56ch",
                    "--typing-steps": "56",
                    "--typing-delay": "860ms",
                  } as React.CSSProperties
                }
              >
                lifestyles, built around rhythm, control, and personal space.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Overview</h2>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                This project explores furniture design solutions for Gen Z through a combined
                product and marketing strategy for Crate &amp; Barrel.
              </p>
              <p className="text-[16px] leading-[1.8] text-black max-w-[840px]">
                The direction is built around the brand value of authenticity and personalization:
                “Your Rhythms, Your Pace, Your Space,” translated into functional concepts and
                communication materials.
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
                <p className="text-[15px] text-black">Product Designer</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Timeline</p>
                <p className="text-[15px] text-black">2025</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Tools</p>
                <p className="text-[15px] text-black">Blender 3D, Blender Eevee, Rhinoceros</p>
              </div>
              <div className="bg-white/50 p-[16px]">
                <p className="text-[13px] text-black/60 mb-[4px]">Category</p>
                <p className="text-[15px] text-black">Product design + branding + visual identity</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[60px] pb-[80px]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-[16px]">
            {modules.map((module, index) => {
              if (module.type === "text") {
                return (
                  <div key={`text-${index}`} className="bg-white/50 p-[20px] md:p-[24px]">
                    <p className="text-[15px] leading-[1.75] text-black">{module.text}</p>
                  </div>
                );
              }

              if (module.type === "video") {
                return (
                  <div key={`video-${index}`} className="overflow-hidden bg-white/50">
                    <ViewportVideo
                      src={module.src}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                );
              }

              return (
                <div key={module.src} className="overflow-hidden bg-white/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={module.src} alt="The Force Project visual" className="w-full h-auto" loading="lazy" />
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
