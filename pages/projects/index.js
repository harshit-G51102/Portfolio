import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Link from "next/link";
import meetups from "../../public/meetups.png";
import design from "../../public/merneats.png";
import quotes from "../../public/quotes.png";
import portfolio from "../../public/portfolio.png";
import { AiFillCarryOut, AiFillGithub, AiOutlineExport } from "react-icons/ai";
import Image from "next/image";
import gsap from "gsap";


function Projects() {
    const [darkMode, setDarkMode] = useState(true);


    // Original cards array for restoration
    const originalCards = [
        {
            id: 1,
            title: "MERN Food Ordering Project",
            image: design,
            tools: ["React", "React Router", "TypeScript", "MongoDB", "Cloudinary", "Auth0", "Tailwind", "Shadcn"],
            liveLink: "https://mern-food-ordering-app-frontend-r3on.onrender.com/",
            githubFrontend: "https://github.com/harshit-G51102/mern-food-ordering-app-frontend",
            githubBackend: "https://github.com/harshit-G51102/mern-food-ordering-app-backend",
            detailsLink: "projects/foodOrdering",
            gradient: "from-cyan-500 to-teal-500",
            color: "teal"
        },
        {
            id: 2,
            title: "NEXT JS React Meetups",
            image: meetups,
            tools: ["Next.js", "React", "Vercel"],
            liveLink: "http://nextjs-meetups-pi-ten.vercel.app/",
            githubFrontend: "https://github.com/harshit-G51102/nextjs-meetups.git",
            detailsLink: "projects/meetups",
            gradient: "from-pink-500 to-orange-500",
            color: "orange"
        },
        {
            id: 3,
            title: "React Multi-Page Quotes Application",
            image: quotes,
            tools: ["React", "React Router", "Firebase", "React Hooks"],
            liveLink: "http://hosting-a608c.web.app/",
            githubFrontend: "https://github.com/harshit-G51102/react-router-quotes",
            detailsLink: "projects/quotes",
            gradient: "from-cyan-500 to-teal-500",
            color: "teal"
        },
        {
            id: 4,
            title: "Portfolio Website",
            image: portfolio,
            tools: [],
            liveLink: "#",
            githubFrontend: "#",
            detailsLink: "#",
            gradient: "from-pink-500 to-orange-500",
            color: "orange"
        },
    ];
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

            gsap.from(".card", {
                rotate: 0,
                scale: 1.2,
                opacity: 0,
                duration: 1,
                delay: 1,
                stagger: -0.25,
            });

        });
        return () => ctx.revert();
    }, []);

    const [cards, setCards] = useState(originalCards);

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

    const handleNext = () => {
        if (cards.length > 0) {
            setCards((prevCards) => prevCards.slice(1)); // Remove the first card
        } else {
            // If the cards array is empty, reset it to the original array
            setCards(originalCards);
        }
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
                        <h3 className="phead text-8xl font-bold py-1 dark:text-white">
                            Projects Showcase
                        </h3>
                        <p className="ptext text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Explore my collection of projects highlighting my skills in programming, problem-solving, and web development. Each project reflects my dedication to learning and creating efficient software solutions.
                        </p>
                        <p className="ptext text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Dive into my journey as a third-year B.Tech student at IIIT Jabalpur, showcasing real-world applications and innovative designs built with modern technologies.
                        </p>
                    </div>

                    <div className="right dark:text-white relative top-0 h-[100vh] md:h-screen flex flex-col items-center">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`card w-[350px] h-[360px] rounded-[25px] bg-gradient-to-r ${card.gradient} shadow-lg absolute top-[15%] md:left-[25%] left-[10%]`}
                                style={{
                                    transform: `rotate(-${index * 10}deg)`,
                                    zIndex: cards.length - index,
                                }}
                            >
                                <div className="flex-grow mb-4 text-center">
                                    <Image src={card.image} width={300} height={100} className="m-auto mt-2 rounded-xl shadow-lg" alt="img" />
                                    <h3 className="text-lg font-medium pt-1 pb-1">{card.title}</h3>
                                    <h4 className=" text-white-100">Tools</h4>
                                    <div className="grid grid-cols-3">
                                        {card.tools.map((tool) => (
                                            <p className="text-gray-800" key={tool}>{tool}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-center p-2">
                                    <Link
                                        className="bg-gray-900 text-white px-4 py-2 m-2 border-none rounded-[25px] mt-auto flex-grow text-center"
                                        href={card.detailsLink}
                                    >
                                        Details
                                    </Link>
                                    {card.githubBackend && (
                                        <a
                                        href={card.liveLink}
                                        className="bg-white rounded-xl shadow-lg shadow-indigo-500/50 text-3xl mx-2 flex items-center justify-center p-2"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: card.color === "teal" ? "#0f766e" : "#ea580c",
                                            border: `2px solid ${card.color === "teal" ? "#0f766e" : "#ea580c"}`
                                        }}
                                        >
                                            <AiFillGithub />
                                        </a>
                                    )}
                                    <a
                                       href={card.liveLink}
                                       className="bg-white rounded-xl shadow-lg shadow-indigo-500/50 text-3xl mx-2 flex items-center justify-center p-2"
                                       rel="noopener noreferrer"
                                       style={{
                                           color: card.color === "teal" ? "#0f766e" : "#ea580c",
                                           border: `2px solid ${card.color === "teal" ? "#0f766e" : "#ea580c"}`
                                       }}
                                    >
                                        <AiFillGithub />
                                    </a>
                                    <a
                                       href={card.liveLink}
                                       className="bg-white rounded-xl shadow-lg shadow-indigo-500/50 text-3xl mx-2 flex items-center justify-center p-2"
                                       rel="noopener noreferrer"
                                       style={{
                                           color: card.color === "teal" ? "#0f766e" : "#ea580c",
                                           border: `2px solid ${card.color === "teal" ? "#0f766e" : "#ea580c"}`
                                       }}
                                    >
                                        <AiOutlineExport />
                                    </a>
                                </div>


                            </div>
                        ))}
                        <button
                            className="h-[25px] w-[100px] bg-sky-500 rounded-md mb-4 absolute left-50 mr-8"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Projects;
