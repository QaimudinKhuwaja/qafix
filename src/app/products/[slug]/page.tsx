// import React from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import { client } from '@/sanity/lib/client';

// const ProductDetail = async ({ params }: { params: { slug: string } }) => {
//   // Fetch all products
//   const res = await client.fetch(`*[_type=="product"]{
//     productName,
//     price,
//     _id,
//     inventory,
//     category,
//     status,
//     colors,
//     description,
//     slug,
//     "image": image.asset->url,
//   }`);

//   // Find the product with the matching slug
//   const data = res.find((e: { slug: { current: string } }) => e.slug.current === params.slug);

//   // Handle case where product is not found
//   if (!data) {
//     return <h1 className="text-center text-xl font-semibold text-red-500">Details not found</h1>;
//   }

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
//         {/* Product Image */}
//         <div className="w-full max-w-[480px] h-auto">
//           <Image
//             src={data.image}
//             alt={data.productName}
//             width={480}
//             height={480}
//             className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="w-full max-w-lg text-gray-900">
//           <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">{data.productName}</h1>

//           {/* Description */}
//           <p className="text-lg text-gray-700 mb-6">{data.description}</p>

//           {/* Price */}
//           <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${data.price}`}</p>

//           {/* Additional Details */}
//           <div className="text-gray-600 space-y-2 mb-6">
//             <p><strong>Category:</strong> {data.category}</p>
//             <p><strong>Status:</strong> {data.status}</p>
//             <p><strong>Inventory:</strong> {data.inventory}</p>
//             <p><strong>Colors Available:</strong> {data.colors.join(', ')}</p>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex gap-4 mt-6">
//             {/* Add to Cart Button */}
//             <Link href="/Cart">
//               <div className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95">
//                 <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
//               </div>
//             </Link>

//             {/* Buy Now Button */}
//             <Link href="/Checkout">
//               <div className="py-3 px-4 lg:w-[200px] h-[50px] bg-blue-600 text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-xl active:scale-95">
//                 <p className="text-lg font-semibold text-[15px]">Buy Now</p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;





































// import React from 'react'
// import Image from "next/image"
// import Link from "next/link"
// import { client } from '@/sanity/lib/client'

// const ProductDetail = async ({ params }: { params: { slug: string } }) => {
//   const res = await client.fetch(`*[_type=="product"]{
//     productName,
//     price,
//     _id,
//     inventory,
//     category,
//     status,
//     colors,
//     description,
//     slug,
//     "image": image.asset->url,
//   }`)

//   const data = res.find((e) => e.slug === params.slug);

//   // where product not found
//   if (!data) {
//     return <h1 className="text-center text-xl font-semibold text-red-500">Details not found</h1>;
//   }

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
//         {/* Product Image */}
//         <div className="w-full max-w-[480px] h-auto">
//           <Image
//             src={data.image}
//             alt={data.productName}
//             width={480}
//             height={480}
//             className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="w-full max-w-lg text-gray-900">
//           <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">{data.productName}</h1>
          
//           {/* Description */}
//           <p className="text-lg text-gray-700 mb-6">{data.description}</p>
          
//           {/* Price */}
//           <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${data.price}`}</p>

//           {/* Additional Details */}
//           <div className="text-gray-600 space-y-2 mb-6">
//             <p><strong>Category:</strong> {data.category}</p>
//             <p><strong>Status:</strong> {data.status}</p>
//             <p><strong>Inventory:</strong> {data.inventory}</p>
//             <p><strong>Colors Available:</strong> {data.colors.join(', ')}</p>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex gap-4 mt-6">
//             {/* Add to Cart Button */}
            
//               <div className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95">
//                 <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
//               </div>
            

//             {/* Buy Now Button */}
            
//               <div className="py-3 px-4 lg:w-[200px] h-[50px] bg-blue-600 text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-xl active:scale-95">
//                 <p className="text-lg font-semibold text-[15px]">Buy Now</p>
//               </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;












// "use client"
// import React, { useState, useEffect } from 'react'
// import Image from "next/image"
// import { client } from '@/sanity/lib/client'

// type Product = {
//   productName: string;
//   price: number;
//   _id: string;
//   inventory: number;
//   category: string;
//   status: string;
//   colors: string[];
//   description: string;
//   slug: {
//     current: string;
//   };
//   image: string;
// };

