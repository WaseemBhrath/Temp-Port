import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin,FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-full bg-[#2699fb] py-[50px]'>
        <div className='max-w-[1170px] mx-auto  md:grid grid-cols-5'>
            <div className='col-span-2 text-center'>
                <h1 className='font-bold  md:text-start text-[35px] mb-[40px]'>Waseem Abbas</h1>
                <p className='md:text-start text-white'>
                The MERN stack combines MongoDB, Express.js, React, and Node.js to create dynamic web applications. MongoDB handles database management, Express.js serves as a backend framework, React builds interactive UIs, and Node.js executes server-side code, all using JavaScript for seamless development.</p>
                <div className=' flex gap-[70px] text-white text-[35px] my-[30px]'>
                <FaFacebookF />
                <FaLinkedin/>
                <FaGithub/>
                </div>
            </div>
            <div> 
                <ul>
                    <li className='font-bold text-[20px] '>Skills</li>
                    <li className='text-white py-2 mt-5'>HTML</li>
                    <li className='text-white py-2'>Tailwind</li>
                    <li className='text-white py-2'>Javascript</li>
                    <li className='text-white py-2'>React Js</li>
                    <li className='text-white py-2'>Node Js</li>
                    <li className='text-white py-2'>Express Js</li>
                    <li className='text-white py-2'>Mangodb</li>
                </ul>
            </div>
            <div>
               <ul>
                    <li className='font-bold text-[20px]'>Support</li>
                    <li className='text-white py-6 mt-5'>Documention</li>
                    <li className='text-white py-6'>Pricing</li>
                    <li className='text-white py-6'>Guides</li>
                    <li className='text-white py-6'>API Status</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold text-[20px]'>Contacts</li>
                    <li className='text-white py-6 mt-5'>Emain:</li>
                    <li className='text-white py-6'>Waseembhrath514@gmail.com</li>
                    <li className='text-white py-6'>Phone:</li>
                    <li className='text-white py-6'>+923450695007</li>
                </ul>
            </div>
        </div>
        <hr className='text-gray-500'/>
        <p> @Copyright Agency and contributors 2024.</p>
    </div>
  )
}
