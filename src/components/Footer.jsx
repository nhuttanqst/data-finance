import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
          FINANCE
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            className="cursor-pointer hover:scale-125 duration-300"
            size={30}
          />
          <FaInstagram
            className="cursor-pointer hover:scale-125 duration-300"
            size={30}
          />
          <FaTwitterSquare
            className="cursor-pointer hover:scale-125 duration-300"
            size={30}
          />
          <FaGithubSquare
            className="cursor-pointer hover:scale-125 duration-300"
            size={30}
          />
          <FaDribbbleSquare
            className="cursor-pointer hover:scale-125 duration-300"
            size={30}
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Analytics
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Marketing
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Commerce
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Pricing
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Documentation
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Guides
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              About
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Blog
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Jobs
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Claim
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Policy
            </li>
            <li className="my-4 text-sm cursor-pointer hover:underline duration-300">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
