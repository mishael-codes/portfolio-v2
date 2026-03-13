import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
  faGithub,
  faSquareGit,
} from "@fortawesome/free-brands-svg-icons";
import tailwindCss from "../../assets/icons/icons8-tailwindcss-75.png";
import "../../App.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "HTML5", icon: faHtml5, color: "group-hover:text-[#E34F26]" },
        { name: "CSS3", icon: faCss3, color: "group-hover:text-[#1572B6]" },
        { name: "JavaScript", icon: faJsSquare, color: "group-hover:text-[#F7DF1E]" },
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: faReact, color: "group-hover:text-[#61DAFB]" },
        { name: "Tailwind", img: tailwindCss },
        { name: "Bootstrap", icon: faBootstrap, color: "group-hover:text-[#7952B3]" },
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: faSquareGit, color: "group-hover:text-[#F05032]" },
        { name: "GitHub", icon: faGithub, color: "group-hover:text-white" },
      ]
    }
  ];

  return (
    <div className="relative px-6 py-16 w-full max-w-6xl mx-auto flex flex-col items-center">
      
      <div className="w-full text-center mb-12 relative z-10">
        <h2 className="inline-block text-3xl font-bold tracking-wider uppercase text-textColor relative">
          Tech Stack
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accentColor rounded-full"></div>
        </h2>
        <p className="mt-8 text-textColor/70 max-w-2xl mx-auto text-lg">
          To bring pixel-perfect designs to life on the web—making them
          responsive, interactive, and performant—I utilize the following tools.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-textColor mb-6 border-b border-white/10 pb-4">
              {category.title}<span className="text-accentColor">.</span>
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center shadow-inner border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    {skill.img ? (
                      <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain transition-transform group-hover:scale-110" loading="lazy" />
                    ) : (
                      <FontAwesomeIcon icon={skill.icon} className={`text-4xl text-textColor/50 transition-colors duration-300 ${skill.color}`} />
                    )}
                  </div>
                  <span className="text-sm font-medium text-textColor/60 group-hover:text-textColor/90 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Background Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accentColor rounded-full opacity-[0.15] blur-[120px] -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Skills;
