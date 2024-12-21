import { useState, useEffect } from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import grm_school from "../../public/grm_school.png"
import iiitdmj from "../../public/iiitdmj.png"

import Image from "next/image";


function education() {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        if (storedDarkMode !== null) {
            setDarkMode(JSON.parse(storedDarkMode));
        }
    }, []);
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    };
    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <Head>
                <title>Education</title>
                <meta name="description" content="My Education" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 min-h-[100vh] pb-8">
            <nav className="py-10 mb-12 gap-8 flex flex-wrap  justify-between dark:text-white md:px-20 lg:px-40">
            <h1 className="font-burtons text-xl text-center w-full md:w-auto"><Link href='/'>harshit'sPortfolio</Link></h1>
            <ul className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
            <li>
                <Link href='/projects'>EDUCATION</Link>
              </li>
              <li>
                <Link href='/projects' className="ml-8">PROJECTS</Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume/22bcs103_harshit_1.pdf" // Path to your resume PDF
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={toggleDarkMode}
                  className=" cursor-pointer text-2xl ml-8"
                />
              </li>
            </ul>
          </nav>
                <section>
                    <div className="text-center md:px-40 mb-20">
                        <h3 className="text-3xl py-1 dark:text-white ">EDUCATION</h3>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex  items-center">
                            <div>
                                <h1 className="text-3xl mb-4">Undergraduate Education</h1>
                                <p>I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering (CSE) at PDPM Indian Institute of Information Technology, Design & Manufacturing (IIITDM) Jabalpur, Madhya Pradesh. As a 3rd-year student (August 2022 – Present), I am actively enhancing my knowledge in various areas of computer science.</p>
                            </div>
                        </div>
                        <div><Image src={iiitdmj} className="rounded-xl shadow-lg md:-mt-12 md:ml-12" /></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={grm_school} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" /></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Senior Secondary Education</h1>
                                <p> I completed my senior secondary education at Shri Gulab Rai Montessori Senior Secondary School, Bareilly, Uttar Pradesh, in 2021, securing an excellent score of 92% in the Physics, Chemistry, and Mathematics (PCM) stream.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Secondary Education</h1>
                                <p>
                                I completed my 10th-grade education at Shri Gulab Rai Montessori Senior Secondary School, Bareilly, Uttar Pradesh, in 2019, achieving an outstanding score of 96%. </p>
                            </div>
                        </div>
                        <div><Image src={grm_school} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" /></div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default education;