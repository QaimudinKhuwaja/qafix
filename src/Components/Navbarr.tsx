import React from "react";
import Image from "next/image";
import twiter from '../app/assets/twiter.png'
import insta from '../app/assets/insta.png'
import youtube from '../app/assets/youtube.png'
import facebook from '../app/assets/facebook.png'




const Navbarr = () => {
  return (
    <nav className="bg-[#252B42] text-white py-4 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left Side: Number and Email */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">03113906067</span>
          
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center hidden md:block">
          <span className="font-semibold">Follow Us </span>
        </div>

        {/* Right Side: Follow Us with small logos */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">Follow Us:</span>
          <div className="flex space-x-2">
            <Image src={insta} alt='twiter'  />
            <Image src={youtube} alt='twiter'  />
            <Image src={facebook} alt='twiter'  />
            <Image src={twiter} alt='twiter'  />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;

