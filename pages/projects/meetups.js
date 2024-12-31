import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import meetups1 from "../../public/meetups1.png"
import meetups2 from "../../public/meetups2.png"
import meetups3 from "../../public/meetups3.png"

import Image from "next/image";


function Meetups() {
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
                <title>MeetUps Project</title>
                <meta name="description" content="Meetups Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-4 md:px-10 dark:bg-gray-900 min-h-[100vh] pb-8">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={false}/>
                <section>
                    <div className="text-center md:px-40 mb-20">
                        <h3 className="text-3xl py-1 dark:text-white ">NEXT JS React Meetups</h3>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex  items-center">
                            <div>
                                <h1 className="text-3xl mb-4">Full-Stack Development:</h1>
                                <p>Created a robust meetup application with Next.js and MongoDB, managing over 100 user-created meetup events. The platform supports features like creating, browsing, and viewing detailed event 
                                information, catering to a growing community of users.</p>
                            </div>
                        </div>
                        <div><Image src={meetups1} className="rounded-xl shadow-lg md:-mt-12 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={meetups2} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">SEO and Performance Optimization:</h1>
                                <p> Implemented Static Site Generation (SSG) and Server-Side Rendering (SSR), improving page load speeds by up to 40% and boosting SEO rankings for increased visibility in search results.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Dynamic Features</h1>
                                <p>
                                Designed intuitive dynamic routes and interactive components, including a meetup creation form with validation for over 10 data points and detailed meetup pages, ensuring a seamless user experience for both 
                                desktop and mobile users.</p>
                            </div>
                        </div>
                        <div><Image src={meetups3} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" alt="img"/></div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Meetups;