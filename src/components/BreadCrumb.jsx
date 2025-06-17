import React from 'react'
import { Link } from 'react-router-dom'
function BreadCrumb({name_page}) {
  return (
    <div>
           <div className="bg-[var(--secondary-color)] flex justify-center items-center py-[2rem] gap-4 flex-col w-full">
        <h1 className="text-[var(--primary-color)] text-[24px] font-[600]">{name_page}</h1>
        <div>
          <Link to="/" className="text-[var(--p-color)]">
            <span>Home /</span>
          </Link>
          <span className="text-[var(--primary-color)]"> {name_page}</span>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb