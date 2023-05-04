import React from 'react'
import LogoElectric from '../assets/LogoElectric.png'
import electricIMG from '../assets/electricIMG.webp'
import electricIMG1024 from '../assets/electricIMG-1024.webp'
import electricIMG1504 from '../assets/electricIMG-1504.webp'
import electricIMG2560 from '../assets/electricIMG-2560.webp'

const Electric = () => {
  return (
      <section className='relative max-w-[2600px] mx-auto bg-center w-full bg-no-repeat mb-10'>
        
        <picture>
          <source media='(min-width: 1536px)' srcSet={electricIMG2560} className='bg-cover bg-no-repeat w-full' />
          <source media='(min-width: 1024px)' srcSet={electricIMG1504} className='bg-cover bg-no-repeat w-full' />
          <source media='(min-width: 768px)' srcSet={electricIMG1024} className='bg-cover bg-no-repeat w-full' />
          <img className='bg-contain bg-no-repeat w-full' src={electricIMG} alt="/" />
        </picture>

        <div className='h-full w-full bg-gradient-top lg:bg-gradient-70deg lg:from-[#0006] px-4 md:px-12 xl:px-22 lg:to-transparent font-Poppins leading-[4rem] text-white flex flex-col lg:flex-row justify-end lg:justify-normal items-center text-center lg:text-start absolute top-0'>
          <div className='flex flex-col justify-center w-full'>
            <div className='px-2'>
              <p className='text-white text-sm font-semibold md:mb-2 xl:mb-4'>BMW</p>
            </div>

            <div className='flex items-center justify-center lg:justify-normal mb-3 xl:mb-6 px-2'>
              <img className='md:mr-2 xl:mr-4 w-16 xl:w-28' src={LogoElectric} alt="Gamma Elettrica" />
              <h2 className='text-3xl lg:text-4xl xl:text-6xl font-light'>Gamma Elettrica.</h2>
            </div>
            
            <div className='px-2 mb-4 md:mb-8 xl:mb-14'>
              <h2 className='text-3xl lg:text-4xl xl:text-6xl font-light'>Piacere di guidare. 100% electric.</h2>
            </div>

            <div className='px-2'>
              <button className='border-[1px] hover:shadow-buttonWhite border-white w-full md:w-[50%] xl:w-[45%] 2xl:w-[25%] py-4 text-base font-semibold rounded-[3px] mb-12 lg:mb-0'>Scopri la gamma elettrica BMW</button>
            </div>
          </div>

        </div>
      </section>
  )
}

export default Electric