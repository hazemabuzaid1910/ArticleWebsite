import React from 'react'
import sally from '../assets/Saly-1.png'
import { useState } from 'react'
import { FaApple, FaArrowRight, FaFacebookF, FaGoogle, FaImage } from 'react-icons/fa'
import { FaEye ,FaEyeSlash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function CreateAccount() {
  const [img, setImg] = useState(null)
const [fileName, setFileName] = useState("No file chosen");
  const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImg(URL.createObjectURL(file))
          setFileName(e.target.files[0].name);

    }
  }
  return (
    <div className='flex flex-col h-full gap-10 sm:flex-row'>
      <div className='bg-[#EBEBFF] flex items-center justify-center sm:w-[45%]'>
        <img src={sally} alt="Saly Illustration" className="w-full" />
      </div>

      <div className='flex flex-col sm:w-1/2 sm:px-[5rem] gap-5 sm:py-[2rem]'>
        <h1 className='text-[40px] font-[600] text-[#1D2026] text-center'>Create your account</h1>

        <form className="flex flex-col gap-5 p-5">
          <div className='flex flex-col w-full gap-5 sm:flex-row'>
            <div className="flex flex-col w-full gap-2">
              <label>First Name</label>
              <input type="text" placeholder="First name..." className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label>Last Name</label>
              <input type="text" placeholder="Last name..." className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Mobile</label>
            <input type="text" placeholder="ex: 963 000 0000" className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <label>Username</label>
            <input type="text" placeholder="Username..." className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" placeholder="Email address" className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
          </div>

           <div className="flex flex-col w-full gap-3 sm:flex-row">
            <div className='flex items-end w-fit'>
            {img ? <img src={img} alt="Uploaded" className="object-cover w-20 h-20 mt-2 rounded" />:<div className='w-20 h-20 bg-[#E2E6EC] items-center flex justify-center'><FaImage size={40} color="#B2B9C4"/></div>}
           </div>
            <div className='flex flex-col w-full gap2'>
            <span className="text-[12px] text-[#B4B4B4]">Please upload square image, size less than 800 kb</span>
  <label className="cursor-pointer gap-5 flex bg-[#FFEEE8] text-[#FC5B3F] font-medium px-5 py-5 items-center w-full  rounded hover:bg-[#FFE5DF] transition">
     <span className='px-5 py-2 border rounded'> Choose File</span> 
      <input
        type="file"
        onChange={handleImageChange}
        className="hidden"
      />
          <span className="text-[#888888] text-sm">{fileName ? fileName:"no file choosen"}</span> 

    </label>

          </div>
          </div>

          <div className='flex flex-col w-full gap-5 sm:flex-row'>
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
                className="ml-2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
        </div>
          <div className='flex w-full gap-5'>
          <div className="flex flex-col w-full gap-2">
            <label>Confirm Password</label>
            <div className='flex items-center border border-[#E9EAF0] px-4 py-2'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Create password"
                className="w-full focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="ml-2 text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>
        </div>
          </div>

          <div className='flex flex-col justify-between gap-5 sm:flex-row'>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="agree" className='accent-[#FC5B3F] scale-150' />
            <label htmlFor='agree'className='text-[#8C94A3]'>I agree with all of your <Link className="text-[#3F5BF6] underline">Terms & Conditions</Link></label>
          </div>

          <button type="submit" className="bg-[#FC5B3F] text-white w-fit py-2 px-6 flex items-center gap-2 font-semibold hover:bg-opacity-90">
            Create Account <FaArrowRight/>
          </button>
         </div>
<div className="flex items-center gap-4 my-4">
  <hr className="flex-grow border-t border-gray-300" />
  <span className="text-gray-500 ">SIGN UP WITH</span>
  <hr className="flex-grow border-t border-gray-300" />
</div> 
         <div className="flex flex-col justify-between gap-4 sm:flex-row">
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

export default CreateAccount
