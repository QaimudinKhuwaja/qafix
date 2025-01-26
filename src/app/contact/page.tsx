import React from 'react'
import Image from 'next/image'
import contactSec from '../assets/contactSec.png';
import blackLinkdin from '../assets/blackLinkdin.png';
import blackFb from '../assets/blackFb.png';
import blackTwiter from '../assets/blackTwiter.png';
import blackInsta from '../assets/blackInsta.png';
import phone from '../assets/phone.png';
import location from '../assets/location.png';
import msgArrow from '../assets/msgArrow.png';

const page = () => {
  return (
    <>
    
    {/* hero section */}
    
    <section className="relative w-full h-full min-h-screen flex flex-col sm:flex-row">

  {/* Text Section */}
  <div className="relative flex-1 flex items-center justify-start p-6 md:p-12 z-10 text-black">
    <div className="space-y-4 ml-12 mt-12 sm:ml-24 sm:mt-24 w-full">
      {/* Heading and Text */}
      <p className="text-[18px]">Contact US</p>
      <h1 className="text-[40px] sm:text-4xl md:text-5xl font-bold pt-[13px]">
        Get in touch <br />
        today!
      </h1>
      <p className="text-[#737373] pt-[13px] text-[20px] max-w-xs sm:max-w-md md:max-w-lg">
      اگر آپ کو کسی سے بھی قسم کا مسئلہ ہو تو نیچے دیے گۓ نمبر پر رابتا کر سکتے ہیں۔ شکریہ
      
      </p>
      <h1 className="text-[#252B42] text-[18px] font-[800]">Owner:031139006067</h1>
      <h1 className="text-[#252B42] text-[18px] font-[800]">Manager:032731103273</h1>

      {/* Icons */}
      <div className="flex gap-6 mt-6">
        {/* Icon 1 */}
        <div className="w-[30px] h-[30px]">
          <Image src={blackTwiter} alt="Facebook Icon" width={30} height={30} style={{ objectFit: 'contain' }} />
        </div>
        {/* Icon 2 */}
        <div className="w-[30px] h-[30px]">
          <Image src={blackFb} alt="Instagram Icon" width={30} height={30} style={{ objectFit: 'contain' }} />
        </div>
        {/* Icon 3 */}
        <div className="w-[30px] h-[30px]">
          <Image src={blackInsta} alt="Twitter Icon" width={30} height={30} style={{ objectFit: 'contain' }} />
        </div>
          {/* Icon 4 */}
        <div className="w-[30px] h-[30px]">
          <Image src={blackLinkdin} alt="Twitter Icon" width={30} height={30} style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="relative flex-1 w-full h-full min-h-screen">
    {/* Added the "Login" and "Become a member" Button */}
   

    <Image
      src={contactSec} 
      alt="Hero Image"
      layout="fill" 
      objectFit="cover" 
    
      
    />
  </div>
</section>
{/* eends */}










    
    {/* heading text */}
          <div className="text-center mt-[22px]">
            <h1 className='text-black text-[18px] font-[800]'>VISIT OUR OFFICE</h1>
            <h1 className="text-[27px] md:text-[34px] lg:text-[44px] font-bold mt-[8px] "> We help small businesses <br />
            with big ideas</h1>
           
            </div>



{/* card section*/}

      

    <div className="flex justify-center items-center space-x-4 space-y-4 sm:flex-row flex-col mt-[30px]">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center h-[343px] w-[328px] p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="mb-4">
          <Image 
            src={phone}
            alt="Logo" 
            width={100}
            height={100}
          />
        </div>
        
        {/* Email Section 1 */}
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-2">georgia.young@example.com</h1>
        
        {/* Email Section 2 */}
        <h2 className="text-center text-lg font-medium text-gray-600 mb-4">georgia.young@ple.com</h2>
        
        {/* Support Section */}
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">Get Support</h1>
        
        {/* Submit Button */}
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
          Submit Request
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-[#252B42] flex flex-col items-center justify-center h-[393px] w-[328px] p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="mb-4">
          <Image 
            src={location}
            alt="Logo" 
            width={100}
            height={100}
          />
        </div>
        
        {/* Email Section 1 */}
        <h1 className="text-center text-xl font-semibold text-white mb-2">georgia.young@example.com</h1>
        
        {/* Email Section 2 */}
        <h2 className="text-center text-lg font-medium text-white mb-4">georgia.young@ple.com</h2>
        
        {/* Support Section */}
        <h1 className="text-center text-xl font-semibold text-white mb-4">Get Support</h1>
        
        {/* Submit Button */}
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
          Submit Request
        </button>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center h-[343px] w-[328px] p-4 border border-gray-300 rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="mb-4">
          <Image 
            src={msgArrow}
            alt="Logo" 
            width={100}
            height={100}
          />
        </div>
        
        {/* Email Section 1 */}
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-2">georgia.young@example.com</h1>
        
        {/* Email Section 2 */}
        <h2 className="text-center text-lg font-medium text-gray-600 mb-4">georgia.young@ple.com</h2>
        
        {/* Support Section */}
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">Get Support</h1>
        
        {/* Submit Button */}
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
          Submit Request
        </button>
      </div>
    </div>
 




    <div className="text-center mt-[38px]">
            <h1 className='text-black text-[18px] font-[600]'>WE Cant WAIT TO MEET YOU</h1>
            <h1 className="text-[30px] md:text-[35px] lg:text-[45px] font-bold mt-[8px] "> Let’s Talk
           </h1>
            <button className='bg-[#23A6F0] text-[18px] font-[700] w-[200px] h-[58px] rounded-lg mt-[10px] text-white'>Try it free now</button>
           
            </div>

    
    </>
  )
}

export default page