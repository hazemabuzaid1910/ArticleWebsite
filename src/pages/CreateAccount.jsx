import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaApple,
  FaArrowRight,
  FaFacebookF,
  FaGoogle,
  FaImage,
} from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAuthStore from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
function CreateAccount() {
  const router=useNavigate()
  const [img, setImg] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const [name, setName] = useState("");           // بدلاً من false
const [lastName, setLastName] = useState("");
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [mobilephone, setMobilePhone] = useState("");
const [password, setPassword] = useState("");
const [gender, setGender] = useState(""); 
const MotionLink = motion(Link);
const [customError, setCustomError] = useState("");

  const{register,user,error}=useAuthStore()
const handleCreateAccount = async (e) => {
  e.preventDefault();

    await register({
      name: userName,
      mail: email,
      field_mobile: mobilephone,
      field_name: name,
      field_surname: lastName,
      field_gender: gender,
      pass: password,
    });

    setCustomError(""); 
    console.error("Registration Error:", error);

   if(error) {
    if (error?.includes("username")) {
      setCustomError("اسم المستخدم مستخدم من قبل، يرجى اختيار اسم آخر.");
    } else if (error?.includes("Email")) {
      setCustomError("البريد الإلكتروني مستخدم مسبقًا.");
    }
     else if (error?.includes("password")) {
      setCustomError(" كلمة السر مستخدم مسبقًا.");
    } else {
      setCustomError("حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة لاحقًا.");
    }
  }
};
useEffect(()=>{
  if(user){
  router('/');
}
},[])


  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
      setFileName(e.target.files[0].name);
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6">
        <div
          className={`lg:fixed top-0 ${
            isArabic ? "right-0" : "left-0"
          } relative  lg:h-screen  bg-[var(--create-account-image)]`}
        >
  
          <img
            src="/Saly-1.png"
            alt="Saly-10 Illustration"
            className="object-cover w-full h-full lg:flex"
          />
          <div className="absolute inset-0 z-0 bg-black opacity-30 lg:hidden"></div>
  
        </div>
      </div>

      <div className="relative left-0 right-0 z-10 col-span-12 p-10 lg:static lg:col-span-6">


        <h1 className="absolute inset-y-[50%] left-0 right-0 lg:static text-[40px] font-[600] text-white lg:text-[var(--primary-color)] text-center">
          Create your account
        </h1>

        <form onSubmit={handleCreateAccount} className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col w-full gap-5 sm:flex-row">
            <div className="flex flex-col w-full gap-2">
              <label className="text-[var(--primary-color)]">First Name</label>
              <input
                type="text"
                required
                onChange={(e)=>setName(e.target.value)}
                placeholder="First name..."
                className="border text-[var(--p-color)] border-[#E9EAF0] px-4 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="text-[var(--primary-color)]">Last Name</label>
              <input
                type="text"
                required
                placeholder="Last name..."
                onChange={(e)=>setLastName(e.target.value)}
                className="border text-[var(--p-color)] border-[#E9EAF0] px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[var(--primary-color)]">Mobile</label>
            <input
              type="text"
              required
              onChange={(e)=>setMobilePhone(e.target.value)}
              placeholder="ex: 963 000 0000"
              className="border text-[var(--p-color)] border-[#E9EAF0] px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[var(--primary-color)]">Username</label>
            <input
              type="text"
              required
              placeholder="Username..."
              onChange={(e)=>setUserName(e.target.value)}
              className="border text-[var(--p-color)] border-[#E9EAF0] px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[var(--primary-color)]">gender</label>
            <select
              name=""
              id=""
              required
              onChange={(e)=>setGender(e.target.value)}
              placeholder="gender"
              className="border text-[var(--p-color)] border-[#E9EAF0] px-4 py-2 focus:outline-none"
            >
              <option value="9">male</option>
              <option value="10">female</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[var(--primary-color)]">Email</label>
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email address"
              className="border text-[var(--p-color)] border-[#E9EAF0] px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <div className="flex items-end w-fit">
              {img ? (
                <img
                  src={img}
                  alt="Uploaded"
                  className="object-cover w-20 h-20 mt-2 rounded"
                />
              ) : (
                <div className="w-20 h-20 bg-[#E2E6EC] items-center flex justify-center">
                  <FaImage size={40} color="#B2B9C4" />
                </div>
              )}
            </div>
            <div className="flex flex-col w-full gap2">
              <span className="text-[12px] text-[#B4B4B4]">
                Please upload square image, size less than 800 kb
              </span>
              <label className="cursor-pointer gap-5 flex bg-[#FFEEE8] text-[#FC5B3F] font-medium px-5 py-5 items-center w-full  rounded hover:bg-[#FFE5DF] transition">
                <span className="px-5 py-2 border rounded"> Choose File</span>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="text-[#888888] text-sm">
                  {fileName ? fileName : "no file choosen"}
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full gap-5 sm:flex-row">
            <div className="flex w-full gap-5">
              <div className="flex flex-col w-full gap-2">
                <label className="text-[var(--primary-color)]">Password</label>
                <div className="flex items-center border border-[#E9EAF0] px-4 py-2">
                  <input
                  required
                    type={showPassword ? "text" : "password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Create password"
                    className="w-full focus:outline-none text-[var(--p-color)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-5">
              <div className="flex flex-col w-full gap-2">
                <label className="text-[var(--primary-color)]">
                  Confirm Password
                </label>
                <div className="flex items-center border border-[#E9EAF0] px-4 py-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full focus:outline-none text-[var(--p-color)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="ml-2 text-gray-500 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                className="accent-[#FC5B3F] scale-150"
              />
              <label htmlFor="agree" className="text-[var(--p-color)]">
                I agree with all of your{" "}
                <Link className="text-[#3F5BF6] underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

      <motion.button
  type="submit"
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="bg-[#FC5B3F] cursor-pointer text-white w-fit py-2 px-6 flex items-center gap-2 font-semibold hover:bg-opacity-90"
>
  Create Account <FaArrowRight />
</motion.button>

          </div>
          <div>          {customError && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="top-0 left-0 z-50 w-full px-4 py-3 text-center text-red-700 bg-red-100 border border-red-400 shadow-md "
  >
    
    {customError}
  </motion.div>
)}</div>
          <div className="flex items-center gap-4 my-4">
  
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-gray-500 ">SIGN UP WITH</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <button className="border text-[var(--primary-color)] border-[#E9EAF0] py-2 cursor-pointer hover:border-[#f88484] w-full flex items-center gap-5 h-full group">
              <div className="w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#f88484] border-[#E9EAF0]">
                <FaGoogle color="var(--primary-color)" />
              </div>
              Facebook
            </button>
            <button className="border text-[var(--primary-color)] border-[#E9EAF0] py-2 cursor-pointer hover:border-[#4267B2] w-full flex items-center gap-5 h-full group">
              <div className="w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#4267B2] border-[#E9EAF0]">
                <FaFacebookF color="var(--primary-color)" />
              </div>
              Facebook
            </button>
            <button className="border text-[var(--primary-color)] border-[#E9EAF0] py-2 cursor-pointer hover:border-[#4267B2] w-full flex items-center gap-5 h-full group">
              <div className="w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#4267B2] border-[#E9EAF0]">
                <FaApple color="var(--primary-color)" />
              </div>
              Facebook
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default CreateAccount;
