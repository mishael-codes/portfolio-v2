import { TypeAnimation } from "react-type-animation";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import backgroundImg from "../../assets/images/bg/background-img.jpg";
import heroImageMobile from "../../assets/images/hero_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  return (
    <>
      <div className="relative bg-transparent">
        <img
          src={backgroundImg}
          alt="background.jpg"
          className="absolute opacity-50 brightness-50 w-full h-screen -z-10"
        />
        <div className="w-full flex items-center justify-evenly flex-col -mt-3 px-5 h-screen md:flex-row-reverse md:justify-between">
          {/* hero image */}
          <img
            src={heroImageMobile}
            alt="pic of me in a traditional attire"
            className=" md:w-1/2 scale-[.70] rounded-full shadow-md shadow-shadowColor"
          />
          {/* introduction starts */}
          <div className="w-full md:w-1/2 text-center -mt-5 md:text-3xl flex items-center justify-center flex-col">
            <h2 className="text-textColor opacity-100">
              My name is <br />
              <strong className="text-accentColor">Mishael Enyi</strong>
            </h2>
            <br />
            <p className="text-textColor -mt-5">
              I am a <br />
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Front-End Developer",
                  1000,
                  "React Developer",
                  1000,
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
            </p>
            {/* cta */}
            <div className="md:text-xl text-textColor mt-5 md:mt-8 gap-2 w-fit flex items-center justify-between">
              <button className="hover:border border-l-accentColor border-t-accentColor border-r-textColor border-b-textColor hover:text-accentColor hover:-translate-y-1 active:translate-y-1 transition-all p-2 rounded">
                <a href="mailto:enyimishael22@gmail.com" className="w-full h-full">&nbsp;
                  Send a mail <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </button>
              {/* <button className="hover:border border-l-accentColor border-t-accentColor border-r-textColor border-b-textColor hover:text-accentColor hover:-translate-y-1 active:translate-y-1 transition-all p-2 rounded">
                Download CV{" "}
              </button> */}
            </div>
          </div>
          {/* introduction ends */}
        </div>
      </div>
    </>
  );
};

export default Home;
