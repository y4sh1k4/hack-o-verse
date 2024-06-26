"use client"
import React, { createContext, useState } from 'react'
export const doctorContext = createContext();

export const DoctorContext = ({children}) => {
    const [doctor,setDoctor] = useState({
      name:"Yashika"
    }); 
  return (
    <doctorContext.Provider value={{doctor,setDoctor}}>
        {children}
    </doctorContext.Provider>
  )
}
