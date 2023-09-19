import React from "react";

function Newlettet() {
  return (
    <div className="bg-black text-white grid md:grid-cols-3 w-full items-center max-md:text-center  px-10 py-2 mx-auto h-[350px]">
      <div className="col-span-2">
        <h1 className="text-2xl"> Want tips & tricks to optimize your flow?</h1>
        <p>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div>
        <div className="md:flex gap-3 mt-3 items-center ">
          <input
            type="email"
            placeholder="enter your Email"
            className=" rounded-sm w-full text-black px-1 h-[35px]"
          />
          <button
            className="bg-[#00df9a] 
          h-[35px] md:w-[140px] max-md:mt-3  max-sm:mt-2 w-full text-black rounded-md"
          >
            Notify Me
          </button>
        </div>
        <p className="mt-2 ">
          We care bout the protection of your data. Read our{" "}
          <span className="text-[#00df9a]">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}

export default Newlettet;
