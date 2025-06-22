import React from 'react'

function Branch({image,text1,text2,text3}) {
  return (
        <div className='relative flex flex-col h-full'>
          <div>
                    <img src={image} alt="" className='h-[20rem]'/>
         </div>
             <div className='absolute left-0 right-0 justify-center bottom-4'>
    <div className='bg-[#FFFFFF]  py-2  items-center text-center mx-5 '>
      <span className='text-[#FF6636] font-[500] text-[12px]'>{text1}</span>
      <h1 className='text-[#1D2026] text-[16px] font-[500]'>{text2}</h1>
      <p className='text-[#6E7485] font-[400] text-[14px]'>{text3}</p>
    </div>
  </div>
        </div>
  )
}

export default Branch