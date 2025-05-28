import React from 'react'
import qout1 from '../assets/double_quotes_r 1.png'
import qout2 from '../assets//double_quotes_r 2.png'

function Comment({text1,name,desc,comp}) {
  return (
    <div className='flex flex-col gap-4'>
    <div className='bg-[#F5F7FA] p-5 w-full flex flex-col gap-5'>
        <div>
                  <img src={qout1} alt="" className='top-0 left-0'/>

        </div>
      <p className='text-center'>{text1}</p>
     <div className='flex justify-end w-full'>
              <img src={qout2} alt="" className=' botttom-0'/>

     </div>
  
    </div>
       <div className='flex flex-col items-center gap-4'>
        <h1 className='font-[600] text-[16px]'>{name}</h1>
        <p className='text-[#6E7485]'>{desc} <span className='text-[#564FFD]'>{comp}</span></p>
     </div></div>
  )
}

export default Comment