import React from "react";
import AboutImg from "../assets/resume.jpg"; 

function About() {
  return (
    <section className="bg-gray-900 text-white py-20 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img 
            src={AboutImg} 
            alt="Gokul Venkatesan" 
            className=" rounded-2xl shadow-lg w-full md:w-3/4 mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-teal-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm <span className="text-teal-400 font-semibold">Gokul Venkatesan</span>, a dedicated 
            <span className="text-teal-400 font-semibold"> MERN Stack Developer</span> with a strong passion for building web applications that provide seamless user experiences.
          </p>
          
          {/* Background */}
          <h3 className="text-xl font-semibold text-teal-400 mt-6">Background</h3>
          <p className="text-gray-300 leading-relaxed">
            I started my journey in web development with a deep curiosity for frontend technologies. Over time, I mastered 
            <span className="text-teal-400"> React.js, Node.js, Express.js, and MongoDB</span>, building scalable applications.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold text-teal-400 mt-6">Skills</h3>
          <p className="text-gray-300 leading-relaxed">
            Proficient in <span className="text-teal-400">React.js, TailwindCSS, JavaScript (ES6+), Node.js, Express.js, MongoDB</span>, and API integrations. I focus on writing clean, efficient, and reusable code.
             <br />
          ✍️ <span className="text-teal-400">**Story Writing**</span> – I love creating engaging love stories, fictional narratives, and immersive storytelling experiences.
          </p>

          {/* Career Goals */}
          <h3 className="text-xl font-semibold text-teal-400 mt-6">Career Goals</h3>
          <p className="text-gray-300 leading-relaxed">
            My goal is to become a **full-stack developer** specializing in building high-performance web applications. 
            I am passionate about **learning new technologies, improving UI/UX**, and contributing to open-source projects.
          </p>
          
          {/* View Projects Button */}
          <div className="mt-6">
            <a
              href="/projects"
              className="bg-teal-900 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 inline-block"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
