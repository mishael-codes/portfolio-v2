import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import heroImg2 from "../../assets/images/hero-img-2.webp";
import "../../App.css";

const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const submit = () => {
    let email = document.getElementsByName("email")[0].value;
    setUserEmail(email);
  };

  let reply = `Hey there ${userEmail}, thank you for contacting me. Please wait patiently as I get back to you`;
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
            loading="lazy"
            decoding="async"
          />
          <form
            action="https://formsubmit.co/b9f4abecb9eb8534b77c5be72594bf95"
            method="POST"
            className="flex flex-col items-center justify-start w-3/4"
          >
            <label htmlFor="contact-name" className="sr-only">
              Full name
            </label>
            <input
              id="contact-name"
              type="text"
              name="Full Name"
              placeholder="John Doe"
              className="text-textColor w-full mb-6 bg-shadowColor p-2 rounded-lg opacity-70 caret-accentColor focus:outline-none focus:ring-2 focus:ring-accentColor/40"
            />
            <label htmlFor="contact-email" className="sr-only">
              Email address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="text-textColor w-full mb-6 bg-shadowColor p-2 rounded-lg opacity-70 caret-accentColor focus:outline-none focus:ring-2 focus:ring-accentColor/40"
            />
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="7"
              placeholder="Type your message"
              className="text-textColor w-full mb-6 bg-shadowColor p-2 rounded-lg opacity-70 caret-accentColor focus:outline-none focus:ring-2 focus:ring-accentColor/40"
              required
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              value="Hey Mishael, New Mail"
            ></input>
            <input type="hidden" name="_autoresponse" value={reply}></input>
            <input type="hidden" name="_template" value="table"></input>
            <input
              type="hidden"
              name="_next"
              value="https://mishaelenyi.netlify.app"
            ></input>
            <button
              onClick={submit}
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
            href="https://cuttr.vercel.app/whatsapp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
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
