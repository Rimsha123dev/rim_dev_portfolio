// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

// // You can replace this with any girl avatar/logo you like.
// // For now, let's use a free avatar from ui-avatars
// const avatar =
//   "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Rimsha";

// const Navbar = () => {
//   return (
//     <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100]  left-0 right-0 px-10">
//       <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
//         {/* Logo + Name */}
//         <Link href="#about-me" className="h-auto w-auto flex flex-row items-center">
//         <Image
//   src="/logo.svg"
//   alt="logo"
//   width={50}
//   height={50}
//   className="cursor-pointer rounded-full hover:scale-105 transition"
// />

//           <span className="font-bold ml-[10px] hidden md:block text-gray-300">
//             Rimsha Dev
//           </span>
//         </Link>

//         {/* Navigation Links */}
//         <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
//           <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-sm md:text-base">
//             <Link href="#about-me" className="cursor-pointer hover:text-purple-400 transition">
//               About
//             </Link>
//             <Link href="#skills" className="cursor-pointer hover:text-purple-400 transition">
//               Skills
//             </Link>
//             <Link href="#projects" className="cursor-pointer hover:text-purple-400 transition">
//               Projects
//             </Link>
//              <Link href="#blog" className="cursor-pointer hover:text-purple-400 transition">
//       Blog
//     </Link>
//             <Link href="#contact" className="cursor-pointer hover:text-purple-400 transition">
//               Contact
//             </Link>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex flex-row gap-5 text-gray-300">
//           <Link href="https://github.com/Rimsha123dev" target="_blank">
//             <Github className="w-6 h-6 hover:text-purple-400 transition" />
//           </Link>
//           <Link
//             href="https://www.linkedin.com/in/rimsha-ali-73872730b"
//             target="_blank"
//           >
//             <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
//           </Link>
//           <Link href="mailto:rimshaali9999@gmail.com">
//             <Mail className="w-6 h-6 hover:text-purple-400 transition" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100] px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={45}
            height={45}
            className="cursor-pointer rounded-full hover:scale-105 transition"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Rimsha Dev
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex">
          <div className="flex items-center gap-6 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 text-sm md:text-base">
            <Link
              href="#about-me"
              className="cursor-pointer hover:text-purple-400 transition"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Projects
            </Link>
            <Link
              href="#blog"
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex flex-row gap-5 text-gray-300">
          <Link href="https://github.com/Rimsha123dev" target="_blank">
            <Github className="w-6 h-6 hover:text-purple-400 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rimsha-ali-73872730b"
            target="_blank"
          >
            <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
          </Link>
          <Link href="mailto:rimshaali9999@gmail.com">
            <Mail className="w-6 h-6 hover:text-purple-400 transition" />
          </Link>

<Link href="/dashboard" className="hover:text-purple-400 transition">
  Dashboard
</Link>




        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-5 bg-[#030014]/95 py-6 rounded-2xl shadow-lg">
          <Link
            href="#about-me"
            className="hover:text-purple-400 transition text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-purple-400 transition text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-purple-400 transition text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#blog"
            className="hover:text-purple-400 transition text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="hover:text-purple-400 transition text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Social Icons Mobile */}
          <div className="flex flex-row gap-6 text-gray-300 pt-3">
            <Link href="https://github.com/Rimsha123dev" target="_blank">
              <Github className="w-6 h-6 hover:text-purple-400 transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rimsha-ali-73872730b"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
            </Link>
            <Link href="mailto:rimshaali9999@gmail.com">
              <Mail className="w-6 h-6 hover:text-purple-400 transition" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
