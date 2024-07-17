import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='w-screen mx-auto py-5 bg-white/70 backdrop-blur-lg z-10 mt-0 sticky top-0 border-b-[0.2px] border-gray-300'>
      <ul className='flex flex-row justify-center items-center gap-10 '>
        <li className='text-lg hover:font-medium hover:translate-x-1 transition-all'><Link href="/">Home</Link></li>
        <li className='text-lg hover:font-medium hover:translate-x-1 transition-all'><Link href="/works">Works</Link></li>
        <li className='text-lg hover:font-medium hover:translate-x-1 transition-all'><Link href="/about">About Me</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
