"use client";

import { FaLocationArrow } from "react-icons/fa6";

import "react-icons/si";
import { cn } from "@/lib/utils";
import { PinContainer } from "./ui/Pin";
import { SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";


const NewProj = () => {

  const projects =[
    
  {
    title: "E-learning Platform",

    tech: [SiNextdotjs,SiReactquery,SiSupabase],
          
    link: "http://localhost:3000",

    cover: "/proj1.png",

    background: "bg-indigo-500",

  },

  {
    title: "E-Fly Platform",

    tech: [SiNextdotjs,SiReactquery,SiTailwindcss],
          
    link: "http://localhost:3000",

    cover: "/proj3.png",

    background: "bg-yellow-300",

  },

  {
    title: "Millionaire Lo-fi",

    tech: [SiNextdotjs,SiReactquery,SiTailwindcss],
          
    link: "http://localhost:3000",

    cover: "/proj3.png",

    background: "bg-orange-400",

  },


  {
    title: "Lorem Platform",

    tech: [SiNextdotjs,SiReactquery,SiTailwindcss],
          
    link: "/SaasDashboard",

    cover: "/proj3.png",

    background: "bg-neutral-50",

  },


];

  return (
    <div className="py-40 p-5 sm:p-0" id="projects">
      <h1 className="heading text-neutral-50">
        My{" "}
        <span className="text-purple"> Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
      {projects.map((project, index)=>{
       
       return <Link href={project.link} key={index}> 
       <div className={cn("p-5 rounded-md", project.background)}> 

        <DirectionAwareHover className=" w-full space-y-5 cursor-pointer"
        
        imageUrl={project.cover}
        
        >
        
        <h1 className="3xl font-bold">{project.title}</h1>

        <div className="flex items-center gap-5 pt-2">
          {project.tech.map((Icon,index)=>{

            return <Icon className="w-7 h-7 " key={index}/>
            
          })}
          <div className="flex underline justify-between items-center">
            <p className="flex lg:text-xl md:text-xs text-sm">View Project</p>
            <FaLocationArrow className="ms-3" color="Neutral-50"/>
          </div>
        </div>

        </DirectionAwareHover>

        
       </div>

       </Link>
      })}
      </div>




    </div>

    
  );
};

export default NewProj;
