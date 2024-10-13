"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightJoel() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-50 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        What's better than a designer?<br/> {" "}
        <Highlight className="text-black dark:text-black">
        
          A UI/UX Designer.
        </Highlight>
        <p className=" text-lg text-white md:mt-10 my-5 text-center">
        Hi, I'm Joel, a UI/UX designer with 4 years of experience. I've worked remotely and in cities like <br/>Sheffield, London and Manchester.
        </p>
      </motion.h1>
    </HeroHighlight>
  );
}
