import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { Search, UserRound, ShoppingCart, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='flex justify-between items-center py-5 font-medium px-4 sm:px-6 lg:px-8'>
      {/* Logo */}
      <Link to='/'>
        <img 
          src={assets.logo} 
          alt="logo"
          className='w-28 sm:w-36 md:w-40' 
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink 
          to='/' 
          className='flex flex-col items-center gap-1'
        >
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink 
          to='/products' 
          className='flex flex-col items-center gap-1' 
        >
          <p>Products</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink 
          to='/collections' 
          className='flex flex-col items-center gap-1'
        >
          <p>Collections</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink 
          to='/contact' 
          className='flex flex-col items-center gap-1'
        >
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      {/* Mobile Menu Button */}
      <div className='sm:hidden flex items-center gap-4'>
        <Link to='/cart' className='relative'>
          <ShoppingCart className='cursor-pointer text-gray-700'/>
          <div className='absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
            0
          </div>
        </Link>
        <button onClick={toggleMenu} className='text-gray-700'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Icons */}
      <div className='hidden sm:flex items-center gap-6'>
        <Search className='cursor-pointer text-gray-700'/>
        <div className='group relative'>
          <UserRound className='cursor-pointer text-gray-700'/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-sm'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <ShoppingCart className='cursor-pointer text-gray-700'/>
          <div className='absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
            0
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='sm:hidden absolute top-20 left-0 right-0 bg-white z-50 shadow-lg py-4 px-6'>
          <ul className='flex flex-col gap-4 text-gray-700'>
            <NavLink 
              to='/' 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `py-2 ${isActive ? 'text-black font-semibold' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to='/collection' 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `py-2 ${isActive ? 'text-black font-semibold' : ''}`
              }
            >
              Collection
            </NavLink>
            <NavLink 
              to='/about' 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `py-2 ${isActive ? 'text-black font-semibold' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to='/contact' 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `py-2 ${isActive ? 'text-black font-semibold' : ''}`
              }
            >
              Contact
            </NavLink>
          </ul>
          
          <div className='mt-4 pt-4 border-t border-gray-200'>
            <div className='flex flex-col gap-3 text-gray-500'>
              <p className='cursor-pointer hover:text-black flex items-center gap-2'>
                <UserRound size={18} /> My Profile
              </p>
              <p className='cursor-pointer hover:text-black flex items-center gap-2'>
                <Search size={18} /> Search
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar