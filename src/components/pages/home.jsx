import { TypeAnimation } from "react-type-animation";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImage from "../../assets/images/hero-img.webp";

const Home = () => (
  <div className="section-shell grid min-h-[calc(100vh-4.5rem)] items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
    <div className="order-2 md:order-1">
      <h1 className="display-title text-white">
        Digital work with <span className="text-yellow-300">character.</span>
      </h1>
      <p className="body-copy mt-8 max-w-xl">
        I build useful, expressive interfaces that help people find their way through the web.
        <span className="text-white"> I care about clarity, speed and the details people remember.</span>
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="mailto:enyimishael22@gmail.com" className="button-primary">
          Start a conversation <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
        </a>
        <a href="#projects" className="button-secondary">See selected work</a>
      </div>
      <div className="mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-stone-500">
        <FontAwesomeIcon icon={faArrowDown} className="text-yellow-300" />
        Scroll to explore
        <TypeAnimation sequence={["", 2000, ".", 700, "..", 700, "...", 700]} repeat={Infinity} />
      </div>
    </div>
    <div className="accent-panel panel-yellow order-1 md:order-2">
      <img src={heroImage} alt="Mishael waving from a laptop" loading="eager" decoding="sync" />
      <div className="absolute left-6 top-6 z-10 max-w-[10rem] font-mono text-xs uppercase leading-relaxed text-black/70">
        Based in Lagos
        <br />
        Working worldwide
      </div>
    </div>
  </div>
);

export default Home;
