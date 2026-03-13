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
    <div className="relative px-6 py-16 w-full max-w-6xl mx-auto flex flex-col items-center">
      
      <div className="w-full text-center mb-12 relative z-10">
        <h2 className="inline-block text-3xl font-bold tracking-wider uppercase text-white relative">
          Get in Touch
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accentColor rounded-full"></div>
        </h2>
        <p className="mt-8 text-gray-400 text-lg">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        
        {/* Left Side: Avatar */}
        <div className="w-full md:w-5/12 flex justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accentColor/10 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
          <img
            src={heroImg2}
            alt="mishael's bitmoji winking"
            className="w-[70%] max-w-sm relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 max-w-lg">
          <form
            action="https://formsubmit.co/b9f4abecb9eb8534b77c5be72594bf95"
            method="POST"
            className="glass p-8 rounded-3xl flex flex-col gap-5 border border-white/5 shadow-2xl"
          >
            <div>
              <label htmlFor="contact-name" className="sr-only">Full name</label>
              <input
                id="contact-name"
                type="text"
                name="Full Name"
                placeholder="Name"
                className="w-full bg-white/5 text-white border border-white/10 p-4 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentColor/50 focus:border-accentColor/50 transition-all font-medium"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contact-email" className="sr-only">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-white/5 text-white border border-white/10 p-4 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentColor/50 focus:border-accentColor/50 transition-all font-medium"
                required
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Your Message..."
                className="w-full bg-white/5 text-white border border-white/10 p-4 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accentColor/50 focus:border-accentColor/50 transition-all font-medium resize-none"
                required
              ></textarea>
            </div>

            {/* Hidden form inputs */}
            <input type="hidden" name="_subject" value="Hey Mishael, New Mail" />
            <input type="hidden" name="_autoresponse" value={reply} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://mishaelenyi.netlify.app/thank-you" />

            <button
              onClick={submit}
              type="submit"
              className="w-full bg-accentColor text-background font-bold text-lg py-4 rounded-xl hover:bg-yellow-400 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all active:translate-y-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Links Fixed to Bottom/Bottom-ish of Contact Section */}
      <div className="w-full mt-16 flex items-center justify-center gap-8 relative z-10 glass mx-auto rounded-full py-4 max-w-sm border border-white/5">
        <a target="_blank" rel="noreferrer" href="https://github.com/mishael-codes" className="group" aria-label="Visit my GitHub profile">
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-400 group-hover:text-white group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mishael-enyi/" className="group" aria-label="Visit my LinkedIn profile">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-400 group-hover:text-[#0A66C2] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://cuttr.vercel.app/whatsapp" className="group" aria-label="Contact me on WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-gray-400 group-hover:text-[#25D366] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/mishael_codes" className="group" aria-label="Visit my Twitter profile">
          <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-gray-400 group-hover:text-white group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
        </a>
      </div>

      {/* Background Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accentColor rounded-full opacity-[0.05] blur-[120px]"></div>
      </div>
    </div>
  );
};

export default Contact;
