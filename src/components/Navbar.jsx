import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import drink from "../Assets/drink.svg";
import group from "../Assets/Group.svg";
import food from "../Assets/food.svg";
import cloth from "../Assets/cloth.svg";
import pharma from "../Assets/pharmaicon 2.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [menu, showMenu] = useState(false);
  const openMenu = () => {
    showMenu(!menu);
  };
  return (
    <div className=" bg-transparent sticky top-0 z-10">
      <div className=" bg-[#151218] flex text-white justify-around items-center py-5 ">
        <img
          src={logo}
          alt="Logo"
          width={130}
          height={30}
          className=" object-contain hover:cursor-pointer mr-16 md:mr-0"
        />
        {/* Pc Navbar */}
        <div className=" hidden md:block">
          <ul className="flex gap-10 font-medium ">
            <li className="hover:cursor-pointer hover:text-orange-500">
              Product
            </li>
            <li className="hover:cursor-pointer hover:text-orange-500">
              Pricing
            </li>
            <li
              className={`hover:cursor-pointer hover:text-orange-500 relative`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Industry
              {isOpen && (
                <div className="bg-white text-black flex rounded-2xl flex-col absolute -left-5 translate-y-100 px-10 ">
                  <ul className="w-[300px] text-sm h-[320px] gap-5">
                    <li className="p-5 hover:bg-gray-100 hover:rounded-2xl mt-2 px-10 flex gap-5">
                      <img src={drink} alt="drink" className=" size-5" />
                      Beauty and Personal Care
                    </li>
                    <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                      <img src={food} alt="drink" className=" size-5" />
                      Quick Service Restaurants
                    </li>
                    <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                      <img src={group} alt="drink" className=" size-5" />
                      Food and Beverages
                    </li>
                    <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                      <img src={cloth} alt="drink" className=" size-5" />
                      Apparel and Accessories
                    </li>
                    <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                      <img src={pharma} alt="drink" className=" size-5" />
                      Pharmaseuticals
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:cursor-pointer hover:text-orange-500">
              Customer Stories
            </li>
            <li className="hover:cursor-pointer hover:text-orange-500">
              About
            </li>
            <li className="hover:cursor-pointer hover:text-orange-500">Blog</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button
            className="text-transparent bg-clip-text 
          bg-gradient-to-r from-[#fc907e] to-[#9f6eed] font-medium p-2 hover:text-white pr-8"
          >
            Login
          </button>
          <button
            className="bg-gradient-to-br from-[#fc907e] to-[#9f6eed] font-medium p-3 rounded-full px-6 
           hover:text-black"
          >
            Talk to Us
          </button>
        </div>
        {/* Mobile Screen */}
        <div className=" flex items-center pr-5 justify-between bg-transparent md:hidden">
          {menu && (
            <div className="">
              <ul
                className="flex flex-col gap-10 p-5  text-black text-xl basis-full
             absolute left-0 w-screen h-screen top-20 bg-white transition-all duration-500"
              >
                <li className="hover:cursor-pointer hover:text-orange-500 pt-5">
                  Product
                </li>
                <li className="hover:cursor-pointer hover:text-orange-500">
                  Pricing
                </li>
                <li
                  className={`hover:cursor-pointer hover:text-orange-500 relative`}
                  onClick={handleClick}
                >
                  Industry
                  {isOpen && (
                    <div className="bg-white text-black flex flex-col absolute -left-5 translate-y-100 px-10 ">
                      <ul className="w-[300px] text-sm h-[320px] gap-5">
                        <li className="p-5 hover:bg-gray-100 hover:rounded-2xl mt-2 px-10 flex gap-5">
                          <img src={drink} alt="drink" className=" size-5" />
                          Beauty and Personal Care
                        </li>
                        <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                          <img src={food} alt="drink" className=" size-5" />
                          Quick Service Restaurants
                        </li>
                        <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                          <img src={group} alt="drink" className=" size-5" />
                          Food and Beverages
                        </li>
                        <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                          <img src={cloth} alt="drink" className=" size-5" />
                          Apparel and Accessories
                        </li>
                        <li className="p-5 hover:bg-gray-100 px-10 flex hover:rounded-2xl gap-5">
                          <img src={pharma} alt="drink" className=" size-5" />
                          Pharmaseuticals
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="hover:cursor-pointer hover:text-orange-500">
                  Customer Stories
                </li>
                <li className="hover:cursor-pointer hover:text-orange-500">
                  About
                </li>
                <li className="hover:cursor-pointer hover:text-orange-500">
                  Blog
                </li>
                <div className="flex justify-center items-center">
                  <button
                    className="bg-gradient-to-br from-[#fc907e] to-[#9f6eed] mt-10 w-fit flex justify-center 
                  items-center font-medium p-3 rounded-full px-6 
                text-white"
                  >
                    Talk to Us
                  </button>
                </div>
              </ul>
            </div>
          )}
          <FaBarsStaggered
            className="text-4xl font-bold ml-20"
            onClick={openMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
