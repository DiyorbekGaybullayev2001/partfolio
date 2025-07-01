"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// import  Spline  from '@splinetool/react-spline';

const HeroContent = () => {

  // const [showFullText, setShowFullText] = useState(false);

  // const toggleText = () => {
  //   setShowFullText((prev) => !prev);
  // };

  // const fullText =
  //   "I am a passionate and innovative frontend developer with over 2 years of experience, proficient in React, JavaScript, TypeScript, and Tailwind CSS. My strengths lie in solving complex problems through simple and effective solutions, designing user interfaces, and collaborating effectively within a team. As a responsible team member, I am dedicated to creating user interfaces that align with business objectives, foster growth, and meet client needs. I am always eager to learn and grow, and I am excited to take on new challenges in the ever-evolving world of web development. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in the field. I am also a mentor, helping others to grow and succeed in their careers.";

  // const shortText =
  //   "I am a passionate and innovative frontend developer with over 2 years of experience, proficient in React, JavaScript, TypeScript, and Tailwind CSS. My strengths lie in solving complex problems through simple and effective solutions, designing user interfaces, and collaborating effectively within a team. As a responsible team member, I am dedicated to creating user interfaces that align with business objectives, foster growth, and meet client needs. I am always eager to learn and grow, and I am excited to take on new challenges in the ever-evolving world of web development. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in the field. I am also a mentor, helping others to grow and succeed in their careers..";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex font-serif flex-col md:flex-row container m-auto items-center justify-center p-5 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box mt-[20px] py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[12px] sm:text-[15px]">
            Frontend Developer | Freelancer | Mentor
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            {/* Providing */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
                  {` Diyorbek G'aybullayev`}  {" "}
            </span><br />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-[30px]">Web Developer</p>
          </span>
        </motion.div>
         {/* 
        <motion.p
          variants={slideInFromLeft(0.8)}
          className={text-lg text-gray-400 mt-5 max-w-[600px] ${
            showFullText ? "line-clamp-none" : "line-clamp-5"
          }}
        >
          {showFullText ? fullText : shortText}
        </motion.p> */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-lg text-gray-300 font-serif mt-5 max-w-[600px] ">
            I am a passionate and innovative Frontend developer with over 2 years of experience, proficient in React, JavaScript, TypeScript, and Tailwind CSS. My strengths lie in solving complex problems through simple and effective solutions, designing user interfaces, and collaborating effectively within a team. As a responsible team member, I am dedicated to creating user interfaces that align with business objectives, foster growth, and meet client needs. I am always eager to learn and grow, and I am excited to take on new challenges in the ever-evolving world of web development. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in the field. I am also a mentor, helping others to grow and succeed in their careers.
        </motion.p>

      

        {/* <motion.button
          onClick={toggleText}
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          {showFullText ? "Show Less" : "Learn More"}
        </motion.button> */}

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Diyorbek Gaybullayev frontend development icons"
          height={650}
          width={650}
        />
      </motion.div>



      {/* <Spline scene="https://prod.spline.design/UKtaCudGJwATUawJ/scene.splinecode"/> */}
    </motion.div>
  );
};

export default HeroContent; 