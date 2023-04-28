import React from 'react'
import Logo from '../assets/bmw-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='px-32 w-full bg-gradient-to-b from-[#0006] to-transparent'>

        <nav className='flex justify-between h-28 border-b-2'>
        <div className='flex items-center w-full'>
          <img className='mr-8 w-[4.25rem] cursor-pointer' src={Logo} alt="BMW logo" />
          <ul className='flex h-full font-Poppins font-semibold text-white text-xl'>
            <li className='p-4 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'>Modelli</li>
            <li className='p-4 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'>All Electric</li>
            <li className='p-4 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'>Configura la tua BMW</li>
            <li className='p-4 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'>Shop Online</li>
            <li className='p-4 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'>More BMW</li>
          </ul>
        </div>

        <div>
          <ul className='flex h-full'>
            <li className='p-6 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} size='lg' /></li>
            <li className='p-6 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faShoppingCart} style={{color: "#ffffff",}} size='lg' /></li>
            <li className='p-6 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} size='lg' /></li>
            <li className='p-6 h-full flex items-center cursor-pointer border-b-[6px] border-t-[6px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} size='lg' /></li>
          </ul>
        </div>
        </nav>
        

    </div>
  )
}

export default Header