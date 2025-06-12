import React from 'react'
import { Link } from 'react-router-dom'

function OurCompanies({image}) {
  return (
    <div>
  <Link to="#" className='flex items-center justify-center px-5 bg-[#FFFFFF] shadow-xl'>
  <img src={image} alt="" className="object-contain h-[70px] w-[80px] " />
</Link>
</div>

  )
}

export default OurCompanies