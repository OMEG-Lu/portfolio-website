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

const contactLinks = [
  {
    label: "Email",
    value: "jack1125516912@outlook.com",
    href: "mailto:jack1125516912@outlook.com",
    icon: EnvelopeSimple,
  },
  {
    label: "Phone",
    value: "+1 (267) 582-8640",
    href: "tel:+12675828640",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yufeng-lu-b942333b3",
    href: "https://www.linkedin.com/in/yufeng-lu-b942333b3",
    icon: LinkedinLogo,
  },
  {
    label: "Instagram",
    value: "instagram.com/lu_yufeng01",
    href: "https://www.instagram.com/lu_yufeng01/",
    icon: InstagramLogo,
  },
  {
    label: "Behance",
    value: "behance.net/1125516912Lu",
    href: "https://www.behance.net/1125516912Lu",
    icon: BehanceLogo,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section className="relative w-full bg-black py-[80px] px-[40px] md:px-[80px] overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ff2525] text-[32px] mb-[16px]">&gt;&gt;&gt;</p>
            <h1 className="text-[48px] md:text-[64px] leading-[1] text-white mb-[24px]">Contact</h1>
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
                Industrial designer with strong visual communication and expression skills.
              </span>
              <span
                className="hero-type-line"
                style={
                  {
                    "--typing-chars": "78ch",
                    "--typing-steps": "78",
                    "--typing-delay": "820ms",
                  } as React.CSSProperties
                }
              >
                Feel free to reach out for collaborations, project opportunities, or design conversations.
              </span>
            </p>
          </div>
        </section>

        <section className="w-full px-[40px] md:px-[80px] py-[64px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-[32px]">
            <h2 className="text-[20px] text-black capitalize">Get in touch</h2>
            <div className="flex flex-col gap-[14px]">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-[16px] p-[18px] rounded-[12px] border border-black/10 bg-white/40 hover:bg-white/80 transition-all"
                >
                  <div className="flex items-center gap-[12px] min-w-0">
                    <item.icon size={20} className="text-black shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[13px] text-black/60">{item.label}</p>
                      <p className="text-[15px] text-black truncate">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-black/20 group-hover:text-[#ff2525] transition-colors shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
