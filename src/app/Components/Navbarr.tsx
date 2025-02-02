// import React from "react";
// import Image from "next/image";
// import twiter from '../assets/twiter.png';
// import insta from '../assets/insta.png';
// import youtube from '../assets/youtube.png';
// import facebook from '../assets/facebook.png';

// const Navbarr = () => {
//   return (
//     <nav className="bg-[#252B42] text-white py-4">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between">
//         {/* Left Side: Number */}
//         <div className="flex items-center space-x-4">
//           <span className="text-sm">03113906067</span>
//         </div>

//         {/* Center Text */}
//         <div className="flex-1 text-center hidden md:block">
//           <span className="font-semibold">Follow Us and get a chance to win 80% off</span>
//         </div>

//         {/* Right Side: Follow Us with small logos */}
//         <div className="flex items-center space-x-4">
//           <span className="text-sm">Follow Us:</span>
//           <div className="flex space-x-2">
//             <Image src={insta} alt="Instagram" width={24} height={24} />
//             <Image src={youtube} alt="YouTube" width={24} height={24} />
//             <Image src={facebook} alt="Facebook" width={24} height={24} />
//             <Image src={twiter} alt="Twitter" width={24} height={24} />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbarr;





 // Importing icons for user and cart
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold">
          Qafix Mart
        </Link>

          {/* Right Side: Login/Register (Desktop) */}
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link href="#" className="text-[#23A6F0] hover:text-blue-500">Khuhra</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;