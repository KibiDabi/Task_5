"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import animationData from "../assets/black-guy-animation.json";
// import { useRef } from "react";

const texts = ["lewd", "lascivious", "salacious", "outrageous"];

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 10 : -10,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -10 : 10,
    opacity: 0,
  }),
};

const TextCycle = () => {
//   const blackMan = useRef<LottieRefCurrentProps>(null);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-between items-center lg:flex-row gap-2 p-4">
      <h1 className="text-5xl font-bold font-heading tracking-tight text-center md:text-left leading-none sm:text-6xl md:text-7xl xl:text-big md:gap-x-6 lg:gap-x-8 lg:text-9xl text-gray-400">
        <span>That&apos;s totally inappropriate. It&apos;s </span>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.span
            key={texts[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
        <span>.</span>
      </h1>
      {/* <div className="flex-auto">
        <Lottie lottieRef={blackMan} animationData={animationData} />
      </div> */}
    </div>
  );
};

export default TextCycle;