// const ProductDetail = ({ params }: { params: { slug: string } }) => {
//   const [data, setData] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await client.fetch(`*[_type=="product"]{
//           productName,
//           price,
//           _id,
//           inventory,
//           category,
//           status,
//           colors,
//           description,
//           slug,
//           "image": image.asset->url,
//         }`);

//         // Log fetched data to see the structure
//         console.log(res); // Check the structure of the response
        
//         // Find the product with the matching slug
//         const foundProduct = res.find((product: Product) => product.slug.current === params.slug);
//         if (foundProduct) {
//           setData(foundProduct);
//         } else {
//           console.log("Product not found"); // Log if no product is found
//           setData(null);
//         }
//       } catch (error) {
//         console.error("Error fetching data: ", error); // Log error if fetch fails
//       }
//     };

//     fetchData();
//   }, [params.slug]);

//   // If product data is not available or loading
//   if (data === null) {
//     return <div className="text-center text-xl font-semibold text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
//         {/* Product Image */}
//         <div className="w-full max-w-[480px] h-auto">
//           <Image
//             src={data.image}
//             alt={data.productName}
//             width={480}
//             height={480}
//             className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="w-full max-w-lg text-gray-900">
//           <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">{data.productName}</h1>
          
//           {/* Description */}
//           <p className="text-lg text-gray-700 mb-6">{data.description}</p>
          
//           {/* Price */}
//           <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${data.price}`}</p>

//           {/* Additional Details */}
//           <div className="text-gray-600 space-y-2 mb-6">
//             <p><strong>Category:</strong> {data.category}</p>
//             <p><strong>Status:</strong> {data.status}</p>
//             <p><strong>Inventory:</strong> {data.inventory}</p>
//             <p><strong>Colors Available:</strong> {data.colors.join(', ')}</p>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95">
//             <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;












// app/products/[slug]/page.tsx

// import React from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client'; // Sanity client import
// import AddToCart from '@/Components/AddToCart';

// interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   inventory: number;
//   category: string;
//   status: string;
//   colors: string[];
//   description: string;
//   slug: string;
//   image: string;
// }

// // This is a Server Component in Next.js 13+ (no need for getServerSideProps)
// const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  

//   // Fetching the product data from Sanity (Server-side)
//   const res = await client.fetch(`*[_type=="product"]{
//     productName,
//     price,
//     _id,
//     inventory,
//     category,
//     status,
//     colors,
//     description,
//     slug,
//     "image": image.asset->url,
//   }`);

//   const product = res.find((e)=> e.slug === params.slug)

//   if (!product) {
//     return (
//       <div className="text-center text-xl font-semibold text-red-500">
//         Product not found
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
//         {/* Product Image */}
//         <div className="w-full max-w-[480px] h-auto">
//           <Image
//             src={product.image}
//             alt={product.productName}
//             width={480}
//             height={480}
//             className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="w-full max-w-lg text-gray-900">
//           <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
//             {product.productName}
//           </h1>
//           <p className="text-lg text-gray-700 mb-6">{product.description}</p>
//           <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${product.price}`}</p>

//           {/* Additional Details */}
//           <div className="text-gray-600 space-y-2 mb-6">
//             <p><strong>Category:</strong> {product.category}</p>
//             <p><strong>Status:</strong> {product.status}</p>
//             <p><strong>Inventory:</strong> {product.inventory}</p>
//             <p><strong>Colors Available:</strong> {product.colors.join(', ')}</p>
//           </div>

//           {/* Add to Cart Button - Use AddToCart Component */}
//           <AddToCart product={product} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;













// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client'; // Sanity client import
// import Link from 'next/link';
// import { useParams } from 'next/navigation';

// interface Product {
//   _id: string;
//   productName: string;
//   price: number;
//   inventory: number;
//   category: string;
//   status: string;
//   colors: string[];
//   description: string;
//   slug: string;
//   image: string;
// }

// // Define ProductDetail component
// const ProductDetail = () => {
//   const { slug } = useParams();  // Get dynamic slug using useParams()

//   const [addedToCart, setAddedToCart] = useState<boolean>(false);
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (!slug) return;  // Guard clause to handle if slug is not available yet

//     const fetchProduct = async () => {
//       const res = await client.fetch(`*[_type=="product"]{
//         productName,
//         price,
//         _id,
//         inventory,
//         category,
//         status,
//         colors,
//         description,
//         slug,
//         "image": image.asset->url,
//       }`);

