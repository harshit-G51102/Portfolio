import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillCopyrightCircle } from "react-icons/ai";
import hg from "../public/hg2.png";
import gsap from "gsap";
import RotatingText from "../components/RotatingText";


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
      gsap.from("h2,h3,p", {
        y: -60,
        opacity: 0,
      });
      gsap.from(".rottext",{
        y:-60,
        opacity:0,
        delay:.1
      })
      gsap.from(".pic", {
        scale: 1.5,

      });
      gsap.from(".links", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        stagger: .25
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
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={true} />
          <div className="text-center grid grid-cols-1 lg:grid-cols-4 gap-0 mt-12">
            <div className="col-span-3">
              <h2 className="text-5xl py-4 text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">
                Harshit Gangwar
              </h2>
              <div className="rottext flex flex-row justify-center">
                <span className="text-2xl mr-4 font-bold text-gray-800 dark:text-gray-200">A Passionate</span>
                <RotatingText
                  texts={['Programmer', 'problem-solver', 'web developer']}
                  mainClassName="px-2 sm:px-2 md:px-3 text-xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
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
