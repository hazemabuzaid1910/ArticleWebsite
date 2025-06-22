import React from 'react'
import { FiBarChart } from 'react-icons/fi'
import { FaClock } from 'react-icons/fa6'
import { PiChartPieSlice } from "react-icons/pi";

function OurOpprtunitiesCard({image,text1,color}) {
  return (
      <div className='flex  sm:flex-row flex-col w-full justify-between bg-[var(--card-bg)] border border-[var(--secondary-color)] hover:shadow-xl duration-300'>
           <div className='relative sm:w-[35%] aspect-[4/3]'> 
           <img src={image} alt="" className='object-cover w-full h-full' />
          </div>
            <div className='flex flex-col sm:w-[65%] gap-2 p-2'>
              <div className='flex flex-row justify-between'>
              <span className={`${color} text-[#993D20] p-1 text-[12px] font-[600] w-fit`}>{text1}</span>
              <span className='text-[var(--primary-color)]'>$300<span className='text-gray-400'>/Month</span></span>
              </div>
                <h1 className='text-[var(--primary-color)] text-[18px] font-[500]'>System Analysis</h1>
                <p className='text-[var(--p-color)] text-[16px] font-[400]'>2 Years of experience</p>
           
            <div className='flex items-center justify-between py-2   border-t-1 border-[#E9EAF0]'>
              <div className='flex items-center gap-2'>
                   <PiChartPieSlice color='#FF6636'/>
                <p className='text-[var(--p-color)] text-[12px]'>Part Time</p>
              </div>
               <div className='flex items-center gap-2'>
                   <FiBarChart color='#FF6636'/>
                <p className='text-[var(--p-color)] text-[12px]'>Sinor</p>
              </div>
               <div className='flex items-center gap-2'>
                   <FaClock color='#FF6636'/>
                <p className='text-[var(--p-color)] text-[12px]'>Full Time</p>
              </div>
             
     </div>
            </div>
        </div>
  )
}

export default OurOpprtunitiesCard