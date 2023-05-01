import React from 'react'
import Header from './Header'
import smallLogo from '../assets/bmw-small-logo.png'
import hero from '../assets/bmw-hero.webp'

const Hero = () => {
  return (
    <section className='relative max-w-[2600px] mx-auto'>
      <img className='bg-cover bg-no-repeat w-full' src={hero} alt="/" />
      <div className='w-full h-full bg-gradient-70deg from-[#0006] to-transparent absolute top-0'>
        <Header />
        <div className='px-12 xl:px-20 w-full h-full pt-6 flex items-center'>

          <div className='px-4 absolute top-28'>
            <p className='text-white font-Poppins text-base'><span className='font-semibold'>Piacere</span> di guidare</p>
          </div>

          <div className='px-4 flex flex-col w-full'>

            <div className='mb-6'>
              <p className='text-white font-bold font tracking-wider text-base'>THE</p>
            </div>

            <div className='flex'>
              <h1 className=' text-[8rem] xl:text-[14rem] 2xl:text-[16rem] font-light xl:-ml-2 leading-none font-Poppins text-white'>7</h1>
            </div>

            <div className='flex items-center mb-8'>
              <img className='w-10 xl:w-14 mr-2' src={smallLogo} alt="BMW logo" />
              <h2 className='text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2.25rem] font-light text-white font-Poppins'>NUOVA BMW SERIE 7 M.</h2>
            </div>

            <div className='pb-32'>
              <button className='bg-[#1c69d4] hover:bg-[#1653a8] w-[25%] py-4 text-base rounded-sm font-Poppins text-white font-semibold'>Scopri di più</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero