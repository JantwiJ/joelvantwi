"use client";

import { navItems } from "@/data";


import Footer from "@/components/Footer";


import { FloatingNav } from "@/components/ui/FloatingNavbar";

import Image from "next/image";
import SassImage from '@/public/assests/Coordinate/CoordinateBigView.png'
import HighLightsOne from '@/public/assests/Coordinate/Shot2.png'
import HypoOne from '@/public/assests/Coordinate/Hypo.jpg'
import ResearchOne from '@/public/assests/Coordinate/undrawcustomer.svg'
import UserFlowOne from '@/public/assests/Coordinate/UserflowCoordinate.png'
import WFrameOne from '@/public/assests/Coordinate/wireframe.gif'
import PlanOne from '@/public/assests/Coordinate/F1.png'
import PlanOne2 from '@/public/assests/Coordinate/f2.png'
import PlanOne3 from '@/public/assests/Coordinate/f3.gif'
import Numbers from '@/public/assests/Coordinate/Numbers.png'
import ConclusionOne from '@/public/assests/Coordinate/Conc.png'
import MyTeamVone from "@/components/MyTeamVone";


const Home = () => {
  return (
   <main className=" bg-gradient-to-b from-neutral-900 from-80% to-indigo-800 overflow-clip ">
     <div className=" ">
       <FloatingNav navItems={navItems} />
       <div className="w-screen h-[30vh] lg:h-[40vh] relative">
         <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 "/>
         <Image
          className="absolute z-1 "
          src={SassImage}
          alt='/'
          fill
          sizes="100vw"
          style={{
           objectFit: "cover"
          }} />
      <div className="relative top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-12 flex justify-center items-center text-3xl font-bold">
       <h2 className="p7-2">Saas Dashboard</h2>
         <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 flex  justify-center items-center font-light text-xl">
            <h3>Figma / Jira / Unsplash </h3>
            </div>
      </div>

       </div>



<div className=" max-w-[1240px] mx-auto p-2 grid sm:*:grid-cols-1 md:grid-cols-6 gap-8 pt-16">
<div className="col-start-2 col-span-4">
   <MyTeamVone/>
</div>
   </div>
     

       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Project</p>
       <h2 className="font-bold text-2xl pb-5">Overview</h2>
       <p>
       The goal of this project is to redesign the current dashboard to improve usability and responsiveness for a diverse range of customers in the sports coordination sector. 
       </p>


      </div>
    
    

      </div>
      
      <hr className="w-96 h-1 mx-auto my-7 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700 "/>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 1</p>
       <h2 className="font-bold text-2xl pb-5">Highlights</h2>
       <p>
       This initiative is part of a comprehensive strategic design blueprint focused on elevating the user experience, creating a seamless and consistent interface, and actively promoting customer engagement. 
       </p>


      </div>
      </div>

      <div className="pt-5">
        <Image
          className="mx-auto"
          src={HighLightsOne}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 2</p>
       <h2 className="font-bold text-2xl pb-5">The Challenge</h2>
       <p>
       
        The current dashboard is overcrowded with more than 17 widget tables,
         many of which are automatically disabled depending on the user's permission level and customer type.
        To better serve the diverse needs of Coordinate Sport's users,
        the UI and UX require a complete redesign to make them more dynamic and responsive.
 
       </p>
</div>
</div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 3</p>
       <h2 className="font-bold text-2xl pb-5">Hypothesis</h2>
       <p>
       If we redesign the Coordinate Sport dashboard to be more modular and responsive for different user permission levels,
      users will find it easier to navigate and interact with the platform.
       This redesign will simplify the cluttered widget tables into smaller,
      customizable widgets, improve mobile usability, and use consistent colors for better visual appeal.
      As a result, we expect these changes will increase user satisfaction, boost engagement,
      and make the dashboard's features more effective,
      leading to higher retention rates and positive feedback from various users.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={HypoOne}
          alt='/'
          width={800}
          height={500}/>
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 4</p>
       <h2 className="font-bold text-2xl pb-5">Research and Analysis</h2>
       <p>
       1. Keen Themes Exploration:
I analysed the Keen themes 8 theme file to understand existing UI elements and colour schemes. This helped ensure the new design maintained visual consistency with the broader application.
</p>
<br></br>
<p>
2. Permission Level Assessment:
I logged into various user roles—administrators, team leaders, and standard users—to document the minimum default widgets available. This analysis highlighted the essential features for different permission levels, allowing for a more tailored user experience.
</p>
<br></br>
<p>
3. Competitor Analysis:
I examined dashboards of competitor platforms like Monday.com and other booking SaaS companies. This comparative analysis revealed successful design elements and industry trends that informed our redesign strategy.
</p>
<br></br>
<p>
4. User Feedback Gathering:
I collected feedback from current users through informal interviews and surveys. Insights on pain points and desired features, particularly regarding clutter and navigation difficulties, provided valuable context for the redesign.
</p>
<br></br>

<p>
5. Synthesis of Findings:
I synthesized all findings into actionable insights, creating user personas, mapping user journeys, and prioritizing features for the redesign. This ensured the new dashboard design was data-driven and aligned with user needs.
</p>
 
       
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={ResearchOne}
          alt='/'
          width={800}
          height={500}/>
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 5</p>
       <h2 className="font-bold text-2xl pb-5">Userflow</h2>
       <p>
       
      To improve the UX/userflow of the dashboard,
       I decided to condense all of the tables into smaller widgets.
        This made the design more modular, allowing for many different configurations and
         high customizability without breaking the user flow 
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={UserFlowOne}
          alt='/'
          width={800}
          height={500}/>
      
      </div>




      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 6</p>
       <h2 className="font-bold text-2xl pb-5">Wireframing</h2>
       <p>
       I used Figma to create my low-fidelity wireframes because it is a versatile tool that 
       allowed me to easily experiment with different dashboard configurations and assess their 
       impact on the design. I also made the dashboard more mobile-friendly and quicker to navigate by
        opting for slide-out bar Instead of popups, because popups can block the user's 
        view of the dashboard and can be difficult to close on mobile
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          unoptimized={true}
          className="mx-auto"
          src={WFrameOne}
          alt='/'
          width={800}
          height={500}/>
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 7</p>
       <h2 className="font-bold text-2xl pb-5"> Executing my plan</h2>
       <p>
       I first created a design library in Figma for this project, 
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

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanOne}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> Dashboard View for Various User Types:</h3>
       <p>
       The dashboard displayed here is designed specifically for super users. A key feature of this modular dashboard is its customization for various business users, with widget and container sizes adjusting based on the user type.
       </p>
       <br></br>
       <p>
       This personalization enables each user to concentrate on the information most relevant to their roles and responsibilities, minimizing clutter and enhancing overall navigation.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanOne}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> News Feed widget:</h3>
       <p>
       The new news feed widget represents a substantial upgrade from its predecessor. It boasts a more visually appealing design, enhanced navigation, and several exciting new features.
       </p>
       <br></br>
       <p>
       One standout addition is the option to expand the news feed widget for more in-depth information on each news item. Users can easily do this by clicking on the item's title or image. The expanded view reveals the full text of the article, along with any related images or videos, providing a richer experience.
     </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanOne2}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>


      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <h3 className="font-bold text-2xl pb-5"> To-do List widget:</h3>
       <p>
       This section showcases the revamped to-do list and the streamlined process for adding and editing tasks.
      </p>
      <br></br>
       <p>
       To add a new task, users simply click the “Add New Task” button, which opens a user-friendly modal dialog. Here, they can effortlessly enter the task name and description. Once they've completed the details, they just click the “Add” button to save the task.</p>

     <p>

     Editing an existing task is just as easy. Users can click the edit icon next to the task name, which brings up a modal dialog for modifications. They can update the task name and description, and once satisfied with their changes, they simply click “Save” to apply the updates.</p>

</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={PlanOne3}
          alt='/'
          width={800}
          height={500}/>
          
      
      </div>

    



      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 8</p>
       <h2 className="font-bold text-2xl pb-5">What the numbers say</h2>
       <p>
       Some key metrics and
       figures that represent improvements after the redesign of the Coordinate Sport dashboard:
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={Numbers}
          alt='/'
          width={800}
          height={500}/>
      
      </div>





      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-16 text-white content-center items-center ">
       <div className="col-start-2 col-span-4">
       <p className="pb-4"> Step 9</p>
       <h2 className="font-bold text-2xl pb-5"> Conclusion </h2>
       <p>
       The redesign of the Coordinate Sport dashboard has successfully addressed key usability
        issues and enhanced the overall user experience. By shifting from a cluttered layout with over
         17 widget tables to a more modular and responsive design, the dashboard now better accommodates
          the diverse needs of its users. The implementation of slide-out menus has significantly
           improved navigation speed and mobile responsiveness, allowing users to access information 
           more efficiently. Additionally, the visual updates and consistency in color schemes have
            created a more cohesive and intuitive interface, making the platform easier to learn and use.
       </p>
</div>
</div>

<div className="pt-5">
        <Image
          className="mx-auto"
          src={ConclusionOne}
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
