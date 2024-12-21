import { useState, useEffect } from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import food1 from "../../public/food1.png"
import food2 from "../../public/food2.png"
import food3 from "../../public/food3.png"
import food4 from "../../public/food4.png"
import food5 from "../../public/food5.png"
import Image from "next/image";


function FoodOrdering() {
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
                <title>Food Ordering Project</title>
                <meta name="description" content="Food Ordering project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 min-h-[100vh] pb-8">
            <nav className="py-10 mb-12 gap-8 flex flex-wrap  justify-between dark:text-white md:px-20 lg:px-40">
            <h1 className="font-burtons text-xl text-center w-full md:w-auto"><Link href='/'>harshit&apos;sPortfolio</Link></h1>
            <ul className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
            <li>
                <Link href='/education'>EDUCATION</Link>
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
                        <h3 className="text-3xl py-1 dark:text-white ">MERN Food Ordering Project</h3>
                    </div>
                    <div  className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex  items-center"><p>Established strong foundations for application’s back end employing both Express.js and TypeScript technologies while addressing three critical areas: database interactions, security measures around variable storage, enhancing overall
                            system reliability.
                            <br></br>
                            Built a robust and scalable frontend using React, React Router, and TypeScript, focusing on key areas such as dynamic routing, secure authentication, and responsive UI design to ensure an exceptional user experience.</p>
                        </div>
                        <div><Image src={food1} className="rounded-xl shadow-lg md:-mt-12 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={food2} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                            <h1 className="text-3xl mb-4">Database</h1>
                            <p>Powered by MongoDB via Mongoose, efficiently managing many records across collections such as users, orders, and restaurants. The connection string is securely stored in environment variables, ensuring robust data
                            protection and scalability</p>
                            </div>
                            </div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                            <h1 className="text-3xl mb-4">Cloudinary Integration</h1>
                            <p>
                                Seamlessly handles image uploads, processing over 50, restaurant banners, and food item photos daily. API keys and configuration are securely managed using environment variables, maintaining 
                        confidentiality and compliance with best practices.</p>
                            </div>
                        </div>
                        <div><Image src={food3} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" alt="img"/></div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div><Image src={food4} className="rounded-xl shadow-lg md:-mb-8 md:-ml-12" alt="img"/></div>
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                            <h1 className="text-3xl mb-4">Authentication</h1>
                            <p>
                            Integrated Auth0 via @auth0/auth0-react, enabling secure and scalable authentication for over 50 daily active users, while seamlessly managing roles and permissions for enhanced access control.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-500/50 dark:text-white p-4 grid-cols-1 md:grid grid-cols-3 gap-4 mb-8">
                        <div className="col-span-2 text-center flex items-center ">
                            <div>
                            <h1 className="text-3xl mb-4">UI Components</h1>
                            <p>
                            Leveraged Radix UI components, including over 15 reusable elements like Dialogs, Dropdowns, and Selects, to craft a responsive interface that ensures consistent performance across devices and supports up to 95% 
                            of screen resolutions.</p>
                            </div>
                        </div>
                        <div><Image src={food5} className="rounded-xl shadow-lg md:-mt-8 md:ml-12" alt="img"/></div>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default FoodOrdering;