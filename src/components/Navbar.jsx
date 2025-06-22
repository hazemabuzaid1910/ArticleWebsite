import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBars,
  FaTimes,
  FaRegMoon,
  FaHome,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../i18n";
import { useTranslation } from "react-i18next";
import useAuthStore from "../store/AuthStore";
import { useRef, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";
import { GrServices } from "react-icons/gr";

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
  const [t, i18n] = useTranslation();
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
    <header className="sticky top-0 z-50">
      {!(isErrorPage || signIn || createAccount) && (
        <div className="lg:grid grid-cols-12 bg-[var(--primary-bg)] text-white hidden justify-between items-center">
          <ul className="hidden grid-cols-6 col-span-6 col-start-2 gap-4 lg:grid">
            {[
              { page: t("Home"), path: "/" },
              { page: t("Articles"), path: "/faqs" },
              { page: t("vacancies"), path: "/jobs" },
              { page: t("about_us"), path: "/about" },
              { page: t("contact"), path: "/contact" },
            ].map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={index} className="col-span-1">
                  <Link
                    to={item.path}
                    className={`relative inline-block text-center w-full py-4 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[2px] before:bg-orange-500 before:origin-left before:transition-transform before:duration-300 ${
                      isActive
                        ? "before:scale-x-100"
                        : "before:scale-x-0 hover:before:scale-x-100 focus:before:scale-x-100"
                    }`}
                  >
                    {item.page}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="hidden col-span-2 col-start-11 gap-4 lg:flex">
            {[
              { icon: FaFacebookF, path: "" },
              { icon: FaInstagram, path: "" },
              { icon: FaLinkedinIn, path: "" },
              { icon: FaTwitter, path: "" },
            ].map((Icon, index) => (
              <li key={index}>
                <Link to="#">
                  <Icon.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-[var(--main-bg)] py-3 border-b-2 border-[var(--main-bg)]   grid grid-cols-12 items-center">
        <div className="items-center justify-between w-full col-span-4 col-start-2 lg:w-auto">
          <Link to="/">
            <img
              src={isDarkMode ? "/LOGO2.svg" : "/LOGO.svg"}
              alt="Logo"
              className="h-10"
            />
          </Link>
        </div>
        <div className="flex items-center col-span-2 col-start-10 gap-4 lg:hidden sm:col-start-11 md:col-start-11">
          <button
            onClick={toggleDarkMode}
            className="items-center bg-white rounded-full cursor-pointer duration-400"
          >
            <div
              className={`w-5 h-5 rounded-full bg-[#fad4c6] text-sm flex items-center justify-center  duration-300 
      
    }`}
            >
              {isDarkMode ?   <IoSunnyOutline color="var(--orange-color)"/>:<FaRegMoon color="var(--orange-color)"/>}
            </div>
          </button>
          <div
            className="text-xl cursor-pointer lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars color="var(--primary-color)" />
          </div>
        </div>
        <div className={`items-center hidden col-span-4 col-start-9 gap-4 ${isArabic?"pr-17":"pl-6"} lg:flex`}>
          <button
            onClick={toggleDarkMode}
            className={`flex items-center justify-between w-14 h-6 mx-2 transition bg-[#fad4c6] border border-[var(--orange-color)] rounded-full cursor-pointer `}
          >
            <div
              className={`w-4 h-4 rounded-full bg-[var(--orange-color)] text-sm flex items-center justify-center transition-transform duration-300 ${
                isArabic
                  ? isDarkMode
                    ? "-translate-x-1"
                    : "-translate-x-9"
                  : isDarkMode
                  ? "translate-x-1"
                  : "translate-x-9"
              }`}
            >
              
            </div>
            <div className={`transition-transform duration-300
            ${isArabic
                  ? isDarkMode
                    ? "translate-x-1"
                    : "translate-x-9"
                  : isDarkMode
                  ? "-translate-x-1"
                  : "-translate-x-9"
            }`}>
              {isDarkMode ?   <IoSunnyOutline color="var(--orange-color)"/>:<FaRegMoon color="var(--orange-color)"/>}
            </div>
          </button>
          {user ? (
            <div className="relative " ref={menuRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleMenu}
              >
                <span className="text-[var(--primary-color)] font-semibold">
                  {user.email}
                </span>
                <img
                  src="/Avatar.png"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
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
                    <p className="mb-4 font-semibold text-gray-800">
                      Are you sure you want to log out?
                    </p>
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
         
      <div className="flex items-center gap-2">
         {signIn && ( <span className="text-sm">{t("no_account")}</span>   )}
      {!createAccount&&<Link
        to="/create-account"
        className="py-2 px-5 bg-[#fad4c6] text-[var(--orange-color)] font-bold hover:bg-[#FF6636] hover:text-white transition duration-300"
      >
        {t("create_account")}
      </Link>}
      </div>
 
   
      <div className="flex items-center gap-2">
        {createAccount && ( <span className="text-sm">{t("already_have_account")}</span> )}
        {!signIn&&<Link
          to="/signin"
          className="py-2 px-5 bg-[var(--orange-color)] text-white font-bold hover:bg-[#d95429] transition duration-300"
        >
          {t("sign_in")}
        </Link>}
      </div>
   
  </>
          )}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--secondary-color)] text-[var(--primary-color)] transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#ff8b68]">
          <span className="text-lg font-bold">
            <img src="/GraduationCap.png" alt="" />
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-xl">
            <FaTimes color="#fd7e54"/>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4">
           <li className="flex gap-2 mt-4">
            <Link
              to="/create-account"
              className="block bg-[#FFEEE8] text-[#FF6636] px-4 py-2 text-[14px] font-bold rounded "
            >
              Create Account
            </Link>
            <Link
              to="/signin"
              className="block bg-[#FF6636] text-white px-4 py-2 text-[14px] font-bold rounded"
            >
              Sign In
            </Link>
          </li>
          {[
            { page: "Home", path: "/" ,icon:<FaHome size={22} color="#fd7e54"/>},
            { page: "Articles", path: "/faqs" ,icon:<RiArticleLine size={22} color="#fd7e54"/>},
            { page: "Vacancies", path: "/jobs",icon:<GrServices size={22} color="#fd7e54"/> },
            { page: "About Us", path: "/about",icon:<FaRegQuestionCircle size={22} color="#fd7e54"/> },
            { page: "Contact", path: "/contact",icon:<MdConnectWithoutContact size={22} color="#fd7e54"/> },
          ].map((item, index) => (
            <li key={index}>
            
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="flex font-[500] items-center gap-4 px-2 py-2 border-b border-[#fcd9cd] "
              >
                {item.icon}
                {item.page}
              </Link>
            </li>
          ))}
         
        </ul>
      <ul className="flex justify-center gap-4 mt-5">
  {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
    <li
      key={i}
      className="flex items-center justify-center w-10 h-10 bg-[#fd7e54] rounded-full"
    >
      <Link to="#" className="text-xl text-white">
        <Icon />
      </Link>
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
