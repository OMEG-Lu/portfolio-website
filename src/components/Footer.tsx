"use client";

import {
  EnvelopeSimple,
  LinkedinLogo,
  InstagramLogo,
  BehanceLogo,
} from "@phosphor-icons/react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:jack1125516912@outlook.com",
    icon: EnvelopeSimple,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yufeng-lu-b942333b3",
    icon: LinkedinLogo,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lu_yufeng01/",
    icon: InstagramLogo,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/1125516912Lu",
    icon: BehanceLogo,
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#d9d9d9] mt-[44px]">
      <div className="px-[51px] py-[48px] min-h-[488px] flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[48px] gap-y-[40px] md:gap-y-0 md:items-stretch">
          {/* About */}
          <div className="flex flex-col">
            <h3 className="text-[20px] text-black capitalize mb-[20px]">
              About
            </h3>
            <p className="text-[14px] leading-[1.6] text-black/70 md:max-w-[340px]" style={{ textWrap: "balance" } as React.CSSProperties}>
              Industrial designer with a{"\u00A0"}Master of Science from Drexel University and 3+ years of professional experience in medical robot design at Shanghai Jiao Tong University. Led a{"\u00A0"}design team to a{"\u00A0"}Top Design Award in Shanghai. Completed internships at Kohler, KISKA and MatteLab. Strong visual expression skills spanning service design to industrial design across diverse project{"\u00A0"}types.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h3 className="text-[20px] text-black capitalize mb-[20px]">
              Navigation
            </h3>
            <nav className="flex flex-col gap-[10px]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-black/70 capitalize hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-[20px] text-black capitalize mb-[20px]">
              Contact
            </h3>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[20px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-[28px] h-[28px] flex items-center justify-center text-black/70 hover:text-black transition-colors"
                  >
                    <link.icon size={24} weight="regular" className="block" />
                  </a>
                ))}
              </div>
              <a
                href="mailto:jack1125516912@outlook.com"
                className="text-[14px] text-black/70 hover:text-black transition-colors"
              >
                jack1125516912@outlook.com
              </a>
              <a
                href="tel:+12675828640"
                className="text-[14px] text-black/70 hover:text-black transition-colors"
              >
                +1 (267) 582-8640
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-[48px] pt-[24px] border-t border-black/10 flex justify-between items-center">
          <p className="text-[12px] text-black/50">
            © 2026 Lu. All rights reserved.
          </p>
          <div className="flex gap-[16px]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-[20px] h-[20px] shrink-0 leading-none flex items-center justify-center text-black/40 hover:text-black transition-colors"
              >
                <link.icon size={18} weight="regular" className="block w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
