import React from 'react'
import { FaCalendar, FaUser } from 'react-icons/fa'

function LatestArticlCard({ image,title, text1, color,author,created }) {
  return (
    <div className='bg-[var(--card-bg)] flex flex-col'>
      <div className='relative'>
        <div className='absolute flex items-center gap-3 bg-[#00000061] px-2 right-0 top-5'>
          <FaCalendar color='var(--orange-color)' />
          <span className='text-white'>{created}</span>
        </div>
        <div className='w-full aspect-[4/3]'>
          <img src={image} alt="" className='object-cover w-full h-full' />
        </div>
      </div>

      <div className='flex flex-col gap-2 px-2 py-4 h-[160px] justify-between'>
        <span className={`${color} text-[#993D20] p-1 text-[12px] font-[600] w-fit`}>
          {text1}
        </span>

        <h1 className='text-[var(--primary-color)] text-[12px] font-[500]'>
          {title}
        </h1>

        <div className='flex items-center gap-2 pt-2 border-t border-[#E9EAF0]'>
          <FaUser color='var(--orange-color)' />
          <p className='text-[var(--p-color)] text-[12px]'>{author}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestArticlCard
