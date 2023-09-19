import Image from "next/image";
import React from "react";

function Analytics() {
  return (
    <div
      className="grid md:grid-cols-2 my-[120px]  text-black
    "
    >
      <div className="relative w-auto h-[300px]">
        <Image src={"/laptop.jpg"} layout="fill" objectFit="contain" />
      </div>
      <div className="max-md:text-center">
        <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Manage Data Analytics Centrally
        </h1>
        <p className="w-[90%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
        <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Analytics;
