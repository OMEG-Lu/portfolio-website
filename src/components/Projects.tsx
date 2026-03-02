"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ALL_PROJECTS } from "../data/projects";
const projects = ALL_PROJECTS.slice(0, 6);

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center w-full">
      <div className="h-[48px] w-full" />

      <div className="w-full max-w-[1200px] px-[16px] mt-[48px] mb-[80px]">
        <div className="rounded-[15px] bg-[#d9d9d9] pt-[56px] pb-[88px] px-[24px] md:pt-[72px] md:pb-[120px] md:px-[32px]">
          <h2 className="text-[20px] text-black text-center capitalize mb-[20px]">
            About me
          </h2>
          <p className="text-[14px] leading-[1.6] text-black/70 text-center max-w-[720px] mx-auto">
            Industrial designer with a Master of Science from Drexel University and 3+ years of professional experience in medical robot design at Shanghai Jiao Tong University. Led a design team to a Top Design Award in Shanghai. Completed internships at Kohler, KISKA and MatteLab. Strong visual expression skills spanning service design to industrial design across diverse project types.
          </p>
        </div>
      </div>

      <h2 className="text-[20px] text-black text-center capitalize mb-[48px]">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full max-w-[1200px] px-[16px]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            href={project.href}
            hoverVideo={project.hoverVideo}
            hoverVideos={project.hoverVideos}
            hoverZoom={project.hoverZoom}
            index={i}
          />
        ))}
      </div>

      <Link
        href="/works"
        className="mt-[48px] w-[156px] h-[31px] rounded-[5px] text-[20px] text-black capitalize text-center hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center"
      >
        more
      </Link>
    </section>
  );
}
