"use client";

import { FaLocationArrow } from "react-icons/fa6";

import "react-icons/si";
import { cn } from "@/lib/utils";
import { SiFigma, SiFlutter, SiVisualstudio, SiWordpress } from "react-icons/si";
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";


const NewProj = () => {

  const projects =[
    
  {
    title: "Coordinate Saas Dashboard",

    tech: [SiFigma],
          
    link: "/SaasDashboard",

    cover: "/CoordinateMini.png",

    background: "bg-indigo-500",

  },

  {
    title: "DHS",

    tech: [SiFigma,SiVisualstudio ],
          
    link: "/DHS",

    cover: "/DHSMini.png",

    background: "bg-neutral-50",

  },

  {
    title: "Smile Bank",

    tech: [SiFigma],
          
    link: "/SmileBank",

    cover: "/SmileBankMini.png",

    background: "bg-pink-700",

  },

  {
    title: "Fly",

    tech: [SiFigma,SiFlutter],
          
    link: "/Fly",

    cover: "/FlyMini.png",

    background: "bg-orange-400",

  },

  {
    title: "Morecribs",

    tech: [SiFigma ,SiWordpress],
          
    link: "https://morecribs.com/",

    cover: "/MorecribsMini.png",

    background: "bg-yellow-300",

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
            <p className="flex lg:text-xl md:text-xs text-sm">View</p>
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
