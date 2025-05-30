import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className=" overflow-hidden rounded-lg shadow-lg cursor-pointer border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={500}
        height={400}
        className="w-full h-[140px] sm:h-[180px] "
      />

      <div className="relative p-2 font-serif">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
