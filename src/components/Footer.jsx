import React from "react";
import logo from "../assets/LOGO2.svg";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRight, FaApple, FaGooglePlay } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-[#1D2026]">
      <div className="flex flex-col items-center justify-between gap-5 px-5 py-20 sm:px-40 sm:flex-row">
        <div className="sm:w-[600px] w-full">
          <h1 className="relative text-2xl font-bold text-center text-white sm:text-4xl sm:text-start ">
            Start writing with 7.2k users around{" "}
            <span className="text-[#FF6636] ">the world</span> .
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
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-[#8C94A3] sm:text-start text-center">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <ul className="flex gap-4">
            <li>
              <Link to="#" className="">
                <FaFacebookF className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[#FF6636] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaInstagram className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[#FF6636] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaLinkedinIn className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[#FF6636] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaTwitter className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[#FF6636] transetion duration-300 " />
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                <FaYoutube className="text-4xl p-2 bg-[#363B4766] text-white hover:bg-[#FF6636] transetion duration-300 " />
              </Link>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="flex flex-col text-center gap-15 sm:text-start sm:flex-row">
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
            <FooterItem name="Development" />
            <FooterItem name="Finance & Accounting" />
            <FooterItem name="Design" />
            <FooterItem name="Business" />
          </ul>
          <ul className="flex flex-col items-center w-40 sm:items-start">
            <h1 className="text-white font-bold text-[18px] mb-4">Support</h1>
            <FooterItem name="Development" />
            <FooterItem name="Finance & Accounting" />
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
            className="flex text-white items-center gap-2 bg-[#363B4766] py-1 justify-center hover:bg-[#FF6636] transition duration-300"
          >
            <FaApple className="text-[50px]" />

            <div className="flex flex-col">
              <p className="text-[12px] text-[#B7BAC7]">Download now</p>
              <h1>App Store</h1>
            </div>
          </Link>
          <Link
            to="#"
            className="flex text-white items-center gap-2 bg-[#363B4766] py-2 justify-center hover:bg-[#FF6636] transition duration-300"
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
      <div className="py-4 text-center">
        <p className="text-[#8C94A3]">© 2025 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

const FooterItem = ({ name }) => (
  <li className="sm:w-full group">
    <Link
      to="#"
      className="flex items-center w-full justify-between text-[#8C94A3] border-b-2 border-transparent hover:border-[#FF6636] transition duration-300 py-2"
    >
      <span className="text-[14px]">{name}</span>
      <FaArrowRight className="hidden transition duration-200 group-hover:flex" />
    </Link>
  </li>
);
