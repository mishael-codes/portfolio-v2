import { TypeAnimation } from "react-type-animation";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import heroImage from "../../assets/images/hero-img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <div className="relative bg-transparent overflow-hidden">
        {/* Glow behind the hero section - Using theme-aware accent color */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accentColor rounded-full opacity-[0.05] blur-[100px] z-0 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto flex items-center justify-center flex-col px-6 sm:px-12 h-screen md:flex-row-reverse relative z-10">
          
          {/* hero image */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative group">
             {/* Subtle orb exactly behind the image to make it pop */}
             <div className="absolute inset-0 bg-gradient-to-tr from-accentColor/20 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
             
             <img
              src={heroImage}
              alt="mishael's bitmoji popping out and waving from a laptop"
              className="md:w-[85%] lg:w-[75%] relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
              loading="eager"
              decoding="sync"
            />
          </div>

          {/* introduction starts */}
          <div className="w-full md:w-1/2 text-center md:text-left -mt-8 md:mt-0 flex flex-col justify-center lg:pr-12">
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentColor to-yellow-200">
                Mishael
              </span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-textColor/90 mb-6 h-12 sm:h-auto">
              I build{" "}
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "modern interfaces.",
                  1500,
                  "accessible web apps.",
                  1500,
                  "scalable frontend systems.",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-accentColor font-semibold underline decoration-accentColor/30 underline-offset-4"
              />
            </div>
            
            <p className="text-textColor/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
              I turn complex problems into elegant, fast, and responsive digital experiences. Focused on usability, performance, andpixel-perfect detail.
            </p>

            {/* cta */}
            <div className="flex flex-col sm:flex-row items-center md:justify-start sm:gap-6 gap-4">
              
              <a
                href="mailto:enyimishael22@gmail.com"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accentColor text-background font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire me <FontAwesomeIcon icon={faEnvelope} className="group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              </a>

              <a 
                href="https://cuttr.vercel.app/me-cv" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-shadowColor/80 text-white font-semibold text-lg rounded-full border border-white/10 hover:border-accentColor/50 hover:bg-shadowColor transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
              >
                View Resumé
              </a>

            </div>
          </div>
          {/* introduction ends */}
        </div>
      </div>
    </>
  );
};

export default Home;
