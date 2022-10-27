import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Portrait from "../public/profile.png";

type Props = {};

function About({}: Props) {
  return (
    <div className="container relative flex flex-col justify-center items-center max-w-7xl py-20 px-10 mx-auto sm:px-20 lg:px-16 min-h-screen">
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="xl:absolute xl:top-24 text-2xl tracking-[20px] pl-[20px] uppercase text-gray-400 pb-16 text-center"
      >
        About Me
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"
          >
            <div className="relative mx-auto flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl md:w-72 md:h-72 xl:w-[500px] xl:h-[500px]">
              <Image
                src={Portrait}
                alt="selfie"
                layout="fill"
                className="rounded-full md:rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-1 w-full px-3 lg:w-1/2 lg:order-0 text-center lg:text-left"
          >
            <div className="text-5xl mb-4 xl:mb-6 flex justify-center lg:justify-start">
              <motion.h4
                animate={{ rotate: [35, -25, 35] }}
                transition={{
                  repeat: Infinity,
                  loop: Infinity,
                  duration: 1,
                  repeatDelay: 0.25
                }}
                className="h-full"
              >
                👋
              </motion.h4>
            </div>
            <p className="mb-4 font-light text-white xl:mb-6">
              Hello! My name is Mason and I am a self taught web developer that
              enjoys building things. Before I embarked on my web development
              journey, I&apos;ve went through several phases from studying art
              🎨, architecture 🏫, to mechanical engineering 🧰. I had no
              interest in coding at the time, but I always aimed at creating
              things from my vision through different medias whether it be in
              academic studies or through my hobbies.
            </p>
            <p className="mb-4 font-light text-white xl:mb-6">
              I also dabbled in MATLAB during my mechanical engineering degree,
              but it wasn&apos;t until I picked up a particular hobby{" "}
              <span className="text-light ">(Mechanical Keyboards!)</span>, that
              influenced me into learning how to code! I now enjoy creating
              fluid, minimalistic digital works of art with my favorite
              peripheral(s){" "}
              <span className="text-light">
                (Yes, I own over 20 custom keyboards ⌨❕)
              </span>
              .
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
