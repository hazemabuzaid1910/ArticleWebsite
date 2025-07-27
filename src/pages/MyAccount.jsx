import React, { useEffect, useState } from 'react';
import { PiNotebookBold, PiUsersLight } from "react-icons/pi";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaEdit, FaCamera, FaMapPin, FaPhone, FaEnvelope, FaGlobe, FaCalendar, FaHeart, FaBookmark, FaEye, FaShare, FaGraduationCap, FaAward, FaCertificate } from "react-icons/fa";
import { BiUser, BiBuilding, BiTime } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import useUserList from '../store/UserListStore';
function MyAccount() {
  const {getUser,userdata}=useUserList()
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const id=localStorage.getItem('id')
  useEffect(()=>{
    getUser(id)
  },[])
  console.log(userdata)
  console.log(userdata.user_picture?.[0].url)
  const statsData = [
    {
      icon: <PiUsersLight size={40} color="#FF6636" />,
      text1: "67.1K",
      text2: "Students",
    },
    {
      icon: <PiNotebookBold size={40} color="#564FFD" />,
      text1: "26K",
      text2: "Certified Instructor",
    },
    {
      icon: <LuCircleCheckBig size={40} color="#23BD33" />,
      text1: "72K",
      text2: "Country Language",
    },
  ];

  const tabs = ["Information", "Address", "Favourite"];

  // Sample data for Information tab
  const userInfo = {
    name: "John Doe",
    title: "Senior Software Engineer & Instructor",
    bio: "Passionate educator with 10+ years of experience in software development and teaching. Specialized in React, Node.js, and modern web technologies.",
    email: "john.doe@articula.com",
    phone: "+1 (555) 123-4567",
    website: "www.johndoe.dev",
    joinDate: "January 2020",
    location: "San Francisco, CA",
    company: "Articula Education",
    experience: "10+ Years",
    languages: ["English", "Arabic", "Spanish"]
  };

  // Sample courses for Favourite tab
  const favouriteCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "John Smith",
      rating: 4.8,
      students: 12456,
      image: "/Course Images (6).png",
      price: "$99",
      category: "Web Development",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 8932,
      image: "/Course Images (4).png",
      price: "$79",
      category: "Programming"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Mike Chen",
      rating: 4.7,
      students: 5678,
      image: "/Course Images (3).png",
      price: "$149",
      category: "Design"
    }
  ];

  const achievements = [
    { icon: <FaGraduationCap className="text-blue-500" size={20} />, text: "Master's in Computer Science" },
    { icon: <FaCertificate className="text-green-500" size={20} />, text: "AWS Certified Solutions Architect" },
    { icon: <FaAward className="text-yellow-500" size={20} />, text: "Top Instructor 2023" },
    { icon: <HiOutlineAcademicCap className="text-purple-500" size={20} />, text: "Published 15+ Courses" }
  ];

  const renderInformationTab = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="p-6 bg-white border border-gray-100 shadow-sm ">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            <FaEdit size={16} />
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  defaultValue={userInfo.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              ) : (
                <p className="font-medium text-gray-800">{userInfo.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Title</label>
              {isEditing ? (
                <input
                  type="text"
                  defaultValue={userInfo.title}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-800">{userInfo.title}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Bio</label>
              {isEditing ? (
                <textarea
                  rows={3}
                  defaultValue={userInfo.bio}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              ) : (
                <p className="leading-relaxed text-gray-700">{userInfo.bio}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500" size={18} />
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-800">{userInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-gray-500" size={18} />
              <div>
                <label className="block text-sm font-medium text-gray-600">Phone</label>
                <p className="text-gray-800">{userInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-gray-500" size={18} />
              <div>
                <label className="block text-sm font-medium text-gray-600">Website</label>
                <p className="text-blue-600 cursor-pointer hover:underline">{userInfo.website}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaMapPin className="text-gray-500" size={18} />
              <div>
                <label className="block text-sm font-medium text-gray-600">Location</label>
                <p className="text-gray-800">{userInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Info */}
      <div className="p-6 bg-white border border-gray-100 shadow-sm ">
        <h3 className="mb-4 text-xl font-bold text-gray-800">Professional Details</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <BiBuilding className="text-orange-500" size={24} />
            <div>
              <p className="text-sm text-gray-600">Company</p>
              <p className="font-medium text-gray-800">{userInfo.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BiTime className="text-blue-500" size={24} />
            <div>
              <p className="text-sm text-gray-600">Experience</p>
              <p className="font-medium text-gray-800">{userInfo.experience}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendar className="text-green-500" size={24} />
            <div>
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-medium text-gray-800">{userInfo.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="p-6 bg-white border border-gray-100 shadow-sm">
        <h3 className="mb-4 text-xl font-bold text-gray-800">Achievements & Certifications</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
              {achievement.icon}
              <span className="text-gray-700">{achievement.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="p-6 bg-white border border-gray-100 shadow-sm ">
        <h3 className="mb-4 text-xl font-bold text-gray-800">Languages</h3>
        <div className="flex flex-wrap gap-2">
          {userInfo.languages.map((language, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAddressTab = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Address Information</h2>
          <button className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
            <FaEdit size={16} />
            Edit Address
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Street Address</label>
              <p className="text-gray-800">123 Tech Street, Suite 100</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">City</label>
              <p className="text-gray-800">San Francisco</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">State/Province</label>
              <p className="text-gray-800">California</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Country</label>
              <p className="text-gray-800">United States</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Postal Code</label>
              <p className="text-gray-800">94105</p>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">Time Zone</label>
              <p className="text-gray-800">Pacific Standard Time (PST)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border border-gray-100 shadow-sm ">
        <h3 className="mb-4 text-xl font-bold text-gray-800">Map Location</h3>
        <div className="flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg">
          <div className="text-center">
            <FaMapPin className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="text-gray-600">Interactive map would be displayed here</p>
            <p className="text-sm text-gray-500">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFavouriteTab = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6 ">
          <h2 className="text-2xl font-bold text-gray-800">Favourite Courses</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
              Filter
            </button>
            <button className="px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
              Sort
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favouriteCourses.map((course) => (
            <div key={course.id} className="overflow-hidden transition-shadow bg-white border border-gray-200 hover:shadow-lg">
              <div className="relative">
                <div className="flex items-center justify-center w-full h-48">
                    <img src={course.image} alt="" className='object-cover w-full h-full'/>                </div>
                <button className="absolute p-2 transition-all bg-white rounded-full top-3 right-3 bg-opacity-90 hover:bg-opacity-100">
                  <FaHeart className="text-red-500" size={16} />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-1 text-xs text-orange-600 bg-orange-100 ">
                    {course.category}
                  </span>
                  <span className="text-lg font-bold text-gray-800">{course.price}</span>
                </div>
                
                <h3 className="mb-2 font-bold text-gray-800 line-clamp-2">{course.title}</h3>
                <p className="mb-3 text-sm text-gray-600">by {course.instructor}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <BiUser size={14} />
                    <span className="text-sm">{course.students.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 text-sm text-white transition-colors bg-orange-500 hover:bg-orange-600">
                    Continue Learning
                  </button>
                  <button className="p-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                    <FaShare size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bookmarked Articles */}
      <div className="p-6 bg-white border border-gray-100 shadow-sm ">
        <h3 className="mb-4 text-xl font-bold text-gray-800">Bookmarked Articles</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4 p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
              <FaBookmark className="text-orange-500" size={20} />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">Advanced React Patterns and Best Practices</h4>
                <p className="text-sm text-gray-600">Learn advanced React patterns including render props, HOCs, and hooks...</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>•</span>
                  <span>Web Development</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaEye size={12} />
                    <span>1.2k views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabContents = [
    renderInformationTab(),
    renderAddressTab(),
    renderFavouriteTab()
  ];

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <div className='grid w-full grid-cols-12'>
        {/* Header Section */}
        <div className='relative col-span-12 grid grid-cols-12 w-full bg-[var(--secondary-color)] h-[20rem] overflow-hidden'>
      
          
          <div className='relative flex flex-col items-center w-full col-span-10 col-start-2 gap-5 pb-5 lg:flex-row lg:items-end '>
            <div className="relative group">
              <div className="w-[200px] lg:w-[200px] border-4 mt-5 border-[var(--orange-color)] h-[200px] lg:h-[200px] overflow-hidden rounded-full shadow-2xl bg-white">
                <img 
                  src={userdata.user_picture?.[0].url} 
                  alt="Profile" 
                  className="object-cover w-full h-full" 
                />
              </div>
              <button className="absolute p-3 text-white transition-colors bg-orange-500 rounded-full shadow-lg opacity-0 bottom-4 right-4 hover:bg-orange-600 group-hover:opacity-100">
                <FaCamera size={18} />
              </button>
            </div>
            
            <div className="mt-6 text-center lg:text-left lg:ml-8 lg:mt-0 lg:pb-8">
              <h1 key={[0]} className='mb-2 text-3xl font-bold text-[var(--primary-color)] lg:text-5xl drop-shadow-lg'>
  {userdata?.name?.[0]?.value}
</h1>
              <p className='mb-4 text-lg text-[var(--primary-color)] lg:text-xl text-opacity-90 drop-shadow'>
                Senior Software Engineer 
              </p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <button className="px-6 py-2 font-medium text-orange-500 transition-colors bg-white rounded-full shadow-lg hover:bg-gray-100">
                  Follow
                </button>
                <button className="px-6 py-2 font-medium text-[var(--orange-color)] transition-colors border-2 border-white rounded-full hover:bg-white hover:text-orange-500">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-12 col-span-12 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex flex-wrap justify-center col-span-10 col-end-12 gap-8 px-8 py-8 lg:justify-end lg:gap-16 lg:px-16">
            {statsData.map((stat, index) => (
              <Statistics
                key={index}
                icon={stat.icon}
                text1={stat.text1}
                text2={stat.text2}
              />
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 z-10 grid grid-cols-12 col-span-12 bg-white shadow-sm">
          <div className="col-span-10 col-start-2">
            <div className="flex gap-8 overflow-x-auto border-b border-gray-200">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-2 py-4 font-medium text-lg whitespace-nowrap transition-colors ${
                    activeTab === index
                      ? "border-b-4 border-orange-500 text-orange-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 col-span-10 col-start-2 py-8 ">
          {tabContents[activeTab]}
        </div>
      </div>
    </div>
  );
}

function Statistics({ icon, text1, text2 }) {
  return (
    <div className='flex items-center gap-4 transition-transform hover:scale-105'>
      <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
      <div>
        <h1 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{text1}</h1>
        <p className='text-sm font-medium text-gray-600 lg:text-base'>{text2}</p>
      </div>
    </div>
  );
}

export default MyAccount;