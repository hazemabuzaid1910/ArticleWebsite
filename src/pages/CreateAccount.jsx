import React from 'react'
import sally from '../assets/Saly-1.png'
import { useState } from 'react'
import { FaArrowRight, FaImage } from 'react-icons/fa'
function CreateAccount() {
  const [img, setImg] = useState(null)
const [fileName, setFileName] = useState("No file chosen");

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
            <div className="flex flex-col w-full gap-2">
              <label>Password</label>
              <input type="password" placeholder="Create password" className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" className="border border-[#E9EAF0] px-4 py-2 focus:outline-none" />
            </div>
          </div>

          <div className='flex flex-col justify-between gap-5 sm:flex-row'>
          <div className="flex items-center gap-2">
            <input type="checkbox" className='' />
            <label>I agree with all of your <span className="text-[#3F5BF6] underline">Terms & Conditions</span></label>
          </div>

          <button type="submit" className="bg-[#FC5B3F] text-white w-fit py-2 px-6 flex items-center gap-2 font-semibold hover:bg-opacity-90">
            Create Account <FaArrowRight/>
          </button>
         </div>
          <div className="mt-4 text-center">SIGN UP WITH</div>
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

export default CreateAccount
