import React from "react";
import { FaArrowRight, FaImage } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import useAuthStore from "../store/AuthStore";
import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function SignIn() {
    const navigate = useNavigate(); 
  const{i18n}=useTranslation()
  const isArabic=i18n.language==="ar"
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn ,user} = useAuthStore();
  const handleSubmit=async(e)=>{
       e.preventDefault();

await(signIn(email,password));
  }
    useEffect(() => {
    if (user) {
      navigate("/"); 
    }
  }, []);
  return (
    <div className="grid grid-cols-12 ">
      <div className="relative col-span-12 lg:col-span-6">
      <div className={`bg-[var(--create-account-image)] lg:fixed ${isArabic ? "right-0":"left-0"}  top-0  h-screen`}>
        <img
          src="/Saly-10.svg"
          alt="Saly Illustration"
          className="object-cover w-full h-full"
        />
       <div className="absolute inset-0 z-0 bg-black opacity-50 lg:hidden"></div>

      </div>
</div>
      <div className="absolute left-0 right-0 flex flex-col justify-center h-screen col-span-12 gap-5 p-10 lg:relative lg:col-span-6">
        <h1 className="text-[40px] font-[600] text-white  lg:text-[var(--primary-color)] text-center">
          Sign in to your account
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="lg:text-[var(--primary-color)] text-white">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="border lg:text-[var(--p-color)] text-[#b8b8b8] border-[#E9EAF0] px-4 py-2 focus:outline-none"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="flex w-full gap-5">
            <div className="flex flex-col w-full gap-2">
              <label className="lg:text-[var(--primary-color)] text-white">Password</label>
              <div className="flex items-center border border-[#E9EAF0] px-4 py-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full focus:outline-none lg:text-[var(--p-color)] text-[#b8b8b8] "
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 lg:text-[var(--p-color)] text-white cursor-pointer focus:outline-none"
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

          <div className="flex justify-between mt-5">
            <div className="flex items-center gap-2 pl-2">
              <input
                type="checkbox"
                id="remember"
                className="scale-150 accent-[#FC5B3F]"
              />
              <label htmlFor="remember" className="lg:text-[#4E5566] text-white">
                Remmember me
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#FC5B3F] text-white py-2 px-6 flex items-center gap-2 font-semibold hover:bg-opacity-90"
            >
              Sign in
              <FaArrowRight />
            </button>
          </div>
          <div className="flex items-center gap-4 my-4">
            <hr className="flex-grow border-t border-white lg:border-gray-300" />
            <span className="text-gray-500 ">SIGN IN WITH</span>
            <hr className="flex-grow border-t border-white lg:border-gray-300" />
          </div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <button className="border lg:text-[var(--primary-color)] text-white border-[#E9EAF0] py-2 cursor-pointer hover:border-[#f88484] w-full flex items-center gap-5 h-full group">
              <div className="w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#f88484] border-[#E9EAF0]">
                <FaGoogle color="var(--primary-color) " />
              </div>
              Facebook
            </button>
            <button className="border lg:text-[var(--primary-color)] text-white  border-[#E9EAF0] py-2 cursor-pointer hover:border-[#4267B2] w-full flex items-center gap-5 h-full group">
              <div className="w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#4267B2] border-[#E9EAF0]">
                <FaFacebookF color="var(--primary-color) " />
              </div>
              Facebook
            </button>
            <button className="border lg:text-[var(--primary-color)] text-white border-[#E9EAF0] py-2 cursor-pointer hover:border-[#4267B2] w-full flex items-center gap-5 h-full group">
              <div className="w-[30%] h-full items-center flex justify-center border-r text-white group-hover:border-[#4267B2] border-[#E9EAF0]">
                <FaApple color="var(--primary-color)"/>
              </div>
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
