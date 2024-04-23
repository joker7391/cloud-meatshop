import React from "react";
import cloudLogo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-[#FFFDD0] p-3 border-b-[2px] border-gray-300 shadow-sm flex justify-between w-full">
      <span className="flex gap-2 items-center">
        <img src={cloudLogo} alt="img" className="w-[55px] cursor-pointer" />
        <h1 className="font-extrabold font-poppins text-[20px] text-[#006400]">
          Cloud's Meatshop
        </h1>
      </span>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="text-[30px] text-[#006400]"
      >
        <FaShoppingCart />
      </motion.button>
    </div>
  );
};

export default Header;
