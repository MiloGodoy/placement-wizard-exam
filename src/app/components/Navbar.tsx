import Image from 'next/image'
import React from 'react'
import logo from '../../../public/wizard-logo-primary.svg'

export const Navbar = () => {
  return (
    <div className= 'bg-gray-100 p-4 flex'>
        <Image 
            src={ logo }
            height={100}
            width={200}
            alt='Wizard logo'   
        />
    </div>
  )
}
