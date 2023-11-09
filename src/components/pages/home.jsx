import { useState } from "react";
import backgroundImg from "../../assets/images/bg/background-img.jpg";
import heroImageMobile from "../../assets/images/hero_img.jpeg";
const Home = () => {
  

  return (
    <>
      <div className="relative">
        <img
          src={backgroundImg}
          alt="background.jpg"
          className="absolute opacity-90 w-full h-screen"
        />
        <div className="flex items-start justify-center h-screen">
          <h3 className="absolute w-full text-center text-3xl font-bold text-accentColor">
            Hello
          </h3>
          <img
            src={heroImageMobile}
            alt=""
            className="absolute top-20 w-1/2 rounded-full"
          />
          <h2 className="absolute top-72">My name is <strong>Mishael Enyi</strong></h2>
        </div>
      </div>
    </>
  );
};

export default Home;
