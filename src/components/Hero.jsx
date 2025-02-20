import React from 'react';
import HeroImg from '../assets/gokul.jpg';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";  // Import Link for navigation

function Hero() {
    const config = {
        subtitle: "I'm a Full-stack Developer and Designer",
        social: {
            github: 'https://github.com/Gok-max?tab=repositories',
            linkedin: 'https://www.linkedin.com/in/gokul-v-822b01220/',
            resume: 'https://drive.google.com/file/d/1jWmt3HtCArSCCG_jy1I4xtV7IKUdBmIF/view?usp=sharing'
        }
    };

    return (
       <section className="flex flex-col md:flex-row px-5 py-32 bg-gradient-to-b from-gray-900 to-gray-700 justify-center items-center">
            {/* Left Side */}
            <div className="md:w-1/2 flex flex-col text-center md:text-left">
                <h1 className="text-white text-4xl font-bold">
                    Hi, 👋 <br /> I'm <span className="text-5xl">G</span>okul <span className="text-5xl">V</span>enkatesan
                </h1>
                <p className="text-xl text-teal-500 mt-2">{config.subtitle}</p>

                {/* Social Icons */}
                <div className="flex py-4 gap-4 justify-center md:justify-start text-gray-400">
                    <a href={config.social.github} target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub size={40} className="hover:text-teal-700 transition duration-300" />
                    </a>
                    <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <AiOutlineLinkedin size={40} className="hover:text-teal-700 transition duration-300" />
                    </a>
                    <a href={config.social.resume} target="_blank" rel="noopener noreferrer">
                        <MdOutlineManageAccounts size={40} className="hover:text-teal-700 transition duration-300" />
                    </a>
                </div>

                {/* View Projects Button */}
                <Link 
                    to="/projects"
                    className="bg-teal-900 w-1/2 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-lg mx-auto text-center md:mx-0"
                >
                    View My Work
                </Link>
            </div>

            {/* Right Side (Image) */}
            <img src={HeroImg} alt="Gokul Venkatesan" className="md:w-1/3 w-2/3 h-1/2 mt-8 md:mt-0 rounded-2xl shadow-lg" />
        </section>
    );
}

export default Hero;
