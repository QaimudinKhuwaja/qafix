import React from "react";
import Image from "next/image"; 
import immg from '../assets/immg.png';

const FifthPag = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 w-full sm:w-[1050px] sm:h-[500px]">

        {/* Left Side: Image */}
        <div className="sm:w-1/2 sm:pr-4 mb-6 sm:mb-0 order-2 sm:order-1 mt-5">
          <Image
            src={immg}
            alt="Image"
            width={400}  // Increased image width
            height={400} // Adjusted height to maintain aspect ratio
            style={{ objectFit: 'cover' }} 
            className="w-[350px] h-[350px] sm:w-[400px] sm:h-[480px]"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left sm:pl-4 order-1 sm:order-2">
          <h2 className="text-xl font-bold text-[#333]">SUMMER 2022</h2>
          <h3 className="text-2xl sm:text-[58px] text-[#333] mt-4 font-semibold leading-[70px]">
          Part of the Neural 
          Universe
          </h3>
          <p className="text-base text-[#333] mt-4 text-[14px]">
          We know how large objects will act, <br />
          but things on a small scale.
          </p>

          {/* Apply Now and Add to Cart buttons in a row */}
          <div className="flex mt-7 justify-center sm:justify-start gap-4">
            <div className="border-2 py-2 px-3 border-[#2DC071] text-[15px] text-[#2DC071] font-semibold rounded-lg  text-center">
              READ MORE
            </div>
            <button className="py-2 px-3 bg-[#2DC071] text-[15px] text-white rounded-lg ">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPag;
