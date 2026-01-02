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
              <img className="mb-7 w-full h-auto object-cover rounded" src={project.img} alt={`${project.name} screenshot`} />
              <div className="mb-10">
                <h3 className="text-accentColor font-semibold">
                  {project.name}
                </h3>
                <p className="text-textColor">{project.description}</p>
              </div>

              <div className="links relative">
                <a
                  href={project.liveUrl}
                  className="font-semibold bg-accentColor text-background p-2 mx-3 hover:bg-transparent hover:text-accentColor border-accentColor border-2 rounded-lg transition-all duration-500"
                  rel="noreferrer"
                  target="_blank"
                return (
                  <>
                    <div className="max-w-7xl mx-auto p-6">
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {someProjects.map((project) => (
                          <article
                            key={project.liveUrl}
                            className="group bg-background border border-transparent dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                          >
                            <div className="relative h-44 sm:h-56">
                              <img
                                src={project.img}
                                alt={`${project.name} screenshot`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                            </div>

                            <div className="p-4">
                              <h3 className="text-accentColor font-semibold text-lg">
                                {project.name}
                              </h3>
                              <p className="mt-2 text-sm text-textColor line-clamp-3">
                                {project.description}
                              </p>

                              <div className="mt-4 flex flex-wrap gap-3">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Open ${project.name} live site`}
                                  className="inline-flex items-center gap-2 px-3 py-2 bg-accentColor text-background rounded-md font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accentColor/50"
                                >
                                  Live
                                </a>

                                <a
                                  href={project.gitUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Open ${project.name} repository`}
                                  className="inline-flex items-center gap-2 px-3 py-2 border border-[color:var(--shadowColor)] text-textColor rounded-md bg-transparent hover:bg-shadowColor/10 focus:outline-none focus:ring-2 focus:ring-accentColor/30"
                                >
                                  Code
                                </a>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>

                      <div className="mt-8 text-center">
                        <a
                          href="https://github.com/mishael-codes"
                          rel="noreferrer"
                          target="_blank"
                          className="inline-flex items-center gap-2 px-5 py-3 bg-accentColor text-background rounded-lg font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accentColor/50"
                        >
                          See More on GitHub
                        </a>
                      </div>
                    </div>
                  </>
                );
