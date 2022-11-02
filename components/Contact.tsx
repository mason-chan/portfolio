import { motion } from "framer-motion";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:masonchan0515@gmail.com?subject=${formData.subject}&body=${formData.message}`
  };

  return (
    <div className="container relative flex flex-col justify-center items-center max-w-7xl py-20 px-10 mx-auto sm:px-20 md:px-32 lg:px-16 min-h-screen">
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-2xl tracking-[20px] pl-[20px] uppercase text-gray-400 pb-16 sm:pb-24 text-center"
      >
        Contact Me
      </motion.h3>
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center h-full px-4 my-20 lg:pl-16 lg:my-0 lg:w-6/12"
        >
          <div className="flex flex-col items-start space-y-8 max-w-3xl">
            <div className="relative">
              <h4 className="text-xl md:text-2xl tracking-widest text-light uppercase">
                Let&apos;s connect!
              </h4>
            </div>
            <p className="text-md font-light text-white">
              If you ever have any questions about building your own custom
              keyboard or want to contact me for code related things, feel free
              to leave me a message or connect with me through my other social
              media platforms!
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-start justify-start w-full h-full py-10 px-4 lg:pl-16 xl:pl-24 md:pr-10"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full mt-10 space-y-8"
          >
            <div className="relative">
              <label className="text-gray-400 tracking-widest">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-dark bg-[#30312E] rounded-lg focus:outline-none focus:ring-4 focus:ring-light focus:ring-opacity-50"
                data-primary="first"
                data-rounded="rounded-lg"
                placeholder="name"
              />
            </div>
            <div className="relative">
              <label className="text-gray-400 tracking-widest">Email</label>
              <input
                {...register("email", { required: true })}
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-dark bg-[#30312E] rounded-lg focus:outline-none focus:ring-4 focus:ring-light focus:ring-opacity-50"
                data-primary="first"
                data-rounded="rounded-lg"
                placeholder="email"
              />
            </div>
            <div className="relative">
              <label className="text-gray-400 tracking-widest">Subject</label>
              <input
                {...register("subject", { required: true })}
                type="text"
                className="block w-full px-4 py-4 mt-2 text-xl placeholder-dark bg-[#30312E] rounded-lg focus:outline-none focus:ring-4 focus:ring-light focus:ring-opacity-50"
                data-primary="first"
                data-rounded="rounded-lg"
                placeholder="what can I help you with?"
              />
            </div>
            <div className="relative">
              <label className="text-gray-400 tracking-widest">Message</label>
              <textarea
                {...register("message", { required: true })}
                rows={8}
                className="block w-full px-4 py-4 mt-2 placeholder-dark bg-[#30312E] rounded-lg focus:outline-none focus:ring-4 focus:ring-light focus:ring-opacity-50 resize-none"
                placeholder="hello!"
              />
            </div>
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                type="submit"
                className="inline-block w-full px-5 py-4 text-center text-white bg-[#30312E] rounded-lg hover:bg-light hover:text-dark ease transition duration-200 tracking-widest"
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
