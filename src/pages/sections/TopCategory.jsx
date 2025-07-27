import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Data from "../../data.js";
import Category from "../../components/Category.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../index.css";

//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function TopCategory() {
  const [t, i18n] = useTranslation();
  const isArabic = i18n.language === "ar";


  const data = new Data();
  return (
    
    <div className="grid grid-cols-12 ">
      <div className="  w-full col-span-10 col-start-2 py-15 bg-[var(--main-bg)]">
        <div className="flex flex-col items-center justify-center w-full gap-5 ">
          <h1 className="text-center sm:text-[40px] text-[24px] font-[var(--text-font-lg)] text-[var(--primary-color)]">
            {t("categories_title")}
          </h1>
          <div className="grid w-full grid-cols-2 col-span-5 gap-4 lg:grid-cols-4">
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
      </div></div>
   
  );
}

export default TopCategory;
