

import React from "react";
import Image from "next/image";
import girl from '../assets/girl.jpg';

const HeroSection = () => {
  return (
    <div className="place-items-center ">
    <div className="relative max-w-screen-full h-screen ">
      {/* Full Screen Image */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[110vh]">
        <Image
          src={girl} 
          alt="Hero Image"
          width={0} 
          height={0}
        
        />
      </div>

      {/* Text on top of the image */}
      <div className="absolute pr-[320px] top-0 w-full flex items-center justify-center z-10 text-white h-full">
        <div className="space-y-4 text-center md:text-left lg:text-left md:block hidden sm:hidden">
          {/* Text Content */}
          <p className="text-[18px]">SUMMER 2022</p>
          <h1 className="text-[30px] sm:text-4xl md:text-5xl font-bold mt-3">
            NEW COLLECTION
          </h1>
          <p className="pt-[13px] text-[17px] max-w-xs sm:max-w-md md:max-w-lg mx-auto md:ml-0 ">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="mt-6 px-6 py-3 pt-[17px] bg-[#2DC071] text-white font-semibold w-[200px] h-[50px] rounded-lg hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
{/* small size text */}
      <div className="md:hidden lg:hidden place-items-center mt-[30px]">
          {/* Text Content */}
          <p className="text-[18px]">SUMMER 2022</p>
          <h1 className="text-[30px] sm:text-4xl md:text-5xl font-bold mt-3">
            NEW COLLECTION
          </h1>
          <p className="pt-[13px] pl-5 text-[18px] max-w-xs sm:max-w-md">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <button className="mt-6 px-8 py-4 bg-[#2DC071] text-white font-semibold  rounded-lg hover:bg-blue-600">
            Shop Now
          </button>
        </div>
    </div>
    </div>
  );
};

export default HeroSection;
