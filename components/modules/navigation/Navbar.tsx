"use client"
import Text from '@/components/atoms/Text'
import React, { useState } from 'react'
import MenuButton from './MenuButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='container w-full text-center mx-auto bg-sky'>
      <Text language={'en'} variant={'web_h1'} type='paragraph'>{`NAVBAR`}</Text>
      <MenuButton isOpen={isOpen} onClick={onClick}/>
    </nav>
  )
}

export default Navbar