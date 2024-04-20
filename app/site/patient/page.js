import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import Image from "next/image";
import LineChart from "@/app/Components/Linechart";
function page() {
  return (
    <div className="w-full flex gap-10 flex-col items-end">
      <div className="flex w-[90%] py-4 items-center  justify-between px-12 rounded-lg h-[8vh] bg-white shadow-lg">
        <div className="text-lg text-blue-500">
          Hello <b>Saksham</b>, Welcome Back
        </div>
        <div className="flex gap-5">
          <RiMessage2Fill size={30} />
          <IoNotifications size={30} />
          <Image
            src="/Images/person.webp"
            width={50}
            height={100}
            className="rounded-full border-2 border-white shadow-lg"
            alt="profile pic"
          />
        </div>
      </div>
      <div className="w-[90%] flex gap-10 flex-col">
        <div className="w-[50vw] flex justify-between">
          <div className="w-[11vw] flex justify-center items-center gap-10  px-4 py-2 bg-white rounded-lg">
            <div className="h-full w-1/2 bg-red-200 rounded-lg text-white flex items-center justify-center">hello</div>
            <div>
              <div className="text-2xl font-bold text-neutral-600">900</div>
              <div className="text-[0.7rem] w-full">Total Points</div>
              </div>
          </div>
          <div className="w-[11vw] flex justify-center items-center gap-10  px-4 py-2 bg-white rounded-lg">
            <div className="h-full w-1/2 bg-blue-200 rounded-lg text-white flex items-center justify-center">hello</div>
            <div>
              <div className="text-2xl font-bold text-neutral-600">900</div>
              <div className="text-[0.7rem] w-full">Total Points</div>
              </div>
          </div>
          <div className="w-[11vw] flex justify-center items-center gap-10  px-4 py-2 bg-white rounded-lg">
            <div className="h-full w-1/2 bg-purple-200 rounded-lg text-white flex items-center justify-center">hello</div>
            <div>
              <div className="text-2xl font-bold text-neutral-600">900</div>
              <div className="text-[0.7rem] w-full">Total Points</div>
              </div>
          </div>
          <div className="w-[11vw] flex justify-center items-center gap-10  px-4 py-2 bg-white rounded-lg">
            <div className="h-full w-1/2 bg-pink-200 rounded-lg text-white flex items-center justify-center">hello</div>
            <div>
              <div className="text-2xl font-bold text-neutral-600">900</div>
              <div className="text-[0.7rem] w-full">Total Points</div>
              </div>
          </div>
        </div>
        <div >
        <LineChart/>
        </div>
      </div>
    </div>
  );
}

export default page;
