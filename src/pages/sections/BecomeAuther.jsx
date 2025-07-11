import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function BecomeAuther() {
          const {i18n} = useTranslation();
          const isArabic = i18n.language === "ar";
          console.log(isArabic)
  return (
    <div>
          <div className="sm:bg-[var(--secondary-color)]  grid grid-cols-12 sm:py-[5rem] sm:pb-[15rem] sm:mt-[5rem]">
        <div className="grid grid-cols-12 col-span-12 gap-5 lg:col-span-10 lg:col-start-2 ">
          <div className="bg-[#CC522B] relative lg:col-span-6 col-span-12  sm:pb-0 pb-[1rem] items-center flex justify-between sm:flex-row flex-col  ">
             <div className="absolute inset-0 z-0 bg-black opacity-50 lg:hidden"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center order-2 gap-5 text-white lg:pl-10 lg:items-start lg:static lg:justify-start sm:order-1">
              <h1 className="text-[32px] font-[var(--text-font-lg)]">Become an Author</h1>
              <p className="text-[14px] font-[var(--text-font-md)] text-center lg:text-start">
                Authors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </p>
              <Link
                to="#"
                className="bg-white w-fit text-[#CC522B] flex gap-2 items-center py-2 px-4"
              >
                <span>Start Writing</span>
               {isArabic ?   <FaArrowLeft /> : <FaArrowRight /> }
               
              </Link>
            </div>
            <div className="order-1 w-full h-full sm:order-2">
              <img src="/person.png" alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col lg:col-span-6 col-span-12  gap-5 bg-[var(--card-bg)]  px-8 py-5">
            <h1 className="text-[32px] font-[var(--text-font-lg)] text-[var(--primary-color)]">
              Your teaching & earning steps
            </h1>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#EBEBFF] font-bold text-[#564FFD] rounded-[50%] text-center flex items-center justify-center">
                  1
                </span>
                <h2 className="text-[var(--p-color)]">
                  {" "}
                  Apply to become author
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#FFF0F0] font-bold text-[#d62828]  rounded-[50%] text-center flex items-center justify-center">
                  2
                </span>
                <h2 className="text-[var(--p-color)]">
                  {" "}
                  Apply to become author
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#FFF0F0] font-bold text-[#E34444] rounded-[50%] text-center flex items-center justify-center">
                  3
                </span>
                <h2 className="text-[var(--p-color)]">
                  {" "}
                  Apply to become author
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[#E1F7E3] font-bold text-[#23BD33] rounded-[50%] text-center flex items-center justify-center">
                  4
                </span>
                <h2 className="text-[var(--p-color)]">
                  {" "}
                  Apply to become author
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeAuther