import React from "react";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import Category from "../components/Category";
import Data from '../data'
import OurOpprtunitiesCard from "../components/OurOpprtunitiesCard";
import BreadCrumb from "../components/BreadCrumb";
function Jobs() {
const data=new Data();
  return (
    <div>
     <BreadCrumb name_page="Jobs"/> 
      <div className=" flex flex-col bg-[var(--main-bg)] sm:flex-row sm:gap-40 gap-5 py-10 px-5 sm:py-0 sm:px-[var(--primary-padding)] items-center justify-between border-b-1 border-[#FFDDD1]">
        <div className="flex flex-col w-full text-center sm:text-start justify-center sm:items-start items-center sm:justify-start order-2 sm:w-[50%] gap-4 sm:order-1">
          <h1 className="text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none">
            Join the most incredible & creative team.{" "}
          </h1>
          <p className="text-[var(--p-color)] font-[400] text-[16px] text-center sm:text-start">
            Proin gravida enim augue, dapibus ultrices eros feugiat et.
            Pellentesque bibendum orci felis, sit amet efficitur felis lacinia
            ac. Mauris gravida justo ac nunc consectetur.
          </p>
          <Link
            to="#"
            className="bg-[var(--orange-color)] text-white px-8 py-2 w-fit flex gap-2 items-center"
          >
            <span>View Open Positions</span>
          </Link>
        </div>
        <div className="order-1 w-full sm:order-2">
          <img src="/jobshero.png" alt="Gallery 1" className="w-full h-full" />
        </div>
      </div>
      <div className="bg-[var(--secondary-color)] flex flex-col p-5 sm:flex-row sm:px-[var(--primary-padding)] py-[5rem] gap-20">
        <div className="w-full h-full">
          <img src="/Union.png" alt="" />
        </div>
        <div className="flex flex-col w-full gap-4 ">
          <h1 className="text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px]">
            Why you will join our team
          </h1>
          <p className="text-[var(--p-color)] font-[400] text-[16px]">
            Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis.
            Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula
            mi ut, vestibulum odio.{" "}
          </p>
          <div className="flex gap-4 px-10 py-5 bg-[var(--card-bg)]">
            <div>
              <FaCircleCheck size={30} color="#23BD33" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[var(--primary-color)] font-[600] sm:text-[16px]">
                Ut justo ligula, vehicula sed egestas vel.
              </h1>
              <p className="text-[var(--p-color)] font-[400] text-[14px]">
                Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                felis. Vestibulum non consectetur tortor. Morbi at orci
                vehicula, vehicula mi ut, vestibulum odio.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 px-10 py-5  bg-[var(--card-bg)]">
            <div>
              <FaCircleCheck size={30} color="#23BD33" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[var(--primary-color)] font-[600] sm:text-[16px]">
                Ut justo ligula, vehicula sed egestas vel.
              </h1>
              <p className="text-[var(--p-color)] font-[400] text-[14px]">
                Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                felis. Vestibulum non consectetur tortor. Morbi at orci
                vehicula, vehicula mi ut, vestibulum odio.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-[var(--primary-padding)] sm:py-[5rem]">
        <h1 className="text-center text-[var(--primary-color)] text-[40px] font-[600]">
          Our Perks & Benefits
        </h1>

        <div className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data.categories.map((category, index) => (
            <Category
              key={index}
              image={category.icon}
              text1={category.title}
              bgcolor={category.color}
              css="flex-col items-center"
            />
          ))}
        </div>
      </div>
      <div className=" sm:px-[var(--primary-padding)] sm:py-[5rem] bg-[var(--secondary-color)]">
        <div className="flex flex-col gap-5 ">
          <div className=" sm:items-center sm:flex-row">
            <h1 className="text-[30px] font-[600] text-center text-[var(--primary-color)]">
              Our all open positions (04)
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            {data.articles.slice(0,4).map((article,index)=>(
            <OurOpprtunitiesCard
              key={index}
              color={article.color}
              text1={article.title}
              image={article.icon}
            />
))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
