import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-300 border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side */}
        <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Rimsha Dev
        </h2>

        {/* Center - Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Rimsha123dev"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <RxGithubLogo size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rimsha-ali-73872730b"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <RxLinkedinLogo size={20} /> LinkedIn
          </a>
          <a
            href="mailto:rimshaali9999@gmail.com"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <MdEmail size={20} /> Email
          </a>
        </div>

        {/* Right Side */}
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Rimsha Dev. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
