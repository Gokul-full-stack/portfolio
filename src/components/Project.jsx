import { useState } from "react";
import frontend from "../assets/frontend.gif"
import backend from "../assets/backend.gif"
import fullStack from "../assets/fullStack.gif"

const projects = [
    {
    title: "FitPro - Personalized Fitness Class Booking Platform",
    description: "FitPro is a full-stack web application that allows users to book personalized fitness classes. It includes features like class scheduling, trainer profiles, booking management, class recommendations, trainer feedback, and payment processing.",
    techStack: ["MERN Stack (MongoDB, Express.js, React, Node.js) & Tailwind CSS"],
    image: fullStack,
    liveDemo: "https://gregarious-chaja-838e53.netlify.app/",
    github: "https://github.com/Gok-max/Fitness-Frontend-Authorization",
    category: "Full stack"
  },
  {
    title: "Landing Page Task",
    description: "A single responsive landing page based on a Figma design, built with HTML and CSS.",
    techStack: ["HTML", "CSS"],
    image: frontend,
    liveDemo: "https://fabulous-stroopwafel-59ae68.netlify.app/",
    github: "https://github.com/Gok-max/Zenclass_task1",
    category: "Front-End"
  },
  {
    title: "Create Landing Page",
    description: "A responsive landing page built with Tailwind CSS, based on a Figma design.",
    techStack: ["HTML", "Tailwind CSS"],
    image: frontend,
    liveDemo: "https://loquacious-gaufre-76b307.netlify.app/",
    github: "https://github.com/Gok-max/ZenClass_task2",
    category: "Front-End"
  },
  {
    title: "Memory Game",
    description: "A fun and interactive memory game with sound effects, animations, and restart functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: frontend,
    liveDemo: "https://superlative-pasca-4612ab.netlify.app/",
    github: "https://github.com/Gok-max/Memory_Game/tree/main/task%203",
    category: "Front-End"
  },
  {
    title: "Income Expense Calculator",
    description: "Track your income and expenses with CRUD operations and local storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: frontend,
    liveDemo: "https://incredible-seahorse-c7f80c.netlify.app/",
    github: "https://github.com/Gok-max/Income_expense-calculater",
    category: "Front-End"
  },
  {
    title: "Add To Cart",
    description: "A React-based shopping cart using Fake Store API, with product listing and cart management.",
    techStack: ["React", "Tailwind CSS"],
    image: frontend,
    liveDemo: "https://celebrated-croquembouche-9dfe10.netlify.app/",
    github: "https://github.com/Gok-max/Add-to-cart-project/tree/main",
    category: "Front-End"
  },
  {
    title: "Router Task",
    description: "A React application implementing routing with dynamic product pages and cart functionality.",
    techStack: ["React", "Tailwind CSS"],
    image: frontend,
    liveDemo: "https://stately-puppy-27854d.netlify.app/",
    github: "https://github.com/Gok-max/Add-to-cart-using-router/tree/main",
    category: "Front-End"
  },
  {
    title: "Movie Search App",
    description: "Search for movies and view details fetched from an external API.",
    techStack: ["React", "Tailwind CSS"],
    image: frontend,
    liveDemo: "https://keen-pudding-be2c59.netlify.app/",
    github: "https://github.com/Gok-max/Search-application/tree/main",
    category: "Front-End"
  },
  {
    title: "SQL Task",
    description: `A fully functional ReactJS application that fetches product data from the Fake Store API and allows users to explore products and add them to the cart using a modal interface. The project incorporates React's component-based architecture, state management, and responsive design to deliver an engaging user experience.`,
    techStack: ["SQL"],
    image: backend,
    github: "https://github.com/Gok-max/Sql-task",
    category: "Back-End"
  },
  {
    title: "Design DB - Zenclass",
    description: `A fully functional ReactJS application that fetches product data from the Fake Store API and allows users to explore products and add them to the cart using a modal interface. The project incorporates React's component-based architecture, state management, and responsive design to deliver an engaging user experience.`,
    techStack: ["MongoDB"],
    image: backend,
    github: "https://github.com/Gok-max/Mongodb_task/tree/main",
    category: "Back-End"
  },
    {
    title: "Recipes App",
    description: "A fully functional ReactJS application that fetches product data from the Fake Store API and allows users to explore products and add them to the cart using a modal interface. The project incorporates React's component-based architecture, state management, and responsive design to deliver an engaging user experience.",
    techStack: ["Node JS"],
    image: backend,
    liveDemo: "https://recipetask-3.onrender.com/api/recipes/getdata",
    github: "https://github.com/Gok-max/recipe-task-node/tree/main",
    category: "Back-End"
  },
  {
    title: "Authendication & Authorization",
    description: "A fully functional ReactJS application that fetches product data from the Fake Store API and allows users to explore products and add them to the cart using a modal interface. The project incorporates React's component-based architecture, state management, and responsive design to deliver an engaging user experience.",
    techStack: ["Node JS"],
    image: backend,
    liveDemo: "https://authorization-in-node-1.onrender.com",
    github: "https://github.com/Gok-max/Authorization-in-node/tree/main/User",
    category: "Back-End"
  },
  
];

const categories = ["All", "Front-End", "Back-End", "Full stack"];

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-10 px-5 md:px-20">
      <h1 className="text-teal-400 text-4xl font-bold text-center">Projects Showcase</h1>
      <p className="text-gray-400 text-center mt-2">Explore some of my featured web development projects with live demos and source code.</p>
      
      <div className="flex justify-center gap-4 mt-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm ${selectedCategory === category ? "bg-teal-900 text-white" : "bg-gray-700 text-gray-300 hover:bg-teal-700"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-[#1E293B] p-6 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="w-full md:w-1/2 rounded-lg" />
            <div>
              <h2 className="text-xl font-semibold text-teal-600">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-teal-900 px-3 py-1 rounded-lg text-xs">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.liveDemo} className="bg-[#536878] text-white hover:bg-teal-900 px-4 py-2 rounded-md text-sm font-semibold" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} className="bg-[#536878] text-white hover:bg-teal-900 px-4 py-2 rounded-md text-sm font-semibold" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
