'use client';

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { ImBooks } from "react-icons/im";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div id="contact" className="w-full   text-gray-200 shadow-lg p-6">
      <div className=" mx-auto container flex flex-col items-center">
        <div className="w-full z-20 flex flex-wrap justify-around font-serif">

          {/* Community */}
          <div className="min-w-[200px] flex flex-col items-start mb-6">
            <h3 className="font-bold text-lg mb-2">Community</h3>
            <a
              href="https://www.youtube.com/@diyoroder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 "
            >
              <FaYoutube className="mr-2" />
              Youtube
            </a>
            <a
              href="https://github.com/DiyorbekGaybullayev2001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 "
            >
              <RxGithubLogo className="mr-2" />
              GitHub
            </a>
            <a
              href="https://discord.gg/your-discord"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 "
            >
              <RxDiscordLogo className="mr-2" />
              Discord
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] flex flex-col items-start mb-6">
            <h3 className="font-bold text-lg mb-2">Social Media</h3>
            <a
              href="https://instagram.com/diyorcoder.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 "
            >
              <RxInstagramLogo className="mr-2" />
              Instagram
            </a>
            <a
              href="https://t.me/Developer_08_18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 "
            >
              <LiaTelegramPlane className="mr-2" />
              Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/diyorbek-gaybullayev-9a6b122a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-3 "
            >
              <RxLinkedinLogo className="mr-2" />
              LinkedIn
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] flex flex-col items-start mb-6">
            <h3 className="font-bold text-lg mb-2">About</h3>
            <a
              href="tel:+998500051038"
              className="flex items-center mb-3 "
            >
                <FiPhoneCall className="mr-2"/>
                Phone number
            </a>
            <a
              href="#about-me"
              className="flex items-center mb-3 "
            >
                <ImBooks className="mr-2"/>
              Learning about me
            </a>
            <a
              href="mailto:gaybullayevdiyorbek2001@gmail.com"
              className="flex items-center mb-3 "
            >
                <TfiEmail className="mr-2"/>
              Email
            </a>
          </div>
        </div>

        <div className="text-sm mt-8 font-mono text-center">
          &copy; diyorcoder 2025 Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
