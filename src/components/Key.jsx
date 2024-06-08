// src/components/KeyQuestions.jsx
import React from "react";
import what from "../Assets/what.svg";
import when from "../Assets/when.svg";
import stock from "../Assets/stock.svg";
import places from "../Assets/placee.svg"; // corrected the typo

const questions = [
  {
    img: what,
    heading: "What to order",
    text: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
  {
    img: when, // corrected to use the imported variable
    heading: "When to order",
    text: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
  },
  {
    img: stock, // corrected to use the imported variable
    heading: "How much to stock",
    text: "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
  },
  {
    img: places, // corrected to use the imported variable
    heading: "Where to place",
    text: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
  },
];

const Key = () => {
  return (
    <div className="container mx-auto p-10 mt-20 mb-20 ">
      <h1 className="text-4xl font-bold mb-20 text-center">
        Four key questions answered by CleverBooks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        {questions.map((question, index) => (
          <div
            key={index}
            className="bg-[#f1e9fc] py-10 px-5 shadow-lg rounded-2xl"
          >
            <img
              src={question.img}
              alt={question.heading}
              className=" size-10 rounded-t-lg"
            />
            <h2 className="mt-4 text-2xl font-semibold">{question.heading}</h2>
            <p className="mt-2 text-gray-600">{question.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Key;
