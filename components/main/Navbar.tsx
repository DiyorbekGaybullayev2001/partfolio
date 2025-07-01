"use client";
import React, { useEffect, useState }  from "react";
import Image from "next/image";
import ContactModal from "./contactmodal";
import { LiaTelegramPlane } from "react-icons/lia";
import {
  RxInstagramLogo,
  RxLinkedinLogo,
  RxHamburgerMenu,
   RxCross2 ,
} from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  
    const [showButton, setShowButton] = useState<boolean>(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 500); // 500px dan keyin tugma ko‘rinadi
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Komponent unmount bo‘lganda listenerni tozalash
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };
  

  return (
    <>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-8 left-8 bg-gradient-to-r from-purple-800 to-cyan-500 text-white font-bold p-[14px] rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )}
    
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

        <div className="hidden lg:flex w-[500px] h-full flex-row items-center justify-between  m-auto">
          <div className="flex items-center font-serif justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px]  rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer py-[10px] hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer py-[10px] hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer py-[10px] hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer py-[10px] hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 transition-all">
              Contact
            </a>
          </div>
        </div>

        

          <div className="hidden lg:flex  gap-1 text-[#ccc] ">
            
            <a
              href="https://instagram.com/diyorcoder.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl"
            >
              <RxInstagramLogo className="mr-2 " />
              
            </a>
            <a
              href="https://t.me/diyorcoderuz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl"
            >
              <LiaTelegramPlane className="mr-2" />
              
            </a>
            <a
              href="https://www.linkedin.com/in/diyorbek-gaybullayev-9a6b122a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center "
            >
              <RxLinkedinLogo className="mr-2 text-xl" />
            
            </a>
          <ContactModal/>
          </div>

    

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>

       
        </div>
      </div>

       {/* Mobile Dropdown Menu */}
       {isOpen && (
        <div className="lg:hidden fixed top-[65px] w-full bg-[#030014ec] backdrop-blur-md z-40 border-t border-[#7042f861] animate-slide-down">
          <div className="flex flex-col items-center text-gray-200 font-serif space-y-6 py-6">
            <a href="#about-me" onClick={toggleMenu}>About Me</a>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/diyorcoder.uz" target="_blank" rel="noopener noreferrer">
                <RxInstagramLogo className="text-xl hover:text-white" />
              </a>
              <a href="https://t.me/Developer_08_18" target="_blank" rel="noopener noreferrer">
                <LiaTelegramPlane className="text-xl hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/diyorbek-gaybullayev-9a6b122a0/" target="_blank" rel="noopener noreferrer">
                <RxLinkedinLogo className="text-xl hover:text-white" />
              </a>
            </div>

            <ContactModal />
          </div>
        </div>
      )}
    

    

    </>
  );
};

export default Navbar;


















