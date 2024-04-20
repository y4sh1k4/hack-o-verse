import SidebarPatient from '@/app/Components/SidebarPatient'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
        <div className='flex justify-between w-full bg-[#F6F8FF] h-[100vh]'>
        <SidebarPatient/>
        {children}
        </div>
    </>
  )
}

export default layout