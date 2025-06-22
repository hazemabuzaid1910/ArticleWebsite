import React from 'react'
import Data from "../../data";
import OurCompanies from "../../components/OurCompanies";
function Companies() {
      const data = new Data();

  return (
    <div className='grid grid-cols-12'>
           <div className=" flex sm:flex-row col-span-10 col-start-2 gap-5 lg:gap-0 flex-col items-center  sm:py-[5rem] px-4 py-10 sm:gap-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[var(--primary-color)] sm:text-[32px] text-[24px] font-[var(--text-font-lg)]">
            6.3k trusted companies
          </h1>
          <p className="text-[var(--p-color)]">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4">
          {data.images.map((image, index) => (
            <OurCompanies key={index} image={image.img} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies