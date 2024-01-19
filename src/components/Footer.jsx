import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
  <footer className='bg-PrimaryColor text-ExtraDarkColor rounded-t-xl  mt-8 md:mt-0'>
  <div className=' flex flex-col md:flex-row justify-between p-8 md:px-32'>
    <div className=''>
    <h1 className=' font-semibold text-3xl pb-4'>Style Spot</h1>
    <div className='flex gap-5 ml-3'>
    <FaFacebookSquare size={32} className='hover:scale-110 transition duration-300 ease-in-out cursor-pointer'/>
    <FaInstagram size={32} className='hover:scale-110 transition duration-300 ease-in-out cursor-pointer' />
    <FaTwitter size={32} className='hover:scale-110 transition duration-300 ease-in-out cursor-pointer'/>
    </div>
    </div>
   <div>
    <h1 className='font-medium text-lg pb-4 pt-5 md:pt-0'>Shop</h1>
    <div className='flex flex-col gap-2'>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
            Products
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
            Overview
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
     Pricing
        </Link>
     
    </div>
   </div>
   <div>
    <h1 className='font-medium text-lg pb-4 pt-5 md:pt-0'>Company</h1>
    <div className='flex flex-col gap-2 '>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
          About Us
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
         Contact
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
         News
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
      Support
        </Link>
     
    </div>
   </div>
   <div>
    <h1 className='font-medium text-lg pb-4 pt-5 md:pt-0'>Contact Us</h1>
    <div className='flex flex-col gap-2'>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
           Kathmandu,Nepal
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
          fashion@style.com
        </Link>
        <Link to='/' spy={true} smooth={true} duration={500} className='hover:scale-105 cursor-pointer transition duration-300 ease-in-out'>
        9847698091
        </Link>
     
    </div>
   </div>
   
  </div>
  <div className='text-center py-5'>
    <p>@ copyright developed by <span className='text-black'>Sujata Shrestha</span> | All rights reserved</p>
   </div>
  </footer>
  )
}

export default Footer