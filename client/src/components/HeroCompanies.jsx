import React from "react";
import { assets } from "../assets/assets";

const HeroCompanies = () => {
  return (
    <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
      <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
        <p className="font-medium">Trusted by</p>
        <img src={assets.microsoft_logo} alt="" className="h-6" />
        <img src={assets.walmart_logo} alt="" className="h-6" />
        <img src={assets.accenture_logo} alt="" className="h-6" />
        <img src={assets.samsung_logo} alt="" className="h-6" />
        <img src={assets.amazon_logo} alt="" className="h-6" />
        <img src={assets.adobe_logo} alt="" className="h-6" />
      </div>
    </div>
  );
};

export default HeroCompanies;
