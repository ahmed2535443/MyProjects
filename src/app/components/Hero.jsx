import React from "react";
function Hero() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center h-[calc(100vh-96px)] w-full max-w-[800px] gap-5">
      <p className="text-green-300 md:text-lg">GROWING WITH DATA ANALYTICS</p>
      <h1 className=" md:text-5xl text-bold text-2xl">Grow With data.</h1>
      <p className="md:text-4xl text-lg ">Fast,flexible financing for</p>
      <div>
        <p className="text-slate-400 text-center max-w-[600px] w-[90%] mx-auto md:text-lg  md:text-2xl ">
          Monitor your data analytics to increase revenue for BTB ,$ BTC , &
          SASS platforms.
        </p>
      </div>
      <button className="bg-green-600 p-2 text-lg hover:bg-green-700 text-white rounded-lg">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
