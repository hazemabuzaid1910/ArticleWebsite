import React from 'react'
import Business from '../assets/Busniess.svg'
function Category({image,text1,text2,bgcolor ,css}) {
  return (
    <div className='duration-400 hover:shadow-xl hover:scale-105 transation '>
        <div className={`flex sm:items-start flex-col gap-5 sm:p-5 py-5  ${bgcolor} ${css}`}>
          <div>
            <img src={image} alt="" className="sm:w-12 sm:h-12"/>
          </div>
          <div className='text-center sm:text-start'>
            <h1 className='sm:text-[14px]  text-[14px] font-[500] text-[#1D2026]'>{text1}</h1>
            <p className='text-[#6E7485] text-[12px]'>{text2}</p>
          </div>
        </div>
    </div>
  )
}

export default Category