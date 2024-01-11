"use client";
import Text from '@/components/atoms/Text'
import React, { useState } from 'react'
import MenuButton from './MenuButton'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='container w-full relative'>
      <div className='absolute right-1 top-1 z-20'>
        <MenuButton isOpen={isOpen} onClick={onClick} size={63} boxSize={200}/>
      </div>
      <div className={`${isOpen ? "sm:w-[40%] w-full":"w-0"} side-bar text-center`}>
        {/* side bar */}
      </div>
    </nav>
  )
}

export default Navbar