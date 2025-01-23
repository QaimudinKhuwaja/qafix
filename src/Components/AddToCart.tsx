// // components/AddToCart.tsx

// 'use client'

// import React, { useState } from 'react';

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


// const AddToCart = ({ product }: { product: Product }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Fetch cart data from localStorage when the component mounts
//   React.useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart)); // Load cart items from localStorage
//     }
//   }, []);

//   // Function to add product to cart
//   const addToCart = (product: Product) => {
//     const updatedCart = [...cart, product];  // Create a new array with the new product added
//     setCart(updatedCart);  // Update the state with the new cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));  // Store the updated cart in localStorage
//     alert('Product added to cart!');  // Provide feedback to the user
//   };

//   return (
//     <div
//       className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95"
//       onClick={() => addToCart(product)}  // Trigger the addToCart function on click
//     >
//       <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
//     </div>
//   );
// };

// export default AddToCart;
