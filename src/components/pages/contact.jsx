import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import heroImg2 from "../../assets/images/hero-img-2.webp";

const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const reply = `Hey there ${userEmail}, thank you for contacting me. Please wait patiently as I get back to you`;
  const socialLinks = [
    { label: "GitHub", icon: faGithub, url: "https://github.com/mishael-codes" },
    { label: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/in/mishael-enyi/" },
    { label: "WhatsApp", icon: faWhatsapp, url: "https://cuttr.vercel.app/whatsapp" },
    { label: "X", icon: faXTwitter, url: "https://twitter.com/mishael_codes" },
  ];

  return (
    <div className="section-shell grid gap-10 md:grid-cols-[1fr_1.2fr]">
      <div className="accent-panel panel-coral">
        <img src={heroImg2} alt="Mishael smiling" loading="lazy" decoding="async" />
        <div className="absolute bottom-6 left-6 z-10 font-mono text-xs uppercase text-black/70">Let us make something useful</div>
      </div>
      <div>
        <h2 className="section-title max-w-md text-white">Have an idea? Let us talk.</h2>
        <p className="body-copy mt-6 max-w-lg">
          Tell me what you are working on, what is getting in the way and where you want to go next.
        </p>
        <form action="https://formsubmit.co/b9f4abecb9eb8534b77c5be72594bf95" method="POST" className="contact-form mt-8 grid gap-3">
          <label htmlFor="contact-name" className="sr-only">Full name</label>
          <input id="contact-name" type="text" name="Full Name" placeholder="Your name" required />
          <label htmlFor="contact-email" className="sr-only">Email address</label>
          <input id="contact-email" type="email" name="email" placeholder="Email address" onChange={(event) => setUserEmail(event.target.value)} required />
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about the project" required />
          <input type="hidden" name="_subject" value="New portfolio message" />
          <input type="hidden" name="_autoresponse" value={reply} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://mishaelenyi.netlify.app/thank-you" />
          <button type="submit" className="button-primary mt-2 w-fit">Send message</button>
        </form>
        <div className="mt-8 flex gap-5 border-t border-white/15 pt-5">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={link.label} className="text-stone-400 transition hover:text-yellow-300">
              <FontAwesomeIcon icon={link.icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
