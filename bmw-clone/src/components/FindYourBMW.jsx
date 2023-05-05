import React from 'react'
import Stock from '../assets/ICON_STOCK_CAR.webp'
import testDrive from '../assets/ICON_TESTDRIVE.webp'
import Con from '../assets/ICON_CON.webp'

const FindYourBMW = () => {
  return (
    <section className='text-center py-16 font-Poppins px-4 md:px-12 xl:px-22 text-[#262626] max-w-[2600px] mx-auto'>
      <div className='px-2'>
        <h3 className='text-base xl:text-lg 2xl:text-xl font-semibold mb-2 xl:mb-4'>SHOPPING TOOLS</h3>
        <h2 className='text-4xl xl:text-5xl 2xl:text-7xl font-light'>TROVA LA TUA BMW.</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='px-2'>
          <img src={Stock} alt="Trova una Nuova BMW" />
          <p className='text-lg xl:text-xl 2xl:text-2xl mb-10'>Trova una Nuova BMW</p>
          <button className='border-[1px] w-full md:w-auto hover:shadow-buttonBlack border-black px-2 sm:px-6 py-4 text-base font-semibold rounded-[3px]'>Vetture disponibili</button>
        </div>
        <div className='px-2'>
          <img src={testDrive} alt="Prenota un Test Drive" />
          <p className='text-lg xl:text-xl 2xl:text-2xl mb-10'>Prenota un Test Drive</p>
          <button className='border-[1px] w-full md:w-auto hover:shadow-buttonBlack border-black px-2 sm:px-6 py-4 text-base font-semibold rounded-[3px]'>Test Drive</button>
        </div>
        <div className='px-2'>
          <img src={Con} alt="Configura la Tua BMW" />
          <p className='text-lg xl:text-xl 2xl:text-2xl mb-10'>Configura la Tua BMW</p>
          <button className='border-[1px] w-full md:w-auto hover:shadow-buttonBlack border-black px-2 sm:px-6 py-4 text-base font-semibold rounded-[3px]'>Configuratore & prezzo</button>
        </div>
      </div>
    </section>
  )
}

export default FindYourBMW