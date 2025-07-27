import React from 'react'
import { FaStar } from 'react-icons/fa'

function Comment({text1,name,rating,image}) {
  return (
    <div className='flex flex-col gap-4'>
    <div className='bg-[var(--secondary-color)] p-5 w-full flex flex-col gap-5'>
        <div>
                  <img src="/double_quotes_r 1.png" alt="" className='top-0 left-0'/>

        </div>
   <div className="relative h-[120px] overflow-y-auto scroll-hide">
 
  <p
    className="text-center text-[var(--primary-color)] pr-2 "
    dangerouslySetInnerHTML={{ __html: text1 }}
  ></p>
     <div className=" bottom-0 sticky left-0 w-full h-6 bg-gradient-to-t from-[var(--secondary-color)] to-transparent  flex justify-center items-end">
  </div>
</div>
   
     <div className='flex justify-end w-full'>
              <img src="/double_quotes_r 2.png" alt="" className=' botttom-0'/>

     </div>
  
    </div>
    <div className='flex flex-row items-center justify-between px-5'>
       <div className='flex flex-row items-center gap-2'>
        <div className='w-10 h-10 overflow-hidden rounded-full'>
           <img   
         src={`https://tamkeen-dev.com/${image}`}
         alt="image" className='object-cover w-full h-full'/>
        </div>
        <h1 className='font-[600] text-[16px] text-[var(--primary-color)]'>{name}</h1>
     </div>
     <div className='flex items-center gap-2'>
      <span>{rating}</span>
      <FaStar color='#f7f31e'/>
     </div>
     </div>
     </div>
  )
}

export default Comment