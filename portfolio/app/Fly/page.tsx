"use client";

import { navItems } from "@/data";


import Footer from "@/components/Footer";


import { FloatingNav } from "@/components/ui/FloatingNavbar";

import Image from "next/image";
import FlyHero from '@/public/assests/Fly/FlyHeader.png'
import FlySoon from '@/public/assests/Fly/FlySoon.png'



const Home = () => {
  return (
   <main className=" bg-gradient-to-b from-neutral-900 from-60% to-indigo-800 overflow-clip ">
     <div className=" ">
       <FloatingNav navItems={navItems} />
       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 "/>
         <Image
          className="absolute z-1 "
          src={FlyHero}
          alt='/'
          fill
          sizes="100vw"
          style={{
           objectFit: "cover"
          }} />
      <div className="relative top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-12 flex justify-center items-center text-3xl font-bold">
       <h2 className="p7-2">Fly Mobile App</h2>
         <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex  justify-center items-center font-light text-xl">
            <h3>Figma / Flutter</h3>
            </div>
      </div>

       </div>
    
       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white text-center items-center ">
       <div className="col-start-2 col-span-4">
       <h2 className="font-bold text-2xl pb-5">Launching in Novermber</h2>
       <p>
      Fly, the cutting-edge event and clothing startup app, seeks a UI/UX design that matches its ambitious vision. The app's interface should not only embody the company's bold aspirations but also resonate deeply with its target audience, creating an engaging and memorable user experience.
       </p>

       <h1 className="underline text-lg pt-5 font-bold text-purple">
       <a target="_blank" href="http://flysenga.com/">
       Visit site
        </a>
       </h1>



      </div>
      </div>

      <div className="pt-5">
        <Image
          className="mx-auto"
          src={FlySoon}
          alt='/'
          width={800}
          height={500}/>
      
      </div>




    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 ">
    <div className="col-start-1 col-span-6">
      <Footer/>
      </div>
      </div>
     </div>
     


     


   </main>
  );
};

export default Home;
