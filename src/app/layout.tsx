import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistPixelCircle } from "geist/font/pixel";
import "./globals.css";
import InvertCursor from "../components/InvertCursor";

export const metadata: Metadata = {
  title: "Lu. — Designer, Builder, Creator",
  description: "Portfolio of Lu.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={GeistPixelCircle.variable}>
      <body className={`${GeistPixelCircle.className} antialiased bg-[#f1f1f1] text-black`}>
        <InvertCursor />
        {children}
      </body>
    </html>
  );
}
