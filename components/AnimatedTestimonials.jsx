"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";



export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
    const [darkMode, setDarkMode] = useState(true);
    
    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        if (storedDarkMode !== null) {
            setDarkMode(JSON.parse(storedDarkMode));
        }
    }, []);
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index) => index === active;

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const [randomRotation, setRandomRotation] = useState(0);

    useEffect(() => {
        setRandomRotation(Math.floor(Math.random() * 21) - 10);
    }, []);

    return (
        <div className="max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10">
            <div className="relative flex flex-col items-center">

                {/* Full Width Image with Card Animation */}
                <div className="relative h-[180px] w-[350px] md:h-[180px] md:w-[400px] lg:h-[180px] lg:w-[450px]">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.src}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotateY: randomRotation,
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.7,
                                    scale: isActive(index) ? 1 : 0.95,
                                    z: isActive(index) ? 0 : -100,
                                    rotateY: isActive(index) ? 0 : randomRotation,
                                    zIndex: isActive(index) ? 999 : testimonials.length - index,
                                    y: isActive(index) ? [0, -60, 0] : 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotateY: randomRotation,
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.id}
                                    width={400}
                                    height={300}
                                    objectFit="cover"
                                    className="rounded-lg shadow-lg border-4 border-sky-500 shadow-lg shadow-indigo-500/50"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Text Section Below */}
                <div className="text-center py-6 px-4 h-[150px]">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <h3 className="text-2xl font-bold dark:text-white-100 text-black">
                            {testimonials[active].name}
                        </h3>
                        <motion.p className="text-lg text-gray-500 mt-4 dark:text-neutral-300">
                            {testimonials[active].title.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                        <div className="grid grid-cols-3">
                            {testimonials[active].tools.map((tool) => (
                                <p className="text-gray-400" key={tool}>{tool}</p>
                            ))}
                        </div>


                    </motion.div>
                </div>
                <div className=" bottom-0 left-0 right-0 flex flex-row items-center justify-center p-2">
                    <Link
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 m-2 border-none rounded-[25px] mt-auto flex-grow text-center"
                        href={testimonials[active].detailsLink}
                    >
                        Details
                    </Link>
                    {testimonials[active].githubBackend && (
                        <a
                            href={testimonials[active].liveLink}
                            className="bg-white rounded-xl shadow-lg shadow-indigo-500/50 text-3xl mx-2 flex items-center justify-center p-2"
                            rel="noopener noreferrer"
                            style={{
                                color: testimonials[active].color === "teal" ? "#0f766e" : "#ea580c",
                                border: `2px solid ${testimonials[active].color === "teal" ? "#0f766e" : "#ea580c"}`
                            }}
                        >
                            <AiFillGithub />
                        </a>
                    )}
                    {testimonials[active].githubFrontend && (
                        <a
                            href={testimonials[active].liveLink}
                            className="bg-white rounded-xl shadow-lg shadow-indigo-500/50 text-3xl mx-2 flex items-center justify-center p-2"
                            rel="noopener noreferrer"
                            style={{
                                color: testimonials[active].color === "teal" ? "#0f766e" : "#ea580c",
                                border: `2px solid ${testimonials[active].color === "teal" ? "#0f766e" : "#ea580c"}`
                            }}
                        >
                            <AiFillGithub />
                        </a>
                    )}
                    {testimonials[active].liveLink && (
                        <a
                            href={testimonials[active].liveLink}
                            className="bg-white rounded-xl shadow-lg shadow-indigo-500/50 text-3xl mx-2 flex items-center justify-center p-2"
                            rel="noopener noreferrer"
                            style={{
                                color: testimonials[active].color === "teal" ? "#0f766e" : "#ea580c",
                                border: `2px solid ${testimonials[active].color === "teal" ? "#0f766e" : "#ea580c"}`
                            }}
                        >
                            <AiOutlineExport />
                        </a>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-4 mb-16">
                    <button
                        onClick={handlePrev}
                        className="border-2 border-white h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center group/button"
                    >
                        <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="border-2 border-white h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center group/button"
                    >
                        <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};
