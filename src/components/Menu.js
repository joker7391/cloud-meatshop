import React from "react";
import { menu } from "../assets/data";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <div className="flex flex-wrap justify-around gap-4 p-3">
      {menu.map((menus, index) => (
        <div
          key={index}
          className="bg-white rounded-md h-[15em] w-[11em] relative"
        >
          <h1 className="font-extrabold text-center py-1 text-[18px] font-poppins text-[#006400]">
            {menus.name}
          </h1>
          <img src={menus.image} alt="image" className="p-2" />
          <p className="text-center font-poppins">₱{menus.price}/kg</p>
          <p className="text-center font-poppins">Stock: {menus.quantity} </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="absolute bottom-0 w-full bg-black text-white rounded-b-md"
          >
            Add to Cart
          </motion.button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
