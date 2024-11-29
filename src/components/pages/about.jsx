const About = () => {
  return (
    <>
      <div className="relative px-3 h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center text-textColor">
        <div className="h-auto">
          <div className="w-full text-center">
            <h1 className=" left-2/4 z-10 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor mt-3 md:text-3xl">
              About
            </h1>
          </div>
          <div className="w-full p-6 text-textColor md:text-xl lg:ml-24 lg:flex lg:flex-col lg:items-start lg:justify-center lg:mt-6 xl:mt-0 lg:h-auto lg:w-3/4">
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
              Hello, it&apos;s nice to see that you&apos;re here👋. Here&apos;s
              a little knowledge about me.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
              I wrote my first line of code in 2021, It was in HTML and ever
              since then, I have always wanted to learn more to see what I can
              build and how I can be of importance in creating websites which
              offer information, entertainment, education and so on to the
              public.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
              As a side note, I have a little bit of interest in game
              development and hope to venture into it some time in the future. I
              also have an interest in photography, nature photography to be
              precise. I read webtoons in my spare time and I listen to music
              with every chance I get.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3">
              I hope that was enough for a basic introduction. Let&apos;s work
              together to fulfill both your dreams and mine, shall we?
            </p>
          </div>
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

export default About;
