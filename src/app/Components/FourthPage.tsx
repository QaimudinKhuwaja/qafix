import React from "react";
import Image from "next/image"; 
import booy from '../assets/booy.png';

const FourthPag = () => {
  return (
    <div className="place-items-center">
    <div className="flex items-center justify-center min-h-screen bg-[#23856D] mt-[30px]">
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 w-full sm:h-[500px]">
        
        {/* Left Side: Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left sm:pl-[80px]">
          <h2 className="text-xl font-bold text-[#FFFFFF]">SUMMER 2022</h2>
          <h3 className="text-2xl sm:text-[58px] text-[#FFFFFF] mt-4 font-semibold leading-[70px]">
            Vita Classic Product
          </h3>
          <p className="text-base text-[#FFFFFF] mt-4 text-[14px]">
            We know how large objects will act, We know <br /> how objects will act, We know
          </p>
          <div className="flex items-center mt-6 justify-center sm:justify-start">
            <h2 className="text-[24px] font-semibold text-[#FFFFFF]">16.48</h2>
            <button className="ml-4 py-2 px-4 bg-[#2DC071] text-white rounded-lg w-[200px] h-[50px]">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="sm:w-1/2 mt-6 sm:mt-0">
          <Image
            src={booy}
            alt="Image"
            width={350}
            height={480}
            style={{ objectFit: 'cover' }} 
            className="w-full h-auto sm:w-[350px] sm:h-[480px] sm:pl-[30px]"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FourthPag;
