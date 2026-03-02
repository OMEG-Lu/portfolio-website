import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import { ALL_PROJECTS } from "../../data/projects";

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="pt-[51px]">
        <section id="works" className="flex flex-col items-center w-full py-[64px]">
          <h1 className="text-[20px] text-black text-center capitalize mb-[48px]">Works</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full max-w-[1200px] px-[16px]">
            {ALL_PROJECTS.map((project, i) => (
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
        </section>
      </main>
      <Footer />
    </>
  );
}
