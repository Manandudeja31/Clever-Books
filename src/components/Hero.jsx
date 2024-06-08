import React from "react";
import Button from "./common/Button";
import hero from "../Assets/homemain.svg";
import homeImg from "../Assets/hometext.svg";
import bg from "../Assets/home-hero-bg.svg";
const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-20 md:gap-40 pt-10 md:pt-24 h-full overflow-x-hidden bg-no-repeat bg-cover bg-center pb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-white ml-5 md:ml-10 w-auto ">
        <h1
          className=" lg:text-[58px] text-[30px]
         font-bold "
        >
          Every order <br />
          fulfilled,{" "}
          <span
            className="text-transparent bg-clip-text 
          bg-gradient-to-r from-[#fc907e] to-[#9f6eed]"
          >
            on time.
          </span>
        </h1>
        <p className="mb-0 md:mb-5 block font-normal text-base pr-5 md:pr-0 md:text-lg mt-5 lg:w-[629px] md:w-auto">
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </p>
        <div className="flex mt-10 ">
          <Button text="Get Started with Crest" />
          <img src={homeImg} alt="Home" className="mt-3 ml-2 w-[40%] " />
        </div>
      </div>
      <div className=" ">
        <img
          src={hero}
          alt="hero"
          className=" w-[80%] mx-10 md:m-0 md:w-full h-full pb-20"
        />
      </div>
    </div>
  );
};

export default Hero;
