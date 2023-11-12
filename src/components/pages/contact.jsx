import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center">
        <h1 className="mt-4 mb-8 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor">
          Want to work together?
        </h1>

        <form
          action=""
          method="post"
          className="flex flex-col items-center justify-start w-3/4"
        >
          <input
            type="text"
            name="Full Name"
            placeholder="John Doe"
            className="w-full mb-6 bg-shadowColor p-2 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className="w-full mb-6 bg-shadowColor p-2 rounded-lg"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message"
            className="w-full mb-6 bg-shadowColor p-2 rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-accentColor text-background font-semibold p-2 rounded-lg"
          >
            SUBMIT
          </button>
        </form>
        <div className="w-full flex items-center justify-evenly mt-8">
          <a target="" href="https://github.com/mishael-codes">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              className="text-textColor hover:text-accentColor"
            />
          </a>
          <a target="" href="https://www.linkedin.com/in/mishael-enyi/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="text-textColor hover:text-accentColor"
            />
          </a>
          <a target="" href="https://twitter.com/mishael_codes">
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2xl"
              className="text-textColor hover:text-accentColor"
            />
          </a>
          <a target="" href="https://www.instagram.com/mishael_codes/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="text-textColor hover:text-accentColor"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
