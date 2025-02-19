import meetups from "../public/meetups.png";
import design from "../public/merneats.png";
import quotes from "../public/quotes.png";
import portfolio from "../public/portfolio.png";
import { AnimatedTestimonials } from "./AnimatedTestimonials";


    const testimonials = [
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


const DevProjects2 = () => {
    return (
        <AnimatedTestimonials testimonials={testimonials} />
    )
}

export default DevProjects2;