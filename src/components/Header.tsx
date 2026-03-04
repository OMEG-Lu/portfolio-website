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
            className="nav-link w-[86px] h-[33px] flex items-center justify-center rounded-[6px] text-white text-[20px] capitalize transition-colors"
          >
            <span className="nav-link-inner relative inline-flex items-center">
              <span className="nav-bracket nav-bracket-left">[</span>
              {link.label}
              <span className="nav-bracket nav-bracket-right">]</span>
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
