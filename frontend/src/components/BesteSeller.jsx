import React,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';


const BesteSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((item) => item.isBestSeller || item.bestseller);
      setBestSellers(bestProducts.slice(0, 5));
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
         {/* <Title text1={'BEST'} text2={'SELLERS'} /> */}
         <div className="inline-flex items-center gap-2 mb-3">
            <p className="text-gray-500">BEST <span className="text-gray-700 font-medium">SELLERS</span></p>
            <p className="w-8 md:w-12 h-[1px] md:h-[2px] bg-gray-700"></p>
         </div>
         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our most popular products, loved by our customers.</p>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
         
      </div>
    </div>
  )
}

export default BesteSeller
