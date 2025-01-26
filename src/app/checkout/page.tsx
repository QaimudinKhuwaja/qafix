// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// // Define CartItem type
// interface CartItem {
//   _id: string;
//   productName: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// const CheckoutPage = () => {
//   // State to store cart items, payment method and total price
//   const [cartItems, setCartItems] = useState<CartItem[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
//   const [paymentMethod, setPaymentMethod] = useState<string>('card'); // Default payment method: card
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Handle Place Order (mockup functionality)
//   const handlePlaceOrder = () => {
//     alert('Order placed successfully!');
//   };

//   // Handle item removal from cart
//   const handleRemoveItem = (itemId: string) => {
//     const updatedItems = cartItems.filter(item => item._id !== itemId);
//     setCartItems(updatedItems); // Update cartItems state
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Persist to localStorage
//   };

//   return (
//     <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto">
//         <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

//         {/* Display Cart Items */}
//         {cartItems.length === 0 ? (
//           <div className="text-center text-xl font-semibold text-gray-500">Your cart is empty.</div>
//         ) : (
//           <div>
//             {cartItems.map((item) => (
//               <div key={item._id} className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <Image src={item.image} alt={item.productName} width={80} height={80} className="object-contain rounded-lg mr-6" />
//                   <div>
//                     <h2 className="text-xl font-semibold">{item.productName}</h2>
//                     <p className="text-lg text-gray-700">{`$${item.price}`}</p>
//                     <p className="text-lg text-gray-700">Quantity: {item.quantity}</p>
//                   </div>
//                 </div>
//                 <button onClick={() => handleRemoveItem(item._id)} className="text-red-500 hover:text-red-700">
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

//         {/* Billing Information */}
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Billing Information</h2>
//           <div className="space-y-4 mt-4">
//             <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
//             <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
//             <input type="text" placeholder="Shipping Address" className="w-full px-4 py-2 border rounded-md" />
//           </div>
//         </div>

//         {/* Payment Method Selection */}
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold">Payment Method</h2>
//           <div className="space-y-4 mt-4">
//             {['card', 'cod', 'jazzcash', 'easypaisa'].map((method) => (
//               <label key={method} className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="paymentMethod"
//                   value={method}
//                   checked={paymentMethod === method}
//                   onChange={() => setPaymentMethod(method)}
//                   className="form-radio text-blue-600"
//                 />
//                 <span className="ml-2">{method === 'card' ? 'Credit/Debit Card' : method === 'cod' ? 'Cash on Delivery' : method === 'jazzcash' ? 'JazzCash' : 'Easypaisa'}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Payment Information (Conditionally Rendered) */}
//         {paymentMethod === 'card' && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">Credit Card Information</h2>
//             <div className="space-y-4 mt-4">
//               <input type="text" placeholder="Credit Card Number" className="w-full px-4 py-2 border rounded-md" />
//               <div className="flex gap-4">
//                 <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 border rounded-md" />
//                 <input type="text" placeholder="CVV" className="w-1/2 px-4 py-2 border rounded-md" />
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Conditional sections for other payment methods */}
//         {paymentMethod === 'cod' && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">Cash on Delivery</h2>
//             <p className="text-lg">You will pay for the order upon delivery.</p>
//           </div>
//         )}

//         {paymentMethod === 'jazzcash' && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">JazzCash Payment</h2>
//             <p className="text-lg">You can pay via JazzCash mobile wallet or through the JazzCash agent.</p>
//           </div>
//         )}

//         {paymentMethod === 'easypaisa' && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">Easypaisa Payment</h2>
//             <p className="text-lg">You can pay via Easypaisa mobile wallet or through the Easypaisa agent.</p>
//           </div>
//         )}

//         {/* Place Order Button */}
//         <div className="mt-6 text-center">
//           <button className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;















'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define CartItem type
interface CartItem {
  _id: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
}

const CheckoutPage = () => {
  // State to store cart items, payment method, and total price
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>('card'); // Default payment method: card

  // Fetch cart data from localStorage on component mount (only client-side)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    }
  }, []); // Empty dependency array ensures this runs only on mount

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Place Order (mockup functionality)
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  // Handle item removal from cart
  const handleRemoveItem = (itemId: string) => {
    const updatedItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedItems); // Update cartItems state
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Persist to localStorage
  };

  return (
    <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

        {/* Display Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-500">Your cart is empty.</div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.productName} width={80} height={80} className="object-contain rounded-lg mr-6" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.productName}</h2>
                    <p className="text-lg text-gray-700">{`Rs: ${item.price}`}</p>
                    <p className="text-lg text-gray-700">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => handleRemoveItem(item._id)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Price */}
        {cartItems.length > 0 && (
          <div className="mt-6 text-right">
            <p className="text-2xl font-semibold">Total: Rs: {totalPrice}</p>
          </div>
        )}

        {/* Billing Information */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Billing Information</h2>
          <div className="space-y-4 mt-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Shipping Address" className="w-full px-4 py-2 border rounded-md" />
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <div className="space-y-4 mt-4">
            {['card', 'cod', 'jazzcash', 'easypaisa'].map((method) => (
              <label key={method} className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">{method === 'card' ? 'Credit/Debit Card' : method === 'cod' ? 'Cash on Delivery' : method === 'jazzcash' ? 'JazzCash' : 'Easypaisa'}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Information (Conditionally Rendered) */}
        {paymentMethod === 'card' && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Credit Card Information</h2>
            <div className="space-y-4 mt-4">
              <input type="text" placeholder="Credit Card Number" className="w-full px-4 py-2 border rounded-md" />
              <div className="flex gap-4">
                <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 border rounded-md" />
                <input type="text" placeholder="CVV" className="w-1/2 px-4 py-2 border rounded-md" />
              </div>
            </div>
          </div>
        )}

        {/* Conditional sections for other payment methods */}
        {paymentMethod === 'cod' && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Cash on Delivery</h2>
            <p className="text-lg">You will pay for the order upon delivery.</p>
          </div>
        )}

        {paymentMethod === 'jazzcash' && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">JazzCash Payment</h2>
            <p className="text-lg">You can pay via JazzCash mobile wallet or through the JazzCash agent.</p>
          </div>
        )}

        {paymentMethod === 'easypaisa' && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Easypaisa Payment</h2>
            <p className="text-lg">You can pay via Easypaisa mobile wallet or through the Easypaisa agent.</p>
          </div>
        )}

        {/* Place Order Button */}
        <div className="mt-6 text-center">
          <button className="py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
