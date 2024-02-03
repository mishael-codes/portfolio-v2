import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";
import heroImg2 from "../../assets/images/hero-img-2.webp";
import "../../App.css";

const Contact = () => {
  return (
    <>
      <div className="relative h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center">
        <h1 className="mt-4 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor md:mb-8">
          Contact
        </h1>
        {/* contact form */}
        <div className="flex items-center justify-center flex-col md:flex-row">
          <img
            src={heroImg2}
            alt="mishael's bitmoji winking at you"
            className="scale-75 -mt-20 md:scale-[0.7] md:w-1/2"
          />
          <form
            action="https://formsubmit.co/enyimishael22@gmail.com"
            method="POST"
            className="flex flex-col items-center justify-start w-3/4"
          >
            <input
              type="text"
              name="Full Name"
              placeholder="John Doe"
              className="text-textColor w-full mb-6 bg-shadowColor p-2 rounded-lg opacity-70 caret-accentColor focus:outline-none focus:outline-accentColor"
            />
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="text-textColor w-full mb-6 bg-shadowColor p-2 rounded-lg opacity-70 caret-accentColor focus:outline-none focus:outline-accentColor"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Type your message"
              className="text-textColor w-full mb-6 bg-shadowColor p-2 rounded-lg opacity-70 caret-accentColor focus:outline-none focus:outline-accentColor"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-accentColor text-background font-semibold p-2 rounded-lg hover:bg-transparent hover:text-accentColor border-accentColor border-2 transition-all"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="w-full flex items-center justify-evenly mt-14 mb-8 md:mb-0">
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

export default Contact;
