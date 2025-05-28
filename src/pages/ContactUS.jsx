import React from "react";
import { Link } from "react-router-dom";
import fit from "../assets/Fit.png";
import { FaArrowRight, FaTelegram } from "react-icons/fa";
import { PiVoicemail } from "react-icons/pi";
import Branch from "../components/Branch";
import branch from "../assets/Branches.png";
import { AiOutlineSend } from "react-icons/ai";
import map from "../assets/Map.png";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactUS() {
  return (
    <div>
      <div className="bg-[#F5F7FA] flex justify-center items-center py-[2rem] gap-4 flex-col w-full">
        <h1 className="text-[#1D2026] text-[24px] font-[600]">Contact Us</h1>
        <div>
          <Link to="/" className="text-[#6E7485]">
            <span>Home /</span>
          </Link>
          <span className="text-[#1D2026]"> Contact Us</span>
        </div>
      </div>
      <div className=" flex flex-col bg-[#FFFFFF] sm:flex-row sm:gap-40 gap-5 px-5 sm:px-[12rem] items-center justify-between border-b-1 border-[#FFDDD1]">
        <div className="flex flex-col justify-center sm:items-start items-center sm:justify-start order-2 sm:w-[50%] gap-4 sm:order-1">
          <h1 className="text-[#1D2026] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none">
            Connect with us
          </h1>
          <p className="text-[#4E5566] font-[400] text-[16px] text-center sm:text-start">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <Link
            to="#"
            className="bg-[#FF6636] text-white px-8 py-2 w-fit flex gap-2 items-center"
          >
            <MdOutlineMailOutline  size={25}/>
            <span>Copy Email</span>
          </Link>
        </div>
        <div className="order-1 w-full sm:order-2">
          <img src={fit} alt="Gallery 1" className="w-full h-full" />
        </div>
      </div>
      <div className="sm:px-[12rem] h-full py-[5rem] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center ">
          <h1 className="text-[#1D2026] text-[40px] font-[600]">
            Our branches all over the world.
          </h1>
          <p className="text-[#4E5566] text-[14px] font-[400] max-w-md text-center ">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.{" "}
          </p>
        </div>
        <div className="flex flex-col h-full gap-4 px-5 sm:flex-row sm:px-0">
          <Branch
            image={branch}
            text1="mAIN BRANCHE"
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
Duis aute irure, No. 6548"
          />
          <Branch
            image={branch}
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
             Duis aute irure, No. 6548"
          />
          <Branch
            image={branch}
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
            Duis aute irure, No. 6548"
          />
          <Branch
            image={branch}
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
            Duis aute irure, No. 6548"
          />
        </div>
      </div>
      <div className="bg-[#F5F7FA] sm:px-[12rem] sm:py-[5rem]">
        <h1 className="text-center text-[#1D2026] text-[40px] font-[600]">
          Contact us
        </h1>
        <div className="flex flex-col mt-10 sm:flex-row gap-15">
          <div className="p-5 sm:p-0">
            <p>
              Will you be in Los Angeles or any other branches any time soon?
              Stop by the office! We'd love to meet.
            </p>
            <table className="w-full text-sm text-left border-collapse table-auto">
              <tbody>
                <tr className=" border-b-1 border-[#E9EAF0]">
                  <th className="font-semibold text-[#FF6636]  py-10">
                    ADDRESS
                  </th>
                  <td className="text-[#4E5566] py-10 px-15 ">
                    Excepteur sint occaecat cupidatat non proiden. Excepteur
                    sint occaecat.
                  </td>
                </tr>
                <tr className=" border-b-1 border-[#E9EAF0]">
                  <th className="font-semibold text-[#FF6636]  py-10">
                    PHONE NUMBER
                  </th>
                  <td className="text-[#4E5566] py-10 px-15 flex flex-col gap-4">
                    <span>(963) 950-0001</span>
                    <span>(963) 950-0001</span>
                  </td>
                </tr>
                <tr>
                  <th className="font-semibold text-[#FF6636]  py-10">
                    EMAIL ADDRESS
                  </th>
                  <td className="text-[#4E5566] py-10 px-15 flex flex-col gap-4">
                    <span>info@example.com</span>
                    <span>info@example.com</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:w-[70%] p-10 bg-white">
            <form action="" className="">
              <h1 className="text-[#1D2026] text-[24px] font-[500]">
                Get In touch
              </h1>
              <p className="text-[#8C94A3] text-[16px] font-[400]">
                Feel free contact with us, we love to make new partners &
                friends
              </p>
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="first name"
                      className="border-1 border-[#E9EAF0] px-4 py-2  focus:outline-none caret-[#7a7a7a]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="first name"
                      className="border-1 border-[#E9EAF0] px-4 py-2  focus:outline-none caret-[#7a7a7a]"
                    />
                  </div>{" "}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="first name"
                    className="border-1 border-[#E9EAF0] px-4 py-2  focus:outline-none caret-[#7a7a7a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="first name"
                    className="border-1 border-[#E9EAF0] px-4 py-2  focus:outline-none caret-[#7a7a7a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">First Name</label>
                  <textarea
                    type="text"
                    name=""
                    id=""
                    rows={4}
                    placeholder="first name"
                    className="border-1 border-[#E9EAF0] px-4 py-2  focus:outline-none caret-[#7a7a7a]"
                  />
                </div>
                <button className="bg-[#FF6636] flex items-center gap-4 text-white w-fit px-6 py-2 text-[18px]">
                  Send Message <AiOutlineSend size={25} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Link to="#" className="w-full">
          <img src={map} alt="" className="w-full" />
        </Link>
      </div>
    </div>
  );
}

export default ContactUS;
