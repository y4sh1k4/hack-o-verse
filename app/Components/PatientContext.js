"use client"
import React, { createContext, useState } from 'react'
export const patientContext = createContext();

export const PatientContext = ({children}) => {
    const [patient,setPatient] = useState({}); 
  return (
    <patientContext.Provider value={{patient,setPatient}}>
        {children}
    </patientContext.Provider>
  )
}
