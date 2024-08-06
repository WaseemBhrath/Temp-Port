import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [toggle,settoggle]= useState(false);
  return (
    <div className=' bg-[#2699fb] p-4' >
        <div className='max-w-[1170px] mt-3 items-center flex justify-between mx-auto'>
            <div className='text-3xl font-bold'>
              <h2>Waseem Abbas</h2>
            </div>
            {
              toggle?
              <ImCross onClick={()=>settoggle(!toggle)} className= 'text-2xl text-white md:hidden block' />
              :
              <AiOutlineMenu onClick={()=>settoggle(!toggle)}  className= 'text-2xl text-white md:hidden block'/>
            }
           
            
           
            
            <ul className='hidden md:flex gap-12 text-white font-bold  mr-4'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Resources</li>
            </ul>
            {/* Responsive Menu */}
            <ul className={` duration-500 md:hidden  bg-black top-[80px] w-[50%] fixed text-white font-bold  mr-4
              ${ toggle? 'left-[0%]': 'left-[-100%]'}
              `}>
              <li className='p-4'>Home</li>
              <li className='p-4'>About</li>
              <li className='p-4'>Contact</li>
              <li className='p-4'>Resources</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar