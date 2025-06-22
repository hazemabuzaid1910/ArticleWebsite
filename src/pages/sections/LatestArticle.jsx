import React from 'react'
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Data from "../../data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LatestArticlCard from '../../components/LatestArticlCard.jsx';
function LatestArticle() {
       const [t] = useTranslation();
             const data = new Data();
       
  return (
      <div className="relative ">
        <div className=" sm:pb-[8rem] grid-cols-12 grid bg-[var(--secondary-color)] relative">
          <div className="py-[5rem] col-span-10 col-start-2 flex flex-col gap-8 items-center">
            <h1 className="text-[40px] font-[var(--text-font-lg)] text-[var(--primary-color)]">
              {" "}
              {t("latest_articles")}
            </h1>
            <div className="hidden grid-cols-5 gap-5 lg:grid">
              {data.articles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={
                    index % 2 === 0
                      ? { y: -20, opacity: 0 }
                      : { y: 20, opacity: 0 }
                  }
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 1 }}
                >
                  <LatestArticlCard
                    key={index}
                    color={article.color}
                    text1={article.title}
                    image={article.icon}
                  />
                </motion.div>
              ))}
            </div>

            <div className="block w-full lg:hidden">
              <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
                modules={[Pagination]}
              >
                {data.articles.map((article, index) => (
                  <SwiperSlide key={index}>
                    <LatestArticlCard
                      color={article.color}
                      text1={article.title}
                      image={article.icon}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LatestArticle