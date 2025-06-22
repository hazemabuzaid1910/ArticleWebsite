import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Data from "../data";
import BreadCrumb from '../components/BreadCrumb';

function FAQs() {
const data =new Data;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); 
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null); 

  const toggleQuestion = (index) => {
    setActiveQuestionIndex(index === activeQuestionIndex ? null : index);
  };

  return (
    <div className='grid grid-cols-12 gap-5 pb-5'>
      <div className='col-span-12'>
        <BreadCrumb name_page="FAQs"/> 
      </div>
        
<h1 className='col-span-10 col-start-2 py-10 font-[600] text-center text-[var(--primary-color)] text-[28px] lg:text-[40px]'>Frequently asked questions</h1>

      <div className='col-span-12 gap-8 lg:col-span-2 lg:col-start-2 '>
        <ul className=' whitespace-nowrap lg:whitespace-normal  h-fit flex lg:flex-col lg:gap-0 gap-5 lg:overflow-x-hidden overflow-x-auto lg:border border-b-2  border-[#E9EAF0]'>
          {data.Category.map((category, index) => (
            <li key={index} className='lg:border-b border-[#E9EAF0]'>
              <button
                className={`w-full text-left px-4 py-3 text-[var(--primary-color)] hover:bg-[#FF6636] hover:text-white transition-all duration-200 ${activeCategoryIndex === index ? "bg-[#FF6636] text-white" : ""}`}
                onClick={() => {
                  setActiveCategoryIndex(index);
                  setActiveQuestionIndex(null);

                  
                }}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
    </div>

        <div className='flex flex-col col-span-10 col-start-2 gap-4 lg:col-span-5 lg:col-start-4 '>
          {data.Category[activeCategoryIndex].faqs.map((item, index) => (
            <div key={index} className='border border-[#E9EAF0] rounded-md'>
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full flex justify-between items-center px-6 py-4 text-left font-semibold transition duration-300 ${
                  activeQuestionIndex === index ? "bg-[var(--secondary-color)] text-[var(--primary-color)]" : "bg-[var(secondary-color)] text-[var(--primary-color)]"
                }`}
              >
                {item.question}
                <span>{activeQuestionIndex === index ? <FaArrowUp /> : <FaArrowDown />}</span>
              </button>
              {activeQuestionIndex === index && (
                <div className='px-6 pb-4 text-[var(--p-color)] transition duration-500'>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
     <div className='flex flex-col col-span-10 col-start-2 lg:col-span-3 lg:col-start-9 bg-[var(--secondary-color)] p-5 '>
        <h1 className='text-[var(--primary-color)] text-[18px] font-[500]'>Didn’t find your answer?</h1>
        <p className='text-[var(--p-color)] text-[12px] font-[400]'>
          Don’t worry, write your question here and our support team will help you.
        </p>
        <form className='flex flex-col gap-4 py-5'>
          <input type="text" placeholder='Subject' className='px-4 py-2 bg-[var(--card-bg)] text-[var(--p-color)] focus:outline-none' />
          <textarea placeholder='Message' rows={5} className='px-4 py-2 bg-[var(--card-bg)] text-[var(--p-color)] focus:outline-none'></textarea>
          <button className='bg-[#FF6636] text-white py-2 px-4 w-fit'>Submit question</button>
        </form>
      </div>
      </div>
  );
}

export default FAQs;
