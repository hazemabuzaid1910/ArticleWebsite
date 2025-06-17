import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import '../i18n'
import { useTranslation } from 'react-i18next';
import useAuthStore from '../store/AuthStore';
import { useRef,useEffect } from 'react';

function Navbar({ toggleDarkMode, isDarkMode }) {
const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const menuRef = useRef(null);

  const onLogout = () => {
  logout(); 
  setIsOpen(false);
};
  const location = useLocation();
  const [t,i18n]=useTranslation()
 const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isErrorPage = location.pathname === "/error";
    const signIn = location.pathname === "/signin";
    const createAccount = location.pathname === "/create-account";
         const isArabic = i18n.language === "ar";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50'>
      {!(isErrorPage || signIn || createAccount) &&(<div className='bg-[var(--primary-bg)] text-white px-6  lg:px-20  lg:flex hidden justify-between items-center'>
        <ul className='hidden gap-4 lg:flex'>
          {[{page :t("Home"),path:"/"}, {page:t("Articles"),path:"/faqs"}, {page:t("vacancies"),path:"/jobs"}, {page:t("about_us"),path:"/about"}, {page:t("contact"),path:"/contact"}].map((item,index) => (
            <li key={index}>
              <Link to={item.path} className="relative inline-block px-4 py-4 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[2px] before:bg-orange-500 before:scale-x-0 hover:before:scale-x-100 focus:before:scale-x-100 before:origin-left before:transition-transform before:duration-300">
                {item.page}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='hidden gap-4 sm:flex'>
          {[{icon :FaFacebookF,path:""},{icon: FaInstagram,path:""}, {icon:FaLinkedinIn,path:""}, {icon:FaTwitter,path:""}].map((Icon, index) => (
            <li key={index}>
              <Link to="#"><Icon.icon /></Link>
            </li>
          ))}
        </ul>

      
      </div>)}

    <div className='bg-[var(--main-bg)] py-3 border-b-2 border-[var(--main-bg)] px-6 lg:px-20 flex justify-between items-center'>
     <div className="flex items-center justify-between w-full lg:w-auto">
    <Link to="/">
      <img src={isDarkMode? "/LOGO2.svg":"/LOGO.svg"} alt="Logo" className="h-10" />
    </Link>
    <div className='flex items-center gap-4'>
                    <button
  onClick={toggleDarkMode}
  className="items-center bg-white rounded-full cursor-pointer lg:hidden sm:flex duration-400"
>
  <div
    className={`w-6 h-6 rounded-full bg-[var(--primary-color)]  text-sm flex items-center justify-center  duration-300 
      
    }`}
  >
    {isDarkMode ? "🌙" : "☀️"}
  </div>
</button>
    <div className="text-xl cursor-pointer lg:hidden" onClick={() => setMenuOpen(true)}>
      <FaBars color="var(--primary-color)"/>
 
    </div>
   
  </div>
  </div>

  <div className='items-center hidden gap-4 sm:flex'>
        <button
  onClick={toggleDarkMode}
  className="flex items-center w-16 h-4 px-1 transition bg-white border rounded-full cursor-pointer duration-400 dark:bg-white"
>
<div
  className={`w-6 h-6 rounded-full bg-[var(--primary-color)] text-sm flex items-center justify-center transition-transform duration-300 ${
    isArabic ? (isDarkMode ? 'translate-x-1' : '-translate-x-10') : (isDarkMode ? '-translate-x-1' : 'translate-x-10')
  }`}
>
    {isDarkMode ? "🌙" : "☀️"}
  </div>
</button>
{user ? (
 <div className="relative " ref={menuRef}>
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
        <span className="text-[var(--primary-color)] font-semibold">{user.email}</span>
        <img src="/Avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
      </div>

      {isOpen && (
        <ul className="absolute right-0 z-50 w-40 mt-2 bg-white  rounded shadow-lg border-b-4 border-[var(--orange-color)]">
          <li>
            <Link
              to="/myaccount"
              className=" relative block px-4 py-2 before:content-[''] transition-all duration-200 before:origin-top before:scale-y-0 hover:before:scale-y-100  before:absolute  before:w-1  before:bg-orange-500 before:left-0 before:top-0 before:h-full text-gray-700 hover:bg-gray-100 "
            >
              My Account
            </Link>
          </li>
          <li>
         <Link
              to="/myarticles"
              className=" relative block px-4 py-2 before:content-[''] transition-all duration-200 before:origin-top before:scale-x-0 hover:before:scale-x-100  before:absolute  before:w-1  before:bg-orange-500 before:left-0 before:top-0 before:h-full text-gray-700 hover:bg-gray-100 "
            >
              My Articles
            </Link>
          </li>
          <li>
         <button
  onClick={() => setShowLogoutConfirm(true)}
  className="relative w-full px-4 py-2 text-red-600 cursor-pointer text-start"
>
  Log out
</button>
          </li>
        </ul>
      )}
      {showLogoutConfirm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000034] bg-opacity-50">
    <div className="p-6 text-center bg-white rounded shadow-lg px-[5rem] py-[5rem]">
      <p className="mb-4 font-semibold text-gray-800">Are you sure you want to log out?</p>
      <div className="flex justify-around gap-5">
        <button
          onClick={() => {
            onLogout();
            setShowLogoutConfirm(false);
          }}
          className="px-14 py-2 text-white bg-[var(--orange-color)] cursor-pointer rounded "
        >
          Confirm
        </button>
        <button
          onClick={() => setShowLogoutConfirm(false)}
          className="py-2 text-gray-800 bg-gray-300 rounded cursor-pointer px-14 hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>

  
) : (
  <>
    <Link to="/create-account" className='py-2 bg-[#fad4c6] text-[var(--orange-color)] px-5 font-bold hover:bg-[#FF6636] hover:text-white focus:bg-[--orange-color] focus:text-white transition duration-300'>
      {t("create_account")}
    </Link>
    {!signIn && (
      <Link to="/signin" className='py-2 bg-[var(--orange-color)] hover:text-white hover:bg-[var(--orange-color)] focus:bg-[--orange-color] focus:text-white text-white px-5 font-bold'>
        {t("sign_in")}
      </Link>
    )}
  </>
)}

 
  </div>
</div>


      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1D2026] text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        <div className="flex items-center justify-between p-4 border-b border-white">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-xl">
            <FaTimes />
          </button>
          
        </div>
        <ul className="flex flex-col gap-4 p-4">
          
          {[{page :"Home",path:"/"}, {page:'Articles',path:"#"}, {page:'Vacancies',path:"/jobs"}, {page:'About Us',path:"/about"}, {page:'Contact',path:"/contact"}].map((item,index) => (
            <li key={index}>
              <Link to={item.path} onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-[#333] rounded">
                {item.page}
              </Link>
            </li>
          ))}
          <hr className="my-2 border-gray-600" />
          <li className="mt-4">
            <Link to="/create-account" className='block bg-[#FFEEE8] text-[#FF6636] px-4 py-2 font-bold rounded mb-2'>
              Create Account
            </Link>
           <Link to="/signin" className='block bg-[#FF6636] text-white px-4 py-2 font-bold rounded'>
              Sign In
            </Link>
          </li>
     
        </ul>
        <ul className='flex justify-center gap-10 mt-5 flex-end'>
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
            <li key={i}>
              <Link to="#"><Icon /></Link>
            </li>
          ))}
        </ul>
</div>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
        ></div>
        
      )}
    </header>
  );
}

export default Navbar;

// email: 'eve.holt@reqres.in',
// password: 'cityslicka'