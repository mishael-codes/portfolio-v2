import { TypeAnimation } from "react-type-animation";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import heroImage from "../../assets/images/hero-img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  return (
    <>
      <div className="relative bg-transparent">
        <div className="w-full flex items-center justify-center flex-col px-12 h-screen md:flex-row">
          {/* hero image */}
          <img
            src={heroImage}
            alt="mishael's bitmoji popping out and waving from a laptop"
            className=" md:w-1/2 scale-[.70] relative -top-24"
          />
          {/* introduction starts */}
          <div className="w-full md:w-1/2 text-justify -mt-5 md:text-3xl flex items-center justify-center flex-col lg:mr-20">
            <p className="text-textColor opacity-100">
              Hello, <strong className="text-accentColor">Mishael</strong> here.
              I am a <br />
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Front-End Developer.",
                  1200,
                  "React Developer.",
                  1200,
                  "Webflow Developer.",
                  1200,
                  /* "Vue Developer",
                  1000, */
                ]}
                wrapper="strong"
                speed={20}
                deletionSpeed={40}
                repeat={Infinity}
                cursor={true}
                className="text-accentColor"
              />
              <br />
              <br />
              <span className="text-gray-400">
                I speak to computers through code to bring you a pixel-perfect
                replica of your designs, making them functional, responsive and
                immersive.
              </span>
            </p>
            {/* cta */}
            <div className="md:text-xl text-textColor mt-5 md:mt-8 gap-2 w-fit flex flex-col md:flex-row items-center justify-between">
              <button className="mt-5 md:mt-0 hover:border border-l-accentColor border-t-accentColor border-r-textColor border-b-textColor hover:text-accentColor hover:-translate-y-1 active:translate-y-1 transition-all p-2 rounded">
                <a
                  href="mailto:enyimishael22@gmail.com"
                  className="w-full h-full"
                >
                  &nbsp; Send a mail{" "}
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </button>
              <button className="hover:border border-l-accentColor border-t-accentColor border-r-textColor border-b-textColor hover:text-accentColor hover:-translate-y-1 active:translate-y-1 transition-all p-2 rounded">
                <a href="https://cuttr.vercel.app/me-cv">My Resumé</a>
              </button>
            </div>
          </div>
          {/* introduction ends */}
        </div>
      </div>
    </>
  );
};

export default Home;
