import tick from '../assets/tick.png'
import Image from 'next/image'
import hooli from '../assets/hooli.png'; 
import lyft from '../assets/lyft.png';
import brand3 from '../assets/brand3.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import brand6 from '../assets/brand6.png';
import blueTwiter from '../assets/blueTwiter.png';
import blueFB from '../assets/blueFB.png';
import blackkInsta from '../assets/blackkInsta.png';
import blueLinkdiin from '../assets/blueLinkdiin.png';
import React from 'react'

const page = () => {
  return (
      




    <>

    <div className="text-center mt-10 bg-white">
                
                <h1 className="text-[20px] md:text-[23px] lg:text-[23px] font-bold mt-[8px] text-[#737373]">PRICING</h1>
                <h1 className="text-[38px] md:text-[54px] lg:text-[54px] font-bold mt-[8px] text-black">Simple Pricing</h1>
    
                </div>
    
    
                <div className="text-center mt-10">
                
                <h1 className="text-[23px] md:text-[44px] lg:text-[45px] font-bold mt-[40px] text-black">PRICING</h1>
                <p className="text-[16px] md:text-[20px] lg:text-[20px] font-bold mt-[8px] text-[#737373]">Problems trying to resolve the conflict between <br /> 
                the two major realms of Classical physics: Newtonian mechanics </p>
    
                </div>
    
    
    
    
    
    
    
        <div className="flex justify-center items-center space-x-6 mt-[30px]">
          {/* Monthly Section */}
          <h1 className="text-xl font-semibold text-gray-800">Monthly</h1>
    
          {/* Toggle Button */}
          <button className="border border-blue-500 bg-white p-2 rounded-full flex items-center justify-center">
            <span className="w-[20px] h-5 bg-white border-[10px] border-black-500 rounded-full"></span>
          </button>
          
          {/* Yearly Section */}
          <h1 className="text-xl font-semibold text-gray-800">Yearly</h1>
    
          {/* Submit Button */}
          <button className="bg-[#B2E3FF] text-[#23A6F0] px-4 py-2 w-[180px] h-[55px] mt-[20px] rounded-full">
            Save 25%
          </button>
        </div>
    
    
    
    
    
    
    
    
        
    
    
        <div className="flex justify-center items-center space-x-4 space-y-4 sm:flex-row flex-col mt-[40px]">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center h-[393px] w-[328px] p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Standard Section */}
        <h1 className="text-center text-[30px] font-[700] text-gray-800 mb-4">FREE</h1>
        
        {/* Organize Across Apps */}
        <h1 className="text-center text-lg font-medium text-gray-600 mb-4">
          Organize across all apps by hand
        </h1>
        
        {/* Price Section */}
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-center text-[40px] font-[700] text-[#23A6F0] mr-2">0$</h1>
          <h2 className="text-center text-sm font-medium text-gray-600">Per month</h2>
        </div>
    
        {/* Icon Image */}
        <div className="flex items-center justify-center mb-4">
          <Image 
            src={tick} // Replace with your custom icon path
            alt="Icon"
            width={37} // Icon size
            height={37} // Icon size
          />
          <h1 className="ml-2 text-center text-lg font-semibold text-gray-800">Unlimited product updates</h1>
        </div>
      </div>
    
      {/* Card 2 */}
      <div className="bg-[#252B42] flex flex-col items-center justify-center h-[423px] w-[328px] p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Standard Section */}
        <h1 className="text-center text-[30px] font-[700] text-white mb-4">STANDARD</h1>
        
        {/* Organize Across Apps */}
        <h1 className="text-center text-lg font-medium text-white mb-4">
          Organize across all apps by hand
        </h1>
        
        {/* Price Section */}
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-center mr-2 text-[40px] font-[700] text-[#23A6F0] ">99.9$</h1>
          <h2 className="text-center text-sm font-medium text-white">Per month</h2>
        </div>
    
        {/* Icon Image */}
        <div className="flex items-center justify-center mb-4">
          <Image 
            src={tick} // Replace with your custom icon path
            alt="Icon"
            width={37} // Icon size
            height={37} // Icon size
          />
          <h1 className="ml-2 text-center text-lg font-semibold text-white">Unlimited product updates</h1>
        </div>
        <div className="flex items-center justify-center mb-4">
          <Image 
            src={tick} // Replace with your custom icon path
            alt="Icon"
            width={37} // Icon size
            height={37} // Icon size
          />
          <h1 className="ml-2 text-center text-lg font-semibold text-white">Unlimited product updates</h1>
        </div>
      </div>
    
      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center h-[393px] w-[328px] p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Standard Section */}
        <h1 className="text-center text-[30px] font-[700] text-gray-800 mb-4">PREMIUM</h1>
        
        {/* Organize Across Apps */}
        <h1 className="text-center text-lg font-medium text-gray-600 mb-4">
          Organize across all apps by hand
        </h1>
        
        {/* Price Section */}
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-center mr-2 text-[40px] font-[700] text-[#23A6F0] ">19.99$</h1>
          <h2 className="text-center text-sm font-medium text-gray-600">Per month</h2>
        </div>
    
        {/* Icon Image */}
        <div className="flex items-center justify-center mb-4">
          <Image 
            src={tick} 
            alt="Icon"
            width={37} // Icon size
            height={37} // Icon size
          />
          <h1 className="ml-2 text-center text-lg font-semibold text-gray-800">Unlimited product updates</h1>
        </div>
      </div>
    </div>
    
     
    <div className='place-items-center mt-[30px]'>
    <h1 className="text-[20px] md:text-[32px] lg:text-[33px] font-bold text-black">Trusted By Over 4000 Big Companies</h1>
    </div>



















    {/* Image Section */}
    <div className='place-items-center'>
 <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[50px] mt-[70px] ml-[20px] ">
    {/* Image 1 */}
    <div className="relative w-[130px] h-[40px] mt-[50px] pl-[10px]">
      <Image src={hooli} alt="Hooli" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>

    {/* Image 2 */}
    <div className="relative w-[90px] h-[60px] mt-[40px]">
      <Image src={lyft} alt="Lyft" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>

    {/* Image 3 */}
    <div className="relative w-[130px] h-[65px] mt-[30px]">
      <Image src={brand3} alt="Brand 3" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>

    {/* Image 4 */}
    <div className="relative w-[120px] h-[40px] mt-[40px]">
      <Image src={stripe} alt="Stripe" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>

    {/* Image 5 */}
    <div className="relative w-[110px] h-[70px] mt-[40px]">
      <Image src={aws} alt="AWS" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>

    {/* New Image */}
    <div className="relative w-[100px] h-[90px] mt-[10px]">
      <Image src={brand6} alt="New Image" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>
  </div>
  </div>

    










  <div className="text-center mt-[140px] bg-white">
                
                <h1 className="text-[20px] md:text-[33px] lg:text-[33px] font-bold mt-[8px] text-black">PRICING FAQ S</h1>
                <p className="text-[18px] md:text-[22px] lg:text-[22px] font-bold mt-[8px] text-[#737373]">Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics</p>
    
                </div>






                <div className='place-items-center'>

{/* Flex container with reduced space between divs */}
<div className="flex flex-wrap justify-center items-stretch gap-2 mt-[10px]">

  {/* First Div */}
  <div className="flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[48%] lg:w-[48%] min-h-[300px]">
    <h1 className="text-black text-[20px] font-semibold mb-4">
      The quick fox jumps over the lazy
    </h1>
    <p className="text-[#737373] text-[14px]">
      Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door <br />
      RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
    </p>
  </div>

  {/* Second Div */}
  <div className="flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[48%] lg:w-[48%] min-h-[300px]">
    <h1 className="text-black text-[20px] font-semibold mb-4">
      The quick fox jumps over the lazy 
    </h1>
    <p className="text-[#737373] text-[14px]">
      Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door <br />
      RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
    </p>
  </div>

</div>

{/* Another Flex Row with Same Setup */}
<div className="flex flex-wrap justify-center items-stretch gap-4 mt-[8px]">

  {/* First Div */}
  <div className="flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[48%] lg:w-[48%] min-h-[300px]">
    <h1 className="text-black text-[20px] font-semibold mb-4">
      The quick fox jumps over the lazy
    </h1>
    <p className="text-[#737373] text-[14px]">
      Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door <br />
      RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
    </p>
  </div>

  {/* Second Div */}
  <div className="flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[48%] lg:w-[48%] min-h-[300px]">
    <h1 className="text-black text-[20px] font-semibold mb-4">
      The quick fox jumps over the lazy 
    </h1>
    <p className="text-[#737373] text-[14px]">
      Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door <br />
      RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
    </p>
  </div>

</div>

{/* Third Flex Row with Same Setup */}
<div className="flex flex-wrap justify-center items-stretch gap-4 mt-[8px]">

  {/* First Div */}
  <div className="flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[48%] lg:w-[48%] min-h-[300px]">
    <h1 className="text-black text-[20px] font-semibold mb-4">
      The quick fox jumps over the lazy 
    </h1>
    <p className="text-[#737373] text-[14px]">
      Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door<br />
      RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
    </p>
  </div>

  {/* Second Div */}
  <div className="flex flex-col items-center justify-center w-full sm:w-[48%] md:w-[48%] lg:w-[48%] min-h-[300px]">
    <h1 className="text-black text-[20px] font-semibold mb-4">
      The quick fox jumps over the lazy 
    </h1>
    <p className="text-[#737373] text-[14px]">
      Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent. RELIT official consequent door<br />
      RELIT Mollie. Excitation venial consequent sent <br /> nostrum met.
    </p>
  </div>

</div>

</div>




















    <div className='place-items-center mt-[30px]'>
    <p className="text-[17px] md:text-[24px] lg:text-[24px] font-bold mt-[8px] text-[#737373]">Haven’t got your answer? Contact our support</p>
    </div>



    <div className="text-center mt-[38px]">
  <h1 className="text-[30px] md:text-[35px] lg:text-[45px] font-bold mt-[8px]">
    Start your 14 days free trial
  </h1>
  <h1 className="text-[#737373] text-[18px] font-[400] mt-[20px]">
    Met minim Mollie non desert Alamo est sit cliquey dolor <br />
    do met sent. RELIT official consequent.
  </h1>
  
  <button className="bg-[#23A6F0] text-[18px] font-[700] w-[200px] h-[58px] rounded-lg mt-[20px] text-white">
    Try it free now
  </button>

  {/* Images Section */}
  <div className="flex justify-center items-center mt-[30px] space-x-6">
    {/* Image 1 */}
    <div className="w-[40px] h-[40px] p-[6px]">
      <Image 
        src={blueTwiter}  
        alt="Icon 1"
        width={28}  
        height={28}  
      />
    </div>
    
    {/* Image 2 */}
    <div className="w-[40px] h-[40px] p-[6px]">
      <Image 
        src={blueFB}  
        alt="Icon 2"
        width={28}  
        height={28}  
      />
    </div>
    
    {/* Image 3 */}
    <div className="w-[40px] h-[40px]  p-[6px]">
      <Image 
        src={blackkInsta}  
        alt="Icon 3"
        width={28}  
        height={28}  
      />
    </div>
    
    {/* Image 4 */}
    <div className="w-[40px] h-[40px]  p-[6px]">
      <Image 
        src={blueLinkdiin}  
        alt="Icon 4"
        width={28}  
        height={28} 
      />
    </div>
  </div>
</div>



    </>
    
    
    





  )
}

export default page
