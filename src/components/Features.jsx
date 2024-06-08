import React, { useEffect, useState } from "react";
import "../../src/App.css"; // Import the CSS for custom transitions
import tab1 from "../Assets/tab1.svg";
import tab2 from "../Assets/tab2.png";
import tab3 from "../Assets/tab3.svg";
import tab4 from "../Assets/tab4.svg";
import arrowbtn from "../Assets/arrowbtn.svg";

const tabsData = [
  {
    id: 1,
    image: tab1,
    heading: "Purpose-built & ever-improving tech",
    text: "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.",
  },
  {
    id: 2,
    image: tab2,
    heading: "Deep domain expertise",
    text: "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
  },
  {
    id: 3,
    image: tab3,
    heading: "A focus on KPIs that matter",
    text: "Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.",
  },
  {
    id: 4,
    image: tab4,
    heading: "Ease of use, for everyone",
    text: "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
  };

  const prevTab = () => {
    setActiveTab(
      (prevTab) => (prevTab - 1 + tabsData.length) % tabsData.length
    );
  };

  useEffect(() => {
    setTimeout(() => {
      nextTab();
    }, [5000]);
  });

  return (
    <div className="bg-[#c5c5c5] mt-40 md:mb-40">
      <h1 className="text-4xl font-bold flex justify-center items-center pt-28">
        Get Crest and get...
      </h1>
      <div className="relative w-full flex justify-center items-center mx-auto mt-10 pb-40">
        <button onClick={prevTab} className="px-4 py-2 text-white rounded">
          <img src={arrowbtn} alt="left" className="rotate-180 size-20" />
        </button>
        <div className="overflow-hidden relative bg-white rounded-3xl w-4/5">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className="min-w-full p-4 flex flex-col md:flex-row items-center"
              >
                <img
                  src={tab.image}
                  alt={tab.heading}
                  className="w-full md:w-1/2 h-full md:h-[400px] object-center object-cover m-10"
                />
                <div className="flex flex-col justify-center text-left mb-20 md:mb-0">
                  <h2 className="text-xl font-bold mt-4">{tab.heading}</h2>
                  <p className="mt-2 pt-2">{tab.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextTab} className="px-4 py-2 text-white rounded">
          <img src={arrowbtn} alt="right" className="size-20" />
        </button>
      </div>
    </div>
  );
};

export default Features;
