import React from 'react'
import Header from './Header'
import smallLogo from '../assets/bmw-small-logo.png'

const Hero = () => {
  return (
    <section className='bg-[url(/src/assets/bmw-hero.webp)] h-[115vh] bg-no-repeat'>
      <div className='w-full h-full bg-gradient-70deg from-[#0006] to-transparent'>
        <Header />
        <div className='px-32 w-full pt-6'>

          <div className='mb-72'>
            <p className='text-white font-Poppins text-xl'><span className='font-semibold'>Piacere</span> di guidare</p>
          </div>

          <div className='px-4'>

            <div className='mb-6'>
              <p className='text-white font-bold font tracking-wider text-xl'>THE</p>
            </div>

            <div className='flex'>
              <h1 className='text-[20rem] -ml-2 leading-none font-Poppins text-white'>7</h1>
            </div>

            <div className='flex items-center mb-12'>
              <img className='w-14 mr-2' src={smallLogo} alt="BMW logo" />
              <h2 className='text-[3rem] text-white font-Poppins'>NUOVA BMW SERIE 7 M.</h2>
            </div>

            <div>
              <button className='bg-[#1c69d4] hover:bg-[#1653a8] px-56 py-5 text-2xl rounded-md font-Poppins text-white font-semibold'>Scopri di più</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero