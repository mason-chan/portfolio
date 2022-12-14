import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { list as item } from "./projectData";

type Props = {};

function ProjectLayout({}: Props) {
  const [selectedItem, setSelectedItem] = useState(item[0]);
  return (
    <div className="container relative flex flex-col justify-center items-center max-w-7xl py-20 px-10 mx-auto sm:px-20 lg:px-16 min-h-screen">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-2xl tracking-[20px] pl-[20px] uppercase text-gray-400 pb-16 text-center"
      >
        Projects
      </motion.h3>
      <motion.ul
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center w-full h-full py-5 pb-10 -ml-0 space-x-5 md:space-x-20 md:-ml-5 lg:space-x-40"
      >
        {item.map((item) => (
          <li
            key={item.id}
            className="relative px-5"
            onClick={() => setSelectedItem(item)}
          >
            <span className="block uppercase tracking-widest cursor-pointer text-center">
              &nbsp;
              {`${item.category}`}
              {item === selectedItem ? (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-light z-10"
                  layoutId="underline"
                />
              ) : null}
            </span>
          </li>
        ))}
      </motion.ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedItem ? selectedItem.id : "empty"}
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="box-border flex flex-col md:flex-row flex-shrink-0 items-center content-center px-2 mx-auto border-0 border-gray-300 border-solid max-w-7xl lg:px-4">
            <div className="box-border flex-1 text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="m-0 text-xl border-0 border-gray-300 lg:text-3xl md:text-2xl text-light flex text-center">
                  {selectedItem ? selectedItem.title : "uhoh"}
                  <div className="ml-1 flex items-center">
                    <Image
                      src={selectedItem ? selectedItem.switch : "uhoh"}
                      alt="switch"
                      width="32px"
                      height="32px"
                    />
                  </div>
                </h4>
                <p className="p-4 my-4 text-white bg-[#30312E] rounded-xl lg:text-lg">
                  {selectedItem ? selectedItem.description : "uhoh"}
                </p>
                <div className="flex flex-row text-center">
                  <p className="m-0 text-gray-400 border-0 tracking-widest border-gray-300 lg:text-lg">
                    {selectedItem ? selectedItem.tools : "uhoh"}
                  </p>
                </div>
                <p className="pt-4 pb-8 m-0 text-white border-0 border-gray-300 lg:text-md text-sm">
                  <span className="text-light">Keyboard:</span>{" "}
                  {selectedItem ? selectedItem.keyboard : "uhoh"}
                </p>
                <div className="relative inline-flex items-center space-x-8">
                  <a
                    href={selectedItem ? selectedItem.live : "uhoh"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                      className="inline-flex items-center justify-center px-2 md:px-4 md:py-2 text-sm md:text-base font-medium leading-6 text-dark whitespace-no-wrap bg-light border border-dark rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                    >
                      View Demo
                      <span className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                          />
                        </svg>
                      </span>
                    </motion.button>
                  </a>
                  <a
                    href={selectedItem ? selectedItem.github : "uhoh"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1 }}
                      className="inline-flex items-center justify-center px-2 md:px-4 md:py-2 text-sm md:text-base font-medium leading-6 text-dark whitespace-no-wrap bg-light border border-dark rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                    >
                      Github Repo
                      <span className="pl-2">
                        <svg
                          viewBox="0 0 128 128"
                          className="w-6 h-6"
                          fill="#555657"
                        >
                          <g>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                            ></path>
                            <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                          </g>
                        </svg>
                      </span>
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ x: 100, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="box-border flex-[2_2_0%] order-first md:order-none relative w-full px-4 mt-5 md:mb-0 mb-4 items-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 lg:w-1/2 xl:pl-10"
            >
              <Image
                src={selectedItem ? selectedItem.image : "uhoh"}
                alt="minitype"
                width="2020px"
                height="1710px"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProjectLayout;
