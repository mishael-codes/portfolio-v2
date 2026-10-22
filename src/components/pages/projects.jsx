import cuttr from "../../assets/images/projects/Cuttr.webp";
import gamehub from "../../assets/images/projects/The Min Game Hub.webp";
import sunnyside from "../../assets/images/projects/Sunnyside agency landing page.webp";
import socialDashboard from "../../assets/images/projects/Social Media Dashboard.webp";
import huddle from "../../assets/images/projects/Huddle landing page.webp";
import bmi from "../../assets/images/projects/Body Mass Index.webp";

const projects = [
  { name: "Cuttr", type: "Product design", image: cuttr, liveUrl: "https://cuttr.vercel.app", gitUrl: "https://github.com/mishaelcodes/cuttr", description: "A focused link management tool with useful analytics and a calm workflow." },
  { name: "The Min Game Hub", type: "Web experience", image: gamehub, liveUrl: "https://themingamehub.netlify.app", gitUrl: "https://github.com/mishael-codes/the-min-game-hub", description: "A playful home for discovering and playing browser games." },
  { name: "SunnySide", type: "Landing page", image: sunnyside, liveUrl: "https://mishael-codes.github.io/sunnyside-agency-landing-page-main/", gitUrl: "https://github.com/mishael-codes/sunnyside-agency-landing-page-main", description: "A bright agency page built around strong type and clear sections." },
  { name: "Social Media Dashboard", type: "Dashboard", image: socialDashboard, liveUrl: "https://mishael-codes.github.io/social-media-dashboard-with-theme-switcher-master/", gitUrl: "https://github.com/mishael-codes/social-media-dashboard-with-theme-switcher-master", description: "A responsive dashboard with light and dark themes." },
  { name: "Huddle", type: "Community platform", image: huddle, liveUrl: "https://mishael-codes.github.io/huddle-landing-page-with-alternating-feature-blocks-master/", gitUrl: "https://github.com/mishael-codes/huddle-landing-page-with-alternating-feature-blocks-master", description: "A community landing page with a friendly, flexible layout." },
  { name: "BMI Calculator", type: "Useful tool", image: bmi, liveUrl: "https://mishael-codes.github.io/bmi-calc-v2/", gitUrl: "https://github.com/mishaelcodes/bmi-calc-v2", description: "A small health tool that gives clear feedback at a glance." },
];

const Projects = () => (
  <div className="section-shell">
    <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
      <div>
        <h2 className="section-title max-w-sm text-white">A few things I have made.</h2>
      </div>
      <p className="body-copy max-w-lg md:justify-self-end">
        Small experiments and larger ideas, all made with attention to how people actually use them.
      </p>
    </div>
    <div>
      {projects.map((project, index) => (
        <article className="project-row" key={project.name}>
          <div className="project-image">
            <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div>
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-yellow-300">0{index + 1} / {project.type}</span>
                <span className="text-xs text-stone-500">2023 to 2024</span>
              </div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">{project.name}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-stone-400">{project.description}</p>
            </div>
            <div className="flex gap-5 text-xs font-bold uppercase tracking-widest">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-yellow-300 hover:text-white">Visit site</a>
              <a href={project.gitUrl} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white">Source code</a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Projects;
