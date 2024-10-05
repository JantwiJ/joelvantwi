"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";



const MovingCardsOne = () => {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={maincard}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const maincard = [
  {

    title: "HTML",
  },
  {

    title: "CSS",
  },
  {

    title: "FIGMA",
  },

];

export default MovingCardsOne;

