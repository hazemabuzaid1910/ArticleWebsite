import React from 'react'

import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Data from "../../data.js";
import OurOpprtunitiesCard from '../../components/OurOpprtunitiesCard.jsx';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function OurOpprtunities() {
      const [t, i18n] = useTranslation();
          const isArabic = i18n.language === "ar";
          const data = new Data();
  return (
    <div className=''>
        
      <div className="relative  grid grid-cols-12  z-10 sm:-mt-[100px] ">
        <div className="sm:py-[5rem] lg:col-span-10 col-span-12 lg:col-start-2  flex flex-col gap-5 border border-[var(--main-bg)] bg-[var(--main-bg)] shadow-xl ">
          <div className="grid grid-cols-12 ">
            <h1 className="text-[30px] lg:col-span-4 col-span-10 col-start-2 lg:col-start-2 font-[var(--text-font-lg)] text-[var(--primary-color)] ">
              {t("our_opportunities")}
            </h1>
            <p className="text-[var(--p-color)] lg:col-span-4 col-span-10 col-start-2 lg:col-start-8 ">
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
              varius purus et eleifend porta.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-12 ">
            <div className='grid grid-cols-12 col-span-10 col-start-2 '>
              <div className='col-span-10 col-start-2 md:col-span-10 md:col-start-2 lg:grid lg:grid-cols-2 lg:col-span-12 lg:gap-4'>
            {data.articles.slice(0,4).map((article,index)=>(
            <OurOpprtunitiesCard
              key={index}
              color={article.color}
              text1={article.title}
              image={article.icon}
            />
            ))}
          </div></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 pb-5 mt-5 lg:pb-0 sm:flex-row">
            <p className="text-[var(--p-color)]">{t("more_categories")}</p>
     <Link
              to="#"
              className="flex items-center gap-2 text-orange-500 group"
            >
              <span
                className={`transition-transform duration-700 ease-in-out transform will-change-transform ${
                  isArabic
                    ? "group-hover:-translate-x-[20px]"
                    : "group-hover:translate-x-[20px]"
                }`}
              >
                {t("browse_all")}
              </span>
              <span
                className={`transition-transform duration-700 ease-in-out transform will-change-transform ${
                  isArabic
                    ? "group-hover:-translate-x-[20px]"
                    : "group-hover:translate-x-[20px]"
                }`}
              >
                {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
              </span>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurOpprtunities