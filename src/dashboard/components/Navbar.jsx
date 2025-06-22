import React from 'react'
import { IoNotifications } from 'react-icons/io5';
function Navbar() {
  return (
    <div className="mx-5 mt-2 bg-[var(--primary-color)] rounded-xl "  >
            <div className="sticky z-40 p-4 bg-[var(--primary-color)]  border border-gray-700 rounded-xl right-2 left-2 -xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-white">
     
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700">
              <IoNotifications size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <span className="text-white">Admin</span>
            </div>
          </div>
        </div>
      </div>

      <div className="">
      </div>
    </div>
  );

}

export default Navbar