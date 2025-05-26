import React from 'react'
import { assets } from '../assets/assets'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm pt-10'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-45' />
                <p className='w-full md:w-2/3 text-gray-600'>G.O.A.T is more than just a streetwear brand — it’s a tribute to legends. Our designs celebrate the icons who’ve shaped music, sports, art, and culture, blending bold aesthetics with a legacy mindset. Every piece is a wearable statement of greatness, crafted for those who don’t just follow trends — they create them.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    <li>Size Charts</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li className='flex items-center gap-2'><Phone className='w-4'/><span>+94 77 510 2585</span></li>
                    <li className='flex items-center gap-2'><Mail className='w-4'/>goatco.2024@gmail.com</li>
                    <li className='flex items-center gap-2'><MapPin className='w-4'/>Colombo, Sri Lanka</li>
                </ul>
                <ul className='flex gap-4 pt-8'>
                    <a href="https://www.instagram.com/_goatco?igsh=MWJzamRzeWU4ZjU5eA=="><Instagram className='w-5'/></a>
                    <a href="https://www.facebook.com/share/1Fb1g9GvHJ/?mibextid=wwXIfr"><Facebook className='w-5'/></a>
                </ul>
            </div>

        </div>
        <div>
            <hr className='border-gray-300'/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ goatco.com - All Right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer