import React from "react";
import img from "../images/m1.png";
import img1 from "../images/m2.png";
import img2 from "../images/m3.png";

const LatestProducts = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl mt-32 mb-10 font-Averia font-semibold">
        Latest Products
      </h1>

      <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
        <div className="relative">
          <img
            className="rounded-3xl h-64 object-cover border-4 border-[#e7ff14]"
            src={img}
            alt="Gym-Equipment"
          />
        </div>
        <div className="relative">
          <img
            className="rounded-3xl h-64 object-cover border-4 border-[#e7ff14]"
            src={img1}
            alt="Gym-Equipment"
          />
        </div>
        <div className="relative">
          <img
            className="rounded-3xl h-64 object-cover border-4 border-[#e7ff14]"
            src={img2}
            alt="Gym-Equipment"
          />
        </div>
      </div>

      <div className="flex gap-2 mt-5 items-center justify-center p-5">
        <div className="w-5 h-5 rounded-full bg-gray-500 border border-[#e7ff14]"></div>
        <div className="w-5 h-5 rounded-full bg-gray-500 border border-[#e7ff14]"></div>
        <div className="w-5 h-5 rounded-full bg-[#e7ff14] border border-[#e7ff14]"></div>
        <div className="w-5 h-5 rounded-full bg-gray-500 border border-[#e7ff14]"></div>
      </div>
    </div>
  );
};

export default LatestProducts;
