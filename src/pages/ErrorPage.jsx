import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
        
         <div className='flex items-center sm:gap-20 gap-5 sm:flex-row flex-col sm:px-[14rem] px-5 py-5  w-full justify-between'>
                    <div className='order-2 w-full sm:order-1 '>
                    <div className='flex flex-col justify-center gap-10 '>
                        <div className=''>    
                      <h1 className='sm:text-[80px] text-[70px] text-[#E9EAF0] p-0 m-0 leading-none font-[600]'>Error 404</h1>
                      <h1 className='text-[var(--primary-color)] sm:text-[48px] text-[30px] font-[600] p-0 m-0 leading-none'>Oops! page not found</h1>
                     </div>
                      <p className='sm:text-[20px] text-[18px] text-[var(--p-color)]'>Something went wrong. It’s look that your requested could not be found. It's look like the link is broken or the page is removed. </p>
                <Link
            to="#"
            className="bg-[var(--orange-color)] text-white px-8 py-2 w-fit flex gap-2 items-center"
          >
            <span>Back</span>
          </Link>                    </div>
                    </div>
                    <div className='order-1 w-full h-full sm:order-2'>
                         <img src="/eroor.png" alt="" />
                    </div>
                   
                </div>
    </div>
  )
}

export default ErrorPage