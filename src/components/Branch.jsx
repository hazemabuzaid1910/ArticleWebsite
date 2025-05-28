import React from 'react'

function Branch({image,text1,text2,text3}) {
  return (
        <div className='relative flex flex-col h-full'>
                    <img src={image} alt="" className='h-[20rem]'/>

            <div className=' absolute items-center text-center bg-[#FFFFFF] bottom-4  mx-5 p-4 gap-3'>
                <span className='text-[#FF6636] font-[500] text-[12px]'>{text1}</span>
                <h1 className='text-[#1D2026] text-[16px] font-[500]'>{text2}</h1>
                <p className='text-[#6E7485] font-[400] text-[14px]'>{text3}</p>
            </div>
        </div>
  )
}

export default Branch