import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Data from "../../data.js";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import TopWriter from'../../components/TopWriter.jsx'
function Writer() {
        const {i18n} = useTranslation();
        const isArabic = i18n.language === "ar";
        const data = new Data();
  return (
    <div>   
      <div className="z-10 sm:-mt-[150px] grid-cols-12 grid">
        <div className="relative sm:p-[5rem] col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col gap-5 border border-[var(--main-bg)] bg-[var(--main-bg)] shadow-xl">
          <div className="flex flex-col p-5 sm:items-center ">
            <h1 className="text-[30px] font-[var(--text-font-lg)] text-[var(--primary-color)]">
              Top Writers
            </h1>
          </div>
          
          <div className="relative ">
            <button className="hidden sm:flex swiper-button-prev custom-nav-button left-4">
              <FaArrowLeft size={32} />
            </button>
            <button className="hidden sm:flex swiper-button-next custom-nav-button right-4">
              <FaArrowRight size={32} />
            </button>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation]}
              className="custom-swiper"
            >
              {data.writer.map((article, index) => (
                <SwiperSlide key={index}>
                  <TopWriter image={article.person} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 px-5 pb-5 mt-5 lg:pb-0 sm:flex-row">
            <p className="text-[var(--p-color)] text-center">
              Thousands of users waiting for a Articles. Start writing & earning
              now!.
            </p>
            <Link
              to="#"
              className="flex items-center gap-2 text-[var(--orange-color)] "
            >
              Become an Author {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </Link>
          </div>
        </div>
      </div></div>
  )
}

export default Writer