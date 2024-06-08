import React, { useState } from "react";
import arrowbtn from "../Assets/arrowbtn.svg";
const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const leftBtnHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  const rightBtnHandler = () => {
    setIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row mx-10 gap-16">
      <div className=" w-full mr-10 md:w-[60%]">
        <p className="text-[18px] pb-5">{reviews[index].text}</p>
        <div className="flex justify-between pt-5">
          <div className="flex gap-5">
            <img
              src={reviews[index].img}
              alt={reviews[index].name}
              className="size-14 rounded-full"
            />
            <div>
              <h4 className="text-xl font-medium">{reviews[index].name}</h4>
              <p className="text-lg ">{reviews[index].title}</p>
            </div>
          </div>
          <img
            src={reviews[index].logo}
            alt={reviews[index].name}
            className="size-20"
          />
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <button onClick={leftBtnHandler} className=" rotate-180">
              <img src={arrowbtn} alt="Left" />
            </button>
            <button onClick={rightBtnHandler}>
              <img src={arrowbtn} alt="Right" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-20 justify-center items-center">
          <div className="flex gap-5">
            <div
              className=" flex flex-col rounded-2xl
             justify-center items-center
              bg-[#f1e9fc] px-10 md:px-10 pt-2 pb-5 text-center"
            >
              <span
                className=" text-xl md:text-3xl font-semibold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#fc907e] to-[#9f6eed]"
              >
                {reviews[index].info1}
              </span>
              <p className="text-lg">{reviews[index].info2}</p>
            </div>
            <div
              className=" flex flex-col rounded-2xl 
          justify-center items-center bg-[#f1e9fc] 
           px-10 md:px-10 pt-2 pb-5 text-center"
            >
              <span
                className=" text-xl md:text-3xl font-semibold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#fc907e] to-[#9f6eed]"
              >
                {reviews[index].info3}
              </span>
              <p className="text-lg">{reviews[index].info4}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-10">
            <div
              className="bg-gradient-to-br from-[#fc907e] to-[#9f6eed] border-[1px] 
          border-transparent rounded-3xl p-[1px] w-fit flex justify-center items-center text-xl text-center 
          opacity-80 hover:opacity-100"
            >
              <button className="bg-white bg-clip-border rounded-3xl py-5 px-20 md:px-12 md:py-10">
                {reviews[index].info5}
              </button>
            </div>
            <div className="block md:hidden">
              <div className="flex gap-5">
                <button onClick={leftBtnHandler} className=" rotate-180">
                  <img src={arrowbtn} alt="Left" className="size-12" />
                </button>
                <button onClick={rightBtnHandler}>
                  <img src={arrowbtn} alt="Right" className="size-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={reviews[index].main}
          alt={reviews[index].name}
          className=" bg-[#9f6eed] bg-opacity-60 border border-transparent rounded-xl 
          p-[1px] h-full w-full mr-10 md:h-[550px] md:w-[400px] object-cover object-[85%,] aspect-auto"
        />
      </div>
    </div>
  );
};

export default Review;
