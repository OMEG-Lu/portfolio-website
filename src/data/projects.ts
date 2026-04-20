export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  href?: string;
  hoverVideo?: string;
  hoverVideos?: string[];
  hoverZoom?: boolean;
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    title: "01 DBS medical surgery robot",
    description: "An automated surgical robot targeting Parkinson's patients and surgeons.",
    image: "/images/project-01.png",
    href: "/works/dbs-robotic-system",
    hoverVideo: "/video/dbs-thumbnail-hover.mp4",
  },
  {
    title: "02 GripFlow: Healthy Aging Ritual",
    description:
      "Designed a grip strength training system for older adults, integrating daily ritual with rehabilitation.",
    image: "/images/project-02.png",
    href: "/works/gripflow-healthy-aging-ritual",
    hoverVideo: "/video/gripflow-hover-01.mp4",
  },
  {
    title: "03 Sports Glasses for CVO",
    description:
      "Developed performance eyewear integrating fashion and function for athletes with disabilities.",
    image: "/images/project-03.png",
    href: "/works/sports-glasses-cvo",
    hoverVideo: "/video/cvo%20project%20thumbnail%20video.mp4",
  },
  {
    title: "04 DDK Bike Seat Production Line System Design",
    description:
      "Production line system design focusing on visualizing manufacturing and optimizing the assembly sequence.",
    image: "/images/project-04-ddk.png",
    href: "/works/ddk-bike-seat-production-line",
    hoverVideo: "/video/ddk-hover.mp4",
  },
  {
    title: "05 GenZ Furniture Design for Crate & Barrel",
    description:
      "Conducted branding research and industrial design for Gen Z users in small living spaces.",
    image: "/images/project-04.png",
    href: "/works/the-force-project",
    hoverVideo: "/video/chair-animation-hover.mp4",
  },
  {
    title: "06 Service Design AI Hospital Monitoring System",
    description:
      "Meant to increase the efficiency of hospitals and provide AI services for both doctors and patients.",
    image: "/images/project-05.png",
    href: "/works/ai-hospital-monitoring-system",
    hoverVideo: "/video/hospital%20monitoring%20system%20thumbnail%20video.mp4",
  },
  {
    title: "07 Sneaker Design - Reaction 01",
    description:
      "Organic Structure Computational Design for Sneaker Design. Tool Using Grasshopper and Rhino.",
    image: "/images/project-06.png",
    href: "/works/project-reaction",
    hoverZoom: true,
  },
  {
    title: "08 Automated Immunohistochemistry (IHC) Stainer",
    description:
      "An automated IHC stainer is an automated device used for pathological diagnosis.",
    image: "/images/project-07.png",
    href: "/works/automated-ihc-stainer",
    hoverZoom: true,
  },
  {
    title: "09 Design of a Detachable Modular Disposable Endoscope",
    description:
      "A detachable modular disposable endoscope concept focused on sterility and workflow efficiency.",
    image: "/images/project-08.png",
    href: "/works/detachable-modular-disposable-endoscope",
    hoverZoom: true,
  },
  {
    title: "10 Visualizing Finger Therapy's Neurological Impact",
    description:
      "Data visualization illustrating the impact of finger therapy on the nervous system for thesis research.",
    image: "/images/project-09.png",
    href: "/works/visualizing-finger-therapy-neurological-impact",
    hoverZoom: true,
  },
  {
    title: "11 VR surgeon simulation system - visualization project",
    description:
      "Medical design, health, and UI/UX design research and visualization (Figma, graphic design).",
    image: "/images/project-10.png",
    href: "/works/design-research-01",
    hoverZoom: true,
  },
  {
    title: "12 EVA keyboard",
    description:
      "Dynamic design of the keyboard from the EVA animation — sci-fi but restrained. Blender, render animation.",
    image: "/images/project-11.png",
    href: "/works/eva-keyboard",
    hoverZoom: true,
  },
  {
    title: "13 Personal project 2024-01",
    description:
      "A personal project depicting a Ghost in the Shell–inspired scene using dynamic graphics. Blender, digital art.",
    image: "/images/project-12.png",
    href: "/works/personal-project-2024-01",
    hoverZoom: true,
  },
  {
    title: "14 Proton Motor Design",
    description:
      "Boat motor design completed in MatteLab using Rhino, C4D, and Grasshopper.",
    image: "/images/proton-motor-design/renderings/4660.jpg",
    href: "/works/proton-motor-design",
    hoverZoom: true,
  },
  {
    title: "15 2X4 package design",
    description:
      "Package design for a wellness liquid vitamin brand, focused on simple, easy-to-shop nutrition.",
    image: "/images/2x4-package-design/renderings/main-rendering.png",
    href: "/works/2x4-package-design",
    hoverZoom: true,
  },
  {
    title: "16 Archive",
    description: "Archive of past work and selected projects.",
    image: "/images/project-13.png",
    href: "/works/archive",
    hoverZoom: true,
  },
];
