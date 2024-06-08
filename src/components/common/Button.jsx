import React from "react";
// import "./ButtonComponent.css"; // Import the custom CSS for additional styles if needed

const Button = ({ text }) => {
  return (
    <div className="w-fit h-fit bg-gradient-to-br from-[#fc907e] to-[#9f6eed] border-[2px] border-transparent rounded-full p-[2px]">
      <button
        className="bg-[#151218] rounded-full px-3 md:px-5 py-2 font-medium transition duration-300 ease
                   hover:bg-[#28282a] hover:border-[#28282a] hover:text-white hover:bg-clip-text"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
