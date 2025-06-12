import React  from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaArrowDown,
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRight, FaApple, FaGooglePlay } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import i18n from '../i18n'
const Footer = () => {
const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    if(e.target.value==='ar'){
      document.body.style.direction= 'rtl'
    } 
    else {
      document.body.style.direction= 'ltr'
    }
    i18n.changeLanguage(e.target.value);
  };
  
  return (
    <footer className="bg-[var(--primary-bg)]">
      <div className="flex flex-col items-center justify-between gap-5 px-5 py-20 sm:px-40 sm:flex-row">
        <div className="sm:w-[600px] w-full">
          <h1 className="relative text-2xl font-bold text-center text-white sm:text-4xl sm:text-start ">
          { t("footer_statement")}
            <span className="text-[var(--orange-color)] ">{t("the_world")}</span> 
          </h1>
        </div>
        <div className="flex sm:gap-[100px] gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white sm:text-4xl">6.3k</h1>
            <p className="text-[#B7BAC7] sm:text-[16px] text-[8px]">Online articles</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white sm:text-4xl">26k</h1>
            <p className="text-[#B7BAC7] sm:text-[16px] text-[8px]">Online articles</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white sm:text-4xl">99%</h1>
            <p className="text-[#B7BAC7] sm:text-[16px] text-[8px]">Online articles</p>
          </div>
        </div>
      </div>
      <hr className="text-[#363B4780]" />
      <div className="flex flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row sm:px-40">
        <div className="flex flex-col items-center gap-4 sm:items-start w-90">
          <Link to="#">
            <img src="/LOGO2.svg" alt="logo" />
          </Link>
          <p className="text-[#8C94A3] sm:text-start text-center">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <ul className="flex gap-4">
            <li>
              <Link to="#" className="">
                <FaFacebookF className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[var(--orange-color)] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaInstagram className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[var(--orange-color)] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaLinkedinIn className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[var(--orange-color)] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaTwitter className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[var(--orange-color)] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaYoutube className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[var(--orange-color)] transetion duration-300 " />
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="flex flex-col gap-5 text-center sm:text-start sm:flex-row">
          <ul className="flex flex-col items-center w-40 sm:items-start">
            <h1 className="text-white font-bold text-[18px] mb-4">
              Top 4 Category
            </h1>
            <FooterItem name="Development" />
            <FooterItem name="Finance & Accounting" />
            <FooterItem name="Design" />
            <FooterItem name="Business" />
          </ul>
          <ul className="flex flex-col items-center w-40 sm:items-start">
            <h1 className="text-white font-bold text-[18px] mb-4">
              Quick Links
            </h1>
            <FooterItem name="About" />
            <FooterItem name="Become an author" />
            <FooterItem name="Contact" />
            <FooterItem name="Career" />
          </ul>
          <ul className="flex flex-col items-center w-40 sm:items-start">
            <h1 className="text-white font-bold text-[18px] mb-4">Support</h1>
            <FooterItem name="Help Center" />
            <FooterItem name="FAQs" />
            <FooterItem name="Design" />
            <FooterItem name="Business" />
          </ul>
        </div>
        <div className="flex flex-col gap-2 mb-5 text-center w-50">
          <h1 className="text-white font-bold text-[14px] mb-4">
            DOWNLOAD OUR APP
          </h1>
          <Link
            to="#"
            className="flex text-white items-center gap-2 bg-[#363B4766] py-1 justify-center hover:bg-[var(--orange-color)] transition duration-300"
          >
            <FaApple className="text-[50px]" />

            <div className="flex flex-col">
              <p className="text-[12px] text-[#B7BAC7]">Download now</p>
              <h1>App Store</h1>
            </div>
          </Link>
          <Link
            to="#"
            className="flex text-white items-center gap-2 bg-[#363B4766] py-2 justify-center hover:bg-[var(--orange-color)] transition duration-300"
          >
            <FaGooglePlay className="text-[50px]" />

            <div className="flex flex-col">
              <p className="text-[12px] text-[#B7BAC7]">Download now</p>
              <h1>App Store</h1>
            </div>
          </Link>
        </div>
      </div>
      <hr className="text-[#363B4780]" />
      <div className="flex justify-between py-4 text-center flex-col items-center gap-5  sm:flex-row sm:px-[10rem]">
        <p className="text-[#8C94A3] sm:order-1 order-2">© 2025 - All rights reserved</p>
      <div className="relative order-1 inline-block w-48 sm:order-2">
  <select
     onChange={handleChange}
   defaultValue={i18n.language}
    className="w-full appearance-none border bg-[#1D2026] border-[#B7BAC7] text-[#E9EAF0] px-4 py-2 pr-10 rounded focus:outline-none"
  >
    <option value="ar" >العربية</option>
    <option value="en">English</option>
  </select>

  {/* سهم مخصص */}
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
  <IoIosArrowDown color="#E9EAF0"/>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;

const FooterItem = ({ name }) => {
    let isArabic=false
    if(i18n.language==="ar"){
      
      isArabic=true;
    }
  return(
  <li className="sm:w-full group">
    <Link
      to="#"
      className="flex items-center w-full justify-between text-[#8C94A3] border-b-2 border-transparent hover:border-[var(--orange-color)] transition duration-300 py-2"
    >
      <span className="text-[14px]">{name}</span>
      {isArabic ?<FaArrowLeft className="hidden transition duration-200 group-hover:flex" />:<FaArrowRight className="hidden transition duration-200 group-hover:flex" />}
    </Link>
  </li>
)};
