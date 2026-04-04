import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sx sm:text-sm md:text-base text-gray-700">

      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
        <p className="font-semibold">Free Shipping</p>
        <p className="text-sm text-gray-500">On all orders over $100</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
        <p className="font-semibold">Easy Returns</p>
        <p className="text-sm text-gray-500">7 days return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
        <p className="font-semibold">24/7 Support</p>
        <p className="text-sm text-gray-500">Get help anytime</p>
      </div>

    </div>
  )
}

export default OurPolicy