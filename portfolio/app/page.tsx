"use client";

import { navItems } from "@/data";


import Footer from "@/components/Footer";

import Experience from "@/components/Experience";
import RecentProjects from "@/components/NewProj";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import HeroStars from "@/components/HeroStars";
import NewProj from "@/components/NewProj";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 from-30% to-indigo-800 relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div id="home"></div>
        <FloatingNav navItems={navItems} />
        <HeroStars />
       
        <NewProj/>
  
        
        <Experience />
     
        <Footer />
      </div>
    </main>
  );
};

export default Home;
