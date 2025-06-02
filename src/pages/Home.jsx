import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/Busniess.jpg'
import triangle from '../assets/Vector 1 (1).png'
import Category from '../components/Category'
import Business from '../assets/Busniess.svg'
import Label from '../assets/Label.svg'
import Finance from '../assets/Finance.svg'
import IT from '../assets/It&software.svg'
import Development from '../assets/development.svg'
import Productivity from '../assets/prodoctivity.svg'
import Marketing from '../assets/Marketing.svg'
import Photo from '../assets/Photo.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import LatestArticlCard from '../components/LatestArticlCard'
import course from '../assets/Course Images.png'
import course1 from '../assets/Course Images (1).png'
import course2 from '../assets/Course Images (2).png'
import course3 from '../assets/Course Images (3).png'
import course4 from '../assets/Course Images (4).png'
import course5 from '../assets/Course Images (5).png'
import course6 from '../assets/Course Images (6).png'
import course7 from '../assets/Course Images (7).png'
import course8 from '../assets/Course Images (8).png'
import OurOpprtunitiesCard from '../components/OurOpprtunitiesCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import { Pagination,Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import person from '../assets/person.png'
import google from '../assets/Google.png'
import youtube from '../assets/youtube.png'
import amgo from '../assets/AMG.CO.png'
import lenovo from '../assets/Lenovo.png'
import slak  from '../assets/salk.png'
import verizon from '../assets/Virason.png'
import lex  from '../assets/LexMark.png'
import microsoft from '../assets/microsoft.png'
import OurCompanies from '../components/OurCompanies'
import TopWriter from '../components/TopWriter'
 import person1 from '../assets/Image (1).png'
  import person2 from '../assets/Image (2).png'
 import person3 from '../assets/Image (3).png'
 import person4 from '../assets/Image.png'
import { useTranslation } from 'react-i18next'
import { motion, scale } from "framer-motion";

