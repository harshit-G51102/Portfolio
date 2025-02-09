import { useState, useEffect } from "react";
import Link from "next/link";
import meetups from "../public/meetups.png";
import design from "../public/merneats.png";
import quotes from "../public/quotes.png";
import portfolio from "../public/portfolio.png";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import Image from "next/image";
import gsap from "gsap";


const DevProjects = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
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
            tools: ["Next.js", "Tailwind", "GSAP"],
            liveLink: "https://portfolio-harshit-g51102s-projects.vercel.app/",
            detailsLink: "#",
            gradient: "from-pink-500 to-orange-500",
            color: "orange"
        },
    ];

    const [cards, setCards] = useState(originalCards);
    const [cards2, setCards2] = useState([]);


    const handleNext = () => {
        if (cards.length > 0) {
            const firstCard = cards[0];
            setCards2((prevCards) => [firstCard, ...prevCards]);
            setCards((prevCards) => prevCards.slice(1));
            console.log(cards);
            console.log(cards2);
        } else {
            // If the cards array is empty, reset it to the original array
            setCards(originalCards);
            setCards2([]);
        }
    };

    const handleBack = () => {
        if (cards2.length > 0) {
            const firstCard = cards2[0];
            setCards((prevCards) => [firstCard, ...prevCards]);
            setCards2((prevCards) => prevCards.slice(1));
            console.log(cards);
            console.log(cards2);
        } else {
            setCards(originalCards);
            setCards2([]);
        }
    }
    return (
        <>{cards.map((card, index) => (
            <div
                key={card.id}
                className={`card w-[300px] md:w-[350px] h-[360px] rounded-[25px] bg-gradient-to-r ${card.gradient} shadow-lg absolute top-[8%] md:left-[25%] left-[10%]`}
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
                    {card.githubFrontend && (
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
                    {card.liveLink && (
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
                    )}
                </div>
            </div>

        ))}
            <button
                className="h-[50px] w-[50px] rounded-full mb-4 absolute mt-42 left-0 mr-8 z-10 border-2 border-blue-500 shadow-lg shadow-cyan-500"
                onClick={handleNext}
            >
                Next
            </button>
            {cards2.length > 0 && <button
                className="h-[50px] w-[50px] rounded-full mb-4 absolute mt-42 right-0 mr-8 z-10 border-2 border-blue-500 shadow-lg shadow-cyan-500 "
                onClick={handleBack}
            >
                Back
            </button>}</>
    )
}

export default DevProjects;