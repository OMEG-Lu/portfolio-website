"use client";

import dynamic from "next/dynamic";

const CvoBrandBook = dynamic(() => import("./CvoBrandBook"), {
  ssr: false,
  loading: () => (
    <div className="text-[15px] text-black/50 py-[48px] text-center">Loading brand book…</div>
  ),
});

export default function CvoBrandBookLoader() {
  return <CvoBrandBook />;
}
