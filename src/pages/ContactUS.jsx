import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTelegram } from "react-icons/fa";
import { PiVoicemail } from "react-icons/pi";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import Branch from '../components/Branch'
function ContactUS() {
  return (
    <div>
      <div className="bg-[var(--secondary-color)] flex justify-center items-center py-[2rem] gap-4 flex-col w-full">
        <h1 className="text-[var(--primary-color)] text-[24px] font-[600]">Contact Us</h1>
        <div>
          <Link to="/" className="text-[var(--p-color)]">
            <span>Home /</span>
          </Link>
          <span className="text-[var(--primary-color)]"> Contact Us</span>
        </div>
      </div>
      <div className=" flex flex-col bg-[var(--main-bg)] sm:flex-row sm:gap-40  px-5 sm:px-[var(--primary-padding)] gap-5 items-center justify-between border-b-1 border-[#FFDDD1]">
        <div className="flex w-full flex-col justify-center pb-5 sm:items-start items-center sm:justify-start order-2 sm:w-[80%] gap-4 sm:order-1">
          <h1 className="text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none">
            Connect with us
          </h1>
          <p className="text-[var(--p-color)] font-[400] text-[16px] text-center sm:text-start">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <Link
            to="#"
            className="bg-[var(--orange-color)] text-white px-8 py-2 w-fit flex gap-2 items-center"
          >
            <MdOutlineMailOutline  size={25}/>
            <span>Copy Email</span>
          </Link>
        </div>
        <div className="order-1 w-full sm:order-2">
          <img src="/public/Fit.png" alt="Gallery 1" className="w-full h-full" />
        </div>
      </div>
      <div className="sm:px-[var(--primary-padding)] h-full py-[5rem] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center ">
          <h1 className="text-[var(--primary-color)] text-[40px] font-[600]">
            Our branches all over the world.
          </h1>
          <p className="text-[var(--p-color)] text-[14px] font-[400] max-w-md text-center ">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.{" "}
          </p>
        </div>
        <div className="flex flex-col h-full gap-4 px-5 sm:flex-row sm:px-0">
          <Branch
            image="/Branches.png"
            text1="mAIN BRANCHE"
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
            Duis aute irure, No. 6548"
          />
          <Branch
            image="/Branches.png"
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
             Duis aute irure, No. 6548"
          />
          <Branch
            image="/Branches.png"
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
            Duis aute irure, No. 6548"
          />
          <Branch
            image="/Branches.png"
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
            Duis aute irure, No. 6548"
          />
        </div>
      </div>
      <div className="bg-[var(--secondary-color)] sm:px-[var(--primary-padding)] sm:py-[5rem]">
        <h1 className="text-center text-[var(--primary-color)] text-[40px] font-[600]">
          Contact us
        </h1>
        <div className="flex flex-col mt-10 sm:flex-row gap-15">
          <div className="p-5 sm:p-0">
            <p className="text-[var(--p-color)]">
              Will you be in Los Angeles or any other branches any time soon?
              Stop by the office! We'd love to meet.
            </p>
            <table className="w-full text-sm text-left border-collapse table-auto">
              <tbody>
                <tr className=" border-b-1 border-[#E9EAF0]">
                  <th className="font-semibold text-[var(--orange-color)]  py-10">
                    ADDRESS
                  </th>
                  <td className="text-[var(--p-color)] py-10 px-15 ">
                    Excepteur sint occaecat cupidatat non proiden. Excepteur
                    sint occaecat.
                  </td>
                </tr>
                <tr className=" border-b-1 border-[#E9EAF0]">
                  <th className="font-semibold text-[var(--orange-color)]  py-10">
                    PHONE NUMBER
                  </th>
                  <td className="text-[var(--p-color)] py-10 px-15 flex flex-col gap-4">
                    <span>(963) 950-0001</span>
                    <span>(963) 950-0001</span>
                  </td>
                </tr>
                <tr>
                  <th className="font-semibold text-[var(--orange-color)]  py-10">
                    EMAIL ADDRESS
                  </th>
                  <td className="text-[var(--p-color)] py-10 px-15 flex flex-col gap-4">
                    <span>info@example.com</span>
                    <span>info@example.com</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sm:w-[70%] p-10 bg-[var(--card-bg)]">
            <form action="" className="">
              <h1 className="text-[var(--primary-color)] text-[24px] font-[500]">
                Get In touch
              </h1>
              <p className="text-[var(--p-color)] text-[16px] font-[400]">
                Feel free contact with us, we love to make new partners &
                friends
              </p>
              <div className="flex flex-col w-full gap-5 mt-5 ">
                <div className="flex flex-col w-full gap-5 sm:flex-row">
                <Field label="First Name" placeholder="First Name" />
                <Field label="Last  Name" placeholder="Last  Name" />
                </div>
               <Field label="Email" placeholder="Email Address"/>
                <Field label="Subject" placeholder="Message Subject"/>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[var(--primary-color)]">First Name</label>
                  <textarea
                    type="text"
                    name=""
                    id=""
                    rows={4}
                    placeholder="first name"
                    className="border-1 border-[#E9EAF0] text-[var(--p-color)] px-4 py-2  focus:outline-none caret-[#7a7a7a]"
                  />
                </div>
                <button className="bg-[var(--orange-color)] flex items-center gap-4 text-white w-fit px-6 py-2 text-[18px]">
                  Send Message <AiOutlineSend size={25} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Link to="#" className="w-full">
          <img src="/public/Map.png" alt="" className="w-full" />
        </Link>
      </div>
    </div>
  );
}

export default ContactUS;

function Field({label,placeholder}){
  return(
     <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[var(--primary-color)]">{label}</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={placeholder}
                    className="border-1 border-[#E9EAF0] px-4 py-2 text-[var(--p-color)]  focus:outline-none caret-[#7a7a7a] w-full"
                  />
                </div>
  )
}