import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import "../../App.css";

const Social = () => {
  return (
    <>
      <div className="relative h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center">
        <h1 className="mt-4 mb-8 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor">
          Socials
        </h1>

        <div className="w-full flex items-center justify-evenly flex-col md:flex-row mt-8 h-[50vh] gap-12 md:gap-0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mishael-codes"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="text-textColor hover:text-accentColor hover:scale-150 transition-all"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mishael-enyi/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="text-textColor hover:text-accentColor hover:scale-150 transition-all"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hashnode.com/@mishaelcodes"
          >
            <FontAwesomeIcon
              icon={faHashnode}
              size="2xl"
              className="text-textColor hover:text-accentColor hover:scale-150 transition-all"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/mishael_codes"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2xl"
              className="text-textColor hover:text-accentColor hover:scale-150 transition-all"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mishael_codes/"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="text-textColor hover:text-accentColor hover:scale-150 transition-all"
            />
          </a>
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
    </>
  );
};

export default Social;
