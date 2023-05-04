import React from 'react'
import WallBoxIMG from '../assets/wallbox.webp'

const WallBox = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 font-Poppins text-[#262626] max-w-[2600px] mx-auto px-4 md:px-12 xl:px-22 mb-10'>
      <div className='px-4'>
        <img src={WallBoxIMG} alt="Bmw wallbox" />
      </div>

      <div className='flex flex-col justify-center px-4 mt-12 lg:mt-0'>
        <div>
          <h3 className='text-base xl:text-lg 2xl:text-xl font-semibold mb-4'>BMW ACCESSORIES</h3>
        </div>
        <div>
          <h2 className='text-4xl xl:text-5xl 2xl:text-7xl font-light mb-4'>BMW WALLBOX.</h2>
        </div>
        <div>
          <p className='text-base mb-12'>La BMW Wallbox è il massimo della comodità elettrica: una stazione di ricarica GEN 3 che si installa nel garage per una ricarica rapida ogni volta che ne hai bisogno.</p>
        </div>
        <div>
          <button className='border-[1px] hover:shadow-buttonBlack border-black w-full md:w-1/2 py-4 text-base font-semibold rounded-[3px]'>Scopri di più</button>
        </div>
      </div>
    </section>
  )
}

export default WallBox