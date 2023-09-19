"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  let [nav, setNav] = useState(false);
  return (
    <div className=" w-full flex justify-between items-center h-24 mx-auto px-4 my-2 max-w-[1240px] text-white ">
      <h1 className="md:text-3xl text-xl w-full font-bold text-[#00df9a]">
        REACT.
      </h1>
      <ul className=" hidden md:flex">
        <li className="p-4 hover:animate-bounce hover:text-green-300 text-lg cursor-pointer hover:text-green-300 ">
          Home
        </li>
        <li className="p-4 hover:animate-bounce hover:text-green-300 text-lg cursor-pointer hover:text-green-300 ">
          Company
        </li>
        <li className="p-4 hover:animate-bounce hover:text-green-300 text-lg cursor-pointer hover:text-green-300 ">
          Resources
        </li>
        <li className="p-4 hover:animate-bounce hover:text-green-300 text-lg cursor-pointer hover:text-green-300 ">
          About
        </li>
        <li className="p-4 hover:animate-bounce hover:text-green-300 text-lg cursor-pointer hover:text-green-300 ">
          Contact
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`absolute ${
          !nav ? "left-[-100%]" : "left-0"
        }  ease-in-out duration-300 top-0 z-10 h-screen w-[60%] border-r bg-gray-900 border-r-gray-900`}
      >
        <ul className=" uppercase">
          <li className="hover:translate-x-9 text-lg  hover:text-green-300  duration-300  ease-in-out cursor-pointer p-4 border-b border-gray-700">
            Home
          </li>
          <li className="hover:translate-x-9 text-lg  hover:text-green-300  duration-300  ease-in-out cursor-pointer p-4 border-b border-gray-700">
            Company
          </li>
          <li className="hover:translate-x-9 text-lg  hover:text-green-300  duration-300  ease-in-out cursor-pointer p-4 border-b border-gray-700">
            Resources
          </li>
          <li className="hover:translate-x-9 text-lg  hover:text-green-300  duration-300  ease-in-out cursor-pointer p-4 border-b border-gray-700">
            About
          </li>
          <li className="hover:translate-x-9 text-lg  hover:text-green-300  duration-300  ease-in-out cursor-pointer p-4">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
