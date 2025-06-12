import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

// بيانات منظمة حسب الفئات
const categories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "Nulla tempor odio ut fringilla",
        answer: "Proin quis elementum velit, eget efficitur nulla..."
      },
      {
        question: "Donec malesuada",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
      }
    ]
  },
    {
    title: "Quisque ",
    faqs: [
      {
        question: "Ut ullamcorper est sit amet quam aliquet mattis.",
        answer: "Proin quis elementum velit, eget efficitur nulla..."
      },
      {
        question: "Donec malesuada",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
      }
    ]
  },
   {
    title: "Donec malesuada ",
    faqs: [
      {
        question: "Vestibulum pellentesque ex magna.",
        answer: "Proin lacinia lobortis metus, ut faucibus eros ullamcorper et."
      },
      {
        question: "Donec malesuada",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
      }
    ]
  },
      {
    title: "Etiam eu libero elementum ",
    faqs: [
      {
        question: "Nulla tempor odio ut fringilla",
        answer: "Proin quis elementum velit, eget efficitur nulla..."
      },
      {
        question: "Donec malesuada",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
      }
    ]
  },
  {
    title: "Technical Support",
    faqs: [
      {
        question: "Quisque",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
      },
      {
        question: "Toquam, in accumsan",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
      }
    ]
  }
];

function FAQs() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); 
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null); 

  const toggleQuestion = (index) => {
    setActiveQuestionIndex(index === activeQuestionIndex ? null : index);
  };

  return (
    <div className=''>
      <div className='bg-[var(--secondary-color)] flex   justify-center items-center py-[2rem] gap-4 flex-col w-full'>
        <h1 className='text-[var(--primary-color)] text-[24px] font-[600]'>FAQs</h1>
        <div>
          <Link to="/" className="text-[var(--p-color)]"><span>Home /</span></Link>
          <span className='text-[var(--primary-color)]'> FAQs</span>
        </div>
      </div>

      <div className='sm:px-[12rem] sm:py-[5rem] flex flex-col sm:flex-row gap-8'>
        <ul className='sm:w-[400px] h-fit flex flex-col border border-[#E9EAF0]'>
          {categories.map((category, index) => (
            <li key={index} className='border-b border-[#E9EAF0]'>
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

        <div className='sm:w-[800px] flex flex-col gap-4'>
          {categories[activeCategoryIndex].faqs.map((item, index) => (
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
     <div className='flex flex-col bg-[var(--secondary-color)] p-5 '>
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
    </div>
  );
}

export default FAQs;
