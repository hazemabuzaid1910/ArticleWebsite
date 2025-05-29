import React from 'react'
import { FaArrowRight, FaImage } from 'react-icons/fa'
import img from '../assets/Illustrations.png'
function SignIn() {

  return (
    <div className='flex flex-col items-center justify-center h-full max-h-screen gap-10 sm:flex-row'>
      <div className='bg-[#EBEBFF] flex items-center justify-center sm:w-[50%]'>
        <img src={img} alt="Saly Illustration" className="w-full" />
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
              <input type="password" placeholder="Create password" className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
            </div>
           
          </div>

          <div className='flex justify-between'>
          <div className="flex items-center gap-2">
            <input type="checkbox" className='' />
            <label>Remmember me</label>
          </div>

          <button type="submit" className="bg-[#FC5B3F] text-white py-2 px-6 flex items-center gap-2 font-semibold hover:bg-opacity-90">
            Sign in<FaArrowRight/>
          </button>
         </div>
          <div className="mt-4 text-center">SIGN IN</div>
          <div className="flex justify-between gap-4">
            <button className="border border-[#E9EAF0] py-2 px-6 w-full">Google</button>
            <button className="border border-[#E9EAF0] py-2 px-6 w-full">Facebook</button>
            <button className="border border-[#E9EAF0] py-2 px-6 w-full">Apple</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
