"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import ContactModal from "./contactmodal";

const Encryption = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  return (
    <div className="flex flex-row relative p-[10px] items-center justify-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[30px] sm:text-[40px] p-[10px] font-medium font-serif text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            & {" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] sm:w-[50px] translate-y-5 transition-all ease-in-out duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10 w-[50px] sm:w-[70px]"
          />
        </div>

        <div className="Welcome-box md:px-[15px] p-[4px] z-[10] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 onClick={startLoading} className="Welcome-text font-serif cursor-pointer text-[12px]">Encryption</h1>
        </div>
          {/* <ContactModal/> */}

        {/* {loading && (
        <div className="w-[300px] mt-4 bg-gray-700 rounded-full h-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
          />
        </div>
      )} */}

      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px]  font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
