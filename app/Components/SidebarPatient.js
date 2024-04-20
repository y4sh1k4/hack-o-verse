import React from "react";
import { GiHealthIncrease } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { MdPerson2 } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";

import Image from "next/image";
function SidebarPatient() {
  const options = [
    { name: "Dashboard", icon: <MdHomeFilled size={25}/> },
    { name: "Enter Data", icon: <FaPenToSquare size={25}/> },
    { name: "Consultation", icon: <MdPerson2 size={25}/> },
    { name: "My Doctor", icon: <BsPersonAdd size={25}/> },
  ];
  return (
    <div className="basis-1/5 bg-white py-6 flex flex-col justify-between shadow-lg">
      <div className="flex gap-12">
        <div className="w-6 rounded-r-xl h-16 bg-[#6D84FE]"></div>
        <div className="h-16 py-4 text-lg font-bold text-white bg-[#6D84FE] flex items-center justify-center  gap-3 rounded-xl px-16">
          <GiHealthIncrease />
          Arogya
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {options.map((option) => {
          return (
            <div className="w-[90%] flex hover:bg-slate-200 py-4 rounded-lg items-center justify-center text-center text-xl">
              {option.icon}
              <div className="w-2/4">
              {option.name}
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src={"/Images/doctorbg.png"}
        width={300}
        height={300}
        alt="doctor bg"
      />
    </div>
  );
}

export default SidebarPatient;
