import backgroundImg from "../../assets/images/bg/background-img.jpg";
const About = () => {
  return (
    <>
      <main className="w-screen relative">
        <img
          src={backgroundImg}
          alt=""
          className="absolute z-0 h-screen w-screen opacity-50"
        />
        {
          <div className="absolute h-screen overflow-auto">
            <div className="w-full text-center">
              <h1 className="text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor mt-3 md:text-4xl">
                About
              </h1>
            </div>
            <div className="w-full relative p-6 text-textColor md:text-2xl md:pl-24 lg:flex lg:flex-col lg:items-start lg:justify-center lg:mt-24 xl:mt-0 lg:h-[700px] lg:w-1/2">
              <p className="first-letter:text-2xl md:first-letter:text-5xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
                Hello, it's nice to see that you're here👋. Here's a little
                knowledge about me.
              </p>
              <p className="first-letter:text-2xl md:first-letter:text-5xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
                I wrote my first line of code in 2021, It was in HTML and ever
                since then, I have always wanted to learn more to see what I can
                build and how I can be of importance in creating websites which
                offer information, entertainment, education and so on to the
                public.
              </p>
              <p className="first-letter:text-2xl md:first-letter:text-5xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
                As a side note, I have a little bit of interest in game
                development and hope to venture into it some time in the future.
                I also have an interest in photography, nature photography to be
                precise. I read webtoons in my spare time and I listen to music
                with every chance I get.
              </p>
              <p className="first-letter:text-2xl md:first-letter:text-5xl first-letter:text-accentColor first-letter:font-semibold indent-3">
                I hope that was enough for a basic introduction. Let's work
                together to fulfill both your dreams and mine, shall we?
              </p>
            </div>
          </div>
        }
      </main>
    </>
  );
};

export default About;
