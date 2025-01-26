import React from "react";
import Image from "next/image";
import about from '../assets/aboutt.jpeg';
import bigimg from '../assets/bigimg.png';
import blueInsta from '../assets/blueInsta.png';
import blueTwiter from '../assets/blueTwiter.png';
import blueFB from '../assets/blueFB.png';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import hooli from '../assets/hooli.png'; 
import lyft from '../assets/lyft.png';
import brand3 from '../assets/brand3.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import brand6 from '../assets/brand6.png';
import pink from '../assets/pink.png';
// fill style={{ objectFit: 'cover' }}
// style={{ objectFit: 'cover' }}



const HeroSection = () => {
  return (
    <>
<section className="relative w-full min-h-[150vh] flex flex-col sm:flex-row bg-black">

{/* Text Section */}
<div className="flex-1 flex items-center justify-start p-6 md:p-12 z-10 text-white">
  <div className="space-y-4 ml-12 mt-12 sm:ml-24 sm:mt-24"> {/* Adjusted spacing for large screens */}
    <p className="text-[18px]">ABOUT COMPANY</p>
    <h1 className="text-[32px] sm:text-4xl md:text-5xl font-bold pt-[13px]">
      ABOUT US
    </h1>
    <p className="pt-[13px] text-[18px] sm:text-[20px] max-w-xs sm:max-w-md md:max-w-lg">
      We know how large objects will act, <br />
      but things on a small scale.
    </p>
    <button className="px-6 py-3 pt-[17px] bg-[#23A6F0] text-white font-semibold w-[200px] h-[52px] rounded-lg hover:bg-blue-600 mt-7">
      Get Quotes Now
    </button>
  </div>
</div>

{/* Image Section */}
<div className="relative flex-1 sm:w-1/2 mt-6 sm:mt-0 sm:ml-5 md:h-[670px] lg:h-[700px]">
  <Image
    src={about}
    alt="Hero Image"
    layout="fill"
    objectFit="cover"
    style={{ objectFit: 'cover' }}
  />
</div>

</section>





   


    <div className="mt-[40px] w-full h-[236px] bg-white place-items-center">
      {/* Red Heading */}
      <div className="flex flex-col ml-[20px] mt-[20px]">
        <h3 className="text-red-500 text-[20px] font-bold ">Problems trying</h3>
        
        {/* Black Heading */}
        <div className="flex gap-[100px]">
        <h2 className="text-black md:text-[25px] lg:text-[25px] mtext-[19px] font-semibold mt-[10px]">
          Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br /> met sent.
        </h2>
        
        {/* Paragraph */}
        <p className="text-[#737373] mt-[10px] text-[16px] max-w-[80%] justify-around">
          Problems trying to resolve the conflict between the two major realms of <br /> Classical physics: Newtonian mechanics
        </p>
        
      </div>
    </div>


   {/* 3rd section */}



    <div className="flex justify-between gap-[10px] md:gap-[80px] lg:gap-[140px] sm:flex sm:gap-6 mt-[40px]">

{/* First Div */}
<div className="text-center">
  <h1 className="md:text-[45px] lg:text-[45px] text-[20px] font-[900]">15K</h1>
  <p className="text-[#737373] text-[17px]">Happy Customers</p>
</div>

{/* Second Div */}
<div className="text-center">
  <h1 className="md:text-[45px] lg:text-[45px] text-[20px] font-[900]">150K</h1>
  <p className="text-[#737373] text-[17px]">Monthly Visitors</p>
</div>

{/* Third Div */}
<div className="text-center">
  <h1 className="md:text-[45px] lg:text-[45px] text-[20px] font-[900]">15</h1>
  <p className="text-[#737373] text-[17px]">Countries Worldwide</p>
</div>

{/* Fourth Div */}
<div className="text-center">
  <h1 className="md:text-[45px] lg:text-[45px] text-[20px] font-[900]">100+</h1>
  <p className="text-[#737373] text-[17px]">Top Partners</p>
</div>

</div>

</div>



{/* 4th section */}
<div className="place-items-center lg:mt-[0px] mt-[200px]">
<div className="w-[350px] h-[300px] md:w-[800px] md:h-[500px] lg:w-[1000px] lg:h-[600px]">
        <Image
          src={bigimg} 
          alt="Image"
          style={{ objectFit: 'cover' }}
          /></div>
</div>



<div className="text-center lg:mt-11 md:mt-11 sm:mt-11">
            
          <h1 className="text-[27px] md:text-[34px] lg:text-[44px] font-bold mt-[8px] "> Meet Our Team</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
          Problems trying to resolve the conflict between 
             </p>
          </div>








    {/* team section starts */}

<div className="place-items-center">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
      {/* Card 1 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team1}
            alt="Profile Image"
            layout="fill"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Username and Profession */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Username</h2>
          <p className="text-[#737373] text-sm mt-1">Profession</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-[20px] mt-4 justify-center">
          {/* Icon 1 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueFB} alt="Icon 1" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team2}
            alt="Profile Image"
            layout="fill"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Username and Profession */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Username</h2>
          <p className="text-[#737373] text-sm mt-1">Profession</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-[20px] mt-4 justify-center">
          {/* Icon 1 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueFB} alt="Icon 1" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team3}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Username and Profession */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Username</h2>
          <p className="text-[#737373] text-sm mt-1">Profession</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-[20px] mt-4 justify-center">
          {/* Icon 1 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueFB} alt="Icon 1" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
    </div>




<div>
            <div className="text-center mt-10">
            
            <h1 className="text-[27px] md:text-[34px] lg:text-[44px] font-bold mt-[8px] "> Big Companies Are Here</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
            Problems trying to resolve the conflict between <br /> 
             the two major realms of Classical physics: Newtonian mechanics 
               </p>
            </div>





 {/* Image Section */}
 <div className='place-items-center'>
 <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[50px] mt-[70px] ml-[20px] ">
    {/* Image 1 */}
    <div className="relative w-[130px] h-[40px] mt-[50px] pl-[10px]">
      <Image src={hooli} alt="Hooli" layout="fill" style={{ objectFit: 'contain' }} className="rounded-md" />
    </div>

    {/* Image 2 */}
    <div className="relative w-[90px] h-[60px] mt-[40px]">
      <Image src={lyft} alt="Lyft" layout="fill" style={{ objectFit: 'contain' }} className="rounded-md" />
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





</div>







<div className="flex items-center justify-center min-h-screen bg-[#2A7CC7] mt-[40px]">
  <div className="flex flex-col sm:flex-row items-center justify-between p-6 w-full sm:w-[1050px] sm:h-[500px]">

    {/* Left Side: Text Content */}
    <div className=" sm:w-1/2 text-center sm:text-left sm:pl-4 order-1 sm:order-1 bg-[#2A7CC7] md:w-[700px] md:h-[480px] lg:w-[700px] lg:h-[480px] text-white p-6">
      <h2 className="text-xl font-bold">Work With Us</h2>
      <h3 className="text-2xl sm:text-[58px] mt-4 font-semibold leading-[70px]">
      Now Let’s grow Yours
      </h3>
      <p className="text-base mt-4 text-[14px]">
      The gradual accumulation of information about atomic and <br /> small-scale behavior during the first quarter of the 20th 
      </p>

      {/* Apply Now and Add to Cart buttons in a row */}
      <div className="flex mt-6 justify-center sm:justify-start gap-4">
        <div className="border-2 border-white p-[15px] px-4 text-white font-semibold rounded-lg w-[150px] h-[60px] text-center">
            BUTTON
        </div>
       
      </div>
    </div>

    {/* Right Side: Image */}
    <div className=" sm:w-1/2 sm:pl-4 mb-6 sm:mb-0 order-2 sm:order-2">
      <Image
        src={pink}
        alt="Image"
        width={400}  // Increased image width
        height={400} // Adjusted height to maintain aspect ratio
        style={{ objectFit: 'cover' }}
        className="w-[350px] h-[350px] sm:w-[400px] sm:h-[480px] hidden sm:block" // Hidden on mobile
      />
    </div>
  </div>
</div>


    </>
  );
};

export default HeroSection;



    