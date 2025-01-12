import { useState, useEffect } from "react";
import Head from "next/head";
import meetups from "../../public/meetups.png";
import design from "../../public/merneats.png";
import quotes from "../../public/quotes.png";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { AiFillCarryOut, AiFillGithub, AiOutlineExport } from "react-icons/ai";
import gsap from "gsap";


function Projects() {
    
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


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".phead", {
                y:-20,
                opacity: 0, 
                duration:1
              });
              gsap.from(".ptext", {
                y:-20,
                opacity: 0, 
                duration:1
              });
        
          gsap.from(".proj1", {
            scale:1.2,
            opacity: 0, 
            duration:1,
            delay:1
          });
          gsap.from(".proj2", {
            scale:1.2,
            opacity: 0, 
            duration:1
          });
          gsap.from(".proj3", {
            scale:1.2,
            opacity: 0, 
            duration:1
          });
    
        });
          return () => ctx.revert();
      }, []);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My Projects" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-4 md:px-10 dark:bg-gray-900 overflow-hidden">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isanimate={false} />
                <section>
                    <div className="text-center md:px-40">
                        <h3 className="phead text-5xl font-bold py-1 dark:text-white ">Projects Showcase</h3>
                        <p className="ptext text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Explore my collection of projects highlighting my skills in programming, problem-solving, and web development. Each project reflects my dedication to learning and creating efficient software solutions.
                        </p>
                        <p className="ptext text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Dive into my journey as a third-year B.Tech student at IIIT Jabalpur, showcasing real-world applications and innovative designs built with modern technologies.
                        </p>
                    </div>
                    <div className="proj1 grid-cols-1 sm:grid grid-cols-2 md:grid grid-cols-3 gap-10 md:p-10 pb-10" >
                        <div className="text-center shadow-lg  rounded-xl my-10  dark:bg-white flex-1 flex flex-col border-2  border-teal-600 shadow-indigo-500/50">
                            <Image src={design} width={1000} height={100} className="rounded-xl -m-4 md:-m-8 shadow-lg" alt="img" />
                            <div className="flex flex-col gap-2 ml-auto text-5xl text-teal-600 bg-none -mt-28 -mr-1 rounded-xl">
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="https://mern-food-ordering-app-frontend-r3on.onrender.com/" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.6s' }}><AiOutlineExport></AiOutlineExport></a>
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="https://github.com/harshit-G51102/mern-food-ordering-app-frontend" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.4s' }}><AiFillGithub></AiFillGithub></a>
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="https://github.com/harshit-G51102/mern-food-ordering-app-backend" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.2s' }}><AiFillGithub></AiFillGithub></a>
                            </div>
                            <div className=" flex-grow">
                                <h3 className="text-lg font-medium pt-8 pb-2  ">
                                    MERN Food Ordering Project
                                </h3>
                                <h4 className="py-4 text-teal-600">Tools</h4>
                                <div className="grid grid-cols-3">
                                    <p className="text-gray-800 py-1">React</p>
                                    <p className="text-gray-800 py-1">React Route</p>
                                    <p className="text-gray-800 py-1">TypeScript</p>
                                    <p className="text-gray-800 py-1">MongoDB</p>
                                    <p className="text-gray-800 py-1">Cloudinary</p>
                                    <p className="text-gray-800 py-1">Auth0</p>
                                    <p className="text-gray-800 py-1">Tailwind</p>
                                    <p className="text-gray-800 py-1">Shadcn</p>
                                </div>
                            </div>
                            <Link
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2  m-2 border-none rounded-md mt-auto"
                                href="projects/foodOrdering"

                            >
                                Details
                            </Link>
                        </div>
                        <div className=" proj2 text-center shadow-lg rounded-xl my-10 dark:bg-white flex-1 flex flex-col border-2 border-teal-600 shadow-indigo-500/50">
                            <Image src={meetups} width={1000} height={100} className="rounded-xl -m-4 md:-m-8 shadow-lg" alt="img" />
                            <div className="flex flex-col gap-2 ml-auto text-5xl text-teal-600 bg-none -mt-14 -mr-1 rounded-xl">
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="http://nextjs-meetups-pi-ten.vercel.app/" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.4s' }}><AiOutlineExport></AiOutlineExport></a>
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="https://github.com/harshit-G51102/nextjs-meetups.git" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.2s' }}><AiFillGithub></AiFillGithub></a>

                            </div>
                            <div className=" flex-grow">
                                <h3 className="text-lg font-medium pt-8 pb-2">
                                    NEXT JS React Meetups
                                </h3>
                                <h4 className="py-4 text-teal-600">Tools</h4>
                                <div className="grid grid-cols-3"><p className="text-gray-800 py-1">Nextjs</p>
                                    <p className="text-gray-800 py-1">React</p>
                                    <p className="text-gray-800 py-1">vercel</p></div>

                            </div>
                            <Link
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2  m-2 border-none rounded-md mt-auto"
                                href="projects/meetups"

                            >
                                Details
                            </Link>
                        </div>

                        <div className=" proj3 text-center shadow-lg  rounded-xl my-10  dark:bg-white flex-1 flex flex-col border-2 border-teal-600 shadow-indigo-500/50">
                            <Image src={quotes} width={1400} height={100} className="rounded-xl -m-4 md:-m-8 shadow-lg" alt="img" />
                            <div className="flex flex-col gap-2 ml-auto text-5xl text-teal-600 bg-none -mt-14 -mr-1 rounded-xl">
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="http://hosting-a608c.web.app/" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.4s'}}> <AiOutlineExport></AiOutlineExport></a>
                                <a className="bg-white animate-bounce border-2 border-teal-600 rounded-xl shadow-lg shadow-indigo-500/50" href="https://github.com/harshit-G51102/react-router-quotes" target="_blank"
                                    rel="noopener noreferrer" style={{ animationDelay: '0.2s' }}><AiFillGithub></AiFillGithub></a>

                            </div>
                            <div>
                                <h3 className="text-lg font-medium pt-8 pb-2  ">
                                    React Multi-Page Quotes Application
                                </h3>
                                <h4 className="py-4 text-teal-600">Tools</h4>
                                <div className="grid grid-cols-3">
                                    <p className="text-gray-800 py-1">React</p>
                                    <p className="text-gray-800 py-1">React Router</p>
                                    <p className="text-gray-800 py-1">Firebase</p>
                                    <p className="text-gray-800 py-1">React hooks</p>
                                </div>

                            </div>
                            <Link
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 m-2 border-none rounded-md mt-auto"
                                href="projects/quotes" // Path to your resume PDF
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Projects;
