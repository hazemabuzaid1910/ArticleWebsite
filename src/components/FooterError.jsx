import React from 'react'
import { Link } from 'react-router-dom'
function FooterError() {
  return (
    <div className='sm:px-[12rem] flex sm:flex-row justify-between items-center py-4 flex-col  sm:bg-white bg-[#1D2026] '>
        <div className='flex flex-col order-2 py-5 sm:order-1 sm:flex-row' >
           <h3 className='text-[#8C94A3] text-[16px] text-center'>© 2021 - Eduguard. Designed by <Link to="#" className='sm:text-[#1D2026] text-white'>Templatecookie</Link> . All rights reserved</h3>
        </div>
        <div className='order-1 sm:order-2'>
        <ul className='flex gap-5 py-5 text-center text-white sm:text-black sm:flex-row border-b-1 border-[#4b4b4e]'>
            
            <li> 
                <Link>FAQs</Link>
            </li>
               <li> 
                <Link>Privacy Policy</Link>
            </li>   <li> 
                <Link>Terms & Condition</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default FooterError