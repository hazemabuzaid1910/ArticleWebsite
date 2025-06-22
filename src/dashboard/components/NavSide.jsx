import React from 'react';
import {
  FaHome, FaSearch, FaUsers, FaFileAlt,
  FaPen, FaChartLine, FaEye, FaEdit,
  FaTrash, FaPlus
} from 'react-icons/fa';
import { LuUsersRound } from 'react-icons/lu';
import { RiArticleLine } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb';
import { TfiWrite } from 'react-icons/tfi';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function NavSide({ isCollapsed, setIsCollapsed }) {
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: 'Home', icon: <FaHome size={22} />, id: 'home', path: '/dashboard/' },
    { name: 'Users', icon: <LuUsersRound size={22} />, id: 'users', path: '/dashboard/users' },
    { name: 'Articles', icon: <RiArticleLine size={22} />, id: 'articles', path: '/dashboard/articles' },
    { name: 'Writers', icon: <TfiWrite size={22} />, id: 'writers', path: '/dashboard/writers' },
    { name: 'Logout', icon: <TbLogout2 size={25} />, id: 'logout', path: '/' }
  ];

  return (
    <div
      className={`h-screen rounded-xl   text-white bg-[var(--primary-color)] m-2 flex flex-col justify-between transition-all duration-300 overflow-hidden z-50
      ${isCollapsed ? "w-[5rem] px-2" : "w-[20rem] px-5"}`}
    >
      <div className="flex items-center justify-center w-full py-10 border-b border-gray-600">
        {!isCollapsed ? (
          <img src='/LOGO2.svg' alt=''/>
        ) : (
                   <img src='/GraduationCap.png' alt=''/>

        )}
      </div>

      {!isCollapsed && (
        <div className="flex items-center w-full px-4 py-2 mt-5 bg-gray-700 border border-gray-600 bg-opacity-20 rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-white placeholder-gray-400 bg-transparent border-none outline-none"
          />
          <FaSearch color="#f97316" size={20} />
        </div>
      )}

      <div className="flex-1 w-full p-2 mt-4 overflow-hidden">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <PageLink
              key={item.id}
              name={item.name}
              icon={item.icon}
              isCollapsed={isCollapsed}
              path={item.path}
            />
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-end p-2">
        <button
          onClick={toggleCollapse}
          className="p-2 text-white bg-white rounded-full cursor-pointer"
        >
          {isCollapsed ? (
            <IoChevronForward color="#f97316" size={25} />
          ) : (
            <IoChevronBack color="#f97316" size={25} />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavSide;

function PageLink({ name, icon, isCollapsed, path }) {
  return (
    <li>
      <Link
        to={path}
        className={`w-full flex items-center hover:bg-[#ffffff23] focus:bg-[#ffffff23]  ${
          isCollapsed ? "justify-center" : "justify-start"
        } gap-4 text-[18px] p-3 rounded-xl transition-all duration-200 `}
      >
        {icon}
        {!isCollapsed && <span>{name}</span>}
      </Link>
    </li>
  );
}
