"use client";
import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { doctorContext } from "../Components/DoctorContext";
import { patientContext } from "../Components/PatientContext";
import Link from "next/link";
function page() {
  const [userType, setUserType] = useState();
  const [userDetails, setUserDetails] = useState({});
  const [doctorDetails, setDoctorDetails] = useState({});
  const {doctor,setDoctor} = useContext(doctorContext);
  const {patient,setPatient} = useContext(patientContext);

  const handleSubmit = ()=>{
      if(userType==="patient"){
        setPatient(userDetails);
      }else if(userType==="doctor"){
        setDoctor(doctorDetails);
      }
  }
  console.log(patient)
  return (
    <AnimatePresence>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <motion.div
          className="flex flex-col gap-6 rounded-lg shadow-2xl px-24 py-10"
          initial={{ x: -800, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 80 }}
        >
          <h1 className="text-2xl font-bold">Welcome</h1>
          <div className="flex flex-col">
            <span>What describes you the best?</span>
            <input
              type="text"
              placeholder="patient or doctor"
              className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
              onChange={(e) => setUserType(e.target.value)}
            />
          </div>
          {userType === "patient" && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span>What is the chronic disease you are suffering from  ?</span>
                <input
                  type="text"
                  className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
                  onChange={(e) => setUserDetails({...userDetails,disease:e.target.value})}
                />  
              </div>
              <div className="flex flex-col">
                <span>From how much time you are suffering from it?</span>
                <input
                  type="text"
                  className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
                  onChange={(e) => setUserDetails({...userDetails,timeofdisease:e.target.value})}
                />  
              </div>
              <div className="flex flex-col">
                <span>Any allergies?</span>
                <input
                  type="text"
                  className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
                  onChange={(e) => setUserDetails({...userDetails,allergies:e.target.value})}
                />  
              </div>
            </div>
          )}

          {userType==="doctor" && (
             <div className="flex flex-col gap-6">
             <div className="flex flex-col">
               <span>What type of doctor are you?</span>
               <input
                 type="text"
                 className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
                 onChange={(e) => setDoctorDetails({...doctorDetails,type:e.target.value})}
               />  
             </div>
             <div className="flex flex-col">
               <span>Your specialisation is in?</span>
               <input
                 type="text"
                 className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
                 onChange={(e) => setDoctorDetails({...doctorDetails,specialisation:e.target.value})}
               />  
             </div>
             <div className="flex flex-col">
               <span>How many year have you been in this profession?</span>
               <input
                 type="text"
                 className="border border-neutral-300 rounded-lg px-2 py-1 mt-2"
                 onChange={(e) => setDoctorDetails({...doctorDetails,experience:e.target.value})}
               />  
             </div>
           </div>
          )}
          <Link href={`/site/${userType==="doctor"?"doctor/dashboard":"patient"}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow-lg" onClick={handleSubmit}>Submit</button>
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default page;
