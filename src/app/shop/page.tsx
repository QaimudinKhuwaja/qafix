import Image from 'next/image';
import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";
import shop4 from "../assets/shop4.png";
import shop5 from "../assets/shop5.png";
import hooli from '../assets/hooli.png'; 
import lyft from '../assets/lyft.png';
import brand3 from '../assets/brand3.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import brand6 from '../assets/brand6.png';
import dots from '../assets/dots.png';
import ourat from '../assets/ourat.png';
import boyy from '../assets/boyy.png';
import girll from '../assets/girll.png';
import girlll from '../assets/girlll.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import product9 from '../assets/product9.png';
import product10 from '../assets/product10.png';
import product11 from '../assets/product11.png';
import product12 from '../assets/product12.png';

const ShopPage = () => {
  return (
    <>
   
    <div className="p-4 place-items-center">
      {/* Left Side Heading */}
      <div className="mb-8">
        <h1 className="text-black text-3xl font-bold">Shop</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 justify-center">
        
        {/* Card 1 */}
        <div className="relative w-[205px] h-[223px]">
          <Image
            src={shop1}
            alt="Card 1"
            layout="intrinsic"
            width={205}
            height={223}
            className="rounded-md"
          />
        </div>
        
        {/* Card 2 */}
        <div className="relative w-[205px] h-[223px]">
          <Image
            src={shop2}
            alt="Card 2"
            layout="intrinsic"
            width={205}
            height={223}
            className="rounded-md"
          />
        </div>

        {/* Card 3 */}
        <div className="relative w-[205px] h-[223px]">
          <Image
            src={shop3}
            alt="Card 3"
            layout="intrinsic"
            width={205}
            height={223}
            className="rounded-md"
          />
        </div>

        {/* Card 4 */}
        <div className="relative w-[205px] h-[223px]">
          <Image
            src={shop4}
            alt="Card 4"
            layout="intrinsic"
            width={205}
            height={223}
            className="rounded-md"
          />
        </div>

        {/* Card 5 */}
        <div className="relative w-[205px] h-[223px]">
          <Image
            src={shop5}
            alt="Card 5"
            layout="intrinsic"
            width={205}
            height={223}
            className="rounded-md"
          />
        </div>

      </div>
    </div>


      {/* 2nd section starts */}



   

      <div className="p-4">
  {/* Heading and Views Section */}
  <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
    <h2 className="text-black text-lg font-semibold">Showing all 12 results</h2>
    
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0 mt-4 sm:mt-0">
      <span className="text-black">Views</span>
      <div className="flex space-x-5"> {/* Increased space between icons */}
        {/* Icon 1 */}
        <div className="relative w-[30px] h-[30px]">
          <Image src={icon1} alt="Icon 1" fill style={{ objectFit: 'cover' }} className="rounded-md" />
        </div>
        {/* Icon 2 */}
        <div className="relative w-[30px] h-[30px]">
          <Image src={icon2} alt="Icon 2" fill style={{ objectFit: 'cover' }} className="rounded-md" />
        </div>
      </div>
    </div>

    {/* Input and Button Section */}
    <div className="flex items-center space-x-2 mt-4 sm:mt-0">
      <input
        type="text"
        placeholder="Search"
        className="w-[141px] h-[50px] border border-gray-300 rounded-md p-2"
      />
      <button className="w-[94px] h-[50px] bg-blue-500 text-white rounded-md">
        Filter
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className='place-items-center'>
 <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[50px] mt-[70px] ml-[20px] ">
    {/* Image 1 */}
    <div className="relative w-[130px] h-[40px] mt-[50px] pl-[10px]">
      <Image src={hooli} alt="Hooli" fill style={{ objectFit: 'cover' }} className="rounded-md" />
    </div>

    {/* Image 2 */}
    <div className="relative w-[90px] h-[60px] mt-[40px]">
      <Image src={lyft} alt="Lyft" fill style={{ objectFit: 'cover' }} className="rounded-md" />
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

 



 {/* products list*/}


 <div className="text-center mt-10">
              <h2 className='text-[#737373] text-xl'>Featured Products</h2>
          <h1 className="text-2xl sm:text-1xl font-bold mt-[8px]"> BESTSELLER PRODUCTS</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
          Problems trying to resolve the conflict between 
             </p>
          </div>

    

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mt-[50px]'>
    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={ourat} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 
      






    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={boyy} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 
 








    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={girll} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 








    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={girlll} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 









    

    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product5} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 









    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product6} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 









    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product7} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 










    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product8} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 









    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product9} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 
      









    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product10} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 













    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product11} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 









         
    <div className="max-w-[200px] h-[420px] bg-white ">
      {/* Product Image */}
      <div className="w-full h-[160px] relative">
        <Image
          src={product12} // Product Image
          alt="Product"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          className='h-[270px]'
        />
      </div>

      {/* Card Content */}
      <div className="p-[20px] mt-[100px]">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Graphic Design</h3>
        <h2 className="text-sm text-gray-600 mt-1">English Department</h2>
        <div className="flex items-center mt-3">
          <p className="text-xl text-[#BDBDBD]">$16.48</p>
          <p className="text-xl text-[#23856D] ml-2 ">$6.48</p>
        </div>
        <div className="mt-2 flex justify-center mr-[32px]">
          <Image
            src={dots} // Icon Image
            alt="Icon"
            width={0}
            height={0}
            className='w-[90px] h-[20px]'
          />
        </div>
      </div>
    </div> 





                       </div>





    </>
  );
};

export default ShopPage;







