import bodyMass from "../../assets/images/projects/Body Mass Index.png";
import gameHub from "../../assets/images/projects/The Min Game Hub.png";
import sunnySide from "../../assets/images/projects/Frontend Mentor Sunnyside agency landing page.png";
import socialDasboard from "../../assets/images/projects/Frontend Mentor Social Media Dashboard.png";
import Huddle from "../../assets/images/projects/Frontend Mentor Huddle landing page with alternating feature blocks.png";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="project-container my-9 lg:p-10 text-center">
          <img
            className="rounded-xl mb-7"
            src={gameHub}
            alt="homepage of the min game hub"
          />
          <a
            href="https://themingamehub.netlify.app"
            className="font-semibold rounded-xl bg-accentColor text-background p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            Live Site
          </a>
          <a
            href="https://github.com/mishael-codes/The-Min-Game-Hub"
            className="font-semibold rounded-xl bg-shadowColor text-textColor p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Link
          </a>
        </div>
        <div className="project-container my-9 lg:p-10 text-center">
          <img
            className="rounded-xl mb-7"
            src={sunnySide}
            alt="hero section of sunnySide"
          />
          <a
            href="https://mishael-codes.github.io/sunnyside-agency-landing-page-main/"
            className="font-semibold rounded-xl bg-accentColor text-background p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            Live Site
          </a>
          <a
            href="https://github.com/mishael-codes/sunnyside-agency-landing-page-main"
            className="font-semibold rounded-xl bg-shadowColor text-textColor p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Link
          </a>
        </div>
        <div className="project-container my-9 lg:p-10 text-center">
          <img
            className="rounded-xl mb-7"
            src={socialDasboard}
            alt="picture of the social media dashboard site"
          />
          <a
            href="https://mishael-codes.github.io/social-media-dashboard-with-theme-switcher-master"
            className="font-semibold rounded-xl bg-accentColor text-background p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            Live Site
          </a>
          <a
            href="https://github.com/mishael-codes/social-media-dashboard-with-theme-switcher-master"
            className="font-semibold rounded-xl bg-shadowColor text-textColor p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Link
          </a>
        </div>
        <div className="project-container my-9 lg:p-10 text-center">
          <img
            className="rounded-xl mb-7"
            src={Huddle}
            alt="huddle landing page"
          />
          <a
            href="https://mishael-codes.github.io/huddle-landing-page-with-alternating-feature-blocks-master/"
            className="font-semibold rounded-xl bg-accentColor text-background p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            Live Site
          </a>
          <a
            href="https://github.com/mishael-codes/huddle-landing-page-with-alternating-feature-blocks-master"
            className="font-semibold rounded-xl bg-shadowColor text-textColor p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Link
          </a>
        </div>
        <div className="project-container my-9 lg:p-10 text-center">
          <img
            className="rounded-xl mb-7"
            src={bodyMass}
            alt="Picture of the bmi calculator"
          />
          <a
            href="https://mishael-codes.github.io/BMI-Calc/"
            className="font-semibold rounded-xl bg-accentColor text-background p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            Live Site
          </a>
          <a
            href="https://github.com/mishael-codes/BMI-Calc"
            className="font-semibold rounded-xl bg-shadowColor text-textColor p-3 mx-3"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Link
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
