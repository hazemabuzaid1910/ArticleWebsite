import React from 'react'
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

function Hero() {
      const [t, i18n] = useTranslation();
 const [isArabic, setIsArabic] = useState();

  useEffect(() => {
    // تأكد من تعيين isArabic بعد تحميل اللغة
    setIsArabic(i18n.language === "ar");
  }, [i18n.language]);  
  console.log(isArabic)
  return (
    <div>  <div className="bg-[var(--secondary-color)] justify-between  sm:h-[30rem] flex sm:flex-row flex-col  leading-none relative ">
        <div className="z-10 bg-[var(--secondary-color)]   overflow-clip py-2 px-5 sm:px-0 sm:w-[100%] sm:order-1 order-2 flex items-center h-full transform ">
          <div
            className={`${
              isArabic
                ? "sm:pr-[var(--primary-padding)]"
                : "sm:pl-[var(--primary-padding)]"
            }   transform  flex flex-col sm:gap-10 gap-4 sm:w-[90%] h-full justify-center`}
          >
            <h1 className="sm:text-[55px] text-[28px] text-[var(--primary-color)] font-[var(--text-font-lg)] leading-none">
              {t("hero_title")}
            </h1>

            <p className="sm:text-[20px] text-[var(--p-color)] font-[var(--text-font-md)] leading-relaxed">
              {t("hero_description")}
            </p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                to="#"
                className="bg-[var(--primary-color)] text-[var(--main-bg)] px-7 py-3 font-[var(--text-font-lg)] text-center"
              >
                {t("start_reading")}
              </Link>
              <Link
                to="/create-account"
                className="bg-[var(--orange-color)] text-[var(--main-bg)] px-7 py-3 font-[var(--text-font-lg)] text-center"
              >
                {t("create_account")}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`order-1 sm:order-2 sm:w-[100%]  flex sm:items-center sm:justify-center h-full ${
            isArabic ? "clip-diagonal-rtl" : "clip-diagonal-ltr"
          }`}
        >
          <motion.img
            src="/Busniess.jpg"
            alt=""
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={` h-full ${
              isArabic ? "scale-x-[-1]" : "scale-x-[1]"
            }  w-full  `}
          />
        </div>
      </div></div>
  )
}

export default Hero