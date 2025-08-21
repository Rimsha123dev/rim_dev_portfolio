

// import React from "react";
// import Image from "next/image";

// interface BlogCardProps {
//   src: string;
//   title: string;
//   description: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ src, title, description }) => {
//   return (
//     <div className="group relative w-full md:w-1/3 rounded-2xl shadow-lg bg-[#0a0a0a] border border-gray-800 overflow-hidden">
//       {/* Image wrapper with hover zoom */}
//       <div className="overflow-hidden">
//         <Image
//           src={src}
//           alt={title}
//           width={500}
//           height={300}
//           className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5 flex flex-col gap-3 relative z-20">
//         <h2 className="text-xl font-semibold text-white">{title}</h2>
//         <p className="text-gray-400 text-sm">{description}</p>

//         {/* Button */}
//         <button className="mt-3 w-fit px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium transition-all duration-300 hover:from-purple-600 hover:to-cyan-600 shadow-md hover:shadow-lg relative z-30">
//           Read More
//         </button>
//       </div>

//       {/* Glow ring on hover */}
//       <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/20 group-hover:ring-purple-500/40 transition duration-300"></div>
//     </div>
//   );
// };

// export default BlogCard;

"use client";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface Props {
  src: string | StaticImageData;
  title: string;
  description: string;
  details?: string;
  date?: string; // 👈 new optional prop for publish date
}

const BlogCard = ({ src, title, description, details, date }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0a001a]">
      {/* Blog Thumbnail */}
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Blog Preview */}
      <div className="relative p-5 flex flex-col items-start z-20">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 line-clamp-3">{description}</p>

        {/* Read More with Popup */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-5 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold transition-all duration-300 hover:from-purple-600 hover:to-cyan-600 shadow-md hover:shadow-lg">
              Read More
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-gray-900 to-black text-white border border-gray-800 shadow-2xl">
            {/* Header */}
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-purple-400">
                {title}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                {date ? `Published on: ${date}` : "Published: Jan 2025"}
              </DialogDescription>
            </DialogHeader>

            {/* Blog Image */}
            <div className="mt-4 w-full">
              <Image
                src={src}
                alt={title}
                width={1000}
                height={600}
                className="w-full h-72 object-cover rounded-xl"
              />
            </div>

            {/* Full Blog Text */}
            <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
              <p>{description}</p>
              <p>{details}</p>
            </div>

            {/* Close Button always visible */}
            <div className="sticky bottom-0 bg-gradient-to-t from-black/90 to-transparent pt-4 flex justify-end">
              <DialogClose asChild>
                <button className="px-5 py-2 mb-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-md transition">
                  Close
                </button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/20 group-hover:ring-purple-500/40 transition duration-300"></div>
    </div>
  );
};

export default BlogCard;
