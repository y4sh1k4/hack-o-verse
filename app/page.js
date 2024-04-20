"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Spline from "@splinetool/react-spline";
import Model from "./Components/Model";
import { AnimatePresence,motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [selected,setSelected] = useState("patients");
  return (
    <>
    <AnimatePresence>
      <div><Navbar/></div>
      <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.8,type:"spring",stiffness:50}} id='hero' className="flex w-full h-full bg-white">
        <div id="text"  className="flex w-full h-[100vh] overflow-hidden flex items-center justify-center gap-0">
          <div className="w-[40%] h-full flex  flex-col items-start justify-center gap-8">
            <div className="text-6xl font-bold font-sans text-blue-600">Empower Your Health. <br/>Elevate Your Care</div>
            <div className="font-sm w-[90%] font-sans">Take control over your wellbeing and manage your health, while giving your doctor a clear view of your progress.</div>
            <Link href="/form">
            <button className="rounded-full  px-16 font-bold py-2 shadow-xl text-lg bg-blue-400 text-white">Get started</button>
            </Link>
          </div>
          <div id="3dmodel" className="w-[30%] ">
              <Model/>
          </div>
          
          </div>
      </motion.div>
      <div id="features">
        <div className="text-7xl font-bold w-full text-center text-blue-500">Features</div>
        <div id="selector" className="w-full flex justify-center items-center gap-10 my-20"> 
          <button className={`rounded-lg text-xl text-white px-4 py-2 font-bold  shadow-lg ${selected==="patients"?'bg-blue-500':'bg-blue-200'}`} onClick={()=>setSelected("patients")}>Patients</button>
          <button className={`rounded-lg text-xl text-white px-4 py-2 font-bold  shadow-lg ${selected==="doctors"?'bg-blue-500':'bg-blue-200'}`} onClick={()=>setSelected("doctors")}>Doctors</button>
        </div>
        <div className="flex flex-col gap-10 px-32">
        <div
        id="feature1" className="flex h-[70vh] justify-start gap-32 items-center">
            <div >
              <Image src="/Images/patientimage1.jpg" width={700} height={700} className="rounded-full"/>
            </div>
            <motion.div initial={{x:800}} whileInView={{x:0}} transition={{duration:0.5,type:"spring",stiffness:80}}  viewport={{once:true}} className="w-[35%] flex flex-col gap-8"  >
              <di className="text-6xl font-bold text-blue-500 ">Track your own data</di>
              <div className="text-lg">Track your data through the dashboard and see your progress, reports, data, everything at one place </div>
              <button className="rounded-full  px-16 font-bold py-2 shadow-xl text-lg bg-blue-400 text-white">Proceed</button>

            </motion.div>
        </div>
        <div
        id="feature1" className="flex h-[70vh] justify-end gap-16 items-center">
            <motion.div initial={{x:-800}} whileInView={{x:0}} transition={{duration:0.5,type:"spring",stiffness:80}} viewport={{once:true}} className="w-[35%] flex flex-col gap-8" >
              <div className="text-6xl font-bold text-blue-500 ">Connect with your doctor</div>
              <div className="text-lg">Share your realtime data with your doctor and get the precriptions on time without going to anywhere </div>
              <button className="rounded-full  px-16 font-bold py-2 shadow-xl text-lg bg-blue-400 text-white">connect</button>
            </motion.div>
            <div >
              <Image src="/Images/patientimage2.jpg" width={700} height={700} className="rounded-full"/>
            </div>
        </div>
        <div
        id="feature1" className="flex h-[70vh] justify-start gap-16 items-center">
            <div >
              <Image src="/Images/patientimage3.jpg" width={700} height={700} className="rounded-full"/>
            </div>
            <motion.div initial={{x:800}} whileInView={{x:0}} transition={{duration:0.5,type:"spring",stiffness:80}} viewport={{once:true}} className="w-[35%] flex flex-col gap-8" >
              <div className="text-6xl font-bold text-blue-500 ">Online Consultation</div>
              <div className="text-lg">Don't have time to go to your doctor, don't worry, connect to an online specialist doctor who will listen to your problem carefully and prescribe according to it</div>
              <button className="rounded-full  px-16 font-bold py-2 shadow-xl text-lg bg-blue-400 text-white">Consult</button>
            </motion.div>
        </div>
        <div 
        id="feature1" className="flex h-[70vh] justify-end gap-16 items-center">
            
            <motion.div initial={{x:-800}} whileInView={{x:0}} transition={{duration:0.5,type:"spring",stiffness:80}} viewport={{once:true}} className="w-[35%] flex flex-col gap-8" >
              <div className="text-6xl font-bold text-blue-500 ">Gamify your health</div>
              <div className="text-lg">Gamify your progress of healthy lifestyle by daily entering your data and earning points for it.Use the points to set your lifestyle goals and reward yourself through it.Also, Get engaged with your friends by seeing their healthy lifestyle points in the leaderboard </div>
              <button className="rounded-full  px-16 font-bold py-2 shadow-xl text-lg bg-blue-400 text-white">Set Goal</button>
            </motion.div>
            <div >
              <Image src="/Images/patientimage4.jpg" width={700} height={700} className="rounded-full"/>
            </div>
        </div>
        </div>
      </div>
      </AnimatePresence>
    </>
  );
}
