import React, { useEffect, useState } from 'react';
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function Hero() {
  const [t, i18n] = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    setIsArabic(i18n.language === "ar");
  }, [i18n.language]);

  return (
    <div className=" w-full sm:h-full bg-[var(--secondary-color)]">
   <div className="relative grid h-full grid-cols-12 ">
   <div className="absolute top-0 bottom-0 z-10 lg:static lg:col-span-4 lg:col-start-2 ">
        <div className="flex flex-col justify-center h-full lg:items-start items-center w-full gap-4 md:gap-10 xl:bg-[var(--secondary-color)]  p-8 xl:p-0">
          <h1 className="text-[28px] text-center text-[#FFFFFF]  lg:text-start  md:text-[50px] lg:text-[55px] lg:text-[var(--primary-color)] font-[var(--text-font-lg)] leading-none">
            {t("hero_title")}
          </h1>
          <p className="lg:text-[var(--p-color)] text-[#929090] text-center lg:text-start  text-[14px] md:text-[20px] font-[var(--text-font-md)] leading-relaxed">
            {t("hero_description")}
          </p>
          <div className="flex flex-row gap-2 sm:flex-row">
            <Link
              to="#"
              className="bg-[var(--primary-color)] text-[var(--main-bg)] px-4 py-2 font-[var(--text-font-lg)] text-center"
            >
              {t("start_reading")}
            </Link>
            <Link
              to="/create-account"
              className="bg-[var(--orange-color)] text-[var(--main-bg)] px-4 py-2 font-[var(--text-font-lg)] text-center"
            >
              {t("create_account")}
            </Link>
          </div>
        </div>
      </div>

  <div className={`relative lg:opacity-100   col-span-12 lg:col-span-6 lg:col-start-7  flex items-center justify-center h-full ${
    isArabic ? "clip-diagonal-rtl" : "clip-diagonal-ltr"
  }`}>

    <motion.img
  src="/Busniess.jpg" 
  alt="Business Image"
  loading="eager" 
  decoding="async"
  fetchPriority="high" 
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className={`h-full w-full object-cover ${isArabic ? "scale-x-[-1]" : "scale-x-[1]"}`}
    />
  </div>
<div className="absolute inset-0 z-0 bg-black opacity-60 lg:hidden"></div>

</div>

    </div>
  );
}

export default Hero;
