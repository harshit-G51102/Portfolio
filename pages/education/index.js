import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import grm_school from "../../public/grm_school.png"
import iiitdmj from "../../public/iiitdmj.png"

import Image from "next/image";


function Education() {
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
            <main className=" bg-white px-4 md:px-10 dark:bg-gray-900 min-h-[100vh] pb-8">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={false}/>
                <section>
                    <div className="text-center md:px-40 mb-20">
                        <h3 className="text-5xl font-bold py-1 dark:text-white ">EDUCATION</h3>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex  items-center">
                            <div>
                                <h1 className="text-3xl mb-4">Undergraduate Education</h1>
                                <p>I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering (CSE) at PDPM Indian Institute of Information Technology, Design & Manufacturing (IIITDM) Jabalpur, Madhya Pradesh. As a 3rd-year student (August 2022 – Present), I am actively enhancing my knowledge in various areas of computer science.</p>
                            </div>
                        </div>
                        <div><Image src={iiitdmj} className="rounded-xl shadow-lg md:-mt-12 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={grm_school} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
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
                        <div><Image src={grm_school} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" alt="img"/></div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Education;