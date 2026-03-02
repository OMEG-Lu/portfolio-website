"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black h-[51px] flex items-center justify-end px-[14px]">
      <nav className="flex items-center gap-[13px]">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="w-[86px] h-[33px] flex items-center justify-center rounded-[6px] text-white text-[20px] capitalize hover:text-[#b3b3b3] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
