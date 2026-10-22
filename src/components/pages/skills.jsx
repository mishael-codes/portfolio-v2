import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faReact, faSquareGit } from "@fortawesome/free-brands-svg-icons";
import tailwindCss from "../../assets/icons/icons8-tailwindcss-75.png";

const groups = [
  {
    title: "Build",
    colour: "text-yellow-300",
    skills: [
      { name: "HTML5", icon: faHtml5, colour: "text-orange-500" },
      { name: "CSS3", icon: faCss3, colour: "text-blue-400" },
      { name: "JavaScript", icon: faJsSquare, colour: "text-yellow-300" },
    ],
  },
  {
    title: "Shape",
    colour: "text-teal-300",
    skills: [
      { name: "React", icon: faReact, colour: "text-cyan-300" },
      { name: "Tailwind", image: tailwindCss },
      { name: "Bootstrap", icon: faBootstrap, colour: "text-violet-400" },
    ],
  },
  {
    title: "Ship",
    colour: "text-rose-300",
    skills: [
      { name: "Git", icon: faSquareGit, colour: "text-orange-400" },
      { name: "GitHub", icon: faGithub, colour: "text-white" },
    ],
  },
];

const Skills = () => (
  <div className="section-shell grid gap-10 md:grid-cols-[1fr_1.5fr]">
    <div>
      <h2 className="section-title max-w-xs text-white">The tools behind the work.</h2>
      <p className="body-copy mt-7 max-w-md">
        A practical toolkit for turning a strong visual direction into a fast, accessible experience.
      </p>
    </div>
    <div className="grid gap-4 sm:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="border-t border-white/20 pt-5">
          <h3 className={`text-2xl font-bold ${group.colour}`}>{group.title}</h3>
          <div className="mt-5 flex flex-col gap-3">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-chip justify-start">
                {skill.image ? <img src={skill.image} alt="" className="h-5 w-5 object-contain" /> : <FontAwesomeIcon icon={skill.icon} className={`text-xl ${skill.colour}`} />}
                <span className="text-sm text-stone-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
