import React from 'react'
import SidebarDoctor from '@/app/Components/SidebarDoctor'
import SidebarPatient from '@/app/Components/SidebarPatient'

const layout = ({children}) => {
  return (
    <div className='flex bg-[#F6F8FF]'>
        <SidebarDoctor/>
       {children} 
    </div>
  )
}

export default layout
