import React from 'react'
import { Link } from 'react-router-dom'
function FooterError() {
  return (
    <div className='sm:px-[12rem] flex sm:flex-row justify-between items-center py-4 '>
        <div>
           <h3 className='text-[#8C94A3]'>© 2021 - Eduguard. Designed by <Link to="#" className='text-[#1D2026]'>Templatecookie</Link> . All rights reserved</h3>
        </div>
        <div>
        <ul className='flex gap-5 sm:flex-row'>
            
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