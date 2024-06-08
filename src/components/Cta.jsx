import React from "react";
import Footer from "./Footer";

const Cta = () => {
  return (
    <div className="bg-[#151218]">
      <div className="m-10 flex items-center justify-center ">
        <div className="w-full h-full mt-20 mb-20 flex flex-col items-center justify-center">
          <div
            className=" h-full w-full rounded-3xl bg-gradient-to-r from-[#9f6eed] via-[#fc907e] to-[#9f6eed] 
        bg-[length:200%_200%] animate-gradient"
          >
            <div className="flex flex-col lg:mt-28 lg:mb-28 mx-20 my-10  md:m-20 text-center items-center justify-center h-full">
              <h1 className="lg:text-5xl text-lg font-semibold text-white mb-4">
                You can grow faster than you think!
              </h1>
              <p className="md:text-base text-sm md:pt-10 pt-5 md:w-[700px] text-white">
                Plan with Crest to fulfil your demand today, and dreams
                tomorrow. We bring the methods and technologies of large global
                companies to help brands of all sizes scale.
              </p>
              <button className="bg-black rounded-full text-white px-6 py-3 mt-8">
                Get Started with Crest
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cta;
