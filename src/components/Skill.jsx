import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaCode } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiRedux, SiNetlify, SiRender } from "react-icons/si";

function Skills() {
  return (
    <section className="px-5 py-20 bg-gradient-to-b from-gray-900 to-gray-700 text-teal-700 flex flex-col items-center">
      {/* Title & Description */}
      <h2 className="text-4xl font-bold text-teal-400 mb-4">Technical Skills</h2>
      <p className="text-gray-400 text-lg text-center max-w-3xl">
        I have experience working with various frontend and backend technologies to build modern, scalable web applications.  
        Below is a categorized list of the tools and frameworks I use.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-10">
        
        {/* Frontend Skills - Left Side */}
        <div>
          <h3 className="text-2xl text-[#FF6B6B] mb-4 text-center md:text-left">Frontend Technologies</h3>
          <p className="text-gray-400 text-center md:text-left mb-4">Building interactive and responsive user interfaces.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SkillCard icon={<FaHtml5 size={50} className="text-orange-500" />} name="HTML5" />
            <SkillCard icon={<FaCss3Alt size={50} className="text-blue-500" />} name="CSS3" />
            <SkillCard icon={<FaJs size={50} className="text-yellow-400" />} name="JavaScript" />
          </div>

          {/* Frontend Frameworks */}
          <h4 className="text-xl text-[#4C8BF5] mt-6 text-center md:text-left">Frontend Frameworks</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            <SkillCard icon={<FaReact size={50} className="text-cyan-400" />} name="React.js" />
            <SkillCard icon={<SiTailwindcss size={50} className="text-teal-400" />} name="Tailwind CSS" />
            <SkillCard icon={<SiRedux size={50} className="text-purple-500" />} name="Redux" />
          </div>
        </div>

        {/* Backend Skills - Right Side */}
        <div>
          <h3 className="text-2xl text-[#4C8BF5] mb-4 text-center md:text-left">Backend Technologies</h3>
          <p className="text-gray-400 text-center md:text-left mb-4">Managing server-side logic and database interactions.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SkillCard icon={<FaNodeJs size={50} className="text-green-500" />} name="Node.js" />
            <SkillCard icon={<SiExpress size={50} className="text-gray-500" />} name="Express.js" />
            <SkillCard icon={<SiMongodb size={50} className="text-green-400" />} name="MongoDB" />
          </div>
        </div>

      </div>

      {/* Developer Tools - Center Below */}
      <div className="mt-10 w-full max-w-5xl">
        <h3 className="text-2xl text-[#FFB400] mb-4 text-center">Developer Tools</h3>
        <p className="text-gray-400 text-center mb-4">Tools that enhance my workflow and deployment process.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          <SkillCard icon={<FaCode size={50} className="text-blue-400" />} name="VS Code" />
          <SkillCard icon={<FaGithub size={50} className="text-gray-300" />} name="GitHub" />
          <SkillCard icon={<SiNetlify size={50} className="text-blue-500" />} name="Netlify" />
          <SkillCard icon={<SiRender size={50} className="text-purple-400" />} name="Render" />
        </div>
      </div>

    </section>
  );
}

// Skill Card Component
function SkillCard({ icon, name }) {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 rounded-2xl shadow-md">
      {icon}
      <p className="mt-2 text-lg">{name}</p>
    </div>
  );
}

export default Skills;
