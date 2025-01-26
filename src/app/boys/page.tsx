
"use client"
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'//+
import Image from 'next/image'
import dots from '../assets/dots.png'
import Link from 'next/link'

const ProductsList = () => {
  interface Idata {
    _id: string;
    productName: string;
    price: number;
    category: string;
    slug: string;
    status: string;
    description: string;
    image: string;  
    colors: string[];
  }

  // Specify correct types for the state
  const [products, setProducts] = useState<Idata[]>([])  // Products as an array of Idata
  const [searchQuer, setSearchQuer] = useState<string>('')  // searchQuer is a string
  const [filteredProduct, setFilteredProduct] = useState<Idata[]>([])  // Filtered products as an array of Idata

  // Fetch products from Sanity (client-side)
  useEffect(() => {
    const fetchProducts = async () => {
      const query = '*[_type == "boys"]{_id, productName, price, category, slug, status, description, "image": image.asset->url, colors}'
      const data = await client.fetch(query)
      setProducts(data)  // Assuming 'data' matches the Idata structure
    }

    fetchProducts()
  }, [])

  // Filter products based on search query
  useEffect(() => {
    if (searchQuer) {
      const filtered = products.filter((product) =>
        product.productName.toLowerCase().includes(searchQuer.toLowerCase())
      )
      setFilteredProduct(filtered)
    } else {
      setFilteredProduct(products)
    }
  }, [searchQuer, products])

  return (
    <div>
        <h1 className="text-2xl sm:text-1xl font-bold mt-[8px] text-center"> BOYS PRODUCTS</h1>
      <div className="flex justify-center items-center space-x-4 mt-4 px-5">
        {/* Input field for search - responsive design */}
        <input
          type="text"
          value={searchQuer}
          onChange={(e) => setSearchQuer(e.target.value)}
          placeholder="Search for a product..."
          className="w-full max-w-lg p-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        />
      
        {/* Button for search - responsive hover effects */}
        <p className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg px-3 py-2 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-pink-600">
          Search
        </p>
      </div>

      {/* Product List - responsive grid layout */}
      <div className='place-items-center'>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-10 sm:gap-8 gap-7 pt-[50px] px-4">
          {filteredProduct.map((p) => {
            return(
              <Link key={p._id} href={`/products/${p.slug}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Product Image */}
                  <div className="relative w-full h-62">
                    <Image 
                      src={p.image} 
                      alt={p.productName} 
                      width={200} 
                      height={200} 
                      style={{ objectFit: 'cover' }} 
                      className=" object-cover object-center" 
                    />
                  </div>
                  {/* Card Content */}
                  <div className="p-4">
                    <h1 className="text-lg font-semibold truncate">{p.productName}</h1>
                    <h2 className="text-lg text-red-600 truncate">{p.category}</h2>
                    <p className="text-gray-600 text-sm truncate">{p.status}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-2">Rs:{p.price}</h3>
                    {/* Optional dot icon */}
                    <div className="mt-2 flex justify-center">
                      <Image src={dots} alt="Icon" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductsList


