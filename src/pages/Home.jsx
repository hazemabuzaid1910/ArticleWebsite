import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import LatestArticlCard from '../components/LatestArticlCard'
import Category from '../components/Category'
import OurOpprtunitiesCard from '../components/OurOpprtunitiesCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import { Pagination,Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

import OurCompanies from '../components/OurCompanies'
import TopWriter from '../components/TopWriter'

import { useTranslation } from 'react-i18next'
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import '../index.css'

function Home() {
  const [t,i18n]=useTranslation()
  const isArabic = i18n.language === 'ar';
    const articles = [
  {
    title: "IT & Software",
    color: "bg-[#FFEEE8]",
    icon: "/Course Images (1).png"
  },
 {
    title: "Marketing",
    color: "bg-[#EBEBFF]",
    icon: "/Course Images (2).png"
  }, {
    title: "DESIGN",
    color: "bg-[#E1F7E3]",
    icon:"/Course Images (3).png"
  }, {
    title: "Developments",
    color: "bg-[#EBEBFF]",
    icon: "/Course Images (4).png"
  }, {
    title: "Business",
    color: "bg-[#FFF0F0]",
    icon: "/Course Images (5).png"
  },
 {
    title: "IT & Software",
    color: "bg-[#FFEEE8]",
    icon: "/Course Images (6).png"
  },
 {
    title: "Marketing",
    color: "bg-[#EBEBFF]",
    icon: "/Course Images (7).png"
  }, {
    title: "DESIGN",
    color: "bg-[#E1F7E3]",
    icon: "/Course Images (8).png"
  }, {
    title: "Developments",
    color: "bg-[#EBEBFF]",
    icon: "/Course Images.png"
  }, {
    title: "Business",
    color: "bg-[#FFF0F0]",
    icon: "/Course Images (1).png"
  },];
 const categories = [
    {
      title: "Label",
      articles: "63,476 Articles",
      color: "bg-[#EDE9FE]",
      icon: "/Label.svg",
    },
    {
      title: "Business",
      articles: "52,822 Articles",
      color: "bg-[#DCFCE7]",
      icon: "/Busniess.svg",
    },
    {
      title: "Finance & Accounting",
      articles: "33,841 Articles",
      color: "bg-[#FFF2E5]",
      icon: "/Finance.svg",
    },
    {
      title: "IT & Software",
      articles: "22,649 Articles",
      color: "bg-[#FFF0F0]",
      icon: "/It&software.svg",
    },
    {
      title: "Personal Development",
      articles: "20,126 Articles",
      color: "bg-[#FFF]",
      icon: "/development.svg",
    },
    {
      title: "Office Productivity",
      articles: "13,932 Articles",
      color: "bg-[#F1F5F9]",
      icon: "/prodoctivity.svg",
    },
    {
      title: "Marketing",
      articles: "12,068 Articles",
      color: "bg-[#EEF2FF]",
      icon: "/Marketing.svg",
    },
    {
      title: "Photography & Video",
      articles: "6,196 Articles",
      color: "bg-[#F8FAFC]",
      icon: "/Photo.svg",
    },
  ];
    const images = [
      {img:"/Google.png"},
     { img:"/youtube.png"},
      {img:"/AMG.CO.png"},
      {img:"/Lenovo.png"},
      {img:"/salk.png"},
      {img:"/Virason.png"},
      {img:"/LexMark.png"},
     { img:"/microsoft.png"}
    ];
const writer = [
 {person:"/Image (1).png"},
 {person:"/Image (2).png"},
 {person:"/Image (3).png"},
 {person:"/Image.png"},
 {person:"/Image (3).png"},
 {person:"/Image (2).png"},

];
  return (
   <div className="relative w-full min-h-screen"> 
<div className="bg-[var(--secondary-color)] justify-between  sm:h-[30rem] flex sm:flex-row flex-col  leading-none relative ">
  <div className="z-10 bg-[var(--secondary-color)]   overflow-clip py-2 px-5 sm:px-0 sm:w-[100%] sm:order-1 order-2 flex items-center h-full transform ">
    
    <div className={`${isArabic ? "sm:pr-[var(--primary-padding)]" : "sm:pl-[var(--primary-padding)]"}   transform  flex flex-col sm:gap-10 gap-4 sm:w-[90%] h-full justify-center`}  >
      
      <h1 className="sm:text-[55px] text-[28px] text-[var(--primary-color)] font-[600] leading-none">
        {t("hero_title")}
      </h1>
      
      <p className="sm:text-[20px] text-[var(--p-color)] font-[400] leading-relaxed">
        {t("hero_description")}
      </p>
      
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link to="#" className="bg-[var(--primary-color)] text-[var(--main-bg)] px-7 py-3 font-[600] text-center">
          {t("start_reading")}
        </Link>
        <Link to="/create-account" className="bg-[var(--orange-color)] text-[var(--main-bg)] px-7 py-3 font-[600] text-center">
          {t("create_account")}
        </Link>
      </div>
</div>
    </div>


  <div className={`order-1 sm:order-2 sm:w-[100%]  flex sm:items-center sm:justify-center h-full ${isArabic ? "clip-diagonal-rtl" : "clip-diagonal-ltr"}`} >
    <motion.img
      src="/Busniess.jpg"
      alt=""
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={` h-full ${isArabic? 'scale-x-[-1]':'scale-x-[1]'}  w-full  `}
    />
  </div>
</div>



<div className="w-full py-15 bg-[var(--main-bg)]">
  <div className="sm:px-[var(--primary-padding)] justify-center flex flex-col items-center gap-5">
    <h1 className="text-center sm:text-[40px] text-[24px] font-[600] text-[var(--primary-color)]">{t('categories_title')}</h1>
   <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
   {categories.map((category, index) => (
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
  <div className='flex flex-col items-center gap-5 sm:flex-row'>
    <p className='text-[var(--p-color)]'>   {t("more_categories")}
</p>
    <Link to="#" className='flex items-center gap-2 text-[var(--orange-color)] '>{t("browse_all")}{isArabic?<FaArrowLeft/>: <FaArrowRight />}</Link>
  </div>
</div>
</div>
<div className='relative'>
  <div className='sm:px-[var(--primary-padding)] sm:pb-[8rem] bg-[var(--secondary-color)] relative'>
    <div className='py-[5rem] flex flex-col gap-8 items-center'>
      <h1 className='text-[40px] font-[600] text-[var(--primary-color)]'>   {t("latest_articles")}</h1>

      <div className='hidden grid-cols-5 gap-5 sm:grid'>
        {articles.map((article, index) => (
              

          <motion.div
    key={index}
    initial={index % 2 === 0 ? { y: -20, opacity: 0 } : { y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 1,}}
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

      <div className='block w-full px-4 sm:hidden'>
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          modules={[Pagination]}
        >
          {articles.map((article, index) => (
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

<div className='relative z-10 sm:-mt-[100px] sm:px-[var(--primary-padding)] '>
  <div className='sm:p-[5rem] flex flex-col gap-5 border border-[var(--main-bg)] bg-[var(--main-bg)] shadow-xl '>
  <div className='flex flex-col p-5 sm:items-center sm:justify-between sm:flex-row '>
    <h1 className='text-[30px] font-[600] text-[var(--primary-color)] '>{t("our_opportunities")}</h1>
   <p className='text-[var(--p-color)] sm:w-[40%]'>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.</p>
  </div>
<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 '>
  <OurOpprtunitiesCard color={articles[0].color} text1={articles[0].title} image={articles[0].icon}/>
  <OurOpprtunitiesCard color={articles[1].color} text1={articles[1].title} image={articles[1].icon}/>
  <OurOpprtunitiesCard color={articles[2].color} text1={articles[2].title} image={articles[2].icon}/>
  <OurOpprtunitiesCard color={articles[3].color} text1={articles[3].title} image={articles[3].icon}/>
</div>
  <div className='flex flex-col items-center justify-center gap-5 mt-5 sm:flex-row'>
    <p className='text-[var(--p-color)]'>{t("more_categories")}</p>
    <Link to="#" className='flex items-center gap-2 text-[var(--orange-color)] '>{t("browse_all")} {isArabic?<FaArrowLeft/>: <FaArrowRight />}</Link>
  </div>
      </div>

</div>
<div className='sm:bg-[var(--secondary-color)]  sm:px-[var(--primary-padding)] sm:py-[5rem] sm:pb-[15rem] sm:mt-[5rem]'>
  <div className='flex flex-col gap-5 sm:flex-row'>
  <div className='bg-[#CC522B] sm:w-[50%] sm:pb-0 pb-[1rem] flex justify-between sm:flex-row flex-col  '>
   <div className='flex flex-col order-2 gap-5 px-4 pl-10 text-white sm:order-1'>
     <h1 className='text-[32px] font-[600]'>Become an Author</h1>
     <p className='text-[14px] font-[400]'>Authors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
     <Link to="#" className='bg-white w-fit text-[#CC522B] flex gap-2 items-center py-2 px-4'><span>Start Writing</span><FaArrowRight/></Link>
   </div>
    <div className='w-[100%] h-[100%] order-1 sm:order-2'>
       <img src="/person.png" alt="" className='w-full h-full'/>
    </div>
    </div> 
<div className='flex flex-col gap-5 bg-[var(--card-bg)] sm:w-[50%] px-8 py-5'>
    <h1 className='text-[32px] font-[600] text-[var(--primary-color)]'>Your teaching & earning steps</h1>
     <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
      <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#EBEBFF] font-bold text-[#564FFD] rounded-[50%] text-center flex items-center justify-center'>1</span>
        <h2 className="text-[var(--p-color)]" > Apply to become author</h2>
      </div>
         <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#FFF0F0] font-bold text-[var(--main-bg)]  rounded-[50%] text-center flex items-center justify-center'>2</span>
        <h2 className="text-[var(--p-color)]" > Apply to become author</h2>
      </div>
         <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#FFF0F0] font-bold text-[#E34444] rounded-[50%] text-center flex items-center justify-center'>3</span>
        <h2 className="text-[var(--p-color)]" > Apply to become author</h2>
      </div>
         <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#E1F7E3] font-bold text-[#23BD33] rounded-[50%] text-center flex items-center justify-center'>4</span>
        <h2 className="text-[var(--p-color)]" > Apply to become author</h2>
      </div>
     </div>
    </div> 
  </div>

</div>
<div className="z-10 sm:-mt-[150px] sm:px-[var(--primary-padding)]">
  <div className="relative sm:p-[5rem] flex flex-col gap-5 border border-[var(--main-bg)] bg-[var(--main-bg)] shadow-xl">
    <div className="flex flex-col p-5 sm:items-center ">
      <h1 className="text-[30px] font-[600] text-[var(--primary-color)]">Top Writers</h1>
  
    </div>

    <div className="relative">
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
          breakpoints={
            {
              0:{slidesPerView:1.2},
              640:{slidesPerView:2},
              1024:{slidesPerView:4},

            }
          }
        modules={[Navigation]}
        className="custom-swiper"
      >
        {writer.map((article, index) => (
          <SwiperSlide key={index}>
            <TopWriter
              image={article.person}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="flex flex-col items-center justify-center gap-5 mt-5 sm:flex-row">
      <p className="text-[var(--p-color)] text-center">Thousands of users waiting for a Articles. Start writing & earning now!.</p>
      <Link to="#" className="flex items-center gap-2 text-[var(--orange-color)] ">
       Become an Author {isArabic?<FaArrowLeft/>: <FaArrowRight />}
      </Link>
    </div>
  </div>
</div>

<div className='flex sm:flex-row flex-col items-center sm:px-[var(--primary-padding)] sm:py-[5rem] px-4 py-10 sm:gap-10'>
  <div className='flex flex-col gap-2 '>
    <h1 className='text-[var(--primary-color)] sm:text-[32px] text-[24px] font-[600]'>6.3k trusted companies</h1>
    <p className='text-[var(--p-color)]'>
      Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
    </p>
  </div>
  <div className='grid w-full grid-cols-2 gap-5 sm:grid-cols-4'>
    {images.map((image, index) => (
      <OurCompanies key={index} image={image.img} />
    ))}
  </div>
</div>


    </div>

  )
  
}

export default Home