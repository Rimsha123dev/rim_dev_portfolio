import React from "react";
import HeroContent from "../sub/HeroContent";


const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[0] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
       <div className="relative z-20">
      <HeroContent />
    </div>
    </div>
    
  );
};

export default Hero;