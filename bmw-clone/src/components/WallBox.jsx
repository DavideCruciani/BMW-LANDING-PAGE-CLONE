import React from 'react'
import WallBoxIMG from '../assets/wallbox.webp'

const WallBox = () => {
  return (
    <section className='grid grid-cols-2 font-Poppins text-[#262626] px-20 mb-10'>
      <div className='px-4'>
        <img src={WallBoxIMG} alt="Bmw wallbox" />
      </div>

      <div className='flex flex-col justify-center px-4'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>BMW ACCESSORIES</h3>
        </div>
        <div>
          <h2 className='text-7xl font-light mb-4'>BMW WALLBOX.</h2>
        </div>
        <div>
          <p className='text-base mb-12'>La BMW Wallbox è il massimo della comodità elettrica: una stazione di ricarica GEN 3 che si installa nel garage per una ricarica rapida ogni volta che ne hai bisogno.</p>
        </div>
        <div>
          <button className='border-[1px] hover:shadow-buttonBlack border-black w-72 py-4 text-base font-semibold rounded-[3px]'>Scopri di più</button>
        </div>
      </div>
    </section>
  )
}

export default WallBox