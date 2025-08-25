
// import Image from "next/image";
// import React from "react";
// import { StaticImageData } from "next/image";

// interface Props {
//   src: string | StaticImageData;
//   title: string;
//   description: string;
//   link: string;
// }

// const ProjectCard = ({ src, title, description, link }: Props) => {
//   return (
//     <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0a001a]">
//       {/* Image wrapper */}
//       <div className="overflow-hidden">
//         <Image
//           src={src}
//           alt={title}
//           width={1000}
//           height={600}
//           className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative p-5 flex flex-col items-start z-20">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>

//         {/* Button */}
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-5 relative z-50"
//         >
//           <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold transition-all duration-300 hover:from-purple-600 hover:to-cyan-600 shadow-md hover:shadow-lg">
//             View Project
//           </button>
//         </a>
//       </div>

//       {/* Card hover effect */}
//       <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/20 group-hover:ring-purple-500/40 transition duration-300"></div>
//     </div>
//   );
// };

// export default ProjectCard;





import Image from "next/image";
import React from "react";

interface Props {
  src: string; // 👈 ab string rakha because Sanity images are URLs
  title: string;
  description: string;
  link: string;
  
}

const ProjectCard = ({ src, title, link }: Props) => {
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
        {/* <p className="mt-2 text-gray-300">{description}</p> */}

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
