// import Image from "next/image";
// import React from "react";
// import { StaticImageData } from "next/image";
// import Link from "next/link";

// interface Props {
//   src: string | StaticImageData;
//   title: string;
//   description: string;
//   link: string; // 👈 new prop for project link
// }

// const ProjectCard = ({ src, title, description, link }: Props) => {
//    console.log("Project link:", link);
  
//   return (
//     <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] transform transition duration-300 hover:scale-105 hover:shadow-purple-500/50 z-10">
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={600}
//         className="w-full object-cover relative z-0"
//       />

//       <div className="relative p-4 flex flex-col items-start">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>

//         {/* View Project button */}
//           <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block mt-5 z-20"
//       >
//         <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg">
//           View Project
//         </button>
//       </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0a001a]">
      {/* Image wrapper */}
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative p-5 flex flex-col items-start z-20">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 relative z-50"
        >
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold transition-all duration-300 hover:from-purple-600 hover:to-cyan-600 shadow-md hover:shadow-lg">
            View Project
          </button>
        </a>
      </div>

      {/* Card hover effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/20 group-hover:ring-purple-500/40 transition duration-300"></div>
    </div>
  );
};

export default ProjectCard;
