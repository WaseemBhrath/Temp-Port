import React from 'react'
import { ReactTyped} from 'react-typed';

 function Banner() {
  return (
    <div className='w-full bg-[#2699fb] py-[100px]'>
        <div className='text-xl md:text-3xl font-bold'>
            <p>Shorted Introduction</p>
        </div>
        <h2 className=' text-[40px] md:text-[80px] text-bold text-white'>Software Engineer</h2>
        <div className='text-[40px] md:text-[55px] text-white'>
            Developer  
            <ReactTyped
                 className='pl-3'
                    strings={['Front-End','Back-End,Mern Stack']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
            />
        </div>
        <button className='p-[10px] md:p-[20px] bg-black text-white mt-[35px] rounded'> Visit Website</button>
    </div>
  )
}

export default Banner