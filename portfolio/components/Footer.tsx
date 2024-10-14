import { FaDownload, FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-20" id="contact">


      <div className="flex flex-col items-center">
        <h1 className="text-white heading lg:max-w-[45vw]">
          Have an intresting <span className="text-purple"> <br/>Job or Project </span> 
          <br/>that I'd be perfect for?
        </h1>
        <p className="text-white-200 md:mt-10  text-center">
        Contact me to learn how I can help.
        </p>
        <a href="mailto:antwi32@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <h2 className="text-white heading lg:max-w-24 pt-8 pb-8">
           OR
        </h2>

        <a target="_blank" href="/Joel Antwi - UI&UX Designer.pdf">
          <MagicButton
            title="Download my CV"
            icon={<FaDownload />}
            position="right"
          />
        </a>

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Joel Antwi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a target="_blank" href={info.link} >
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;