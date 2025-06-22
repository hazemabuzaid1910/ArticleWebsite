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
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <BreadCrumb name_page="Jobs" /> 
      </div>
     
      <div className=" relative bg-[var(--main-bg)]  lg:col-span-10 col-span-12 lg:pt-0 pt-[5rem]  lg:col-start-2 grid   gap-5     items-center justify-between border-b-1 border-[#FFDDD1]">
        <div className="absolute flex flex-col items-center order-2 col-span-7 col-start-5 gap-4 text-center lg:order-1 lg:static lg:px-0 lg:col-span-2 lg:text-start lg:items-start lg:justify-start">
          <h1 className="lg:text-[var(--primary-color)]  font-[600] sm:text-[24px] lg:text-[40px] text-[14px] p-0 m-0 leading-none">
            Join the most incredible & creative team.{" "}
          </h1>
          <p className="text-[var(--p-color)] font-[400] lg:text-[16px]  text-[10px] text-center lg:text-start">
            Proin gravida enim augue, dapibus ultrices eros feugiat et.
            Pellentesque bibendum orci felis, sit amet efficitur felis lacinia
            ac. Mauris gravida justo ac nunc consectetur.
          </p>
          <Link
            to="#"
            className="bg-[var(--orange-color)] text-white px-4 py-1 lg:px-5 lg:py-2 w-fit flex gap-2 items-center"
          >
            <span>View Open Positions</span>
          </Link>
        </div>
        <div className="grid order-1 grid-cols-12 col-span-12 lg:order-2 lg:col-start-10 lg:col-span-3">
          <img src="/jobshero.png" alt="Gallery 1" className="object-cover w-full h-full col-span-6 lg:col-span-12 " />

        </div>

      </div>

      <div className="bg-[var(--secondary-color)] col-span-12  grid grid-cols-12  py-[5rem] ">
        <div className="grid grid-cols-12 col-span-10 col-start-2 lg:col-span-12 lg:gap-15 ">
        <div className="col-span-12 lg:col-span-5 lg:col-start-2">
          <img src="/Union.png" alt="" className=""/>
        </div>
        <div className="flex flex-col col-span-12 gap-4 lg:col-start-7 lg:col-span-5 ">
          <h1 className="text-[var(--primary-color)] font-[600] sm:text-[40px] text-[30px]">
            Why you will join our team
          </h1>
          <p className="text-[var(--p-color)] font-[400] text-[16px]">
            Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis.
            Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula
            mi ut, vestibulum odio.{" "}
          </p>
          <div className="flex gap-4 lg:px-10 lg:py-5 p-5 bg-[var(--card-bg)]">
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
          <div className="flex gap-4 lg:px-10 lg:py-5 p-5 bg-[var(--card-bg)]">
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
      </div>

      <div className="col-span-12 col-end-12 col-start-2  sm:py-[5rem]">
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
      <div className="col-span-12 grid sm:py-[5rem] py-15 bg-[var(--secondary-color)]">
        <div className="grid grid-cols-12 ">
        <div className="flex flex-col col-span-10 col-start-2 gap-5">
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
))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
