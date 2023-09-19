import Image from "next/image";
import React from "react";
// import { FaUserTie } from "react-icons/fa";

function Card() {
  return (
    <div className="grid md:grid-cols-3 gap-3 md:px-10  my-14 mx-auto">
      <div className="grid max-md:w-[90%] gap-3 hover:scale-105 duration-300 ease-in-out shadow-md items-center rounded-sm h-[350px] justify-center text-center w-full shadow-slate-200 p-7 my-4 text-black mx-auto">
        {/* <FaUserTie size={30} className="mx-auto" /> */}
        <Image
          src={"/single.png"}
          className="mx-auto"
          width={50}
          height={500}
        />
        <span className="font-bold">Single User</span>
        <span className="font-bold text-3xl">$149</span>
        <span className="text-base">500 GB Storage</span>
        <span className="text-base">1 User Allowed</span>
        <span className="text-base">Send up to 2GB</span>
        <button className="bg-green-400 hover:bg-green-500 h-10 rounded-md w-[200px]">
          Start Trail
        </button>
      </div>
      <div className="grid max-md:w-[90%] gap-3 hover:scale-105 duration-300 ease-in-out shadow-md items-center rounded-sm h-[350px] justify-center text-center w-full shadow-slate-200 p-7 my-4 text-black mx-auto">
        {/* <FaUserTie size={30} className="mx-auto" /> */}
        <Image
          src={"/double.png"}
          className="mx-auto"
          width={50}
          height={500}
        />
        <span className="font-bold">double User</span>
        <span className="font-bold text-3xl">$149</span>
        <span className="text-base">500 GB Storage</span>
        <span className="text-base">1 User Allowed</span>
        <span className="text-base">Send up to 2GB</span>
        <button className="bg-black text-green-300 h-10 rounded-md w-[200px]">
          Start Trail
        </button>
      </div>
      <div className="grid max-md:w-[90%] gap-3 hover:scale-105 duration-300 ease-in-out shadow-md items-center rounded-sm h-[350px] justify-center text-center w-full shadow-slate-200 p-7 my-4 text-black mx-auto">
        {/* <FaUserTie size={30} className="mx-auto" /> */}
        <Image
          src={"/triple.png"}
          className="mx-auto"
          width={50}
          height={500}
        />
        <span className="font-bold">triple User</span>
        <span className="font-bold text-3xl">$149</span>
        <span className="text-base">500 GB Storage</span>
        <span className="text-base">1 User Allowed</span>
        <span className="text-base">Send up to 2GB</span>
        <button className="bg-green-400 hover:bg-green-500 h-10 rounded-md w-[200px]">
          Start Trail
        </button>
      </div>
    </div>
  );
}

export default Card;
