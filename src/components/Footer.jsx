import React from "react";
import logo from "../Assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-12 md:mt-20">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Crest Logo" className="h-10 mb-4" />
            <p className="text-gray-400">
              Crest is an AI-powered supply chain software that provides
              companies tools for demand forecasting, inventory planning, and
              more. This helps them have the right amount of stock, optimize
              space, and fulfill every order.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#product" className="hover:text-white">
                  Product
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#customer-stories" className="hover:text-white">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#career" className="hover:text-white">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about-us" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Crest</h4>
            <ul className="text-gray-400 space-y-2">
              <li>sales@getcrest.ai</li>
              <li>
                Registered Office:
                <br />
                1507, Incubex, 11th cross road, 19th Main Road, Bengaluru,
                India. 560102
              </li>
              <li>
                Corporate Office:
                <br />
                291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR
                Layout, Bengaluru, India. 560102
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#twitter" aria-label="Twitter">
                <FaTwitter alt="Twitter" className=" text-white h-6 w-6" />
              </a>
              <a href="#facebook" aria-label="Facebook">
                <FaFacebookF alt="Facebook" className=" text-white h-6 w-6" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <FaInstagram alt="Instagram" className="h-6 text-white w-6" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn alt="LinkedIn" className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright 2024 Crest &nbsp;|&nbsp;{" "}
            <a href="#terms" className="hover:text-white">
              Terms of Service
            </a>{" "}
            &nbsp;|&nbsp;{" "}
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <br />
            Conifer Innovations Private Limited
            <br />
            CIN: U72900KA2022PTC163144
          </p>
          <a href="#top" className="mt-6 md:mt-0">
            <FaRegArrowAltCircleUp
              alt="Back to top"
              className="h-10 w-10 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
