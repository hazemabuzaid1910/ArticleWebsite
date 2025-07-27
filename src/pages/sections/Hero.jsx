import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/AuthStore';
function Hero() {
  const [t, i18n] = useTranslation();
  const [isArabic, setIsArabic] = useState(false);
const {user}=useAuthStore();
  useEffect(() => {
    setIsArabic(i18n.language === "ar");
  }, [i18n.language]);
const MotionLink = motion.create(Link);

  return (
    <div className="w-full sm:h-full bg-[var(--secondary-color)]">
   <div className="relative grid h-full grid-cols-12 ">
   <div className="absolute top-0 bottom-0 z-10 lg:static lg:col-span-4 lg:col-start-2 ">
        <div className="flex flex-col justify-center h-full xl:items-start items-center w-full gap-2 xl:gap-10 xl:bg-[var(--secondary-color)]  p-8 xl:p-0">
          <h1 className="text-[28px] text-center text-[#FFFFFF]  xl:text-start   xl:text-[55px] lg:text-[var(--primary-color)] font-[var(--text-font-lg)] leading-none">
            {t("hero_title")}
          </h1>
          <p className="xl:text-[var(--p-color)] text-[#929090] text-center xl:text-start  text-[14px] xl:text-[20px] font-[var(--text-font-md)] leading-relaxed">
            {t("hero_description")}
          </p>
          <div className="flex flex-row gap-2 sm:flex-row">
           <MotionLink
  to="#"
  whileTap={{ scale: 0.95 }}    
  transition={{ type: "spring", stiffness: 300, damping: 20 }}   
  className="bg-[var(--primary-color)] text-[var(--main-bg)] px-4 py-2 font-[var(--text-font-lg)] text-center  "
>
  {t("start_reading")}
</MotionLink>
            {!user?<MotionLink
              to="/create-account"
               whileTap={{ scale: 0.95 }}    
              transition={{ type: "spring", stiffness: 300, damping: 20 }}  
              className="bg-[var(--orange-color)] text-[var(--main-bg)] px-4 py-2 font-[var(--text-font-lg)] text-center"
            >
              {t("create_account")}
            </MotionLink>
            :<MotionLink
              to="/myaccount"
               whileTap={{ scale: 0.95 }}    
              transition={{ type: "spring", stiffness: 300, damping: 20 }}  
              className="bg-[var(--orange-color)] text-[var(--main-bg)] px-4 py-2 font-[var(--text-font-lg)] text-center"
            >
              Show profile
            </MotionLink>}
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
