import meetups from "../public/meetups.png";
import design from "../public/merneats.png";
import quotes from "../public/quotes.png";
import portfolio from "../public/portfolio.png";
import musicR from "../public/musicR.png";
import FoodCart from "../public/FoodCart.png";
import aiAssistants1 from "../public/aiAssistants1.png";

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
        title: "AI-Assistants App",
        image: aiAssistants1,
        tools: ["Next.js", "Tailwind", "TypeScript", "vercel", "Google-oauth", "Gemini", "Razorpay"],
        liveLink: "https://ai-assistant-five-brown.vercel.app/",
        githubFrontend: "https://github.com/harshit-G51102/ai-assistant",
        detailsLink: "#",
        gradient: "from-cyan-500 to-teal-500",
        color: "teal"
    },
    {
        id: 3,
        title: "AI Music Recommender",
        image: musicR,
        tools: ["Django Rest Framework", "google-genai", "React", "Tailwind", "Aceternity ui", "React Bits", "React Router", "vercel"],
        liveLink: "https://ai-music-frontend.vercel.app/",
        githubFrontend: "https://github.com/harshit-G51102/ai-music-frontend",
        githubBackend: "https://github.com/harshit-G51102/ai-music-backend",
        detailsLink: "#",
        gradient: "from-pink-500 to-orange-500",
        color: "orange"
    },
    {
        id: 4,
        title: "Portfolio Website",
        image: portfolio,
        tools: ["Next.js", "Tailwind", "GSAP", "vercel"],
        liveLink: "https://portfolio-harshit-g51102s-projects.vercel.app/",
        githubFrontend: "https://github.com/harshit-G51102/Portfolio.git",
        detailsLink: "#",
        gradient: "from-cyan-500 to-teal-500",
        color: "teal"
    },
    {
        id: 5,
        title: "Food Cart",
        image: FoodCart,
        tools: ["React", "Firebase"],
        liveLink: "https://food-cart-hosting.web.app/",
        githubFrontend: "https://github.com/harshit-G51102/food-ordering-app.git",
        detailsLink: "#",
        gradient: "from-pink-500 to-orange-500",
        color: "orange"
    },
    {
        id: 6,
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
        id: 7,
        title: "NEXT JS React Meetups",
        image: meetups,
        tools: ["Next.js", "React", "Vercel"],
        liveLink: "http://nextjs-meetups-pi-ten.vercel.app/",
        githubFrontend: "https://github.com/harshit-G51102/nextjs-meetups.git",
        detailsLink: "projects/meetups",
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
