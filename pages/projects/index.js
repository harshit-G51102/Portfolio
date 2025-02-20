import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import gsap from "gsap";
import DevProjects2 from "../../components/DevProjects2";

function Projects() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".phead", {
                y: -20,
                opacity: 0,
                duration: 1
            });
            gsap.from(".ptext", {
                y: -20,
                opacity: 0,
                duration: 1
            });
    
        });
        return () => ctx.revert();
    }, []);
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
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My Projects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white px-4 md:px-10 dark:bg-gray-900 overflow-hidden">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={false} />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="left dark:text-white flex flex-col mt-10">
                        <h3 className="phead text-7xl md:text-8xl font-bold py-1 dark:text-white">
                            Projects Showcase
                        </h3>
                        <p className="ptext text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Explore my collection of projects highlighting my skills in programming, problem-solving, and web development. Each project reflects my dedication to learning and creating efficient software solutions.
                        </p>
                        <p className="ptext text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Dive into my journey as a third-year B.Tech student at IIIT Jabalpur, showcasing real-world applications and innovative designs built with modern technologies.
                        </p>
                    </div>

                    <div className="right dark:text-white relative top-0 h-100vh flex flex-col items-center mb-20">
                        <DevProjects2></DevProjects2>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Projects;