function Home() {
  const [t,i18n]=useTranslation()
  const isArabic = i18n.language === 'ar'; // إذا كنت تستخدم i18next

    const articles = [
  {
    title: "IT & Software",
    color: "bg-[#FFEEE8]",
    icon: course
  },
 {
    title: "Marketing",
    color: "bg-[#EBEBFF]",
    icon: course1
  }, {
    title: "DESIGN",
    color: "bg-[#E1F7E3]",
    icon: course2
  }, {
    title: "Developments",
    color: "bg-[#EBEBFF]",
    icon: course3
  }, {
    title: "Business",
    color: "bg-[#FFF0F0]",
    icon: course4
  },
 {
    title: "IT & Software",
    color: "bg-[#FFEEE8]",
    icon: course5
  },
 {
    title: "Marketing",
    color: "bg-[#EBEBFF]",
    icon: course6
  }, {
    title: "DESIGN",
    color: "bg-[#E1F7E3]",
    icon: course7
  }, {
    title: "Developments",
    color: "bg-[#EBEBFF]",
    icon: course8
  }, {
    title: "Business",
    color: "bg-[#FFF0F0]",
    icon: course4
  },];
  const categories = [
  {
    title: "Label",
    articles: "63,476 Articles",
    color: "bg-[#EDE9FE]",
    icon: Label
  },
  {
    title: "Business",
    articles: "52,822 Articles",
    color: "bg-[#DCFCE7]",
    icon: Business
  },
  {
    title: "Finance & Accounting",
    articles: "33,841 Articles",
    color: "bg-[#FFF2E5]",
    icon: Finance
  },
  {
    title: "IT & Software",
    articles: "22,649 Articles",
    color: "bg-[#FFF0F0]",
    icon: IT
  },
  {
    title: "Personal Development",
    articles: "20,126 Articles",
    color: "bg-[#FFF]",
    icon: Development
  },
  {
    title: "Office Productivity",
    articles: "13,932 Articles",
    color: "bg-[#F1F5F9]",
    icon: Productivity
  },
  {
    title: "Marketing",
    articles: "12,068 Articles",
    color: "bg-[#EEF2FF]",
    icon: Marketing
  },
  {
    title: "Photography & Video",
    articles: "6,196 Articles",
    color: "bg-[#F8FAFC]",
    icon: Photo
  }
]
const images = [
  google,
  youtube,
  amgo,
  lenovo,
  slak,
  verizon,
  lex,
  microsoft
];
const writer = [
 person1,
 person2,
 person3,
 person4,
 person3,
 person4

];
  return (
   <div className="relative w-full min-h-screen"> {/* ارتفاع الشاشة بالكامل */}
 <div className="bg-[#fafafa] sm:h-[30rem] flex sm:flex-row flex-col items-stretch justify-between leading-none relative overflow-hidden">
  
  {/* القسم النصي يغطي كامل الارتفاع */}
  <div className=" z-10 bg-[#fafafa] px-8 sm:w-[55%] sm:order-1 order-2 flex items-center h-full">
    <div className="sm:px-[2rem] flex flex-col sm:gap-10 gap-4 sm:w-[90%] h-full justify-center">
      <h1 className="sm:text-[60px] text-[28px] text-[#1D2026] font-[600] leading-none">
        Learn with expert anytime anywhere
      </h1>
      <p className="sm:text-[24px] text-[#4E5566] font-[400] leading-relaxed">
        Our mission is to help people to find the best source online and learn with expert anytime, anywhere.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link to="#" className="bg-[#1D2026] text-white px-7 py-3 font-[600] text-center">
          Start Reading
        </Link>
        <Link to="#" className="bg-[#FF6636] text-white px-7 py-3 font-[600] text-center">
          Create Account
        </Link>
      </div>
    </div>
  </div>

  {/* صورة الهيرو تتحرك من اليسار وتبقى أسفل النص */}
  <div className="order-1 sm:order-2 sm:w-[50%] relative flex sm:items-center sm:justify-center h-full">
    <img
      src={triangle}
      alt=""
  className={`absolute h-full scale-150 top-0 ${isArabic ? ' -right-1 left-auto scale-x-[-1]' : 'left-0'} hidden object-cover h-full z-1 sm:flex`}
    />
    
    <motion.img
      src={hero}
      alt=""
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={` h-full ${isArabic? 'scale-x-[-1]':'scale-x-[1]'}`}
    />
  </div>

</div>



<div className="w-full px-5 py-15">
  <div className="sm:px-[13rem] justify-center flex flex-col items-center gap-5">
    <h1 className="text-center sm:text-[40px] text-[24px] font-[600]">{t('title')}</h1>
   <div className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
   {categories.map((category, index) => (
  <motion.div
    key={index}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 2, ease: "easeOut" }}
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
    <p className='text-[#4E5566]'>We have more category & subcategory.</p>
    <Link to="#" className='flex items-center gap-2 text-[#FF6636]'>Browse All <FaArrowRight/></Link>
  </div>
</div>
</div>
<div className='relative'>
  <div className='sm:px-[14rem] sm:pb-[8rem] bg-[#F5F7FA] relative'>
    <div className='py-[5rem] flex flex-col gap-8 items-center'>
      <h1 className='text-[40px] font-[600]'>Latest Articles</h1>

      <div className='hidden grid-cols-5 gap-5 sm:grid'>
        {articles.map((article, index) => (
              

          <motion.div
    key={index}
    initial={index % 2 === 0 ? { y: -200, opacity: 0 } : { y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.7 }}
    transition={{ duration: 2, ease: "easeOut" }}
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

<div className='relative z-10 sm:-mt-[100px] sm:px-[10rem] '>
  <div className='sm:p-[5rem] flex flex-col gap-5 border border-[#E9EAF0] bg-white shadow-xl '>
  <div className='flex flex-col p-5 sm:items-center sm:justify-between sm:flex-row '>
    <h1 className='text-[30px] font-[600]'>Our Job Opprtunities</h1>
   <p className='text-[#4E5566] sm:w-[40%]'>Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius purus et eleifend porta.</p>
  </div>
<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 '>
  <OurOpprtunitiesCard color={articles[0].color} text1={articles[0].title} image={articles[0].icon}/>
  <OurOpprtunitiesCard color={articles[1].color} text1={articles[1].title} image={articles[1].icon}/>
  <OurOpprtunitiesCard color={articles[2].color} text1={articles[2].title} image={articles[2].icon}/>
  <OurOpprtunitiesCard color={articles[3].color} text1={articles[3].title} image={articles[3].icon}/>
</div>
  <div className='flex flex-col items-center justify-center gap-5 mt-5 sm:flex-row'>
    <p className='text-[#4E5566]'>We have more category & subcategory.</p>
    <Link to="#" className='flex items-center gap-2 text-[#FF6636]'>Browse All <FaArrowRight/></Link>
  </div>
      </div>

</div>
<div className='sm:bg-[#F5F7FA]  sm:px-[12rem] sm:py-[5rem] sm:pb-[15rem] sm:mt-[5rem]'>
  <div className='flex flex-col gap-5 sm:flex-row'>
  <div className='bg-[#CC522B] sm:w-[50%] sm:pb-0 pb-[1rem] flex justify-between sm:flex-row flex-col  '>
   <div className='flex flex-col order-2 gap-5 pt-4 pl-10 text-white sm:order-1'>
     <h1 className='text-[32px] font-[600]'>Become an Author</h1>
     <p className='text-[14px] font-[400]'>Authors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
     <Link to="#" className='bg-white w-fit text-[#CC522B] flex gap-2 items-center py-2 px-4'><span>Start Writing</span><FaArrowRight/></Link>
   </div>
    <div className='w-[100%] h-[100%] order-1 sm:order-2'>
       <img src={person} alt="" className='w-full h-full'/>
    </div>
    </div> 
<div className='flex flex-col gap-5 bg-white sm:w-[50%] px-8 py-5'>
    <h1 className='text-[32px] font-[600]'>Your teaching & earning steps</h1>
     <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
      <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#EBEBFF] font-bold text-[#564FFD] rounded-[50%] text-center flex items-center justify-center'>1</span>
        <h2 className=''>Apply to become author</h2>
      </div>
         <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#FFF0F0] font-bold text-[#FF6636] rounded-[50%] text-center flex items-center justify-center'>2</span>
        <h2 className=''>Apply to become author</h2>
      </div>
         <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#FFF0F0] font-bold text-[#E34444] rounded-[50%] text-center flex items-center justify-center'>3</span>
        <h2 className=''>Apply to become author</h2>
      </div>
         <div className='flex items-center gap-4'>
        <span className='w-12 h-12 bg-[#E1F7E3] font-bold text-[#23BD33] rounded-[50%] text-center flex items-center justify-center'>4</span>
        <h2 className=''>Apply to become author</h2>
      </div>
     </div>
    </div> 
  </div>

</div>
<div className="z-10 sm:-mt-[150px] sm:px-[10rem]">
  <div className="relative sm:p-[5rem] flex flex-col gap-5 border border-[#E9EAF0] bg-white shadow-xl">
    <div className="flex flex-col p-5 sm:items-center ">
      <h1 className="text-[30px] font-[600]">Top Writers</h1>
  
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
              0:{slidesPerView:1.5},
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
              image={article}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="flex flex-col items-center justify-center gap-5 mt-5 sm:flex-row">
      <p className="text-[#4E5566] text-center">Thousands of users waiting for a Articles. Start writing & earning now!.</p>
      <Link to="#" className="flex items-center gap-2 text-[#FF6636]">
       Become an Author <FaArrowRight />
      </Link>
    </div>
  </div>
</div>

<div className='flex sm:flex-row flex-col gap-10 items-center sm:px-[12rem] sm:py-[5rem] px-4 py-10'>
  <div className='flex flex-col gap-2'>
    <h1 className='text-[#1D2026] sm:text-[32px] text-[24px] font-[600]'>6.3k trusted companies</h1>
    <p className='text-[#6E7485]'>
      Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
    </p>
  </div>
  <div className='grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4'>
    {images.map((image, index) => (
      <OurCompanies key={index} image={image} />
    ))}
  </div>
</div>

    </div>

  )
  
}

export default Home