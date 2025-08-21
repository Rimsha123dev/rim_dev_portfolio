import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full grid gap-10 px-10 md:grid-cols-3">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js web"
          description="A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive with smooth animations."
          link="https://mynextjs15app.vercel.app/"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Crypto Dashboard"
          description="Real-time cryptocurrency dashboard using Next.js, Tailwind CSS, TypeScript, and Coingecko API."
          link="https://cryptodashboard-1rj7.vercel.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Burger Website"
          description="A modern and responsive burger website showcasing creative UI/UX using Next.js and Tailwind CSS."
          link="https://burgersite-w9ei.vercel.app/"
        />
        {/* <ProjectCard
          src="/itsolutions.png"
          title="IT Solutions Company"
          description="Professional business website for IT Solutions company, fully responsive and designed with Tailwind CSS."
          link="https://itsolution-amber.vercel.app/"
        />
        <ProjectCard
          src="/ecommerce.png"
          title="E-Commerce Store"
          description="Full e-commerce frontend built with Next.js, Redux Toolkit, Tailwind CSS, and TypeScript. Includes cart & filters."
          link="https://github.com/Rimsha123dev/e-commerce"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
