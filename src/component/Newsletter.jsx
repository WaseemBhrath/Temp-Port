import React from 'react'

function Newsletter() {
  return (
    <div className='w-full bg-[#2699fb]'>
        <div className=' max-w-[1170px] md:flex justify-between mx-auto py-[50px] md:py-[80px]'>
            <div className=' md:w-[50%]  '>
                <h1 className='font-bold text-[25px] md:text-[35px] text-white'>Want to Hire me?</h1>
                <span className='text-white'>Enter your Email and notify me For Connection</span>
            </div>
            <div className=' md:w-[45%] '>
                <input className='p-[10px] mx-2 rounded' type="text" placeholder='Email' />
                <button className="p-[10px] md:p-[10px] bg-black text-white  rounded"> Notify Me</button>
                <br />
                <p className='text-white text-start my-[20px] ml-5 md:my-[10px]'>Striving for excellence in every project and Your success is my mission. And  also i'll achknowladge you <a className='text-black' href="#">Terms and Policy</a> </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter