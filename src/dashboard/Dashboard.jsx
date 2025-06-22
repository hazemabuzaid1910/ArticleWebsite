import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NavSide from './components/NavSide';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Sidebar ثابت */}
      <div className="fixed top-0 left-0 z-50 h-screen">
        <NavSide isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* المحتوى الرئيسي */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isCollapsed ? 'ml-[5rem]' : 'ml-[20rem]'
        }`}
      >
        {/* Navbar ثابت */}
        <div
          className={`fixed top-0 transition-all duration-300 ${
            isCollapsed ? 'left-[5rem]' : 'left-[20rem]'
          } right-0 h-[4rem] z-40 bg-white shadow`}
        >
          <Navbar />
        </div>

        {/* محتوى الصفحة القابل للتمرير */}
        <main className="mt-[5rem] h-[calc(100vh-4rem)] overflow-y-auto p-4 px-10 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
