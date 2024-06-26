import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useClickOutSide from "../hooks/useClickOutSide";

const Navbar = () => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
        FINANCE
      </h1>
      <ul className="hidden md:flex">
        <li className="m-4 cursor-pointer">Home</li>
        <li className="m-4 cursor-pointer">Company</li>
        <li className="m-4 cursor-pointer">Resources</li>
        <li className="m-4 cursor-pointer">About</li>
        <li className="m-4 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleShow} className="block cursor-pointer md:hidden">
        {show ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          show
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
        ref={nodeRef}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          FINANCE
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
