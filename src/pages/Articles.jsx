import React, { useState } from "react";
import { Search, Filter, Calendar, User, Clock, BookOpen, Star, Eye } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import ArticleCard from "../components/ArticleCard";
import Data from '../data'
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import {motion} from 'framer-motion'
const ArticlesInterface = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
          const MotionLink = motion(Link);

  const data=new Data()
  const filteredArticles = data.articlees.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
     <BreadCrumb name_page="Articles"/>

      <div className="bg-white border-b border-gray-200">
        <div className="px-4  mx-auto max-w-7xl sm:px-6 lg:px-8">
     
          
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
                    <MotionLink
                      to="/add_article"
                       whileTap={{ scale: 0.95 }}    
  transition={{ type: "spring", stiffness: 300, damping: 20 }}  
                      className="bg-[var(--orange-color)] text-white px-4 py-1 lg:px-5 lg:py-2 w-fit flex gap-2 items-center"
                    >
                      <span className="flex items-center gap-2">Add Article <FaPlus/></span>
                    </MotionLink>
                  </div>
                  <div className="grid order-1 grid-cols-12 col-span-12 lg:order-2 lg:col-start-10 lg:col-span-3">
                    <img src="/jobshero.png" alt="Gallery 1" className="object-cover w-full h-full col-span-6 lg:col-span-12 " />
          
                  </div>
          
                </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex-1 max-w-md">
              <Search className="absolute text-[var(--orange-color)] left-3 top-3" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
              />
            </div>
        <div className="flex flex-col gap-8 mt-5 lg:flex-row">
          <div className="flex-shrink-0 lg:w-64">
            <div className="sticky p-6 bg-white border border-gray-100 shadow-sm top-35">
              <h2 className="items-center hidden gap-2 mb-4 text-lg font-bold text-gray-900 lg:flex">
                <Filter size={18} />
                Browse by Category
              </h2>
              <div className="flex space-y-2 overflow-auto lg:flex-col ">
                {data.categoriees.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex lg:flex-row flex-col items-center justify-between group ${
                      selectedCategory === category.name
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.name
                        ? ' bg-opacity-20 '
                        : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
                <span className="ml-2 text-lg font-normal text-gray-500">
                  ({filteredArticles.length} articles)
                </span>
              </h2>
                  <div className="flex items-center gap-4">
              <div className="items-center hidden gap-2 lg:flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-sm transition-colors ${
                    viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
             <IoGrid />

                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-sm transition-colors ${
                    viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                <CiGrid2H fill="#000000"/>

                </button>
              </div>
            </div>
            </div>

            {filteredArticles.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-6"
              }>
                {filteredArticles.map((article) => (
                  <ArticleCard 
                    key={article.id} 
                    article={article} 
                    isGrid={viewMode === 'grid'} 
                  />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-lg font-medium text-gray-900">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}

            {filteredArticles.length > 0 && (
              <div className="mt-12 text-center">
                <button className="px-8 py-3 font-medium text-white transition-colors duration-200 bg-orange-500 ">
                  Show More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesInterface;