import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Data from "../../data.js";
import Category from '../../components/Category.jsx';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../index.css";

//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function TopCategory() {
    const [t, i18n] = useTranslation();
      const isArabic = i18n.language === "ar";
      const data = new Data();
  return (
    <div>
              <div className="w-full py-15 bg-[var(--main-bg)]">
        <div className="sm:px-[var(--primary-padding)] justify-center flex flex-col items-center gap-5">
          <h1 className="text-center sm:text-[40px] text-[24px] font-[var(--text-font-lg)] text-[var(--primary-color)]">
            {t("categories_title")}
          </h1>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {data.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Category
                  image={category.icon}
                  text1={category.title}
                  text2={category.articles}
                  bgcolor={category.color}
                  css="sm:flex-row items-center"
                />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <p className="text-[var(--p-color)]"> {t("more_categories")}</p>
            <Link
              to="#"
              className="flex items-center gap-2 text-[var(--orange-color)] "
            >
              {t("browse_all")}
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCategory