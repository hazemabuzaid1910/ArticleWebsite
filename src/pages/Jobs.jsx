import React from "react";
import { Link } from "react-router-dom";
import jobs from "../assets/jobshero.png";
import union from "../assets/Union.png";
import { FaCircleCheck } from "react-icons/fa6";
import Business from "../assets/Busniess.svg";
import Label from "../assets/Label.svg";
import Finance from "../assets/Finance.svg";
import IT from "../assets/It&software.svg";
import Development from "../assets/development.svg";
import Productivity from "../assets/prodoctivity.svg";
import Marketing from "../assets/Marketing.svg";
import Photo from "../assets/Photo.svg";
import Category from "../components/Category";
import course from "../assets/Course Images.png";
import course1 from "../assets/Course Images (1).png";
import course2 from "../assets/Course Images (2).png";
import course3 from "../assets/Course Images (3).png";
import course4 from "../assets/Course Images (4).png";
import course5 from "../assets/Course Images (5).png";
import course6 from "../assets/Course Images (6).png";
import course7 from "../assets/Course Images (7).png";
import course8 from "../assets/Course Images (8).png";
import OurOpprtunitiesCard from "../components/OurOpprtunitiesCard";
function Jobs() {
  const articles = [
    {
      title: "IT & Software",
      color: "bg-[#FFEEE8]",
      icon: course,
    },
    {
      title: "Marketing",
      color: "bg-[#EBEBFF]",
      icon: course1,
    },
    {
      title: "DESIGN",
      color: "bg-[#E1F7E3]",
      icon: course2,
    },
    {
      title: "Developments",
      color: "bg-[#EBEBFF]",
      icon: course3,
    },
    {
      title: "Business",
      color: "bg-[#FFF0F0]",
      icon: course4,
    },
    {
      title: "IT & Software",
      color: "bg-[#FFEEE8]",
      icon: course5,
    },
    {
      title: "Marketing",
      color: "bg-[#EBEBFF]",
      icon: course6,
    },
    {
      title: "DESIGN",
      color: "bg-[#E1F7E3]",
      icon: course7,
    },
    {
      title: "Developments",
      color: "bg-[#EBEBFF]",
      icon: course8,
    },
    {
      title: "Business",
      color: "bg-[#FFF0F0]",
      icon: course4,
    },
  ];
  const categories = [
    {
      title: "Label",
      articles: "63,476 Articles",
      color: "bg-[#EDE9FE]",
      icon: Label,
    },
    {
      title: "Business",
      articles: "52,822 Articles",
      color: "bg-[#DCFCE7]",
      icon: Business,
    },
    {
      title: "Finance & Accounting",
      articles: "33,841 Articles",
      color: "bg-[#FFF2E5]",
      icon: Finance,
    },
    {
      title: "IT & Software",
      articles: "22,649 Articles",
      color: "bg-[#FFF0F0]",
      icon: IT,
    },
    {
      title: "Personal Development",
      articles: "20,126 Articles",
      color: "bg-[#FFF]",
      icon: Development,
    },
    {
      title: "Office Productivity",
      articles: "13,932 Articles",
      color: "bg-[#F1F5F9]",
      icon: Productivity,
    },
    {
      title: "Marketing",
      articles: "12,068 Articles",
      color: "bg-[#EEF2FF]",
      icon: Marketing,
    },
    {
      title: "Photography & Video",
      articles: "6,196 Articles",
      color: "bg-[#F8FAFC]",
      icon: Photo,
    },
  ];
  return (
    <div>
      <div className="bg-[#F5F7FA] flex justify-center items-center py-[2rem] gap-4 flex-col w-full">
        <h1 className="text-[#1D2026] text-[24px] font-[600]">Jobs</h1>
        <div>
          <Link to="/" className="text-[#6E7485]">
            <span>Home /</span>
          </Link>
          <span className="text-[#1D2026]"> Jobs</span>
        </div>
      </div>
      <div className=" flex flex-col bg-[#FFFFFF] sm:flex-row sm:gap-40 gap-5 py-10 px-5 sm:py-0 sm:px-[12rem] items-center justify-between border-b-1 border-[#FFDDD1]">
        <div className="flex flex-col text-center sm:text-start justify-center sm:items-start items-center sm:justify-start order-2 sm:w-[50%] gap-4 sm:order-1">
          <h1 className="text-[#1D2026] font-[600] sm:text-[40px] text-[30px] p-0 m-0 leading-none">
            Join the most incredible & creative team.{" "}
          </h1>
          <p className="text-[#4E5566] font-[400] text-[16px] text-center sm:text-start">
            Proin gravida enim augue, dapibus ultrices eros feugiat et.
            Pellentesque bibendum orci felis, sit amet efficitur felis lacinia
            ac. Mauris gravida justo ac nunc consectetur.
          </p>
          <Link
            to="#"
            className="bg-[#FF6636] text-white px-8 py-2 w-fit flex gap-2 items-center"
          >
            <span>View Open Positions</span>
          </Link>
        </div>
        <div className="order-1 w-full sm:order-2">
          <img src={jobs} alt="Gallery 1" className="w-full h-full" />
        </div>
      </div>
      <div className="bg-[#F5F7FA] flex flex-col p-5 sm:flex-row sm:px-[12rem] py-[5rem] gap-20">
        <div className="w-full h-full">
          <img src={union} alt="" />
        </div>
        <div className="flex flex-col w-full gap-4 ">
          <h1 className="text-[#1D2026] font-[600] sm:text-[40px] text-[30px]">
            Why you will join our team
          </h1>
          <p className="text-[#4E5566] font-[400] text-[16px]">
            Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis.
            Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula
            mi ut, vestibulum odio.{" "}
          </p>
          <div className="flex gap-4 px-10 py-5 bg-white">
            <div>
              <FaCircleCheck size={30} color="#23BD33" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[#1D2026] font-[600] sm:text-[16px]">
                Ut justo ligula, vehicula sed egestas vel.
              </h1>
              <p className="text-[#4E5566] font-[400] text-[14px]">
                Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                felis. Vestibulum non consectetur tortor. Morbi at orci
                vehicula, vehicula mi ut, vestibulum odio.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 px-10 py-5 bg-white">
            <div>
              <FaCircleCheck size={30} color="#23BD33" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[#1D2026] font-[600] sm:text-[16px]">
                Ut justo ligula, vehicula sed egestas vel.
              </h1>
              <p className="text-[#4E5566] font-[400] text-[14px]">
                Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                felis. Vestibulum non consectetur tortor. Morbi at orci
                vehicula, vehicula mi ut, vestibulum odio.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-[12rem] sm:py-[5rem]">
        <h1 className="text-center text-[#1D2026] text-[40px] font-[600]">
          Our Perks & Benefits
        </h1>

        <div className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {categories.map((category, index) => (
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
      <div className=" sm:px-[10rem] bg-[#F5F7FA]">
        <div className="sm:p-[5rem] flex flex-col gap-5    ">
          <div className="py-5 sm:items-center sm:flex-row">
            <h1 className="text-[30px] font-[600] text-center">
              Our all open positions (04)
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            <OurOpprtunitiesCard
              color={articles[0].color}
              text1={articles[0].title}
              image={articles[0].icon}
            />
            <OurOpprtunitiesCard
              color={articles[1].color}
              text1={articles[1].title}
              image={articles[1].icon}
            />
            <OurOpprtunitiesCard
              color={articles[2].color}
              text1={articles[2].title}
              image={articles[2].icon}
            />
            <OurOpprtunitiesCard
              color={articles[3].color}
              text1={articles[3].title}
              image={articles[3].icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
