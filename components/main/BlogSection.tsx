import React from "react";
import BlogCard from "../sub/BlogCard";

const Blog = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="blog"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Blog
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <BlogCard
  src="/blog1.jpg"
  title="Mastering Next.js 15"
  description="Learn how to build blazing-fast apps using the latest Next.js features."
  details="This blog goes deep into Next.js 15 — covering App Router, Server Components, API routes, and deployment best practices.Blog content encompasses various types of written pieces published on a blog, ranging from personal narratives to in-depth tutorials and industry news. Blogs are dynamic platforms where authors share their thoughts, experiences, and expertise, often engaging with readers through comments and interactive elements. Creating effective blog content involves understanding your audience, crafting compelling headlines, structuring content for readability, and optimizing for search engine"
  date="August 15, 2025"
/>

<BlogCard
  src="/blog2.jpg"
  title="Styling with TailwindCSS"
  description="A deep dive into creating modern, responsive designs using Tailwind."
  details="Covers utility-first workflows, responsive design, dark mode handling, and advanced Tailwind configuration."
  date="August 15, 2025"
/>

<BlogCard
  src="/blog3.jpg"
  title="Frontend Career Growth"
  description="Tips and strategies for landing your first job as a frontend developer."
  details="Practical tips on portfolio building, networking, internships, and how to stand out in frontend interviews.Blog content encompasses various types of written pieces published on a blog, ranging from personal narratives to in-depth tutorials and industry news. Blogs are dynamic platforms where authors share their thoughts, experiences, and expertise, often engaging with readers through comments and interactive elements. Creating effective blog content involves understanding your audience, crafting compelling headlines, structuring content for readability, and optimizing for search engine"
   date="August 15, 2025"
/>

      </div>
    </div>
  );
};

export default Blog;
