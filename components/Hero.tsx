import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import chibiPic from "../public/mason.png";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Build Custom Mechanical Keyboards",
      "Play Video Games",
      "Collect Sneakers",
      "<Code/>",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <Image
          src={chibiPic}
          alt="chibi-profile"
          className="relative rounded-full mx-auto object-cover"
          width="150px"
          height="150px"
          priority
        />
      </motion.div>
      <div>
        <h1 className="text-sm uppercase text-gray-400 tracking-[15px] pb-2 pl-[15px]">
          Web Developer
        </h1>

        <h2 className="text-4xl lg:text-6xl font-semibold px-10 pb-8">
          Hi, My Name is Mason Chan
        </h2>
        <p className="text-2xl lg:text-3xl font-semibold h-16 md:h-auto">
          ⌨ I Like to <span className="text-light">{text}</span>
          <Cursor cursorStyle="_" />
        </p>
        <nav className="grid grid-col-2 md:flex md:flex-wrap justify-center -mx-5 my-4 -mt-4 md:mt-0 pt-5">
          <Link href="#about">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <button className="heroButton">About Me</button>
            </motion.a>
          </Link>
          <Link href="#projects">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <button className="heroButton">Projects</button>
            </motion.a>
          </Link>
          <Link href="#skills">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <button className="heroButton">Skills</button>
            </motion.a>
          </Link>
          <Link href="#contact">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <button className="heroButton">Contact</button>
            </motion.a>
          </Link>
        </nav>
      </div>
    </motion.div>
  );
}

export default Hero;
