import cuttr from "../../assets/images/projects/Cuttr.webp";
import gamehub from "../../assets/images/projects/The Min Game Hub.webp";
import sunnyside from "../../assets/images/projects/Sunnyside agency landing page.webp";
import socialDashboard from "../../assets/images/projects/Social Media Dashboard.webp";
import huddle from "../../assets/images/projects/Huddle landing page.webp";
import bmi from "../../assets/images/projects/Body Mass Index.webp";
const Projects = () => {
  // list of some projects
  const someProjects = [
    {
      name: "Cuttr",
      gitUrl: "https://github.com/mishaelcodes/cuttr",
      liveUrl: "https://cuttr.vercel.app",
      img: cuttr,
      description:
        "Tame the link chaos! Cuttr lets you shorten, track, and manage all your links in one place. Gain valuable insights and simplify sharing. Free to use, sign up now!",
    },
    {
      name: "The Min Game Hub",
      gitUrl: "https://github.com/mishael-codes/the-min-game-hub",
      liveUrl: "https://themingamehub.netlify.app",
      img: gamehub,
      description:
        "An address on the internet where you can play some of the best games on the internet. This project was built with HTML, CSS and JavaScript. It is fully responsive.",
    },
    {
      name: "SunnySide",
      gitUrl:
        "https://github.com/mishael-codes/sunnyside-agency-landing-page-main",
      liveUrl:
        "https://mishael-codes.github.io/sunnyside-agency-landing-page-main/",
      img: sunnyside,
      description:
        "A landing page for a fictional branding agency. This project was built with HTML, CSS and JavaScript. It is fully responsive and has a mobile first design.",
    },
    {
      name: "Social Media Dashboard",
      gitUrl:
        "https://github.com/mishael-codes/social-media-dashboard-with-theme-switcher-master",
      liveUrl:
        "https://mishael-codes.github.io/social-media-dashboard-with-theme-switcher-master/",
      img: socialDashboard,
      description:
        "A fully responsive social media tracking dashboard with light and dark themes. This was built with HTML, CSS and JavaScript.",
    },
    {
      name: "Huddle Landing Page",
      gitUrl:
        "https://github.com/mishael-codes/huddle-landing-page-with-alternating-feature-blocks-master",
      liveUrl:
        "https://mishael-codes.github.io/huddle-landing-page-with-alternating-feature-blocks-master/",
      img: huddle,
      description:
        "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
    },
    {
      name: "BMI Calculator",
      gitUrl: "https://github.com/mishaelcodes/bmi-calc-v2",
      liveUrl: "https://mishaelcodes.github.io/bmi-calc-v2/",
      img: bmi,
      description:
        "With a cause to advocate for healthy living, I built a body mass index calculator which helps to give the user a clear feedback on whether they need to put on weight, pull off weight, or maintain their weight.",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 p-10 gap-5 lg:p-6">
          {/* loop throught the list of projects with the map function */}
          {someProjects.map((project) => (
            <div
              key={project.liveUrl}
              className="project-container mb-10 text-center p-3"
            >
              <img className="rounded-xl mb-7" src={project.img} alt="" />
              <div className="mb-10">
                <h3 className="text-accentColor font-semibold">
                  {project.name}
                </h3>
                <p className="text-textColor">{project.description}</p>
              </div>

              <div className="links relative">
                <a
                  href={project.liveUrl}
                  className="font-semibold rounded-xl bg-accentColor text-background p-2 mx-3 hover:bg-transparent hover:text-accentColor border-accentColor border-2 transition-all"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Site
                </a>
                <a
                  href={project.gitUrl}
                  className="font-medium rounded-xl bg-shadowColor text-textColor p-2 mx-3 hover:bg-transparent border-shadowColor border-2 transition-all"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/mishael-codes"
          rel="noreferrer"
          target="_blank"
          className="relative z-10 bg-background text-accentColor border-b-2 border-accentColor mb-10 see-more transition-all overflow-hidden py-2"
        >
          <button className="px-4">See More on GitHub</button>
        </a>
      </div>
    </>
  );
};

export default Projects;
