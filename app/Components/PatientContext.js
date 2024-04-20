"use client"
import React, { createContext, useState } from 'react'
export const patientContext = createContext();

export const PatientContext = ({children}) => {
    const [patient,setPatient] = useState({
      name:"Saksham Bhugra"
    }); 
  return (
    <patientContext.Provider value={{patient,setPatient}}>
        {children}
    </patientContext.Provider>
  )
}
