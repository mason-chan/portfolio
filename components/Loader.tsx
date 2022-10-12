import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import switch1 from "../public/alpaca.png";
import switch2 from "../public/strawberry.png";
import switch3 from "../public/marshmallow.png";

type Props = {};

function Loader({}: Props) {
  return (
    <motion.div
      animate={{ x: "100%" }}
      transition={{ delay: 2.2, duration: 1}}
      className="sticky top-0 z-50 min-h-screen space-x-5 flex items-center justify-center mx-auto px-5"
    >
      <motion.div
        animate={{ opacity: [0, 1], scale: [1.3, 0.7, 1.15, 1] }}
        transition={{ duration: 1.2 }}
        className="max-w-[128px]"
      >
        <Image src={switch1} alt="alpaca" priority/>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1], scale: [1.3, 0.7, 1.15, 1] }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="max-w-[128px]"
      >
        <Image src={switch2} alt="alpaca" priority/>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1], scale: [1.3, 0.7, 1.15, 1] }}
        transition={{ duration: 1.2, delay: 1 }}
        className="max-w-[128px]"
      >
        <Image src={switch3} alt="alpaca" priority/>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
