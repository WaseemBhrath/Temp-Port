import React from 'react'

export default function Cart() {
  return (
    <div className='w-full py-[100px]'>
        <div className='max-w-[1170px] mx-auto md:grid grid-cols-3 gap-[24px]'>
            <div className=' h-[400px] shadow-2xl hover:scale-105 duration-500 mx-2'>
                <h2 className='text-3xl font-bold text-black my-[30px]'>Mern Stack</h2>
                <p className='text-xl mt-5 text-emerald-900 space-x-2 '>
                As a MERN stack developer, I specialize in building dynamic, full-stack web applications using MongoDB, Express.js, React, and Node.js, delivering seamless and efficient user experiences.</p>
                <button className=" p-[15px]  w-[40%]  bg-green-800 text-white mt-[46px] rounded">Show More</button>
            </div>
            <div className=' h-[400px] shadow-2xl bg-gray-100 hover:scale-105 duration-500 mx-2 my-2'>
            <h2 className='text-3xl font-bold text-black my-[30px]'>GraphQL</h2>
                <p className='text-xl mt-5 text-emerald-900 space-x-2 '>
                Proficiency in building and consuming GraphQL APIs. This modern query language for APIs allows clients to request only the data they need, making your applications more efficient.</p>
                <button className=" p-[15px]  w-[40%] bg-black text-green-500 mt-[35px] rounded">Show More</button>
            </div>
            <div className=' h-[400px] shadow-2xl hover:scale-105 duration-500 mx-2'>
            <h2 className='text-3xl font-bold text-black my-[30px]'>Docker</h2>
                <p className='text-xl mt-1 text-emerald-900 space-x-2 '>
                Experience in containerizing applications using Docker. This skill demonstrates your ability to create consistent development  ensuring your MERN stack applications are easily deployable and scalable.</p>
                <button className=" p-[15px]  w-[40%] bg-green-800 text-white mt-[13px] rounded">Show More</button>
            </div>
        </div>
    </div>
  )
}
