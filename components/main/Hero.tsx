import React from "react";
import HeroContent from "../sub/HeroContent";


const Hero = () => {
  return (
    // <div className="relative flex flex-col h-full w-full" id="about-me">
    <div 
  className="relative flex flex-col w-full min-h-[80vh] sm:min-h-[100vh] overflow-hidden"  // 
  id="about-me">
      <video
        autoPlay
        muted
        loop
          playsInline
      //   className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[0] object-cover "
      // >
        className="absolute top-[-340px] rotate-180 left-0 w-full h-full object-cover z-[0] object-cover"  // 
  >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
       {/* <div className="relative z-20"> */}
        <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-8">
      <HeroContent />
    </div>
    </div>
    
  );
};

export default Hero;