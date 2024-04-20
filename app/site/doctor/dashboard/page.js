import React from 'react'
import Linechart from '@/app/Components/Linechart'
import Image from 'next/image'
const page = () => {
    const Patients=[
        {name:"mong hunter",date:"12 March 2024",condition:"diabeties"},
        {name:"mong hunter",date:"12 March 2024",condition:"diabeties"},
        {name:"mong hunter",date:"12 March 2024",condition:"diabeties"},
        {name:"mong hunter",date:"12 March 2024",condition:"diabeties"},
]
    const waitingPatient=[
        {image:"/Images/image1.png",name:"kendra slevens",date:"12 march 2022",time:"3:03",message:'I need to check my headache',color:"bg-red-600"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},
        {image:"/Images/image1.png",name:"Selena johns",date:"18 march 22",time:"5:40",message:'I need to check my headache',color:"bg-yellow-300"},


    ]
  return (
    <div className='flex '>  
        <div className='flex flex-col gap-[1vw]'>
            <div className="flex flex-col gap-[2vw] w-[50vw] m-[2vw] bg-neutral-50 rounded-3xl shadow-xl p-[2vw]">
                <h1 className='font-bold text-xl'>Patients</h1>
                <div className='flex flex-col gap-[2vw]'>
                    {Patients.map((Patient,index)=>{
                        return(
                            <div className='flex w-[96%] gap-[2vw] shadow-md p-[1vw]'>
                                <div className='flex flex-col gap-[2vw]'>
                                    <div className='flex gap-[4vw] '>
                                        <div>{index+1}</div>
                                        <div>{Patient.name}</div>
                                        <div>{Patient.date}</div>
                                        <div>{Patient.condition}</div>
                                    </div>
                                    {/* <div className='ml-[2vw] text-blue text-neutral-400'>Hey! i want you to check</div> */}
                                    </div>
                                <div>
                                    <button className='w-[8vw] h-[2vw] bg-cyan-900 rounded-lg text-white'>Monitor</button>
                                </div>
                            </div>
                        )
                        })}
                </div>           
            </div>
            <Linechart/>      
        </div>
        <div>
                <div className='flex flex-col gap-[1vw] bg-neutral-50 rounded-3xl shadow-xl w-[30vw] h-fit mt-[2vw] p-[2vw]'>
                <h1 className='font-bold text-xl'>Waiting Patients</h1>
                    <div className='flex flex-col gap-[1.5vw]'>
                        {waitingPatient.map(p=>{
                            return(
                                <div className="flex gap-[1.5vw] shadow-md p-[1vw] rounded-lg bg-red-100">
                                    <div ><Image src={p.image} width={100} height={100} className='w-[3vw] rounded-3xl'/></div>
                                    <div className='flex flex-col gap-[0.5vw]'>
                                    <h1 className='font-bold text-xl'>{p.name}</h1>
                                        <div className='text-zinc-600'>{p.message}</div>
                                    </div>
                                    <div>
                                        <div className='text-sm text-zinc-600'>{p.date}</div>
                                        <div className='text-sm text-zinc-600'>{p.time}</div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}

export default page
