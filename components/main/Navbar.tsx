import React  from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import ContactModal from "./contactmodal";


const Navbar = () => {
  return (
    <>
    
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo10.png"
            alt="logo"
            width={65}
            height={65}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold font-serif hidden md:block text-gray-400">
            DIYORCODER.UZ
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between  m-auto">
          <div className="flex items-center font-serif justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}

    
          <ContactModal/>

       
        </div>
      </div>
    </div>

    

    </>
  );
};

export default Navbar;
