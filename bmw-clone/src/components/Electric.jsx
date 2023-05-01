import React from 'react'
import LogoElectric from '../assets/LogoElectric.png'

const Electric = () => {
  return (
      <section className='bg-[url(/src/assets/ElectricCars.webp)] max-w-[2600px] mx-auto bg-center w-full h-[40rem] bg-no-repeat mb-10'>
        <div className='h-full w-full bg-gradient-70deg from-[#0006] to-transparent font-Poppins leading-[4rem] text-white px-20 flex items-center'>
          <div className='flex flex-col justify-center'>
            <div className='px-4'>
              <p className='text-white text-lg font-semibold mb-4'>BMW</p>
            </div>

            <div className='flex items-center mb-6 px-4'>
              <img className='mr-4 w-28' src={LogoElectric} alt="Gamma Elettrica" />
              <h2 className='text-6xl font-light'>Gamma Elettrica.</h2>
            </div>
            
            <div className='px-4'>
              <h2 className='text-6xl font-light mb-14'>Piacere di guidare. 100% <br/>electric.</h2>
            </div>

            <div className='px-4'>
              <button className='border-[1px] hover:shadow-buttonWhite border-white w-[28rem] py-4 text-base font-semibold rounded-[3px]'>Scopri la gamma elettrica BMW</button>
            </div>
          </div>

        </div>
      </section>
  )
}

export default Electric