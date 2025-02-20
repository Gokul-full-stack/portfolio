import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroImg from "./assets/gv.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation(); // Get current path

  const getLinkClass = (path) =>
    location.pathname === path ? "text-teal-500 font-semibold" : "text-gray-400 hover:text-teal-700";

  return (
    <nav className="bg-gray-900 text-gray-400 py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={HeroImg} alt="Gokul Venkatesan" className="h-10" />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-8 absolute md:relative bg-gray-900 md:bg-transparent w-1/2 h-auto md:w-auto right-0 top-16 md:top-auto flex-col md:flex-row items-center justify-center transition-transform duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li><Link to="/" className={`block py-4 text-center ${getLinkClass("/")}`} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={`block py-4 text-center ${getLinkClass("/about")}`} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skills" className={`block py-4 text-center ${getLinkClass("/skills")}`} onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" className={`block py-4 text-center ${getLinkClass("/projects")}`} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" className={`block py-4 text-center ${getLinkClass("/contact")}`} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
