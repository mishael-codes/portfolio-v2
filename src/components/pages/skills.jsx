import useRandom from "../../hooks/useRandom";
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
import tailwindCss from "../../assets/icons/tailwindcss.svg";
import "../../App.css";

const Skills = () => {
  const letter = useRandom()
  return (
    <div className="relative px-3 h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center text-textColor">
      <h1 className="mt-4 mb-8 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor lg:text-3xl">
        Skills
      </h1>
      <div className="lg:flex justify-between items-center">
        <p className="first-letter:text-2xl md:first-letter:text-5xl first-letter:text-accentColor first-letter:font-semibold indent-3 lg:text-2xl lg:pr-9 lg:w-1/2 ">
          To bring you a beautiful, well-structured, interactive and efficient
          webpage or website, I make use of the beautiful tools below.
        </p>
        <div className="lg:w-1/2">
          <h3 className="px-2 text-xl font-medium mt-4 shadow-md shadow-shadowColor wood w-fit lg:text-3xl">
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
          <h3 className="px-2 text-xl font-medium mt-4 shadow-md shadow-shadowColor wood w-fit lg:text-3xl">
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
          <h3 className="px-2 text-xl font-medium mt-4 shadow-md shadow-shadowColor wood w-fit lg:text-3xl">
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
      <div className="hidden lg:block">
        <div className="uppercase absolute top-2/4 right-[70%] opacity-30 w-[80px] h-[80px] text-center text-accentColor text-xl lg:text-[700px] transform animate- animate-pulse z-0">
          {letter}
        </div>
        <div className="absolute top-1/4 -right-40 w-[100px] h-[100px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle"></div>
        <div className="absolute top-2/4 -right-40 w-[100px] h-[100px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle"></div>
        <div className="absolute top-3/4 -right-40 w-[100px] h-[100px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle"></div>
        <div className="absolute top-1/4 -left-40 w-[100px] h-[100px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle-left"></div>
        <div className="absolute top-2/4 -left-40 w-[100px] h-[100px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle-left"></div>
        <div className="absolute top-3/4 -left-40 w-[100px] h-[100px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle-left"></div>
        <div className="absolute"></div>
        <div className="absolute"></div>
        <div className="absolute"></div>
        <div className="absolute"></div>
      </div>
    </div>
  );
};

export default Skills;
