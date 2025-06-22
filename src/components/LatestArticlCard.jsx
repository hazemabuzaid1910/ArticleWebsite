import React from 'react'
import { FaCalendar, FaUser } from 'react-icons/fa'
function LatestArticlCard({image,text1,color}) {
  return (
    <div className='bg-[var(--card-bg)]'>
        <div className='relative'>
            <div className='absolute flex items-center gap-3 bg-[#00000061] px-2 right-0 top-5'>
                <FaCalendar color='var(--orange-color)'/>
                <span className='text-white'>5  Aug, 2025</span>
            </div>
            <div className='w-full aspect-[4/3]'>
                            <img src={image} alt="" className='object-cover w-full h-full'/>

            </div>
        </div>
        <div className='flex flex-col gap-2 px-2 py-4 '>
            <span className={`${color} text-[#993D20] p-1 text-[12px] font-[600] w-fit`}>{text1}</span>
            <h1 className='text-[var(--primary-color)] text-[12px] font-[500]'>2021 Complete Python Bootcamp From Zero to Hero...</h1>
       
        <div className='flex  items-center gap-2  pt-2  border-t-1 border-[#E9EAF0]'>
            <FaUser color='var(--orange-color)'/>
            <p className='text-[var(--p-color)] text-[12px]'>Mohammad Issa</p>
 </div>
        </div>
    </div>
  )
}

export default LatestArticlCard