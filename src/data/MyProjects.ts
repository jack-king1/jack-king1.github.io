import { THUMBNAILS } from "../assets/thumbnails";

export const projects = [
  {
    name: "Tickety",
    overview:
      "A SaaS app for designing and printing retail price tickets using a thermal printer. Built for butchers, bakeries, and small retailers.",
    techStack: ["React", "TypeScript", "ASP.NET Core", "SQLite", "Azure"],
    videoUrl: "https://www.youtube.com/embed/dBOkeT0Ndag",
    githubUrl: "https://github.com/jack-king1/tickety",
    liveUrl: "https://tickety.app",
    thumbnail: THUMBNAILS.TICKETY,
  },
  {
    name: "Portfolio",
    overview:
      "A responsive personal site built with Next.js and Chakra UI showcasing my projects and experience.",
    techStack: ["Next.js", "Chakra UI", "TypeScript"],
    videoUrl: "https://www.youtube.com/embed/demo2",
    githubUrl: "https://github.com/jack-king1/portfolio",
    liveUrl: "https://jackking.dev",
    thumbnail: THUMBNAILS.TICKETY,
  },
  {
    name: "Design Tool",
    overview:
      "A web-based canvas editor for creating label and signage templates with text and shapes.",
    techStack: ["React", "Konva", "TypeScript"],
    videoUrl: "https://www.youtube.com/embed/demo3",
    githubUrl: "https://github.com/jack-king1/designtool",
    liveUrl: "",
    thumbnail: THUMBNAILS.TICKETY,
  },
];
