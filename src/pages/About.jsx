import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {PiNotebookBold } from "react-icons/pi";
import { PiGlobeHemisphereWestLight } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
import { LuCircleCheckBig } from "react-icons/lu";
import { PiUsersLight } from "react-icons/pi";
import OurCompanies from '../components/OurCompanies';
import { FaArrowRight } from 'react-icons/fa';
import BreadCrumb from '../components/BreadCrumb';
import Comment from '../components/Comment';
import Data from '../data'
import Companies from "./sections/Companies";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import useTestimonials from '../store/TestimonialsStore';
function About() {
  const dataa=new Data();
  const {data,getTestimonials}=useTestimonials();
  useEffect(()=>{
    getTestimonials();
  },[])
  const statsData = [
  {
    icon: <PiUsersLight size={40} color="#FF6636" />,
    text1: "67.1K",
    text2: "Students",
  },
  {
    icon: <PiNotebookBold size={40} color="#564FFD" />,
    text1: "26K",
    text2: "Certified Instructor",
  },
  {
    icon: <LuCircleCheckBig size={40} color="#23BD33" />,
    text1: "72K",
    text2: "Country Language",
  },
  {
    icon: <PiGlobeHemisphereWestLight size={40} color="#E34444" />,
    text1: "99%",
    text2: "Success Rate",
  },
  {
    icon: <RiStackLine size={40} color="#FD8E1F" />,
    text1: "57K",
    text2: "Trusted Companies",
  },
];
  const repeatedStats = [...statsData, ...statsData]; 

  return (
    <div className='grid grid-cols-12'>
      <div className="col-span-12">
           <BreadCrumb name_page="About"/> 
</div>
        <div className='flex items-center lg:gap-20 gap-5 lg:flex-row flex-col col-start-2 col-span-10 px-5 py-5 lg:py-[5rem] w-full justify-between'>
            <div className='order-2 w-full lg:order-1'>
            <div className='flex flex-col justify-center gap-10 '>
                <div className=''>    
              <h1 className='lg:text-[80px] text-[70px] text-[#E9EAF0] p-0 m-0 leading-none font-[600]'>2011-2025</h1>
              <h1 className='text-[var(--primary-color)] lg:text-[48px] text-[30px] font-[600] p-0 m-0 leading-none'>We share knowledge with the world</h1>
             </div>
              <p className='lg:text-[20px] text-[18px] text-[var(--p-color)]'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.  </p>
            </div>
            </div>
            <div className='order-1 w-full h-full lg:order-2'>
                 <img src="/heroAbout.png" alt="" />
            </div>
           
        </div>
        <div className="col-span-12 ">
          <Companies/>
        </div>
            
<div className="w-full col-span-10 col-start-2 py-4 bg-[var(--main-bg)] overflow-x-hidden">
  <div className="px-5">
    <div className="w-full overflow-hidden">
      <div className="flex w-full gap-10 animate-marquee">
        {[...repeatedStats, ...repeatedStats].map((stat, index) => (
          <Statistics
            key={index}
            icon={stat.icon}
            text1={stat.text1}
            text2={stat.text2}
          />
        ))}
      </div>
    </div>
  </div>
</div>





        
        <div className='bg-[#FFEEE8] col-span-12   flex flex-col lg:flex-row items-center lg:px-[10rem] gap-10 mt-[5rem] '>
            <div className='w-full h-full '>
                <img src="/two-business-partners-working-office 1.svg" alt="" className='w-full h-full '/>
            </div>
            <div className='flex flex-col w-full gap-4 px-5 py-4 lg:px-0 lg:py-0'>
                <span className='text-[#FF6636] '>OUR ONE BILLION MISSION</span>
                <h1 className='text-[var(--primary-color)] font-[600] lg:text-[40px] text-[30px] p-0 m-0 leading-none'>Our one billion mission sounds bold, We agree.</h1>
                <p className='text-[#4E5566] font-[400] lg:text-[16px] text-[12px]'>"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</p>
            </div>
        
        </div>
     <div className='bg-[var(--secondary-color)] col-span-12  flex flex-col  lg:flex-row gap-4 px-5 lg:px-[10rem] items-center py-[5rem]'>
  <div className='flex flex-col justify-start order-2 w-full gap-4 lg:order-1'>
    <span className='text-[#FF6636]'>OUR GALLERY</span>
    <h1 className='text-[var(--primary-color)] font-[600] lg:text-[40px] text-[30px] p-0 m-0 leading-none'>We’ve been here almost 15 years</h1>
    <p className='text-[#4E5566] font-[400] text-[16px]'>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula. torquent per conubia nostra.</p>
    <Link to="#" className='bg-[#FF6636] text-white px-8 py-2 w-fit flex gap-2 items-center'><span>Join our team</span><FaArrowRight /></Link>
  </div>
<div className="w-full xl:h-[600px] lg:order-2 order-1">
  <div className="relative w-full  xl:w-[800px] lg:h-full ">
    <img 
      src="/img1.png"
      alt="Gallery 1"
      className="hidden xl:block absolute w-[15rem] h-[10rem] object-cover shadow-lg"
      style={{ top: '15%', left: '13%' }}
    />
    
    <img 
      src="/img2.png" 
      alt="Gallery 2"
      className="hidden xl:block absolute w-[18rem] h-[15rem] object-cover shadow-lg"
      style={{ top: '1.5%', right: '20%' }}
    />
    
    <img 
      src="/img3.png"
      alt="Gallery 3"
      className="hidden xl:block absolute w-[8rem] h-[10rem] object-cover shadow-lg"
      style={{ top: '15%', right: '3%' }}
    />
    
    <img 
      src="/img4.png" 
      alt="Gallery 4"
      className="hidden xl:block absolute w-[10rem] h-[15rem] object-cover shadow-lg"
      style={{ top: '43%', left: '5%' }}
    />
    
    <img 
      src="/img5.png" 
      alt="Gallery 5"
      className="hidden xl:block absolute w-[22rem] h-[20rem] object-cover shadow-lg"
      style={{ top: '43%', right: '30%' }}
    />
    
    <img 
      src="/img6.png"
      alt="Gallery 6"
      className="hidden xl:block absolute w-[14rem] h-[8rem] object-cover shadow-lg"
      style={{ top: '43%', right: '0%' }}
    />
    
    <img 
      src="/img7.png"
      alt="Gallery 7"
      className="hidden xl:block absolute w-[10rem] h-[10rem] object-cover shadow-lg"
      style={{ top: '69%', right: '8%' }}
    />

    <div className="flex flex-wrap justify-center gap-2 xl:hidden">
      {dataa.image.map((img, i) => (
        <img key={i} src={img} alt={`Gallery ${i + 1}`} className="w-[9rem] h-[6rem] object-cover  shadow" />
      ))}
    </div>
  </div>
</div>
        </div>
    <div className=" relative  col-span-10 col-start-2 py-[5rem] gap-5">
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
                      1024: { slidesPerView: 3 },
                    }}
                    modules={[Navigation]}
                    className="custom-swiper"
                  >
                    
                     
      {data?.map((item, index) => (
         <SwiperSlide key={index}>
        <Comment
          key={index}
          name= {item.full_name}
          image={item.image}
          rating={item.rating}
          text1={item.body}
    
        />
           </SwiperSlide>
              ))}
            </Swiper>
    
    </div>
    </div>
  )
}
 

export default About

 function Statistics({icon,text1,text2}) {
    return(
        <div className='flex gap-4'>
            <div>{icon}</div>
            <div>
                <h1 className='text-[var(--primary-color)] text-[32px] font-[600]'>{text1}</h1>
                <p className='text-[#4E5566] text-[16px] font-[500]'>{text2}</p>
            </div>
        </div>
    )
}