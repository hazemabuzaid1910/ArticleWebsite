import React from 'react'
import { FiBarChart } from 'react-icons/fi'
import { FaClock } from 'react-icons/fa6'
import { PiChartPieSlice } from "react-icons/pi";

function OurOpprtunitiesCard({image,text1,color}) {
  return (
      <div className='flex gap-2 sm:flex-row flex-col  bg-white border border-[#E9EAF0] hover:shadow-xl duration-300'>
            <div className=''>
                <img src={image} alt="" className='w-full h-full'/>
            </div>
            <div className='flex flex-col w-full gap-2 p-2'>
              <div className='flex flex-row justify-between'>
              <span className={`${color} text-[#993D20] p-1 text-[12px] font-[600] w-fit`}>{text1}</span>
              <span>$300<span className='text-gray-400'>/Month</span></span>
              </div>
                <h1 className='text-[#1D2026] text-[18px] font-[500]'>System Analysis</h1>
                <p className='text-[#4E5566] text-[16px] font-[400]'>2 Years of experience</p>
           
            <div className='flex items-center justify-between py-2   border-t-1 border-[#E9EAF0]'>
              <div className='flex items-center gap-2'>
                   <PiChartPieSlice color='#FF6636'/>
                <p className='text-[#7B7B7B] text-[12px]'>Part Time</p>
              </div>
               <div className='flex items-center gap-2'>
                   <FiBarChart color='#FF6636'/>
                <p className='text-[#7B7B7B] text-[12px]'>Sinor</p>
              </div>
               <div className='flex items-center gap-2'>
                   <FaClock color='#FF6636'/>
                <p className='text-[#4E5566] text-[12px]'>Full Time</p>
              </div>
             
     </div>
            </div>
        </div>
  )
}

export default OurOpprtunitiesCard