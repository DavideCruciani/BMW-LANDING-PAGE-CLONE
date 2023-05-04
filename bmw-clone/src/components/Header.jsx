import React, { useState } from 'react'
import Logo from '../assets/bmw-logo.svg'
import GreyLogo from '../assets/bmw-grey-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faXmark, faLocationDot, faMagnifyingGlass, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [showNav, setShowNav] = useState(false)

  function ShowNavbar() {
    setShowNav(!showNav)
    console.log(showNav)
  }

  return (
    <>
      <div className='px-8 md:px-14 xl:px-24 w-full bg-gradient-to-b from-[#0006] to-transparent'>

        <nav className='flex justify-between h-20 xl:border-b-2'>
          <div className='flex items-center w-full'>
            <img className='mr-8 w-[2.5rem] md:w-[3.25rem] cursor-pointer' src={Logo} alt="BMW logo" />
            <ul className='h-full hidden xl:flex font-Poppins font-semibold text-white text-base'>
              <li className='p-3 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'>Modelli</li>
              <li className='p-3 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'>All Electric</li>
              <li className='p-3 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'>Configura la tua BMW</li>
              <li className='p-3 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'>Shop Online</li>
              <li className='p-3 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'>More BMW</li>
            </ul>
          </div>

          <div>
            <ul className='flex h-full'>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} size='sm' /></li>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faShoppingCart} style={{color: "#ffffff",}} size='sm' /></li>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} size='sm' /></li>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4]'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} size='sm' /></li>
              <li onClick={() => {ShowNavbar()}} className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4] xl:hidden'><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} size='lg' /></li>
            </ul>
          </div>
        </nav>

      </div>

      <div className={showNav ? 'bg-white fixed top-0 left-0 right-0 w-full h-full xl:hidden -translate-x-0 ease duration-300' : 'bg-white fixed top-0 left-0 right-0 w-full h-full xl:hidden translate-x-full ease duration-150'}>
        <nav className='flex justify-between h-16 md:h-20 border-b-[1px] border-b-[#bbb]  px-8 md:px-16 xl:px-24'>
          <div className='flex items-center w-full justify-between'>
            <img className='w-[2.5rem] md:w-[3.25rem] cursor-pointer' src={GreyLogo} alt="BMW logo" />
            <ul className='flex h-full text-[#666]'>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4] hover:text-[#262626]'><FontAwesomeIcon icon={faUser} size='sm' /></li>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4] hover:text-[#262626]'><FontAwesomeIcon icon={faShoppingCart} size='sm' /></li>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4] hover:text-[#262626]'><FontAwesomeIcon icon={faLocationDot} size='sm' /></li>
              <li className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4] hover:text-[#262626]'><FontAwesomeIcon icon={faMagnifyingGlass} size='sm' /></li>
              <li onClick={() => {ShowNavbar()}} className='p-4 h-full flex items-center cursor-pointer border-b-[4px] border-t-[4px] border-transparent hover:border-b-[#1c69d4] xl:hidden hover:text-[#262626]'><FontAwesomeIcon icon={faXmark} size='xl' /></li>
            </ul>
          </div>
        </nav>

        <div className='flex flex-col w-full h-full'>
          <ul className='h-full font-Poppins font-semibold mx-auto w-5/6 md:w-4/6 text-[#666] pt-7 text-base'>
            <li className='p-3 items-center cursor-pointer flex hover:text-[#262626]'><p>Modelli</p></li>
            <li className='p-3 items-center cursor-pointer flex justify-between group hover:text-[#262626]'><p>All Electric</p><FontAwesomeIcon icon={faChevronRight} size='sm' /></li>
            <li className='p-3 items-center cursor-pointer flex hover:text-[#262626]'><p>Configura la tua BMW</p></li>
            <li className='p-3 items-center cursor-pointer flex justify-between group hover:text-[#262626]'><p>Shop Online</p><FontAwesomeIcon icon={faChevronRight} size='sm' /></li>
            <li className='p-3 items-center cursor-pointer flex justify-between group hover:text-[#262626]'><p>More BMW</p><FontAwesomeIcon icon={faChevronRight} size='sm' /></li>
          </ul>
        </div> 
      </div>
    </>
    
  )
}

export default Header