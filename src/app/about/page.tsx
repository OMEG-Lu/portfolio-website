import {
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  BehanceLogo,
  InstagramLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const experience = [
  {
    company: "Institute of Medical Robotics, Shanghai Jiao Tong University",
    role: "Industrial Designer",
    period: "2021 – 2024",
    location: "Shanghai",
    points: [
      "Led the design of DBS medical robot project, coordinating with an 8-member engineering team",
      "Delivered concept-to-prototype design solutions, contributing to Shanghai Top 100+ Design Award",
      "DBS project selected for exhibition at WDCC 2022 (World Design Cities Conference), Huangpu Riverside, Shanghai",
      "Conducted user research with Parkinson's patients and surgeons to optimize surgical workflow",
    ],
  },
  {
    company: "MatteLab",
    role: "Industrial Designer Intern",
    period: "2020",
    location: "Remote",
    points: [
      "Developed design innovation concepts for various consumer products",
      "Design and visualization for the professional bike seat for DDK",
    ],
  },
  {
    company: "KISKA",
    role: "Industrial Designer Intern",
    period: "2020",
    location: "Shanghai",
    points: [
      "Designed two-wheel transportation concepts for European market",
    ],
  },
  {
    company: "Kohler",
    role: "Design Assistant Intern",
    period: "2019",
    location: "Shanghai",
    points: [
      "Contributed to innovation strategy projects in the Kitchen Group",
    ],
  },
];

const education = [
  {
    school: "Drexel University",
    degree: "Master of Science in Design Research",
    period: "2024 – 2026",
    detail: null,
  },
  {
    school: "Shanghai Institute of Visual Arts (SIVA)",
    degree: "Bachelor's in Strategic Design and Innovation",
    period: "2016 – 2020",
    detail:
      "Studied under Hartmut Esslinger (Founder of Frog Design) and Matthew A. Rhoades (Global Creative Director at Nike)",
  },
];

const skillGroups = [
  { category: "Modeling", tools: ["Rhino", "Grasshopper", "Plasticity"] },
  {
    category: "Rendering",
    tools: ["Cinema4D", "Blender", "Unreal Engine", "Octane Render", "Cycles", "EEVEE"],
  },
  { category: "Graphic Design", tools: ["Photoshop", "Illustrator", "Figma"] },
];

const awards = [
  { title: "Bronze Award — Global Sportswear Design Award, Apparel Category", year: "2022" },
  { title: "Shanghai Design Top 100+ Design Award", year: "2021" },
  { title: "First Place — Kohler Design Challenge", year: "2017" },
  {
    title: "Second Place — Shanghai University Students' Cultural and Creative Design Competition",
    year: "2018",
  },
];

const selectedProjects = [
  {
    title: "GripFlow: Healthy Aging Ritual",
    period: "2025 – 2026",
    description:
      "Designed a grip strength training system for older adults, integrating daily ritual with rehabilitation.",
    link: "/works/gripflow-healthy-aging-ritual",
  },
  {
    title: "Sports Glasses for CVO",
    period: "2025 – 2026",
    description:
      "Developed performance eyewear integrating fashion and function for athletes with disabilities.",
    link: "/works/sports-glasses-cvo",
  },
  {
    title: "DBS MRI-Compatible Medical Surgical Robot",
    period: "2021 – 2024",
    description:
      "Led industrial design for an automated surgical robot targeting Parkinson's patients and surgeons.",
    link: "/works/dbs-robotic-system",
  },
  {
    title: "GenZ Furniture Design for Crate & Barrel",
    period: "2024 – 2025",
    description:
      "Conducted branding research and industrial design for Gen Z users in small living spaces.",
    link: "/works/the-force-project",
  },
];

const otherProjects = [
  "Professional Athlete Bicycle Seats Design for DDK (2024–2025)",
  "Companion Robot for Alzheimer's Patients (2021)",
  "Diagnostic Space for Depression (2022)",
  "Disposable Endoscope Modular Design (2022)",
  "Wearable Portable Exoskeleton Concept Design (2022) — Bronze Award, Global Sportswear Design Award",
  "DNA Electrophoresis Device (2021)",
  "Automated Immunohistochemistry Device (2021)",
];

const socialLinks = [
  { label: "Email", href: "mailto:jack1125516912@outlook.com", icon: EnvelopeSimple },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yufeng-lu-b942333b3", icon: LinkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/lu_yufeng01/", icon: InstagramLogo },
  { label: "Behance", href: "https://www.behance.net/1125516912Lu", icon: BehanceLogo },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        {/* Hero banner */}
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[24px]">
              Yufeng Lu
            </h1>
            <p className="text-[20px] text-white leading-[1.5] max-w-[600px]">
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "68ch",
                    "--typing-steps": "68",
                  } as React.CSSProperties
                }
              >
                Industrial Designer specializing in Medical Device Design &amp; Product Innovation
              </span>
            </p>

            <div className="flex flex-wrap gap-[16px] mt-[32px]">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-[44px] h-[44px] rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
                >
                  <link.icon size={22} weight="regular" />
                </a>
              ))}
              <a
                href="tel:+12675828640"
                className="h-[44px] rounded-full border border-white/20 flex items-center gap-[8px] px-[16px] text-white hover:text-white hover:border-white/60 transition-colors text-[14px]"
              >
                <Phone size={18} /> +1 (267) 582-8640
              </a>
            </div>
          </div>
        </section>

        {/* Profile */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Profile</h2>
            <p className="text-[16px] leading-[1.8] text-black max-w-[700px]">
              Industrial designer with a Master of Science from Drexel University and 3+ years of
              professional experience in medical robot design at Shanghai Jiao Tong University. Led a
              design team to a Top Design Award in Shanghai. Completed internships at Kohler, KISKA
              and MatteLab. Strong visual expression skills spanning service design to industrial
              design across diverse project types.
            </p>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        {/* Experience */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Experience</h2>
            <div className="flex flex-col gap-[40px]">
              {experience.map((job) => (
                <div key={job.company} className="group">
                  <div className="flex flex-wrap items-start justify-between gap-[8px] mb-[6px]">
                    <h3 className="text-[18px] text-black leading-[1.3]">{job.company}</h3>
                    <span className="text-[14px] text-black shrink-0">
                      {job.period} · {job.location}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#ff2525]/80 mb-[12px]">{job.role}</p>
                  <ul className="flex flex-col gap-[6px]">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="text-[14px] leading-[1.7] text-black pl-[16px] relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[4px] before:h-[4px] before:rounded-full before:bg-black/20"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        {/* Education */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Education</h2>
            <div className="flex flex-col gap-[32px]">
              {education.map((edu) => (
                <div key={edu.school}>
                  <div className="flex flex-wrap items-start justify-between gap-[8px] mb-[4px]">
                    <h3 className="text-[18px] text-black leading-[1.3]">{edu.school}</h3>
                    <span className="text-[14px] text-black shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-[14px] text-black">{edu.degree}</p>
                  {edu.detail && (
                    <p className="text-[13px] text-black mt-[6px] italic">{edu.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        {/* Skills */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Skills</h2>
            <div className="flex flex-col gap-[24px]">
              {skillGroups.map((s) => (
                <div key={s.category}>
                  <p className="text-[14px] text-black mb-[8px]">{s.category}</p>
                  <div className="flex flex-wrap gap-[8px]">
                    {s.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[14px] text-black px-[12px] py-[6px] rounded-full border border-black/10 bg-white/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        {/* Awards */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Awards</h2>
            <div className="flex flex-col gap-[16px]">
              {awards.map((a) => (
                <div key={a.title} className="flex items-start justify-between gap-[16px]">
                  <span className="text-[16px] text-black">{a.title}</span>
                  <span className="text-[14px] text-black shrink-0">{a.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        {/* Selected Projects */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {selectedProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  className="group block p-[24px] rounded-[15px] border border-black/10 bg-white/40 hover:bg-white/80 transition-all"
                >
                  <div className="flex items-start justify-between mb-[8px]">
                    <h3 className="text-[16px] text-black leading-[1.3]">{p.title}</h3>
                    <ArrowUpRight
                      size={18}
                      className="text-black/20 group-hover:text-[#ff2525] transition-colors shrink-0 ml-[8px]"
                    />
                  </div>
                  <p className="text-[13px] text-black mb-[10px]">{p.period}</p>
                  <p className="text-[14px] text-black leading-[1.6]">{p.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-[40px] md:px-[80px]">
          <div className="h-px bg-black/10" />
        </div>

        {/* Other Projects */}
        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Other Projects</h2>
            <div className="flex flex-wrap gap-[10px]">
              {otherProjects.map((p) => (
                <span
                  key={p}
                  className="text-[14px] text-black px-[14px] py-[8px] rounded-full border border-black/10 bg-white/40"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
