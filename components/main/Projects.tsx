"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      src: "/sam.png",
      title: "Sam viza Tour",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/sector.png",
      title: "Sector Technologies ",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/tea.png",
      title: "Fruteacorp",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/chinor.png",
      title: "Chinor Mebel ",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/gp.png",
      title: "GP. Website",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/moderna.png",
      title: "Moderna Website",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/auto.png",
      title: "AutoZoom",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/saka.png",
      title: "SakaHolding",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/sigma.png",
      title: "Sigma Servis ",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/watch.png",
      title: "Watch ",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/sayt1.png",
      title: "Bootslander",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/amazon.png",
      title: "Amazon clone",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/target.png",
      title: "Target Website",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/dezinfeksiya.png",
      title: "Dezinfeksiya uz",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: "/flymoderntour.png",
      title: "Fly Modern Tour",
      description: "Lorem ipsum dolor sit amet...",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  const handleToggle = () => {
    if (visibleCount >= allProjects.length) {
      setVisibleCount(5);
    } else {
      setVisibleCount((prev) => prev + 5);
    }
  };

  return (
    <div
      className="container m-auto flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="text-[30px] sm:text-[40px] font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-10">
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      <button
        onClick={handleToggle}
        className="mt-10 px-6 py-2 z-20 text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:opacity-80 transition-all hover:scale-105"
      >
        {visibleCount >= allProjects.length ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Projects;
