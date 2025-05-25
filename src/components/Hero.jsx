import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-gradient-to-br from-gray-50 to-gray-100'>
        {/* Hero Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-8 sm:px-16'>
            <div className='text-[#1a1a1a] max-w-md'>
                <div className='flex items-center gap-3 mb-4'>
                    <div className='w-12 h-[2px] bg-[#1a1a1a]'></div>
                    <p className='font-medium text-sm tracking-widest text-gray-600'>OUR BEST SELLER</p>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6'>
                    Latest <span className='font-medium'>Arrivals</span>
                </h1>
                <p className='text-gray-600 mb-8 leading-relaxed'>
                    Discover our curated collection of premium products designed for modern living.
                </p>
                <button className='px-8 py-3 bg-[#1a1a1a] text-white hover:bg-opacity-90 transition-all duration-300 text-sm tracking-wider'>
                    SHOP NOW
                </button>
            </div>
        </div>
        
        {/* Hero Right */}
        <div className='w-full sm:w-1/2 relative overflow-hidden'>
            <img 
                src={assets.hero} 
                alt="Latest arrivals" 
                className='w-full h-full object-cover object-center transition-all duration-500 hover:scale-105' 
            />
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-100 opacity-20'></div>
        </div>
    </div>
  )
}

export default Hero