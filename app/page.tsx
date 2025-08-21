import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import BlogSection from "@/components/main/BlogSection";
import ContactSection from "@/components/main/ContactSection";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Hero />
      <Skills />
      <Encryption />
      <Projects />
       <BlogSection />
      <ContactSection />
        
        
        
        </div>








    </main>
  );
}
