"use client";

import { navItems } from "@/data";


import Footer from "@/components/Footer";


import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import SassImage from '@/public/assests/Coordinate/property.jpg'
import MovingCardsOne from "@/components/MovingCardsOne";

const Home = () => {
  return (
    <main className=" bg-neutral-900 overflow-clip ">
      <div className=" ">
        <FloatingNav navItems={navItems} />
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 "/>
          <Image className="absolute z-1 " layout="fill" objectFit="cover" src={SassImage} alt='/' />
       <div className="relative top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-12 flex justify-center items-center text-3xl font-bold">
        <h2 className="p7-2">Saas Dashboard</h2>
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex  justify-center items-center font-light text-xl">
             <h3>Figma / Jira /Html / CSS</h3>
             </div>
       </div>
       
        </div>

    <div className=" pt-16 text-white text-center items-center">

    <h2 className="font-bold text-2xl pb-5">Technologies Used:</h2>
    <MovingCardsOne/>
    </div>
      

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white text-justify items-center ">
        <div className="col-start-2 col-span-4">
        <p className="pb-4"> Project</p>
        <h2 className="font-bold text-2xl pb-5">Overview</h2>
        <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Cras elementum est nec nunc finibus ultrices. Nunc malesuada rhoncus ipsum id aliquet. 
        Quisque gravida felis sit amet magna mattis posuere. Sed in nunc viverra leo venenatis euismod. 
        Proin ligula risus, blandit in sem volutpat, consectetur euismod neque.
        Praesent pulvinar elit a leo tempor mattis. Proin efficitur, ex eu matti lacerat, 
        </p>


       </div>

      

       <div className="col-start-2 col-span-1">
       <h2 className="font-bold text-2xl pb-5">My Role</h2>
       <p>
        Vestibulum ante ipsum primis in faucibus
        </p>
       </div>

       <div className="col-start-3 col-span-1">
       <h2 className="font-bold text-2xl pb-5">Team</h2>
       <p>
        Vestibulum ante ipsum primis in faucibus
        </p>
       </div>

       <div className="col-start-4 col-span-1">
       <h2 className="font-bold text-2xl pb-5">Tools</h2>
       <p>
        Vestibulum ante ipsum primis in faucibus
        </p>
       </div>

       <div className="col-start-5 col-span-1">
       <h2 className="font-bold text-2xl pb-5">Timeline</h2>
       <p>
        Vestibulum ante ipsum primis in faucibus
        </p>
       </div>

       </div>
       
       <hr className="w-56 h-1 mx-auto my-7 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 "/>

      
       



        <Footer />
      </div>


    </main>
  );
};

export default Home;
