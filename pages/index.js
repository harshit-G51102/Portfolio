import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillCopyrightCircle } from "react-icons/ai";
import hg from "../public/hg2.png";
import gsap from "gsap";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline();
      gsap.from("h2", {
        // scale:1.5,
        y:-60,
        opacity: 0, 
        // duration: .5,
        // delay:1
      });
      gsap.from("h3", {
        // scale:1.5,
        y:-60,
        opacity: 0, 
        // duration: 1,
      });
      gsap.from("p", {
        // scale:1.5,
        y:-60,
        opacity: 0, 
        // duration: 1,
      });
      gsap.from(".pic", {
        scale:1.5,
        // scale:1.5,
        // opacity: 0, 
        // duration: .5,
      });
      gsap.from(".links", {
        y:-50,
        opacity: 0, 
        duration: 1.5,
        stagger:.25
      });


    });
      return () => ctx.revert();
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>HARSHIT&apos;S PORTFOLIO</title>
        <meta name="description" content="Harshit Gangwar's Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-4 md:px-10 dark:bg-gray-900">
        <section className="min-h-screen lg:pr-16">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={true}/>
          <div className="text-center grid grid-cols-1 lg:grid-cols-4 gap-0 mt-12">
            <div className="col-span-3">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Harshit Gangwar
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Programming, problem-solving, web development.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Ambitious third-year B.Tech student at IIIT Jabalpur, with a keen interest in software development and a passion for solving complex problems through efficient coding solutions. Strong foundation in programming and logical thinking, constantly enhancing skills to excel in roles involving software development and web technologies.
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a className="links" href="https://github.com/harshit-G51102"><AiFillGithub /></a>
                <a className="links" href="https://www.linkedin.com/in/harshit-gangwar-5ab56b252/"><AiFillLinkedin /></a>
                <a className="links" href="https://leetcode.com/u/74RFdo6xK0/"><AiFillCopyrightCircle /></a>
              </div>
            </div>
            <Image className="pic col-span-1 mx-auto rounded-full w-60 h-60 mt-0 md:h-80 md:w-80 animate-glow" src={hg} alt="img" />
          </div>
        </section>
      </main>
    </div>
  );
}
