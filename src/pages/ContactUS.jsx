import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTelegram } from "react-icons/fa";
import { PiVoicemail } from "react-icons/pi";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import Branch from '../components/Branch'
import BreadCrumb from "../components/BreadCrumb";
function ContactUS() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <BreadCrumb name_page="Contact Us"/> 
      </div>
          

      <div className="  bg-[var(--main-bg)]   col-span-12 grid  items-center  border-b-1 border-[#FFDDD1]">
       <div className="grid items-center grid-cols-12 col-span-10 gap-5 ">
        <div className="flex flex-col items-center justify-center order-2 w-full col-span-10 col-start-2 gap-4 pb-5 lg:col-start-2 lg:col-span-5 lg:items-start sm:justify-start lg:order-1">
          <h1 className="text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none">
            Connect with us
          </h1>
          <p className="text-[var(--p-color)] font-[400] text-[16px] text-center lg:text-start">
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
        <div className="order-1 w-full col-span-10 col-start-2 lg:col-span-5 lg:col-start-7 lg:order-2">
          <img src="/Fit.png" alt="Gallery 1" className="w-full h-full" />
        </div>
      </div>
      </div>
      <div className="col-span-10 lg:col-start-2 lg:col-span-10  grid grid-cols-12 col-start-2 h-full py-[5rem]   ">
        <div className="flex flex-col items-center col-span-12 gap-4 text-center ">
          <h1 className="text-[var(--primary-color)] text-[40px] font-[600]">
            Our branches all over the world.
          </h1>
          <p className="text-[var(--p-color)] text-[14px] font-[400] max-w-md text-center ">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.{" "}
          </p>
        </div>
        <div className="col-span-12 mt-10">
          <div className="grid w-full h-full grid-cols-1 col-span-12 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0,1,2,3].map((index)=>(
          <Branch
          key={index}
            image="/Branches.png"
            text1="mAIN BRANCHE"
            text2="Damascus, Syria"
            text3="Lorem Ipsum doller
            Duis aute irure, No. 6548"
          />
     ))}
        </div>
        </div>
      </div>
      <div className="bg-[var(--secondary-color)] col-span-12  sm:py-[5rem]">
        <div className="grid grid-cols-12 col-span-10 col-start-2 gap-5">
        <h1 className="text-center col-span-12  text-[var(--primary-color)] text-[40px] font-[600]">
          Contact us
        </h1>
        <div className="grid grid-cols-12 col-span-12 mt-10 lg:col-start-2 lg:col-span-10 ">
          <div className="col-span-10 col-start-2 lg:col-span-6 sm:p-0">
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
          <div className="lg:col-span-6 col-span-12 p-10 bg-[var(--card-bg)]">
            <form action="" className="">
              <h1 className="text-[var(--primary-color)] text-[24px] font-[500]">
                Get In touch
              </h1>
              <p className="text-[var(--p-color)] text-[16px] font-[400]">
                Feel free contact with us, we love to make new partners &
                friends
              </p>
              <div className="flex flex-col w-full gap-5 mt-5 ">
                <div className="flex flex-col w-full gap-2 sm:flex-row">
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
      </div>
      <div className="w-full col-span-12">
        <Link to="#" className="w-full">
          <img src="/Map.png" alt="" className="w-full" />
        </Link>
      </div>
    </div>
  );
}

export default ContactUS;

function Field({label,placeholder}){
  return(
     <div className="flex flex-col w-full gap-2">
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