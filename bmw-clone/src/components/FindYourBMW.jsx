import React from 'react'
import Stock from '../assets/ICON_STOCK_CAR.webp'
import testDrive from '../assets/ICON_TESTDRIVE.webp'
import Con from '../assets/ICON_CON.webp'

const FindYourBMW = () => {
  return (
    <section className='text-center my-16 font-Poppins px-32 text-[#262626]'>
      <div className='px-4'>
        <h3 className='text-2xl font-semibold mb-8'>SHOPPING TOOLS</h3>
        <h2 className='text-8xl font-light'>TROVA LA TUA BMW.</h2>
      </div>
      <div className='grid grid-cols-3'>
        <div className='px-4'>
          <img src={Stock} alt="Trova una Nuova BMW" />
          <p className='text-3xl mb-16'>Trova una Nuova BMW</p>
          <button className='border-2 hover:shadow-buttonBlack border-black px-6 py-5 text-xl font-semibold rounded-[3px]'>Vetture disponibili</button>
        </div>
        <div className='px-4'>
          <img src={testDrive} alt="Prenota un Test Drive" />
          <p className='text-3xl mb-16'>Prenota un Test Drive</p>
          <button className='border-2 hover:shadow-buttonBlack border-black px-6 py-5 text-xl font-semibold rounded-[3px]'>Test Drive</button>
        </div>
        <div className='px-4'>
          <img src={Con} alt="Configura la Tua BMW" />
          <p className='text-3xl mb-16'>Configura la Tua BMW</p>
          <button className='border-2 hover:shadow-buttonBlack border-black px-6 py-5 text-xl font-semibold rounded-[3px]'>Configuratore & prezzo</button>
        </div>
      </div>
    </section>
  )
}

export default FindYourBMW