import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="flex items-center justify-between py-5 font-inter relative" aria-label="Main Navigation">
      {/* Logo */}
      <Link to='/' className="z-10 relative">
        <h1 className="font-playfair text-3xl font-bold tracking-wider text-gray-900">
          Artisana<span className="text-gray-500">.</span>
        </h1>
      </Link>

      {/* Desktop Links (with overlap/spacing techniques instead of generic center) */}
      <ul className="hidden sm:flex gap-10 text-sm font-medium z-10 absolute left-1/2 -translate-x-1/2 ml-4">
        {navLinks.map((link) => (
          <NavLink key={link.name} end={link.path === '/'} to={link.path} className="flex flex-col items-center gap-1 group" aria-label={link.name}>
             {({isActive}) => (
                <>
                  <p className={`uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>{link.name}</p>
                  <hr className={`w-1/2 border-none h-[1.5px] bg-gray-800 transition-all duration-300 transform ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100'}`} />
                </>
             )}
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6 z-10">
        <button aria-label="Search" className="transition-all duration-300 hover:scale-110">
            <img src={assets.search_icon} className="w-5 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300" alt="Search" />
        </button>

        <div className="group relative">
            <Link to='/login' aria-label="User Profile">
                <img className="w-5 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110" src={assets.profile_icon} alt="Profile" />
            </Link>
            {/* Dropdown Menu */}
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
                <div className="flex flex-col gap-3 w-40 py-4 px-5 bg-white/90 backdrop-blur-md text-gray-600 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300">
                    <p className="cursor-pointer font-medium hover:text-black transition-all duration-300">My Profile</p>
                    <p className="cursor-pointer font-medium hover:text-black transition-all duration-300">Orders</p>
                    <hr className="border-gray-200" />
                    <p className="cursor-pointer font-medium hover:text-red-500 transition-all duration-300">Logout</p>
                </div>
            </div>
        </div>

        <Link to='/cart' className="relative transition-all duration-300 hover:scale-110 group" aria-label="Shopping Cart">
            <img src={assets.cart_icon} className="w-5 min-w-5 opacity-80 group-hover:opacity-100 transition-all duration-300" alt="Cart" />
            <p className="absolute -right-[6px] -bottom-[6px] w-[18px] text-center leading-[18px] bg-black text-white rounded-full text-[9px] font-bold shadow-sm transition-all duration-300 group-hover:scale-110">8</p>
        </Link>

        {/* Mobile Menu Icon */}
        <button aria-label="Open Mobile Menu" onClick={() => setVisible(true)} className="sm:hidden transition-all duration-300 hover:scale-110 ml-2">
            <img src={assets.menu_icon} className="w-6 cursor-pointer opacity-80 hover:opacity-100" alt="Menu" />
        </button>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white/95 backdrop-blur-sm transition-all duration-500 z-50 shadow-2xl ${visible ? 'w-full' : 'w-0'}`}>
         <div className="flex flex-col text-gray-800 h-full p-6">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setVisible(false)} 
                aria-label="Close Menu"
                className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                  <img src={assets.cross_icon} className="h-4 transition-all duration-300" alt="Close" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-2xl font-playfair mt-10">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  end={link.path === '/'}
                  onClick={() => setVisible(false)} 
                  className={({isActive}) => `transition-all duration-300 hover:text-gray-400 hover:pl-2 ${isActive ? 'text-gray-400 pl-2' : ''}`} 
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
         </div>
      </div>
    </nav>
  )
}

export default Navbar;
