import React from 'react'
import { Link } from 'react-router-dom'

function OurCompanies({image}) {
  return (
    <div>
  <Link to="#" className='flex items-center justify-center bg-white shadow-xl  h-[100px] w-[150px]'>
  <img src={image} alt="" className="object-contain " />
</Link>
</div>

  )
}

export default OurCompanies