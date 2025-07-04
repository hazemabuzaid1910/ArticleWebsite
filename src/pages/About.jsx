import React from 'react'
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

function About() {
  const data=new Data();
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
    <div>
           <BreadCrumb name_page="About"/> 

        <div className='flex items-center sm:gap-20 gap-5 sm:flex-row flex-col sm:px-[var(--primary-padding)] px-5 py-5 sm:py-[5rem] w-full justify-between'>
            <div className='order-2 w-full sm:order-1'>
            <div className='flex flex-col justify-center gap-10 '>
                <div className=''>    
              <h1 className='sm:text-[80px] text-[70px] text-[#E9EAF0] p-0 m-0 leading-none font-[600]'>2011-2025</h1>
              <h1 className='text-[var(--primary-color)] sm:text-[48px] text-[30px] font-[600] p-0 m-0 leading-none'>We share knowledge with the world</h1>
             </div>
              <p className='sm:text-[20px] text-[18px] text-[var(--p-color)]'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.  </p>
            </div>
            </div>
            <div className='order-1 w-full h-full sm:order-2'>
                 <img src="/heroAbout.png" alt="" />
            </div>
           
        </div>
            <Companies/>
<div className="w-full py-4 bg-[var(--main-bg)] overflow-x-hidden">
  <div className="px-5 sm:px-[var(--primary-padding)]">
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





        
        <div className='bg-[#FFEEE8]  flex flex-col sm:flex-row items-center sm:px-[10rem] gap-10 mt-[5rem] '>
            <div className='w-full h-full '>
                <img src="/two-business-partners-working-office 1.svg" alt="" className='w-full h-full '/>
            </div>
            <div className='flex flex-col w-full gap-4 px-5 py-4 sm:px-0 sm:py-0'>
                <span className='text-[#FF6636] '>OUR ONE BILLION MISSION</span>
                <h1 className='text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none'>Our one billion mission sounds bold, We agree.</h1>
                <p className='text-[#4E5566] font-[400] sm:text-[16px] text-[12px]'>"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</p>
            </div>
        
        </div>
     <div className='bg-[var(--secondary-color)] flex flex-col  sm:flex-row gap-4 px-5 sm:px-[10rem] items-center py-[5rem]'>
  <div className='flex flex-col justify-start order-2 w-full gap-4 sm:order-1'>
    <span className='text-[#FF6636]'>OUR GALLERY</span>
    <h1 className='text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none'>We’ve been here almost 15 years</h1>
    <p className='text-[#4E5566] font-[400] text-[16px]'>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula. torquent per conubia nostra.</p>
    <Link to="#" className='bg-[#FF6636] text-white px-8 py-2 w-fit flex gap-2 items-center'><span>Join our team</span><FaArrowRight /></Link>
  </div>
<div className="w-full sm:h-[600px] sm:order-2 order-1">
  <div className="relative w-full  sm:w-[800px] sm:h-full ">
    <img 
      src="/img1.png"
      alt="Gallery 1"
      className="hidden sm:block absolute w-[15rem] h-[10rem] object-cover shadow-lg"
      style={{ top: '15%', left: '13%' }}
    />
    
    <img 
      src="/img2.png" 
      alt="Gallery 2"
      className="hidden sm:block absolute w-[18rem] h-[15rem] object-cover shadow-lg"
      style={{ top: '1.5%', right: '20%' }}
    />
    
    <img 
      src="/img3.png"
      alt="Gallery 3"
      className="hidden sm:block absolute w-[8rem] h-[10rem] object-cover shadow-lg"
      style={{ top: '15%', right: '3%' }}
    />
    
    <img 
      src="/img4.png" 
      alt="Gallery 4"
      className="hidden sm:block absolute w-[10rem] h-[15rem] object-cover shadow-lg"
      style={{ top: '43%', left: '5%' }}
    />
    
    <img 
      src="/img5.png" 
      alt="Gallery 5"
      className="hidden sm:block absolute w-[22rem] h-[20rem] object-cover shadow-lg"
      style={{ top: '43%', right: '30%' }}
    />
    
    <img 
      src="/img6.png"
      alt="Gallery 6"
      className="hidden sm:block absolute w-[14rem] h-[8rem] object-cover shadow-lg"
      style={{ top: '43%', right: '0%' }}
    />
    
    <img 
      src="/img7.png"
      alt="Gallery 7"
      className="hidden sm:block absolute w-[10rem] h-[10rem] object-cover shadow-lg"
      style={{ top: '69%', right: '8%' }}
    />

    <div className="flex flex-wrap justify-center gap-2 sm:hidden">
      {data.image.map((img, i) => (
        <img key={i} src={img} alt={`Gallery ${i + 1}`} className="w-[9rem] h-[6rem] object-cover  shadow" />
      ))}
    </div>
  </div>
</div>

        </div>
    <div className="flex flex-col sm:flex-row px-5 sm:px-[var(--primary-padding)] py-[5rem] gap-5">
      {[1,2,3].map((item, index) => (
        <Comment
          key={index}
          name= "Sundar Pichai"
          text1="Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers."
          comp="Google"
          desc="Chief Chairman of "
        />
      ))}
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