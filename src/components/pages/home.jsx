import { TypeAnimation } from "react-type-animation";
import backgroundImg from "../../assets/images/bg/background-img.jpg";
import heroImageMobile from "../../assets/images/hero_img.jpeg";
const Home = () => {
  return (
    <>
      <div className="relative">
        <img
          src={backgroundImg}
          alt="background.jpg"
          className="absolute opacity-70 w-full h-screen"
        />
        <div className="flex items-start justify-center h-screen">
          <img
            src={heroImageMobile}
            alt=""
            className="absolute top-20 w-1/2 rounded-full opacity-80"
          />
          <div className="absolute top-72 text-center">
            <h2 className="text-textColor">
              My name is <br />
              <strong className="text-accentColor">Mishael Enyi</strong>
            </h2>
            <br />
            <p className="text-textColor">
              I am a <br />
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Frontend Developer",
                  1000,
                  "React Developer",
                  1000,
                  "Vue Developer",
                  1000,
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
