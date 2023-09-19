import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-black text-white  grid md:gap-7 md:grid-cols-12 p-8">
      <div className="col-span-4 ">
        <h1 className="mb-3 font-bold text-3xl text-green-400">REACT.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          similique expedita neque amet pariatur commodi adipisci fugit ratione
          praesentium illo?
        </p>
        <div className="flex gap-4 my-7">
          <AiFillFacebook size={25} />
          <AiFillInstagram size={25} />
          <AiFillTwitterSquare size={25} />
          <AiFillGithub size={25} />
          <BsWhatsapp size={25} />
        </div>
      </div>
      <div className="col-span-8 grid md:grid-cols-8 mt-7 grid-cols-4">
        <div className="col-span-2 ">
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div className="col-span-2">
          {" "}
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
        <div className="col-span-2">
          {" "}
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
