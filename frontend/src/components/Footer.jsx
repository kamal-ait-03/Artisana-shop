import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='w-full bg-[#F5E9DA] mt-20 py-16 px-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='flex flex-col sm:grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-14 text-base'>
        <div>
          <img src={assets.logo} className='mb-6 w-32 md:w-40' alt='logo'></img>
          <p className='w-full md:w-3/4 text-gray-600 leading-relaxed text-left'> 
            Artisana is your go-to destination for unique, handcrafted products that celebrate creativity and craftsmanship. We curate a diverse collection of artisanal goods, from home decor to fashion accessories, all made with love and care by skilled artisans around Morroco.
          </p>
        </div>
        
        <div>
          <p className='text-xl font-semibold mb-6 text-[#2B2B2B]'>Quick Links</p>
          <ul className='flex flex-col space-y-3 text-gray-600'>
            <li className='hover:text-[#C26E3D] cursor-pointer transition-all'>Home</li>
            <li className='hover:text-[#C26E3D] cursor-pointer transition-all'>Collection</li>
            <li className='hover:text-[#C26E3D] cursor-pointer transition-all'>About</li>
            <li className='hover:text-[#C26E3D] cursor-pointer transition-all'>Delivery</li>
            <li className='hover:text-[#C26E3D] cursor-pointer transition-all'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-semibold mb-6 text-[#2B2B2B]'>Get In Touch</p>
          <ul className='flex flex-col space-y-3 text-gray-600'>
            <li>+212-602588936</li>
            <li>contact@artisanashop.com</li>
          </ul>
        </div>
      </div>
      
      <div>
        <hr className='border-[#e0d3c2] mt-16 mb-6' />
        <p className='py-5 text-sm text-center text-gray-500'>Copyright 2026 @ Artisana.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
