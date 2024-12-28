import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";

const Navbar = ({ darkMode, toggleDarkMode,isanimate }) => {

  {isanimate&&useEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline();
      tl1.from(".navh", {
        y:-20,
        opacity: 0, 
        duration: .5,
      }).from(".navli", {
        y:-20,
        opacity: 0, 
        duration: .5,
        stagger:0.25
      });

    });
      return () => ctx.revert();
  }, []);}


  return (
    <nav className="py-10 mb-12 gap-8 flex flex-wrap justify-between dark:text-white md:px-20 lg:px-40">
      <h1 className=" navh font-burtons text-xl text-center w-full md:w-auto">
        <Link href="/">harshit&apos;sPortfolio</Link>
      </h1>
      <ul className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
        <li className="navli">
          <Link href="/education">EDUCATION</Link>
        </li>
        <li className="navli">
          <Link href="/projects" className="ml-8">PROJECTS</Link>
        </li>
        <li className="navli">
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/resume/22bcs103_harshit_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </li>
        <li className="navli">
          <BsFillMoonStarsFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-2xl ml-8"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
