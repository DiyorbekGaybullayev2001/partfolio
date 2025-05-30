"use client";
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      src: "/sam.png",
      title: "Sam viza Tour",
      description: "Developed a complete travel agency website with a custom design and booking functionality....",
    },
    {
      src: "/sector.png",
      title: "Sector Technologies ",
      description: "Built an e-commerce platform for tech products with modern UI/UX and secure payment integration...",
    },
    {
      src: "/tea.png",
      title: "Fruteacorp",
      description: "Designed a promotional landing page with discount code integration and vibrant visuals....",
    },
    {
      src: "/chinor.png",
      title: "Chinor Mebel ",
      description: "Created a product catalog website for a furniture company with order management features....",
    },
    {
      src: "/gp.png",
      title: "GP. Website",
      description: "Developed a corporate website for a digital marketing agency with a sleek, interactive design....",
    },
    {
      src: "/moderna.png",
      title: "Moderna Website",
      description: "Designed and developed a modern informational website with interactive UI and responsive layout....",
    },
    {
      src: "/auto.png",
      title: "AutoZoom",
      description: "Built a car rental website with real-time booking, vehicle selection, and payment system integration....",
    },
    {
      src: "/saka.png",
      title: "SakaHolding",
      description: "Created a corporate site for a holding company offering multi-service navigation and user-friendly interface...",
    },
    {
      src: "/sigma.png",
      title: "Sigma Servis ",
      description: "Developed an auto parts service platform with catalog browsing and inquiry functionality....",
    },
    {
      src: "/watch.png",
      title: "Watch ",
      description: "Designed a sleek product landing page for a smart watch with detailed features and minimalist layout....",
    },
    {
      src: "/sayt1.png",
      title: "Bootslander",
      description: "A modern landing page built with Bootstrap. Features responsive design, smooth animations, and optimized call-to-action sections for maximum conversions....",
    },
    {
      src: "/amazon.png",
      title: "Amazon clone",
      description: "A fully functional e-commerce website mimicking Amazon's core features. Includes product listings, shopping cart, user authentication, and payment integration...",
    },
    {
      src: "/target.png",
      title: "Target Website",
      description: "A corporate website designed for a specific target audience. Focuses on clean UI/UX, fast loading times, and clear business messaging...",
    },
    {
      src: "/dezinfeksiya.png",
      title: "Dezinfeksiya uz",
      description: "A sanitation services platform for Uzbekistan. Offers disinfection booking, service information, and safety guidelines with a user-friendly interface...",
    },
    {
      src: "/flymoderntour.png",
      title: "Fly Modern Tour",
      description: "A sleek travel agency website with tour packages, flight bookings, and hotel reservations. Built with modern design trends and seamless navigation...",
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
