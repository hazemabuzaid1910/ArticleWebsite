import React from 'react'
import { FaStar } from 'react-icons/fa'

function TopWriter({image}) {
  return (
        <div className='bg-white border-1 border-[#E9EAF0]'>
            <div className='relative'>
                
                <img src={image} alt="" className='w-full h-full'/>
            </div>
            <div className='flex flex-col gap-2 px-2 py-4 text-center'>
                <h1 className='text-[#1D2026] text-[16px]  font-[500]'>Devon Lane</h1>
               <p className='text-[#8C94A3] text-[14px]'>UI/UX Designer</p>
            <div className='flex justify-between  items-center gap-2 pb-5 pt-2  border-t-1 border-[#E9EAF0]'>
            <div className='flex items-center gap-2'>
                <FaStar color="#FD8E1F"/>
                <p className='text-[#7B7B7B] text-[12px]'>4.5</p>
            </div>
              <div className='flex items-center gap-2'>
                <span>5</span>
                <p className='text-[#7B7B7B] text-[12px]'>Article</p>
            </div>
               
     </div>
            </div>
        </div>
  )
}

export default TopWriter