import cuttr from "../../assets/images/projects/Cuttr.webp";
import gamehub from "../../assets/images/projects/The Min Game Hub.webp";
import sunnyside from "../../assets/images/projects/Sunnyside agency landing page.webp";
import socialDashboard from "../../assets/images/projects/Social Media Dashboard.webp";
import huddle from "../../assets/images/projects/Huddle landing page.webp";
import bmi from "../../assets/images/projects/Body Mass Index.webp";

const Projects = () => {
  const someProjects = [
    {
      name: "Cuttr",
      gitUrl: "https://github.com/mishaelcodes/cuttr",
      liveUrl: "https://cuttr.vercel.app",
      img: cuttr,
      description:
        "Tame the link chaos! Cuttr lets you shorten, track, and manage all your links in one place. Gain valuable insights and simplify sharing.",
    },
    {
      name: "The Min Game Hub",
      gitUrl: "https://github.com/mishael-codes/the-min-game-hub",
      liveUrl: "https://themingamehub.netlify.app",
      img: gamehub,
      description:
        "An address on the internet where you can play some of the best games on the internet. Built with HTML, CSS and JavaScript.",
    },
    {
      name: "SunnySide",
      gitUrl:
        "https://github.com/mishael-codes/sunnyside-agency-landing-page-main",
      liveUrl:
        "https://mishael-codes.github.io/sunnyside-agency-landing-page-main/",
      img: sunnyside,
      description:
        "A landing page for a fictional branding agency. Built with HTML, CSS and JavaScript. Fully responsive mobile-first design.",
    },
    {
      name: "Social Media Dashboard",
      gitUrl:
        "https://github.com/mishael-codes/social-media-dashboard-with-theme-switcher-master",
      liveUrl:
        "https://mishael-codes.github.io/social-media-dashboard-with-theme-switcher-master/",
      img: socialDashboard,
      description:
        "A fully responsive social media tracking dashboard with light and dark themes. Built with HTML, CSS and JavaScript.",
    },
    {
      name: "Huddle Landing Page",
      gitUrl:
        "https://github.com/mishael-codes/huddle-landing-page-with-alternating-feature-blocks-master",
      liveUrl:
        "https://mishael-codes.github.io/huddle-landing-page-with-alternating-feature-blocks-master/",
      img: huddle,
      description:
        "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users.",
    },
    {
      name: "BMI Calculator",
      gitUrl: "https://github.com/mishaelcodes/bmi-calc-v2",
      liveUrl: "https://mishaelcodes.github.io/bmi-calc-v2/",
      img: bmi,
      description:
        "A healthy living advocate body mass index calculator which helps to give the user clear feedback on their weight goals.",
    },
  ];

  return (
    <div className="relative px-6 py-16 w-full max-w-7xl mx-auto flex flex-col items-center z-10">
      
      <div className="w-full text-center mb-16 relative z-10">
        <h2 className="inline-block text-3xl font-bold tracking-wider uppercase text-textColor relative">
          Featured Work
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accentColor rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 w-full">
        {someProjects.map((project) => (
          <div
            key={project.liveUrl}
            className="group glass rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] border border-white/5"
          >
            <div className="relative overflow-hidden aspect-video border-b border-white/5">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={project.img} 
                alt={project.name} 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-textColor mb-3 group-hover:text-accentColor transition-colors">
                {project.name}
              </h3>
              <p className="text-textColor/70 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={project.liveUrl}
                  className="flex-1 text-center font-semibold bg-accentColor text-background px-4 py-2 hover:bg-white hover:text-black rounded-lg transition-all duration-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Site
                </a>
                <a
                  href={project.gitUrl}
                  className="flex-1 text-center font-semibold bg-white/10 text-white px-4 py-2 hover:bg-white/20 border border-white/10 rounded-lg transition-all duration-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10">
        <a
          href="https://github.com/mishael-codes"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center justify-center px-8 py-3 bg-shadowColor/80 text-white font-semibold rounded-full border border-white/10 hover:border-accentColor/50 hover:text-accentColor transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
        >
          See More on GitHub
        </a>
      </div>

      {/* Background Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accentColor rounded-full opacity-[0.08] blur-[150px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-[0.05] blur-[150px]"></div>
      </div>
    </div>
  );
};

export default Projects;
