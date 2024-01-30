import React from 'react'
import { Link } from 'react-router-dom'
import { GiOwl } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-2 p-3'>
        <div> <GiOwl className='text-3xl'/> </div>
        <div className='flex gap-x-6'>
            <Link to="/" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</Link>
            <Link to="/contact" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</Link>
            <button> <BsBagFill /> </button>
        </div>
    </div>
  )
}
