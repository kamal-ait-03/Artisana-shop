import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full mt-10 mb-10'>
      {/* Hero Left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-0 bg-[#F5E9DA] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='text-[#414141]'>
               <div className='flex items-center gap-2'>
                  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                  <p className='font-medium text-sm md:text-base tracking-widest'>OUR BEST SELLERS </p>
               </div>
               <h1 className='font-playfair text-4xl sm:py-3 lg:text-6xl leading-relaxed'>Latest Arrivals</h1>
               <div className='flex items-center gap-2 group cursor-pointer w-fit mt-3 lg:mt-5'>
                  <p className='font-semibold text-sm md:text-base group-hover:text-black transition-all duration-300'>Shop Now</p>
                  <p className='w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all duration-300'></p>
               </div>
            </div>
      </div>
      {/* Hero Right side (Image restricted in height so it doesn't take too much space) */}
      <div className='w-full sm:w-1/2 overflow-hidden'>
          <img 
            className='w-full h-[500px] sm:h-[650px] lg:h-[750px] object-cover transition-transform duration-[3000ms] ease-in-out hover:scale-105' 
            src={assets.hero_img} 
            alt="Hero Latest Arrivals" 
          />
      </div>
    </div>
  )
}

export default Hero;
