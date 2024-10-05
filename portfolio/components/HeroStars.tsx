
"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FaLocationArrow } from "react-icons/fa6";



import { HeroHighlightJoel } from "./HeroHighlight";

const HeroStars = () => {
  return (
    <div className="min-h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative max-w-screen">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        
        <HeroHighlightJoel/>
        
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default HeroStars;
