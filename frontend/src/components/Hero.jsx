import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mt-10 rounded-xl overflow-hidden'>
      {/* Hero Left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-14 sm:py-0 bg-[#f8f8f8]'>
            <div className='text-[#414141]'>
               <div className='flex items-center gap-2'>
                  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                  <p className='font-medium text-sm md:text-base tracking-widest'>OUR BEST SELLERS </p>
               </div>
               <h1 className='font-playfair text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
               <div className='flex items-center gap-2 group cursor-pointer w-fit mt-2'>
                  <p className='font-semibold text-sm md:text-base group-hover:text-black transition-all duration-300'>Shop Now</p>
                  <p className='w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all duration-300'></p>
               </div>
            </div>
      </div>
      {/* Hero Right side (Image restricted in height so it doesn't take too much space) */}
      <div className='w-full sm:w-1/2'>
          <img 
            className='w-full h-[400px] sm:h-[500px] object-cover' 
            src={assets.hero_img} 
            alt="Hero Latest Arrivals" 
          />
      </div>
    </div>
  )
}

export default Hero;
