import React from 'react'
import LogoElectric from '../assets/LogoElectric.png'

const Electric = () => {
  return (
      <section className='bg-[url(/src/assets/ElectricCars.webp)] bg-center w-full h-[53rem] bg-no-repeat mb-16'>
        <div className='h-full w-full bg-gradient-70deg from-[#0006] to-transparent font-Poppins leading-[4rem] text-white px-32 flex flex-col justify-center'>
          <div>
            <p className='text-white text-xl font-semibold mb-4'>BMW</p>
          </div>

          <div className='flex items-center mb-6'>
            <img className='mr-4 w-28' src={LogoElectric} alt="Gamma Elettrica" />
            <h2 className='text-7xl font-light'>Gamma Elettrica.</h2>
          </div>
          
          <div>
            <h2 className='text-7xl font-light mb-14'>Piacere di guidare. 100% <br /> electric.</h2>
          </div>

          <div>
            <button className='border-2 hover:shadow-buttonWhite border-white px-6 py-5 text-xl font-semibold rounded-[3px]'>Scopri la gamma elettrica BMW</button>
          </div>

        </div>
      </section>
  )
}

export default Electric