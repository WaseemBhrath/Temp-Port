import React from 'react'
import laptop from '../assets/laptop.avif'; // Correct path example


export default function Expert() {
  return (
    <div className='max-w-[1170px] mt-7 mx-auto p-2  md:grid md:grid-cols-2'>
        <div className='  col-span-1 md:w-[90%] items-center'>
          <img className='rounded' src={laptop} alt="" />
        </div>
        <div className='  col-span-1 flex flex-col justify-center  left-[0px]'>
          <h1 className='font-bold text-[#00df9a] text-[20px] md:text-[30px] text-left mt-[25px] md:mt-[5px]'>Professional In Following Skills</h1>
          <p className='text-left my-5'>Have a 3 years Experience in Mern Stack(React js,Node Js Express, Mangodb) In the Field of Web dev build many projects with Front and Back end. If you want to explore more then click on below button </p>
          <button className=" p-[15px]  w-[40%] bg-black text-white mt-[16px] rounded">
        Show More
      </button>
        </div>
    </div>
  )
}
