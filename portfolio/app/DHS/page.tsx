"use client";

import { navItems } from "@/data";


import Footer from "@/components/Footer";


import { FloatingNav } from "@/components/ui/FloatingNavbar";

import Image from "next/image";
import SassImageTwo from '@/public/assests/Lancaster/DHSBig.png'
import HighLightsTwo from '@/public/assests/Lancaster/Shot3.png'
import HypoTwo from '@/public/assests/Lancaster/Rectangle 155712.png'
import ResearchTwo from '@/public/assests/Lancaster/Research2.jpg'
import UserFlowTwo from '@/public/assests/Lancaster/DHS Userflow.png'
import WFrameTwo from '@/public/assests/Lancaster/Shot2 (1).png'
import PlanTwo from '@/public/assests/Lancaster/bAlpha.gif'
import PlanTwo2 from '@/public/assests/Lancaster/b1.png'
import PlanTwo3 from '@/public/assests/Lancaster/b2.png'
import PlanTwo4 from '@/public/assests/Lancaster/b3.png'
import Numbers2 from '@/public/assests/Lancaster/num2.png'
import ConclusionTwo from '@/public/assests/Lancaster/MCCC.png'
import MyTeamTwo from "@/components/MyTeamTwo";


const Home = () => {
  return (
   <main className=" bg-gradient-to-b from-neutral-900 from-80% to-indigo-800 overflow-clip ">
     <div className=" ">
       <FloatingNav navItems={navItems} />
       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 "/>
         <Image
          className="absolute z-1 "
          src={SassImageTwo}
          alt='/'
          fill
          sizes="100vw"
          style={{
           objectFit: "cover"
          }} />
      <div className="relative top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-12 flex justify-center items-center text-3xl font-bold">
       <h2 className="p7-2">Distributed Heating System</h2>
         <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex  justify-center items-center font-light text-xl">
            <h3>Figma / Adobe Illustartor/ VB.NET</h3>
            </div>
      </div>

       </div>



<div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16">
<div className="col-start-2 col-span-4">
   <MyTeamTwo/>
</div>
   </div>
     

       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Project</p>
       <h2 className="font-bold text-2xl pb-5">Overview</h2>
       <p>
       Lancaster University operates a distributed heating system managed through Excel spreadsheets. These spreadsheets contain sensitive data regarding pipe load, heat generation, and system capacity, but the underlying formulas are proprietary and cannot be disclosed. To enhance the management of this system, a new software solution is required to visualize the system's stress and provide insights based on various scenarios.
       </p>


      </div>
    
    

      </div>
      
      <hr className="w-96 h-1 mx-auto my-7 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700 "/>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 1</p>
       <h2 className="font-bold text-2xl pb-5">Highlights</h2>
       <p>
       This initiative is part of a comprehensive strategic design approach aimed at enhancing the user experience, creating a seamless and consistent interface for managing system data, and actively promoting user engagement by enabling scenario-based analysis and real-time stress visualization of the distributed heating system.
       </p>


      </div>
      </div>

      <div className="pt-5">
        <Image
          className="mx-auto"
          src={HighLightsTwo}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 2</p>
       <h2 className="font-bold text-2xl pb-5">The Challenge</h2>
       <p>
       
       The reliance on Excel for managing the heating system poses challenges in visualizing data, conducting scenario analysis, and protecting proprietary information. A more efficient, secure, and user-friendly software solution is essential to address these needs.
       </p>
</div>
</div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 3</p>
       <h2 className="font-bold text-2xl pb-5">Hypothesis</h2>
       <p>
       

If a specialized software solution is developed for Lancaster University's distributed heating system that integrates Excel data visualization, stress calculation, and scenario modeling, then it will enhance the management and optimization of the heating system by providing secure, intuitive access to critical insights and trend analysis, thereby improving system performance and operational efficiency.
       
          </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={HypoTwo}
          alt='/'
          width={800}
          height={500}/>
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 4</p>
       <h2 className="font-bold text-2xl pb-5">Research and Analysis</h2>
       <p>
       1. Understanding the System: The team engaged with a consultant to learn about distributed heating systems, including flow rates, materials, and proprietary formulas used for calculations. This foundational knowledge was crucial for translating the system's complexities into software.
       </p>
<br></br>
<p>
2. Identifying Software Requirements: The team determined the software's needs, such as importing data from Excel, calculating system stress, running various scenarios, and ensuring data security to protect trade secrets.
</p>
<br></br>
<p>
3. Brainstorming Visualization Techniques: Initial ideas for visualization included using web technologies like Three.js and Grafana. However, after discussing the scope, the team opted for a desktop solution, considering the specific user base within the university.

</p>
<br></br>
<p>
4. User Flow Design: The importance of integrating Excel uploads into the user experience was highlighted, emphasizing the need for filtering outputs from Python calculations.
</p>
<br></br>

<p>
5. Wireframing: The designer preferred using Figma for wireframing, allowing for easier iterations and online storage. This phase included adapting pre-built components to fit the project's requirements.
</p>


<br></br>
 
       
<p>
6. High-Fidelity Design and Programming: The final design incorporated the university's colour palette, with programming done in VB.NET. The designer also created digital schematics from the university's drawn diagrams.
</p>

<br></br>

<p>
7. Feedback and Future Considerations: Reflecting on the project, the researcher and I expressed a desire to add features for live data tracking and historical graph storage, indicating an awareness of user needs for ongoing data management.
</p>
<p>
Overall, the research combined technical learning, user-centered design principles, and iterative development to create a tailored software solution for managing the distributed heating system.
</p>

</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={ResearchTwo}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 5</p>
       <h2 className="font-bold text-2xl pb-5">Userflow</h2>
       <p>
       
       When creating the user flow for this system, I emphasized the critical role of uploading the Excel sheet, even though we had performed the calculations separately using Python. The output sheet generated by Python is essential for filtering the final results, which is a key function of the system. This consideration guided my coding and UX design process throughout the project.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={UserFlowTwo}
          alt='/'
          width={800}
          height={500}/>
      
      </div>




      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 6</p>
       <h2 className="font-bold text-2xl pb-5">Wireframing & Design</h2>
       <p>
       Next, I focused on the wireframing aspect of the project. I typically begin this process by utilizing pre-built components in Figma, customizing them to meet the specific requirements of my design. I prefer working in Figma over traditional pen and paper because it allows for quick iterations and centralizes all my wireframes online, making it easy to experiment with different layouts and designs.
       </p>
       <br></br>
       <p>
       For the high-fidelity design and programming phase, I incorporated the university’s color palette as the primary scheme, complemented by white, black, and grey as accent colors. This choice not only aligns with the university's branding but also enhances usability and visual appeal.
       I developed the various screens using VB.NET and employed Adobe Illustrator to digitize the university's drawn schematics, carefully removing any sensitive information while retaining the essential elements. Afterward, I overlaid these digital schematics with data exported from Excel spreadsheets, linking this information to each pipe and building within the Distributed Heating System (DHS) network.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={WFrameTwo}
          alt='/'
          width={800}
          height={500}/>
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 7</p>
       <h2 className="font-bold text-2xl pb-5"> Executing my plan</h2>
       <p>
       Ifirst created a design library in Figma for this project, 
       I followed a structured approach rooted in user-centric design.
        I began by analyzing the existing dashboard, which was cluttered with over 17 widgets,
         many of which were automatically disabled based on user permissions. 
         I streamlined this by designing a modular system with customizable widgets tailored to different user types,
          such as administrators and standard users. 
          Drawing from competitor analysis of platforms like Monday.com and applying insights from Keen themes, 
          I designed a more visually cohesive and responsive UI, focusing on mobile usability. 
          Each widget—such as the to-do list and news feed—was redesigned with intuitive features
           like expandable views and easy task management. By prototyping these elements in Figma,
            I iterated on the design to ensure it reduced clutter, improved navigation speed,
             and maintained visual consistency, all while increasing user satisfaction and adaptability 
             across different devices.


       </p>
</div>
</div>


<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> Map Type:</h3>
       <p>
       I enhanced the DHS software by incorporating different map types—"satellite," "dark," and "building schematics"—to improve usability. 
      </p>
      <br></br>
       <p>
       The satellite view provided a real-world layout of the university's infrastructure, helping users visualize the system in its geographical context.  </p>
       <br></br>
     <p>
     The dark mode offered a high-contrast, low-light option for better focus and reduced eye strain.  </p>
     <br></br>

     <p>
     The building schematics focused on the pipe network within each building, using digital schematics I converted hand-drawn schematics into digital formats using Adobe Illustrator and overlaid them with data from the spreadsheets. This view allowed users to drill down into specific parts of the DHS, focusing on the pipe network and individual building systems without clutter from external map elements. </p>
</div>
</div>

<div className="pt-5">
        <Image
        unoptimized={true}
          className="mx-auto"
          src={PlanTwo}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> Pipe Data:</h3>
       <p>
       In the Lancaster University DHS project, I focused on how pipe size affects flow rates and system efficiency. Larger pipes handle more heat but increase costs and heat loss, while smaller pipes are more efficient but may struggle with demand. I worked with the engineering consultant to understand these factors and integrated them into the software, allowing users to simulate changes like pipe size adjustments and visualize their impact on system stress. This helped optimize the system's performance while protecting proprietary data and formulas.
       </p>
     
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanTwo2}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> Network Size</h3>
       <p>
       In the distributed heating system (DHS) project at Lancaster University, I visualized the network size, which included mapping buildings and heat-distributing pipes. Using Excel data on pipe capacity, I developed software that overlaid this information onto a digital schematic. This allowed users to assess the network size and run stress scenarios, showing how changes like pipe modifications or heat generation would impact the system. My solution made it easier to manage the system's complexity and ensure stability across the network.
       </p>
     
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanTwo3}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> Building Info</h3>
       <p>
       In my work on Lancaster University's distributed heating system (DHS), I accounted for how building size affects heat distribution, with larger buildings placing more load on the system. I ensured the pipe sizes and materials could handle this, considering how temperature changes impact heat transfer efficiency.
       </p>

       <br></br>
       <p>
       I designed software that calculates system stress and lets users run scenarios to see how modifications affect the network. To simplify monitoring, I added a traffic light system: red indicates stress, green shows optimal performance, and yellow flags underperformance. This allows users to quickly identify and address potential issues across the system.
       </p>
     
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanTwo4}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-centerr ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 8</p>
       <h2 className="font-bold text-2xl pb-5">What the numbers say</h2>
       <p>
       Some key improvements achieved after the softare implementation of Lancaster University's Distributed Heating System (DHS) software solution include:       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={Numbers2}
          alt='/'
          width={800}
          height={500}/>
      
      </div>





      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 9</p>
       <h2 className="font-bold text-2xl pb-5"> Conclusion </h2>
       <p>
       The implementation of the new software solution for Lancaster University's distributed heating system represents a significant advancement over the previous Excel-based management approach. By enabling streamlined data visualization and stress analysis, the software not only enhances the accuracy of calculations but also reduces processing time dramatically. User efficiency has increased, allowing more team members to engage effectively with the system, while actionable insights derived from the data have risen significantly. The secure handling of sensitive formulas and data further mitigates risks associated with the previous method.

        </p>

        <br></br>
        <p>    
        Overall, the project has successfully addressed the university's needs, transforming how the heating system is managed and paving the way for improved decision-making and operational efficiency.
        </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={ConclusionTwo}
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
