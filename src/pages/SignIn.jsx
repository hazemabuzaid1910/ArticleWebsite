import React from 'react'
import { FaArrowRight, FaImage } from 'react-icons/fa'
import img from '../assets/Illustrations.png'
import { FaEye ,FaEyeSlash} from 'react-icons/fa'
import { FaApple, FaFacebookF, FaGoogle } from 'react-icons/fa'

import { useState } from 'react'
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center h-full gap-10 sm:flex-row'>
      <div className='bg-[#6161c7] flex  items-center justify-center  sm:w-[50%] '>
        <img src={img} alt="Saly Illustration" className="w-full h-full" />
      </div>

      <div className='flex flex-col p-10 sm:w-1/2 sm:px-[5rem] gap-5 sm:py-[2rem]'>
        <h1 className='text-[40px] font-[600] text-[#1D2026] text-center'>Sign in to your account</h1>

        <form className="flex flex-col gap-5">
          
           

         
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" placeholder="Email address" className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
          </div>


           <div className='flex w-full gap-5'>
      <div className="flex flex-col w-full gap-2">
        <label>Password</label>
        <div className='flex items-center border border-[#E9EAF0] px-4 py-2'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create password"
            className="w-full focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 cursor-pointer focus:outline-none"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
      </div>
    </div>

          <div className='flex justify-between mt-5'>
          <div className="flex items-center gap-2 pl-2">
            <input type="checkbox" id="remember" className='scale-150 accent-[#FC5B3F]' />
            <label htmlFor="remember" className='text-[#4E5566]'>Remmember me</label>
          </div>

          <button type="submit" className="bg-[#FC5B3F] text-white py-2 px-6 flex items-center gap-2 font-semibold hover:bg-opacity-90">
            Sign in<FaArrowRight/>
          </button>
         </div>
<div className="flex items-center gap-4 my-4">
  <hr className="flex-grow border-t border-gray-300" />
  <span className="text-gray-500 ">SIGN IN WITH</span>
  <hr className="flex-grow border-t border-gray-300" />
</div>            <div className="flex flex-col justify-between gap-4 sm:flex-row">
                        <button className="border border-[#E9EAF0] py-2 cursor-pointer hover:border-[#f88484] w-full flex items-center gap-5 h-full group">
                  <div className='w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#f88484] border-[#E9EAF0]'>
                  <FaGoogle />
                  </div>
                  Facebook
                 </button>
                  <button className="border border-[#E9EAF0] py-2 cursor-pointer hover:border-[#4267B2] w-full flex items-center gap-5 h-full group">
                    <div className='w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#4267B2] border-[#E9EAF0]'>
                     <FaFacebookF />
                    </div>
                    Facebook
                   </button>
                  <button className="border border-[#E9EAF0] py-2 cursor-pointer hover:border-[#4267B2] w-full flex items-center gap-5 h-full group">
                    <div className='w-[30%] h-full items-center flex justify-center border-r group-hover:border-[#4267B2] border-[#E9EAF0]'>
                    <FaApple />
                  </div>
                   Facebook
                   </button>
                 </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
