import React from 'react'

function Comment({text1,name,desc,comp}) {
  return (
    <div className='flex flex-col gap-4'>
    <div className='bg-[var(--secondary-color)] p-5 w-full flex flex-col gap-5'>
        <div>
                  <img src="/double_quotes_r 1.png" alt="" className='top-0 left-0'/>

        </div>
      <p className='text-center text-[var(--primary-color)]'>{text1}</p>
     <div className='flex justify-end w-full'>
              <img src="/double_quotes_r 2.png" alt="" className=' botttom-0'/>

     </div>
  
    </div>
       <div className='flex flex-col items-center gap-4'>
        <h1 className='font-[600] text-[16px] text-[var(--primary-color)]'>{name}</h1>
        <p className='text-[var(--p-color)]'>{desc} <span className='text-[#564FFD]'>{comp}</span></p>
     </div></div>
  )
}

export default Comment