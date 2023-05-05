import React from 'react'
import Header from './Header'
import smallLogo from '../assets/bmw-small-logo.png'
import hero from '../assets/bmw-hero.webp'
import hero1024 from '../assets/bmw-1024-hero.webp'
import hero600 from '../assets/bmw-600-hero.webp'

const Hero = () => {
  return (
    <section className='relative max-w-[2600px] mx-auto'>
      <picture>
        <source media='(min-width: 1024px)' srcSet={hero} className='bg-cover bg-no-repeat w-full' />
        <source media='(min-width: 768px)' srcSet={hero1024} className='bg-cover bg-no-repeat w-full' />
        <img className='bg-contain bg-no-repeat w-full' src={hero600} alt="/" />
      </picture>

      <div className='w-full h-full bg-gradient-top lg:bg-gradient-70deg lg:from-[#0006] to-transparent absolute top-0'>
        <Header />
        <div className='px-4 md:px-12 xl:px-22 w-full h-full pt-6 flex items-end lg:items-center'>

          <div className='px-2 absolute top-28'>
            <p className='text-white font-Poppins text-base hidden xl:block'><span className='font-semibold'>Piacere</span> di guidare</p>
          </div>

          <div className='px-2 flex flex-col w-full items-center lg:items-start'>

            <div className='mb-2 sm:mb-6'>
              <p className='text-white font-bold font tracking-wider text-sm sm:text-base'>THE</p>
            </div>

            <div className='flex'>
              <h1 className='text-[6rem] sm:text-[8rem] xl:text-[14rem] 2xl:text-[16rem] font-light xl:-ml-2 leading-none font-Poppins text-white'>7</h1>
            </div>

            <div className='flex items-center mb-6'>
              <img className='w-10 xl:w-14 mr-2' src={smallLogo} alt="BMW logo" />
              <h2 className='text-[1.25rem] sm:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2.25rem] font-light text-white font-Poppins break-words text-center'>NUOVA BMW SERIE 7 M.</h2>
            </div>

            <div className='mb-20 sm:mb-28 lg:mb-32 flex w-full justify-center lg:block'>
              <button className='bg-[#1c69d4] hover:bg-[#1653a8] w-full md:w-[35%] lg:w-[25%] py-4 text-base rounded-sm font-Poppins text-white font-semibold'>Scopri di più</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero