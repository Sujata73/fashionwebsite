import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaShoppingCart, FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useAppSelector } from '../redux/hooks';

const Navbar = ({setShowCart}) => {
    const[menu,setMenu]=useState(false)
    const handleChange= () => {
        setMenu(!menu)
    }
  const cartCount = useAppSelector((state)=>state.cartReducer.length)
  return (
    <div className='fixed w-full z-10'>
        <div className='flex  flex-row justify-between lg:px-32 px-5 bg-PrimaryColor shadow-md p-5'>
         <div>
            <Link to='home' spy={true} smooth={true} duration="5000">
            <h1 className='text-2xl font-semibold text-ExtraDarkColor cursor-pointer '>Style Spot</h1>
            </Link>
          
         </div>
          <nav className=' hidden  lg:flex items-center gap-8 font-semibold text-ExtraDarkColor '>
            <Link to="home" spy={true} smooth={true} duration="5000" className='hover:text-black cursor-pointer transition duration- 300 ease-in-out '>Home</Link>
            <Link to="shop" spy={true} smooth={true} duration="500"className='hover:text-black cursor-pointer transition duration- 300 ease-in-out'>Shop</Link>
            <Link to="features" spy={true} smooth={true} duration="500"className='hover:text-black cursor-pointer transition duration- 300 ease-in-out'>Features</Link>
            <Link to="products" spy={true} smooth={true} duration="500"className='hover:text-black cursor-pointer transition duration- 300 ease-in-out'>Products</Link>
            <Link to="review" spy={true} smooth={true} duration="500" className='hover:text-black cursor-pointer transition duration- 300 ease-in-out'>Review</Link>
          </nav>
          <div className='flex lg:gap-2  gap-10 items-center'>
            <FaUser size={25} className='text-DarkColor'/>
           <div className='text-DarkColor relative'>
           <FaShoppingCart size={25} onClick={()=>setShowCart(true)}/>
           <div className='absolute bottom-5 left-4 bg-red-500 rounded-full text-white text-sm text-center w-5 h-5'>{cartCount}</div>
           </div>
           <div className='lg:hidden  flex'>
           {menu?(<AiOutlineClose onClick={handleChange} className='z-10 '/> ):(< RxHamburgerMenu onClick={handleChange}/>)}
           </div>
           <div className={`${menu?"bg-SecondaryColor w-full absolute left-0 top-16 h-96 flex items-center justify-center transition duration-300 ease-in-out ":" absolute left-[-100%]"}`}>
            <nav className='flex flex-col gap-10  '>
            <Link to="home" spy={true} smooth={true} duration="5000" className='hover:text-white cursor-pointer transition duration- 300 ease-in-out  text-black'>Home</Link>
            <Link to="shop" spy={true} smooth={true} duration="500"className='hover:text-white cursor-pointer transition duration- 300 ease-in-out text-black'>Shop</Link>
            <Link to="features" spy={true} smooth={true} duration="500"className='hover:text-white cursor-pointer transition duration- 300 ease-in-out text-black'>Features</Link>
            <Link to="products" spy={true} smooth={true} duration="500"className='hover:text-white cursor-pointer transition duration- 300 ease-in-out text-black'>Products</Link>
            <Link to="review" spy={true} smooth={true} duration="500" className='hover:text-white cursor-pointer transition duration- 300 ease-in-out text-black' >Review</Link>
            </nav>
           </div>
          </div>
          
            </div>
          
        </div>

  )
}

export default Navbar