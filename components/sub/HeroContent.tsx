"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader,DialogClose, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link"; // ✅ Add this
import mainicond from "@/public/Space Portfolio Assets/mainIconsdark.svg";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full relative z-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Top Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Rimsha Dev Portfolio</h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Web Developer with strong skills in{" "}
          <span className="text-purple-400">Next.js, Shadcn, and Tailwind CSS</span>.
          I love creating modern, responsive, and user-friendly web interfaces that bring ideas to life.
          Currently, I am expanding my expertise into{" "}
          <span className="text-purple-400">full-stack development</span> with Supabase and Sanity CMS.
          My goal is to grow through real-world projects, remote internships, and collaboration with innovative teams.
        </motion.p>

        {/*  Learn More Button → scrolls to About Section */}
        <motion.div variants={slideInFromLeft(1)}>
           <Dialog>
        <DialogTrigger asChild>
          <Button className="  mt-6 px-6 py-3 text-lg rounded-xl bg-purple-600 hover:bg-purple-700 text-white">
            Learn More
          </Button>
        </DialogTrigger>
        <DialogContent className="  max-w-2xl rounded-2xl bg-gradient-to-b from-gray-900 to-black text-white border border-gray-800 shadow-2xl">
  <DialogHeader>
    <DialogTitle className="text-2xl font-bold text-purple-400">About Me</DialogTitle>
    <DialogDescription className="text-gray-300">
      I’m a frontend developer passionate about building clean, responsive, and modern web apps 
    </DialogDescription>
  </DialogHeader>

  <div className="space-y-6 mt-4">
    {/* Bio */}
    <section>
      <h3 className="text-lg font-semibold text-purple-300">Bio</h3>
      <p className="text-gray-300">
        I specialize in React, Next.js, and Tailwind, crafting elegant UIs with a focus on performance and accessibility.
      </p>
    </section>

    {/* Skills */}
    <section>
      <h3 className="text-lg font-semibold text-purple-300">Skills</h3>
      <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js</li>
        <li>Tailwind CSS</li>
        <li>FastAPI</li>
        <li>PostgreSQL / MongoDB</li>
        <li>GitHub / Docker</li>
      </ul>
    </section>

    {/* Education */}
    <section>
      <h3 className="text-lg font-semibold text-purple-300">Education</h3>
      <p className="text-gray-300">Bachelor’s in Computer Science (BSCS)</p>
    </section>

    {/* Experience */}
    <section>
      <h3 className="text-lg font-semibold text-purple-300">Experience</h3>
      <p className="text-gray-300">Frontend Developer Intern — built real-world apps with Next.js & Tailwind.</p>
    </section>
  </div>

  <div className="mt-6 flex justify-end">
    <DialogClose asChild>
      <button className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md transition">
        Close
      </button>
    </DialogClose>
  </div>
</DialogContent>
      </Dialog>
        </motion.div>
      </div>

      {/* Right Side Illustration */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src={mainicond} alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
