import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default layout