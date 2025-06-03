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
  return (
    <div className="relative px-3 h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center text-textColor">
      <h1 className="mt-4 mb-8 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor md:text-3xl">
        Skills
      </h1>
      <div className="w-full">
        <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 lg:text-xl lg:pr-9 w-3/4">
          To bring your pixel-perfect designs to life on the web, making it
          responsive, interctive, functional and efficient, I utilise the
          following skills...
        </p>
        <div className="w-full">
          <h3 className="px-2 text-xl font-medium mt-4 shadow-md shadow-shadowColor wood w-fit lg:text-xl">
            Core Technologies<span className="text-accentColor">:</span>
          </h3>
          <div className="w-full flex justify-evenly py-9">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-accentColor w-[75px] h-[75px]"
            />
            <FontAwesomeIcon
              icon={faCss3}
              className="text-accentColor w-[75px] h-[75px]"
            />
            <FontAwesomeIcon
              icon={faJsSquare}
              className="text-accentColor w-[75px] h-[75px]"
            />
          </div>
          <h3 className="px-2 text-xl font-medium mt-4 shadow-md shadow-shadowColor wood w-fit lg:text-xl">
            Libraries and Frameworks<span className="text-accentColor">:</span>
          </h3>
          <div className="w-full flex justify-evenly py-9">
            <FontAwesomeIcon
              icon={faBootstrap}
              size="2xl"
              className="text-accentColor w-[75px] h-[75px]"
            />
            <img
              src={tailwindCss}
              alt="tailwindcss"
              className="w-[75px] h-[75px]"
            />
            <FontAwesomeIcon
              icon={faReact}
              size="2xl"
              className="text-accentColor w-[75px] h-[75px]"
            />
          </div>
          <h3 className="px-2 text-xl font-medium mt-4 shadow-md shadow-shadowColor wood w-fit lg:text-xl">
            Version Control<span className="text-accentColor">:</span>
          </h3>
          <div className="w-full flex justify-evenly py-9">
            <FontAwesomeIcon
              icon={faSquareGit}
              size="2xl"
              className="text-accentColor w-[75px] h-[75px]"
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="text-accentColor w-[75px] h-[75px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block overflow-x-hidden">
        <div>
          <div className="absolute top-1/4 -right-40 w-[75px] h-[75px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle"></div>
          <div className="absolute top-2/4 -right-40 w-[75px] h-[75px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle"></div>
          <div className="absolute top-3/4 -right-40 w-[75px] h-[75px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle"></div>
          <div className="absolute top-1/4 -left-40 w-[75px] h-[75px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle-left"></div>
          <div className="absolute top-2/4 -left-40 w-[75px] h-[75px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle-left"></div>
          <div className="absolute top-3/4 -left-40 w-[75px] h-[75px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
