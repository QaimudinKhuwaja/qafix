// // import React from 'react';
// // import { useCart } from '@/contexts/CartContext';
// // import Image from 'next/image';


// // const Cart = () => {
// //   const { cart, updateQuantity, removeFromCart } = useCart();

// //   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

// //   return (
// //     <div className="py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-screen-xl mx-auto">
// //         <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>

// //         <div className="space-y-4">
// //           {cart.map((item) => (
// //             <div key={item.id} className="flex items-center justify-between">
// //               <div className="flex items-center">
// //                 <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
// //                 <p className="ml-4">{item.name}</p>
// //               </div>

// //               <div className="flex items-center">
// //                 <button
// //                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
// //                   disabled={item.quantity <= 1}
// //                   className="px-4 py-2 bg-gray-200 text-sm rounded-full"
// //                 >
// //                   -
// //                 </button>
// //                 <span className="mx-4">{item.quantity}</span>
// //                 <button
// //                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                   className="px-4 py-2 bg-gray-200 text-sm rounded-full"
// //                 >
// //                   +
// //                 </button>
// //               </div>

// //               <div className="flex items-center">
// //                 <p className="mr-4">${item.price * item.quantity}</p>
// //                 <button
// //                   onClick={() => removeFromCart(item.id)}
// //                   className="text-red-500"
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-8 text-right">
// //           <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;
// 'use client';

// import React from 'react';
// import { useCart } from '@/contexts/CartContext';

// const CartPage = () => {
//   const { cart, removeFromCart, getTotal, getQuantity } = useCart();

//   if (cart.length === 0) {
//     return <p className="text-center text-xl font-semibold">Your cart is empty</p>;
//   }

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto">
//         <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
//         <div className="space-y-6">
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center justify-between p-4 border-b">
//               <div className="flex items-center space-x-4">
//                 <Image src={item.image} alt={item.name} width={80} height={80} />
//                 <div>
//                   <p className="font-semibold">{item.name}</p>
//                   <p>{`$${item.price} x ${item.quantity}`}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6">
//           <p className="text-lg font-semibold">Total: ${getTotal()}</p>
//           <p className="text-lg">Items: {getQuantity()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;




















// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

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

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // Load cart items from localStorage
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
    
//     // Check if there's a valid cart stored in localStorage
//     if (savedCart) {
//       try {
//         const parsedCart = JSON.parse(savedCart);
        
//         // Ensure parsedCart is an array and filter out null or undefined items
//         if (Array.isArray(parsedCart)) {
//           const validCartItems = parsedCart.filter((item: any) => item && item.price);  // Filter out invalid items
//           setCartItems(validCartItems);
//         } else {
//           console.error("Invalid cart data.");
//           setCartItems([]);
//         }
//       } catch (error) {
//         console.error("Error parsing cart data from localStorage:", error);
//         setCartItems([]);
//       }
//     }
//   }, []);

//   const handleRemoveFromCart = (productId: string) => {
//     const updatedCart = cartItems.filter(item => item._id !== productId);
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Make sure that cartItems are always valid before performing operations on them
//   const totalPrice = cartItems.reduce((total, item) => {
//     if (item && item.price) {
//       return total + item.price;
//     }
//     return total;
//   }, 0);

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto">
//         <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

//         {/* Display Cart Items */}
//         {cartItems.length === 0 ? (
//           <div className="text-center text-xl font-semibold text-gray-500">Your cart is empty.</div>
//         ) : (
//           <div>
//             {cartItems.map((item) => (
//               <div key={item._id} className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Image
//                     src={item.image}
//                     alt={item.productName}
//                     width={80}
//                     height={80}
//                     className="object-contain rounded-lg mr-6"
//                   />
//                   <div>
//                     <h2 className="text-xl font-semibold">{item.productName}</h2>
//                     <p className="text-lg text-gray-700">{`$${item.price}`}</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleRemoveFromCart(item._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Total Price */}
//         {cartItems.length > 0 && (
//           <div className="mt-6 text-right">
//             <p className="text-2xl font-semibold">Total: ${totalPrice}</p>
//           </div>
//         )}

//         {/* Continue Shopping and Checkout Button */}
//         <div className="mt-6 flex justify-between">
//           <Link href="/" className="text-blue-600 hover:text-blue-800">
//             Continue Shopping
//           </Link>
//           <button
//             className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
//             onClick={() => alert('Checkout functionality not implemented yet')}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;














'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Updated Product interface with quantity field
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

// Extend the Product interface to include quantity
interface CartItem extends Product {
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          const validCartItems = parsedCart.filter((item: CartItem) => item && item._id && item.price && item.quantity);
          setCartItems(validCartItems);
        } else {
          console.error("Invalid cart data.");
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        setCartItems([]);
      }
    }
  }, []);

  // Remove item from cart
  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Update item quantity
  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = cartItems.map(item =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center sm:text-left">Shopping Cart</h1>

        {/* Display Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-500">Your cart is empty.</div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex flex-wrap items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.productName}</h2>
                    <p className="text-lg text-gray-700">{`$${item.price}`}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        onClick={() => handleUpdateQuantity(item._id, Math.max(item.quantity - 1, 1))}
                        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item._id, Math.min(item.quantity + 1, item.inventory))}
                        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveFromCart(item._id)}
                  className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Price */}
        {cartItems.length > 0 && (
          <div className="mt-6 text-right">
            <p className="text-2xl font-semibold">Total: ${totalPrice}</p>
          </div>
        )}

        {/* Continue Shopping and Checkout Button */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 sm:mb-0">
            Continue Shopping
          </Link>
          {cartItems.length > 0 && (
            <Link href="/checkout">
              <button
                className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
