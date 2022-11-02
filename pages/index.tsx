import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);

  const scrollToId = () => {
    if (typeof window !== 'undefined') {
      const hashId = window.location.hash;
      if (hashId) {
        const element = document.querySelector(hashId);
        if (element && !loaded) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
          setLoaded(true);
        }
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="h-screen tall:snap-y tall:snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin scrollbar-thumb-rounded-md scrollbar-track-[#30312E]/50 scrollbar-thumb-light" onLoad={scrollToId}>
          <Head>
            <title>Mason Chan</title>
            <meta name="description" content="personal portfolio" />
            <meta property="og:image" content="https://machkeys.vercel.app/mason.png"/>
            <meta property="og:image:type" content="image/png"/>
            <meta property="og:image:width" content="1024"/>
            <meta property="og:image:height" content="1024"/>
            <link rel="icon" href="/mason.png" />
          </Head>
          <div className="bg-dark text-white">
            <Header />
            <section id="hero" className="snap-start">
              <Hero />
            </section>
            <section id="about" className="snap-center">
              <About />
            </section>
            <section id="projects" className="snap-center">
              <Projects />
            </section>
            <section id="skills" className="snap-center">
              <Skills />
            </section>
            <section id="contact" className="snap-center">
              <Contact />
            </section>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="bg-dark max-h-screen overflow-hidden">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Home;