//       const selectedProduct = res.find((e: Product) => e.slug === slug);
//       setProduct(selectedProduct || null);
//     };

//     fetchProduct();
//   }, [slug]);

//   const handleAddToCart = () => {
//     if (product) {
//       const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
//       existingCart.push(product);
//       localStorage.setItem('cart', JSON.stringify(existingCart));
//       setAddedToCart(true);
//     }
//   };

//   if (!product) {
//     return <div className="text-center text-xl font-semibold text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
//         {/* Product Image */}
//         <div className="w-full max-w-[480px] h-auto">
//           <Image
//             src={product.image}
//             alt={product.productName}
//             width={480}
//             height={480}
//             className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="w-full max-w-lg text-gray-900">
//           <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">{product.productName}</h1>
//           <p className="text-lg text-gray-700 mb-6">{product.description}</p>
//           <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${product.price}`}</p>

//           {/* Additional Details */}
//           <div className="text-gray-600 space-y-2 mb-6">
//             <p><strong>Category:</strong> {product.category}</p>
//             <p><strong>Status:</strong> {product.status}</p>
//             <p><strong>Inventory:</strong> {product.inventory}</p>
//             <p><strong>Colors Available:</strong> {product.colors.join(', ')}</p>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={handleAddToCart}
//               className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95"
//             >
//               <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
//             </button>

//             {/* View Cart Button */}
//             {addedToCart && (
//               <Link
//                 href="/cart"
//                 className="py-3 px-4 lg:w-[200px] h-[50px] bg-blue-600 text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-xl active:scale-95"
//               >
//                 <p className="md:text-lg font-semibold text-[15px]">View Cart</p>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;












'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Sanity client import
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Product {
  _id: string;
  productName: string;
  price: number;
  inventory: number;
  category: string;
  status: string;
  colors: string[];
  description: string;
  slug: string;
  image: string;
}

// Define ProductDetail component
const ProductDetail = () => {
  const { slug } = useParams();  // Get dynamic slug using useParams()

  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // State for quantity

  useEffect(() => {
    if (!slug) return;  // Guard clause to handle if slug is not available yet

    const fetchProduct = async () => {
      const res = await client.fetch(`*[_type=="product"]{
        productName,
        price,
        _id,
        inventory,
        category,
        status,
        colors,
        description,
        slug,
        "image": image.asset->url,
      }`);

      const selectedProduct = res.find((e: Product) => e.slug === slug);
      setProduct(selectedProduct || null);
    };

    fetchProduct();
  }, [slug]);

  // Function to handle Add to Cart with quantity and price
  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      const updatedProduct = { ...product, quantity };  // Add quantity to product
      existingCart.push(updatedProduct);
      localStorage.setItem('cart', JSON.stringify(existingCart));
      setAddedToCart(true);
    }
  };

  // Update quantity and ensure it doesn't exceed inventory
  const increaseQuantity = () => {
    if (quantity < (product?.inventory || 0)) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Calculate the total price based on quantity
  const totalPrice = product ? product.price * quantity : 0;

  if (!product) {
    return <div className="text-center text-xl font-semibold text-red-500">Product not found</div>;
  }

  return (
    <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
        {/* Product Image */}
        <div className="w-full max-w-[480px] h-auto">
          <Image
            src={product.image}
            alt={product.productName}
            width={480}
            height={480}
            className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="w-full max-w-lg text-gray-900">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">{product.productName}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${totalPrice}`}</p>

          {/* Additional Details */}
          <div className="text-gray-600 space-y-2 mb-6">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Status:</strong> {product.status}</p>
            <p><strong>Inventory:</strong> {product.inventory}</p>
            <p><strong>Colors Available:</strong>
              {product.colors.map((color, index) => (
                <span key={index} className="mr-2">{color}</span>
              ))}
            </p>
          </div>

          {/* Quantity and Price Section */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
              disabled={quantity >= product.inventory}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95"
            >
              <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
            </button>

            {/* View Cart Button */}
            {addedToCart && (
              <Link
                href="/cart"
                className="py-3 px-4 lg:w-[200px] h-[50px] bg-blue-600 text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-xl active:scale-95"
              >
                <p className="md:text-lg font-semibold text-[15px]">View Cart</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
