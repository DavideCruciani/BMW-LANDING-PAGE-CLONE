import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='bg-[#f6f6f6] border-2 border-t-[#e2e2e2] font-Poppins pt-24'>

      <div className='px-20'>
        <div className='grid grid-cols-4 pb-16'>
          <div className='px-4'>
            <p className='text-[#4d4d4d] mb-3 tracking-widest text-xs'>RESTA IN CONTATTO</p>
            <ul className='text-[#4d4d4d] font-semibold flex flex-col gap-3 text-sm'>
              <li className='cursor-pointer hover:text-[#262626]'>Contatti BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>Concessionarie & Centri Service BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>Preventivo</li>
              <li className='cursor-pointer hover:text-[#262626]'>Test Drive Now</li>
            </ul>
          </div>

          <div className='px-4'>
            <p className='text-[#4d4d4d] mb-3 tracking-widest text-xs'>INSIDE BMW</p>
            <ul className='text-[#4d4d4d] font-semibold flex flex-col gap-3 text-sm'>
              <li className='cursor-pointer hover:text-[#262626]'>Gamma BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>Informazioni sugli pneumatici</li>
              <li className='cursor-pointer hover:text-[#262626]'>BMW Business</li>
              <li className='cursor-pointer hover:text-[#262626]'>Lavora con noi</li>
              <li className='cursor-pointer hover:text-[#262626]'>Offerte di lavoro Rete BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>FAQ</li>
              <li className='cursor-pointer hover:text-[#262626]'>BMW.com</li>
            </ul>
          </div>

          <div className='px-4'>
            <p className='text-[#4d4d4d] mb-3 tracking-widest text-xs'>TERMINI DI UTILIZZO</p>
            <ul className='text-[#4d4d4d] font-semibold flex flex-col gap-3 text-sm'>
              <li className='cursor-pointer hover:text-[#262626]'>Informazioni legali ConnectedDrive</li>
              <li className='cursor-pointer hover:text-[#262626]'>Codice etico</li>
              <li className='cursor-pointer hover:text-[#262626]'>Licenza SIAE Internet AMC 3880</li>
              <li className='cursor-pointer hover:text-[#262626]'>Partita IVA IT12532500159</li>
              <li className='cursor-pointer hover:text-[#262626]'>Condizioni compravendita</li>
              <li className='cursor-pointer hover:text-[#262626]'>Garanzia convenzionale <FontAwesomeIcon icon={faFilePdf} style={{color: "#262626",}} /></li>
            </ul>
          </div>

          <div className='px-4'>
            <p className='text-[#4d4d4d] mb-3 tracking-widest text-xs'>TERMINI DI UTILIZZO</p>
            <ul className='text-[#4d4d4d] font-semibold text-sm'>
              <li className='cursor-pointer hover:text-[#262626]'>Connected Drive Legal Information <FontAwesomeIcon icon={faFilePdf} style={{color: "#262626",}} /></li>
            </ul>
          </div>
        </div>

        <div className='w-full px-4 py-12'>
          <ul className='flex gap-8'>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faFacebookF} style={{color: "#262626",}} /></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faTwitter} style={{color: "#262626",}} /></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faInstagram} style={{color: "#262626",}} /></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faYoutube} style={{color: "#262626",}} /></li>
            <li className='cursor-pointer'><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#262626",}} /></li>
          </ul>
        </div>
      </div>
      

      <div className='bg-white'>
        <div className='flex justify-between py-6 px-20 '>
          <div className='text-sm px-4'>© BMW AG 2023</div>
          <div>
            <ul className='flex gap-8 text-sm text-[#262626] font-semibold px-4'>
              <li className='cursor-pointer hover:text-[#1653a8]'>Note Legali</li>
              <li className='cursor-pointer hover:text-[#1653a8]'>Informativa Privacy</li>
              <li className='cursor-pointer hover:text-[#1653a8]'>Cookies</li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer