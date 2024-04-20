import React from 'react'
import { FaUser } from "react-icons/fa";
import { TbRibbonHealth } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
const SidebarDoctor = () => {
  return (
    <div>
       <div className="shadow-2xl basis-1/5  bg-neutral-50 h-[100vh]">
                <div className="flex flex-col gap-[2vw] h-[100vh] ml-[1vw] mr-[2vw]">
                    <div><h1 className="font-bold text-2xl mt-[2vw]">WELCOME, JAMES</h1></div>
                    <div className="flex flex-col gap-[2vw] ox-[2vw] text-xl">
                        <div className="hover:font-semibold flex gap-2 items-center text-gray-700  hover:bg-blue-100 focus:hover:bg-blue-100 rounded-r-full w-full px-4 py-2"><FaUser styles={{marginTop:1}}/> Profile</div>
                        <div className="hover:font-semibold flex gap-2 items-center text-gray-700  hover:bg-blue-100 focus:hover:bg-blue-100 rounded-r-full w-full px-4 py-2" > <TbRibbonHealth />Your patients</div>
                        <div className="hover:font-semibold flex gap-2 items-center text-gray-700  hover:bg-blue-100 focus:hover:bg-blue-100 rounded-r-full w-full px-4 py-2"><MdExplore />Explore</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SidebarDoctor
