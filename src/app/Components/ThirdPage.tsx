// import Image from 'next/image';
// import { client } from '@/sanity/lib/client'
// import React from 'react'
// import dots from '../assets/dots.png';
// import Link from 'next/link';
// const Hero =async () => {

//   interface Idata {
//   _id: string;
//   productName: string;
//   price: number;
//   category: string;
//   slug:string;
//   status: string;
//   description: string;
//   image: string;  
//   colors: string[];
// }

//   const res: Idata[] = await client.fetch(
//     '*[_type == "product"]{_id, productName, price, category, slug, status, description, "image": image.asset->url, colors}'
//   );
      
   
//   return (
//     <> 
//  <div className='place-items-center'>
//    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 pt-[50px] ">
//       {res.map((p) => {
//         return (
//           <Link key={p._id} href={`/products/${p.slug}`}>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={p._id}>
           
//             {/* Product Image */}
//             <div className="relative w-full h-62">
//               <Image 
//                 src={p.image} 
//                 alt={p.productName} 
//                 width={200} 
//                 height={200} 
//                 objectFit="cover" 
//                 className="w-full h-full object-cover object-center" 
                
//               />
//             </div>
//             {/* Card Content */}
//             <div className="p-4">
//               <h1 className="text-xl font-semibold truncate">{p.productName}</h1>
//               <h2 className="text-lg text-red-600 truncate">{p.category}</h2>
//               <h3 className="text-lg font-semibold text-gray-800 mt-2">{p.price}</h3>
//               {/* Optional dot icon */}
//               <div className="mt-2 flex justify-center">
//                 <Image src={dots} alt="Icon" width={24} height={24} />
//               </div>
              
//             </div>
            
//           </div>
//           </Link>
//         );
//       })}
//     </div>

//     </div>
//     </>
//   )
// }

// export default Hero

































// import React from "react";
// import Image from "next/image";
// import dots from '../assets/dots.png';
// import ourat from '../assets/ourat.png';
// import boyy from '../assets/boyy.png';
// import girll from '../assets/girll.png';
// import girlll from '../assets/girlll.png';
// import product5 from '../assets/product5.png';
// import product6 from '../assets/product6.png';
// import product7 from '../assets/product7.png';
// import product8 from '../assets/product8.png';

// const ThirdPag = () => {
//   return (
// <>
//     <div className="place-items-center">
  
//             <div className="text-center mt-20">
//               <h2 className='text-[#737373] text-xl'>Featured Products</h2>
//           <h1 className="text-2xl sm:text-1xl font-bold mt-[8px]"> BESTSELLER PRODUCTS</h1>
//           <p className="mt-4 text-lg max-w-2xl mx-auto">
//           Problems trying to resolve the conflict between 
//              </p>
//           </div>

    

// <div className=' grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mt-[50px]'>
//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={ourat} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 
      






//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={boyy} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 
 








//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={girll} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 








//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={girlll} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 









    

//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={product5} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 









//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={product6} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 









//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={product7} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 










//     <div className="max-w-[200px] h-[420px] bg-white ">
//       {/* Product Image */}
//       <div className="w-full h-[180px] relative">
//         <Image
//           src={product8} // Product Image
//           alt="Product"
//           width={200}
//           height={200}
//           objectFit="cover"
//           className='h-[290px]'
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-[20px] mt-[100px]">
//         <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
//         <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
//         <div className="flex items-center mt-3">
//           <p className="text-xl text-[#BDBDBD]">$16.48</p>
//           <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
//         </div>
//         <div className="mt-2 flex justify-center mr-[32px]">
//           <Image
//             src={dots} // Icon Image
//             alt="Icon"
//             width={0}
//             height={0}
//             className='w-[90px] h-[20px]'
//           />
//         </div>
//       </div>
//     </div> 
//     </div>


//   </div>
//     </>
//   );
// };

// export default ThirdPag;
