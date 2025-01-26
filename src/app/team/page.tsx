
import Image from 'next/image';
import React from 'react';
import dess from '../assets/dess.png';
import dess1 from '../assets/dess1.png';
import dess2 from '../assets/dess2.png';
import dess3 from '../assets/dess3.png';
import dess4 from '../assets/dess4.png';
import blueTwiter from '../assets/blueTwiter.png';
import blueFB from '../assets/blueFB.png';
import blackkInsta from '../assets/blackkInsta.png';
import blueInsta from '../assets/blueInsta.png';
import blueLinkdiin from '../assets/blueLinkdiin.png';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpg';
import team8 from '../assets/team8.jpg';
import team9 from '../assets/team9.jpg';
import umar from '../assets/umar.jpeg';
import qaimudin from '../assets/Qaimudin.jpeg'
import shafqat from '../assets/shafqat.png'
import Link from 'next/link';

const SecondPag = () => {
  return (
    <>
    <div className="w-full mt-[100px]">
      {/* Heading and Text */}
      <div className="text-center mt-10">
      <p className="mt-4 text-lg max-w-2xl mx-auto">
        What We Do
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold">Innovation tailored for you</h1>
       
      </div>
      {/* Flex Container with 3 Divs */}
      <div className="flex md:flex-wrap justify-center gap-4 mt-10 px-6 ">
        {/* 1st Div */}
        <div className="flex-[2] sm:flex-[3] max-w-[30%] relative h-[350px] sm:h-[400px] bg-gray-200">
          <Image
            src={dess}
            alt="Image 1"
            width={400}
            height={300}
            objectFit="cover"
            className="w-full h-full object-cover rounded-lg"
          />
         
        </div>

       

        {/* 3rd Div with 2 images */}
        <div className="flex-1 max-w-[240px] sm:w-[260px] flex flex-col gap-4 relative h-[100px] sm:h-[260px] bg-gray-200">
          {/* 1st Image in 3rd div */}
          <div className="relative flex-1">
            <Image
              src={dess1}
              alt="Image 3.1"
              width={300}  /* Reduced width */
              height={225} /* Reduced height */
              objectFit="cover"
              className="w-[260px]  h-[190px] object-cover rounded-lg"
            />
          
          </div>

          {/* 2nd Image in 3rd div */}
          <div className="relative flex-1">
            <Image
              src={dess2}
              alt="Image 3.2"
              width={300}  /* Reduced width */
              height={225} /* Reduced height */
              objectFit="cover"
              className="w-[260px] h-[190px] object-cover rounded-lg"
            />
         
          </div>
        </div>







   {/* 4th Div with 2 images */}
   <div className="flex-1 max-w-[240px] sm:w-[260px] flex flex-col gap-4 relative h-[100px] sm:h-[260px] bg-gray-200">
          {/* 1st Image in 3rd div */}
          <div className="relative flex-1">
            <Image
              src={dess3}
              alt="Image 3.1"
              width={300} 
              height={225} 
              objectFit="cover"
              className="w-[260px]  h-[190px] object-cover rounded-lg"
            />
          
          </div>

          {/* 2nd Image in 3rd div */}
          <div className="relative flex-1">
            <Image
              src={dess4}
              alt="Image 3.2"
              width={300}  
              height={225}
              objectFit="cover"
              className="w-[260px] h-[190px] object-cover rounded-lg"
            />
           
          </div>
        </div>

      </div>
    </div>




      {/* Heading and Text */}
      <div className="text-center mt-[70px]">
      
        <h1 className="text-2xl sm:text-3xl font-bold">Meet Our Team</h1>
       
      </div>




















{/* start crads section */}








    {/* team section starts */}

    <div className="place-items-center">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
      {/* Card 1 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={qaimudin}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className=' object-top'
          />
        </div>

        {/* Username and Profession */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Qaimudin Khuwaja</h2>
          <p className="text-[#737373] text-sm mt-1">Developer <br /> Bussiness Owner</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-[20px] mt-4 justify-center">
          {/* Icon 1 */}
          <div className="w-[30px] h-[30px]">
            <Link href="https://www.facebook.com/qaimudinkhuwaja">
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
            </Link>
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={umar}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            
          />
        </div>

        {/* Username and Profession */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Muhammad Umar</h2>
          <p className="text-[#737373] text-sm mt-1">Bussiness Manager</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-[20px] mt-4 justify-center">
          {/* Icon 1 */}
          <Link href="https://www.facebook.com/share/18iBxEbexy/">
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
            </Link>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={shafqat}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Username and Profession */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">Shafqat Khuwaja</h2>
          <p className="text-[#737373] text-sm mt-1">Amazon Seller</p>
        </div>

        {/* Icons Section */}
        <div className="flex gap-[20px] mt-4 justify-center">
          {/* Icon 1 */}
          <Link href="https://www.facebook.com/share/19rUYBAgfu/">
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
            </Link>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
    </div>




















    {/* team section starts */}

    <div className="place-items-center">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
      {/* Card 1 */}
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
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team7}
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
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team1}
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
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
    </div>


























    {/* team section starts */}

    <div className="place-items-center">
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
      {/* Card 1 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team2}
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
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team8}
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
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[313px] bg-white rounded-lg shadow-lg p-4">
        {/* Image */}
        <div className="w-[280px] h-[231px] overflow-hidden rounded-md relative">
          <Image
            src={team9}
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
            <Image src={blueFB} alt="Icon 1" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 2 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueInsta} alt="Icon 2" width={30} height={30} objectFit="contain" />
          </div>
          {/* Icon 3 */}
          <div className="w-[30px] h-[30px]">
            <Image src={blueTwiter} alt="Icon 3" width={30} height={30} objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
    </div>



{/* eends cards section */}


















    <div>

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



    </div>





    </>
  );
};

export default SecondPag;