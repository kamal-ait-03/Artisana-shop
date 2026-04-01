import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  // Desktop nav style
  const navLinkClass = ({ isActive }) =>
    `relative flex flex-col items-center gap-1 transition-all duration-300 
    ${isActive ? 'text-[#1F5F4A]' : 'text-[#2B2B2B] hover:text-[#C26E3D]'}`

  // Mobile nav style
  const mobileNavClass = ({ isActive }) =>
    `py-3 pl-6 border-b border-[#e0d3c2] transition-all duration-300 
    ${isActive ? 'bg-[#1F5F4A] text-white' : 'text-[#2B2B2B] hover:bg-[#f0e2cf]'}`

  return (
    <div className='flex items-center justify-between py-5 px-4 font-medium bg-[#F5E9DA] text-[#2B2B2B] shadow-sm'>

      {/* Logo */}
      <img src={assets.logo} className='w-36' alt="logo" />

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-6 text-sm'>

        <NavLink to='/' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A227] transition-all duration-300 
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to='/collection' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A227] transition-all duration-300 
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to='/about' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A227] transition-all duration-300 
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to='/contact' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A227] transition-all duration-300 
                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </>
          )}
        </NavLink>

      </ul>

      {/* Right Side */}
      <div className='flex items-center gap-6'>

        {/* Search */}
        <img src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition' alt="" />

        {/* Profile Dropdown */}
        <div className='group relative'>
          <img className='w-5 cursor-pointer hover:scale-110 transition' src={assets.profile_icon} alt="" />
          
          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#F5E9DA] text-[#2B2B2B] rounded shadow-md border border-[#e0d3c2]'>
              <p className='cursor-pointer hover:text-[#1F5F4A]'>My Profile</p>
              <p className='cursor-pointer hover:text-[#1F5F4A]'>Orders</p>
              <p className='cursor-pointer hover:text-red-500'>Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-110 transition' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#1F5F4A] text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden hover:scale-110 transition'
          alt=""
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 bg-[#F5E9DA] transition-all duration-300 ${visible ? 'w-full' : 'w-0 overflow-hidden'}`}>

        <div className='flex flex-col'>

          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer border-b border-[#e0d3c2]'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p className='text-[#2B2B2B]'>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className={mobileNavClass} to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className={mobileNavClass} to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className={mobileNavClass} to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className={mobileNavClass} to='/contact'>CONTACT</NavLink>

        </div>
      </div>

    </div>
  )
}

export default Navbar