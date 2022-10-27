import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.png";
import { motion, useCycle } from "framer-motion";

type Props = {};

const variantsMobile = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variantsMenu = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants = {
  open: {
    clipPath: `circle(${200 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header({}: Props) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const open = isOpen ? "flex fixed" : "hidden";
  const containerRef = useRef(null);

  return (
    <motion.header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className="sticky -top-1 z-50 h-auto max-w-7xl mx-auto select-none pt-6 px-6 md:bg-gradient-to-b from-dark via-dark to-transparent"
    >
      <div className="container relative flex flex-wrap items-center justify-between mx-auto overflow-hidden md:overflow-visible lg:justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start w-1/4 h-full pr-4"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#hero"
            className="inline-block invisible md:visible"
          >
            <Image
              src={Logo}
              alt={"Logo"}
              width="70px"
              height="70px"
              className="cursor-pointer"
            />
          </motion.a>
        </motion.div>
        <div
          className={`top-0 left-0 items-start w-full h-full p-2 text-sm bg-[#30312E] bg-opacity-75 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex ${open}`}
        >
          <motion.div className="flex-col w-full h-auto overflow-hidden mt-4 pt-2 md:pt-0 md:mt-0 bg-[#555657] rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            <motion.span
              variants={variantsMobile}
              className="inline-flex items-center justify-center w-auto h-20 px-4 md:invisible"
            >
              <Link href="#hero">
                <a>
                  <Image
                    src={Logo}
                    alt={"Logo"}
                    width="60px"
                    height="60px"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </motion.span>
            <motion.div
              variants={variantsMenu}
              className="flex flex-col items-start justify-center w-full text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"
            >
              <motion.a
                href="https://github.com/mctekno"
                target="_blank"
                variants={variantsMobile}
                className="inline-block md:invisible w-full py-2 mx-0 text-center uppercase tracking-widest text-light md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
              >
                Github
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mason-chan555/"
                target="_blank"
                variants={variantsMobile}
                className="inline-block md:invisible w-full py-2 mx-0 text-center uppercase tracking-widest text-light md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mach_keys/"
                target="_blank"
                variants={variantsMobile}
                className="inline-block md:invisible w-full py-2 mx-0 text-center uppercase tracking-widest text-light md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
              >
                Instagram
              </motion.a>
              <motion.a
                href="/mason_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={variantsMobile}
                className="inline-block md:invisible w-full py-2 mb-4 mx-0 text-center uppercase tracking-widest text-light md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
              >
                Resume
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{once: true}}
              className="flex justify-end w-full md:items-center md:w-1/3 md:flex-row md:py-0"
            >
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/mctekno"
                target="_blank"
              >
                <svg
                  className="px-3 mr-0 h-8 w-auto hidden md:inline"
                  viewBox="0 0 128 128"
                >
                  <g fill="#F5D1C8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/mason-chan555/"
                target="_blank"
              >
                <svg
                  className="px-3 h-8 w-auto hidden md:inline"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#F5D1C8"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  ></path>
                  <path
                    fill="#555657"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/mach_keys/"
                target="_blank"
              >
                <svg
                  className="px-3 h-8 w-auto hidden md:inline"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#F5D1C8"
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="/mason_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:inline-flex items-center justify-center px-4 py-1.5 ml-4 text-sm tracking-widest uppercase text-light border-2 border-light rounded-md focus:outline-none focus:shadow-none"
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute right-0 flex flex-col items-center justify-center w-10 h-auto rounded-full cursor-pointer md:hidden">
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="cursor-pointer"
            onClick={() => toggleOpen()}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#F5D1C8"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#F5D1C8"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#F5D1C8"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
