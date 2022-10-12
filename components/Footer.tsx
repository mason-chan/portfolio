import React from "react";
import Image from "next/image";
import alpaca from "../public/alpaca.png";
import { motion } from "framer-motion";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="text-center pb-10 px-10 -mt-20">
      <motion.p initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1}} viewport={{once: true}} className="text-white tracking-wide inline-flex items-center justify-center lg:text-lg">
        <Image
          src={alpaca}
          alt="Alpaca"
          width="64px"
          height="64px"
        />
        <span className="pl-4">Designed and Pixelated by Me!</span>
      </motion.p>
    </footer>
  );
}

export default Footer;
