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
    <div>
        
      <div className="relative z-10 sm:-mt-[100px] sm:px-[var(--primary-padding)] ">
        <div className="sm:p-[5rem] flex flex-col gap-5 border border-[var(--main-bg)] bg-[var(--main-bg)] shadow-xl ">
          <div className="flex flex-col p-5 sm:items-center sm:justify-between sm:flex-row ">
            <h1 className="text-[30px] font-[var(--text-font-lg)] text-[var(--primary-color)] ">
              {t("our_opportunities")}
            </h1>
            <p className="text-[var(--p-color)] sm:w-[40%]">
              Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
              varius purus et eleifend porta.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            {data.articles.slice(0,4).map((article,index)=>(
            <OurOpprtunitiesCard
              key={index}
              color={article.color}
              text1={article.title}
              image={article.icon}
            />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-5 sm:flex-row">
            <p className="text-[var(--p-color)]">{t("more_categories")}</p>
            <Link
              to="#"
              className="flex items-center gap-2 text-[var(--orange-color)] "
            >
              {t("browse_all")} {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurOpprtunities