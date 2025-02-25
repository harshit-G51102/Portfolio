import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import quotes1 from "../../public/quotes1.png"
import quotes2 from "../../public/quotes2.png"
import quotes3 from "../../public/quotes3.png"
import quotes4 from "../../public/quotes4.png"
import quotes5 from "../../public/quotes5.png"

import Image from "next/image";


function Quotes() {
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
                <title>Quotes Project</title>
                <meta name="description" content="Meetups Project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-4 md:px-10 dark:bg-gray-900 min-h-[100vh] pb-8">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={false}/>
                <section>
                    <div className="text-center md:px-40 mb-20">
                        <h3 className="text-3xl py-1 dark:text-white "> React Multi-Page Quotes Application</h3>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex  items-center">
                            <div>
                                <h1 className="text-3xl mb-4">Dynamic Quote Management</h1>
                                <p>Built a full-featured React application to manage and display a library of 50 quotes, with integrated CRUD operations and real-time updates.
                                </p>
                            </div>
                        </div>
                        <div><Image src={quotes1} className="rounded-xl shadow-lg md:-mt-12 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={quotes2} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Seamless Navigation</h1>
                                <p> Leveraged React Router to implement dynamic routing, enabling effortless navigation between pages like All Quotes, Quote Details, New Quote, and a custom 404 Not Found page, ensuring a user-friendly 
                                experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Asynchronous Functionality</h1>
                                <p>
                                Enabled Create, Read, and Comment features for quotes using optimized asynchronous HTTP requests, processing over 50 user interactions daily via Firebase.</p>
                            </div>
                        </div>
                        <div><Image src={quotes3} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={quotes4} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Custom Hook for Efficiency</h1>
                                <p>  Developed a reusable useHttp hook to manage HTTP requests, handling multiple states (pending, success, error) with a 30% reduction in code duplication across the application.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Backend Integration</h1>
                                <p>
                                Configured Firebase to store and manage quotes and comments, ensuring real-time data syncing with robust validation for over 10 key data fields.</p>
                            </div>
                        </div>
                        <div><Image src={quotes5} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={quotes5} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                                <h1 className="text-3xl mb-4">Firebase Deployment</h1>
                                <p>  Deployed the application using Firebase Hosting, ensuring fast and reliable access with global CDN and secure SSL encryption.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Quotes;