// import { useState, useEffect } from "react";
import useRandom from "../../hooks/useRandom" 
import backgroundImg from "../../assets/images/bg/background-img.jpg";
const About = () => {

  const letter = useRandom()

  return (
    <>
      <div className="relative px-3 h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center text-textColor">
        {/* <img
          src={backgroundImg}
          alt=""
          className="absolute z-0 h-screen w-screen opacity-50"
        /> */}

        <div className="h-auto">
          <div className="w-full text-center">
            <h1 className=" left-2/4 z-10 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor mt-3 md:text-4xl">
              About
            </h1>
          </div>
          <div className="w-full p-6 text-textColor md:text-2xl md:pl-24 lg:ml-24 lg:flex lg:flex-col lg:items-start lg:justify-center lg:mt-24 xl:mt-0 lg:h-[700px] lg:w-3/4">
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
              development and hope to venture into it some time in the future. I
              also have an interest in photography, nature photography to be
              precise. I read webtoons in my spare time and I listen to music
              with every chance I get.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-5xl first-letter:text-accentColor first-letter:font-semibold indent-3">
              I hope that was enough for a basic introduction. Let's work
              together to fulfill both your dreams and mine, shall we?
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <div
            // onLoad={handleLoad}
            className="uppercase absolute top-2/4 right-[70%] opacity-30 w-[80px] h-[80px] text-center text-accentColor text-xl lg:text-[700px] transform animate- animate-pulse z-0"
          >
            {letter}
          </div>
          <div className="absolute top-1/4 -right-40 w-[100px] h-[100px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle"></div>
          <div className="absolute top-2/4 -right-40 w-[100px] h-[100px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle"></div>
          <div className="absolute top-3/4 -right-40 w-[100px] h-[100px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle"></div>
          <div className="absolute top-1/4 -left-40 w-[100px] h-[100px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle-left"></div>
          <div className="absolute top-2/4 -left-40 w-[100px] h-[100px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle-left"></div>
          <div className="absolute top-3/4 -left-40 w-[100px] h-[100px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle-left"></div>
          <div className="absolute"></div>
          <div className="absolute"></div>
          <div className="absolute"></div>
          <div className="absolute"></div>
        </div>
      </div>
    </>
  );
};

export default About;
