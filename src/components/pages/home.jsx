import { TypeAnimation } from "react-type-animation";
import backgroundImg from "../../assets/images/bg/background-img.jpg";
import heroImageMobile from "../../assets/images/hero_img.jpeg";
const Home = () => {
  return (
    <>
      <div className="relative bg-background">
        <img
          src={backgroundImg}
          alt="background.jpg"
          className="absolute opacity-80 w-full h-screen"
        />
        <div className="w-full flex items-center justify-center flex-col pb-28 px-5 h-screen md:flex-row-reverse md:justify-between">
          <img
            src={heroImageMobile}
            alt="pic of me in a traditional attire"
            className=" md:w-1/2 scale-[.70] rounded-full opacity-90"
          />
          <div className="absolute z-10 left-0 top-[60%] md:top-[30%] w-full md:w-1/2 text-center mt-4 md:text-3xl">
            <h2 className="text-textColor opacity-100">
              My name is <br />
              <strong className="text-accentColor">Mishael Enyi</strong>
            </h2>
            <br />
            <p className="text-textColor">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
