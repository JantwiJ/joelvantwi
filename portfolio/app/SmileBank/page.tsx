"use client";

import { navItems } from "@/data";


import Footer from "@/components/Footer";


import { FloatingNav } from "@/components/ui/FloatingNavbar";

import Image from "next/image";
import Hero from '@/public/assests/Smile/SmileBigView.png'
import HighLightsSmile from '@/public/assests/Smile/Highlights.png'
import Challenge from '@/public/assests/Smile/oldWeb.png'
import HypoThesisNew from '@/public/assests/Smile/Hypothesis.png'
import ResearchNew from '@/public/assests/Smile/research.jpg'
import UserFlowSmile from '@/public/assests/Smile/Wireframe.png'
import mobilepic from '@/public/assests/Smile/mobile.png'
import webpic from '@/public/assests/Smile/web.png'
import ConclusionSmile from '@/public/assests/Smile/newWeb.png'
import MyTeamThree from "@/components/MyTeamThree";


const Home = () => {
  return (
   <main className=" bg-gradient-to-b from-neutral-900 from-80% to-indigo-800 overflow-clip ">
     <div className=" ">
       <FloatingNav navItems={navItems} />
       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 "/>
         <Image
          className="absolute z-1 "
          src={Hero}
          alt='/'
          fill
          sizes="100vw"
          style={{
           objectFit: "cover"
          }} />
      <div className="relative top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-12 flex justify-center items-center text-3xl font-bold">
       <h2 className="p7-2">Smile Digital Bank</h2>
         <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex  justify-center items-center font-light text-xl">
            <h3>Figma</h3>
            </div>
      </div>

       </div>



<div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16">
<div className="col-start-2 col-span-4">
   <MyTeamThree/>
</div>
   </div>
     

       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Project</p>
       <h2 className="font-bold text-2xl pb-5">Overview</h2>
       <p>
       This redesign was part of a design challenge aimed at enhancing Smile Digital Bank's overall digital presence. The primary goal was to elevate user experience by crafting a modern, seamless, and inviting homepage that appeals to both new and existing customers.
       </p>


      </div>
    
    

      </div>
      
      <hr className="w-96 h-1 mx-auto my-7 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700 "/>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 1</p>
       <h2 className="font-bold text-2xl pb-5">Highlights</h2>
       <p>
       An overview of the complete redesign and its key features, highlighting how the new homepage experience that aligns with Smile Digital Bank's brand identity.
       </p>


      </div>
      </div>

      <div className="pt-5">
        <Image
          className="mx-auto"
          src={HighLightsSmile}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 2</p>
       <h2 className="font-bold text-2xl pb-5">The Challenge</h2>
       <p>
       The existing homepage of Smile Digital Bank was outdated and cluttered, failing to meet the sleek and streamlined expectations of today's digital users. To reposition Smile as a forward-thinking bank, a complete visual redesign was necessary, focusing on enhancing accessibility, responsiveness, and the overall user journey.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={Challenge}
          alt='/'
          width={800}
          height={500}/>
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 3</p>
       <h2 className="font-bold text-2xl pb-5">Hypothesis</h2>
       <p>
       By implementing a modern, clean, and minimalist design for Smile's homepage, we aimed to attract more users, boost retention rates, and establish Smile as a progressive digital bank. The redesign would declutter the interface and prioritize user-centric design, enhancing user satisfaction and accessibility to key features. 
          </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={HypoThesisNew}
          alt='/'
          width={800}
          height={500}/>
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 4</p>
       <h2 className="font-bold text-2xl pb-5">Research and Analysis</h2>
       <h3 className="font-bold text-1xl">Competitor Analysis:</h3>
       <p>
       I examined the websites of leading digital banks, including Halifax, NatWest, Lloyds Bank, and Revolut, to identify common elements in modern banking UIs. I focused on how these platforms organized information and guided users through a clear journey.  
       </p>

<br></br>
<h3 className="font-bold text-1xl">UI Trends Exploration:</h3>
<p>
To keep Smile's homepage relevant, I reviewed contemporary design trends such as minimalist layouts, bold typography, and increased whitespace, ensuring a fresh and engaging design.
</p>

</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={ResearchNew}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 5</p>
       <h2 className="font-bold text-2xl pb-5">Wireframing</h2>
       <p>
       The new flow prioritizes intuitive navigation, providing direct access to core services like account management, loan applications, and customer support. Key features are now easily accessible, reducing friction from the previous design and enhancing navigability for users of all experience levels
       </p>
       <br></br>
       <p>
       Using Figma, I created low-fidelity wireframes to outline the structure and rapidly test various layouts. This phase focused on establishing an effective information hierarchy while ensuring that critical features were prominently displayed. After several iterations and feedback rounds, I progressed to high-fidelity designs.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={UserFlowSmile}
          alt='/'
          width={800}
          height={500}/>
      
      </div>




      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 6</p>
       <h2 className="font-bold text-2xl pb-5">Design Process & Executing my plan</h2>
       <p>
       Adopting a user-centered design approach, I developed a design library in Figma to maintain consistent styling across the homepage. The color scheme was updated to reflect Smile's brand colors with a modern twist. Each section, including the hero area, features a clean, minimalist layout that utilizes ample whitespace for clarity. Bold typography highlights key elements, contributing to a contemporary aesthetic. Icons were integrated to emphasize core services, resulting in a visually engaging and functional layout.
       </p>
     
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={webpic}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="pt-8">
        <Image
          className="mx-auto"
          src={mobilepic}
          alt='/'
          width={600}
          height={500}/>
      
      </div>






      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 7</p>
       <h2 className="font-bold text-2xl pb-5"> Conclusion </h2>
       <p>
       The Smile Digital Bank homepage redesign effectively met the brand's goals of modernizing its digital presence and enhancing user experience. Transitioning from an outdated layout to a clean, streamlined design, Smile now provides a welcoming and efficient digital entry point for users. This new design better reflects the bank's innovative ethos, ensuring customers feel they are engaging with a trusted and forward-thinking digital banking partner.
        </p>

</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={ConclusionSmile}
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
