import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="py-10 mb-12 gap-8 flex flex-wrap justify-between dark:text-white md:px-20 lg:px-40">
      <h1 className="font-burtons text-xl text-center w-full md:w-auto">
        <Link href="/">harshit&apos;sPortfolio</Link>
      </h1>
      <ul className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
        <li>
          <Link href="/education">EDUCATION</Link>
        </li>
        <li>
          <Link href="/projects" className="ml-8">PROJECTS</Link>
        </li>
        <li>
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/resume/22bcs103_harshit_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </li>
        <li>
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
