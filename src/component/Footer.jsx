import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin,FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-full bg-[#2699fb] py-[50px]'>
        <div className='max-w-[1170px] mx-auto grid grid-cols-5'>
            <div className='col-span-2'>
                <h1 className='font-bold  text-start text-[35px] my-[20px]'>Waseem Abbas</h1>
                <p className='text-start'>
                The MERN stack combines MongoDB, Express.js, React, and Node.js to create dynamic web applications. MongoDB handles database management, Express.js serves as a backend framework, React builds interactive UIs, and Node.js executes server-side code, all using JavaScript for seamless development.</p>
                <div className=' flex gap-[70px] text-white text-[35px] my-[30px]'>
                <FaFacebookF />
                <FaLinkedin/>
                <FaGithub/>
                </div>
            </div>
            <div> 
                <ul>
                    <li className='font-bold '>Skills</li>
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>Mangodb</li>
                </ul>
            </div>
            <div>
               <ul>
                    <li className='font-bold '>Skills</li>
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>Mangodb</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='font-bold '>Skills</li>
                    <li>HTML</li>
                    <li>Tailwind</li>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>Mangodb</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
