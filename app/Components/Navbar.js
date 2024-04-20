import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-10 flex justify-between text-black bg-blue-100 px-16  py-8 items-center text-lg'>
        <div>Logo</div>
        <div className='flex justify-center items-center gap-10'>
            <div>Join Our Community </div>
            <div>About</div>
            <button className='rounded-full px-4 hover:bg-blue-400 hover:text-white hover:border-blue-500 py-1.5 border border-black'>Login</button>
            <button className='rounded-full px-4 py-1.5 border border-blue-500 hover:shadow-xl bg-blue-400 text-white'>Register</button>
        </div>
    </div>
  )
}

export default Navbar