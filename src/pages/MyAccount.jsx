import React, { useState } from 'react';
import { PiNotebookBold, PiUsersLight } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";

function MyAccount() {
  const [activeTab, setActiveTab] = useState(0);

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
  ];

  const tabs = ["Information", "Address", "Favourite"];
  const tabContents = [
    "Content for Step 1",
    "Content for Step 2",
    "Content for Step 3",
  ];

  return (
    <div className='w-full'>
      <div className='flex flex-col w-full'>
<div className='relative w-full bg-gradient-to-b from-[#ff6836be]  via-[#e6522581] to-[#ff65363e] h-[15rem]'>
          <div className='relative flex flex-row items-center w-full px-[var(--primary-padding)]'>
            <div className="w-[300px] border-[20px] mt-[5rem] border-[var(--orange-color)] h-[300px] overflow-hidden rounded-full">
              <img src="/Image (1).png" alt="Avatar" className="object-cover w-full h-full" />
            </div>
            <h1 className='text-[45px] ml-1 mt-[10rem] text-[var(--primary-color)]'>John Doe</h1>
          </div>
        </div>

        <div className="flex justify-end w-full gap-10 px-[5rem] mt-[5rem]">
          {statsData.map((stat, index) => (
            <Statistics
              key={index}
              icon={stat.icon}
              text1={stat.text1}
              text2={stat.text2}
            />
          ))}
        </div>

        <div className="w-full px-[5rem] mt-[5rem]">
          <div className="flex gap-4 border-b-2 border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 font-medium text-lg ${
                  activeTab === index
                    ? "border-b-4 border-[var(--primary-color)] text-[var(--primary-color)]"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 text-xl text-gray-700">
            {tabContents[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;

function Statistics({ icon, text1, text2 }) {
  return (
    <div className='flex gap-4'>
      <div>{icon}</div>
      <div>
        <h1 className='text-[var(--primary-color)] text-[32px] font-[600]'>{text1}</h1>
        <p className='text-[#4E5566] text-[16px] font-[500]'>{text2}</p>
      </div>
    </div>
  );
}
