import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  const [showInfo, SetShowInfo] = useState(false)

  function ShowInfo(index) {
    SetShowInfo(index)
    console.log(showInfo);
  }

  return (
    <footer className='bg-[#f6f6f6] border-2 border-t-[#e2e2e2] font-Poppins pt-24 '>

      <div className='px-4 md:px-12 xl:px-22 max-w-[2600px] mx-auto'>
        {/* FOOTER INFO FOR SCREEN SIZES LARGER OR EQUAL TO 768px */}
        <div className='md:grid hidden grid-cols-3  xl:grid-cols-4 pb-16'>
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

          <div className='px-4 mb-8 xl:mb-0'>
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

          <div className='px-4 col-start-3 col-end-4 xl:col-start-auto xl:col-end-auto'>
            <p className='text-[#4d4d4d] mb-3 tracking-widest text-xs'>LEGAL</p>
            <ul className='text-[#4d4d4d] font-semibold text-sm'>
              <li className='cursor-pointer hover:text-[#262626]'>Connected Drive Legal Information <FontAwesomeIcon icon={faFilePdf} style={{color: "#262626",}} /></li>
            </ul>
          </div>
        </div>

        {/* FOOTER INFO FOR SCREEN SIZES SMALLER THAN 768px */}

        <div className='grid md:hidden grid-cols-1 gap-4 px-4'>

          <div>
            <div className='text-[#4d4d4d] hover:text-[#262626] cursor-pointer flex justify-between' onClick={() => {if (showInfo === 1) {ShowInfo(!showInfo)} else {ShowInfo(1)}}}>
              <p className='font-semibold text-sm mb-3' >Resta in contatto</p>
              <FontAwesomeIcon icon={showInfo === 1 ? faChevronUp : faChevronDown} />
            </div>

            <ul className={showInfo === 1 ? 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-5 max-h-[168px] text-sm transition-[max-height] h-auto ease-out' : 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-3 text-sm max-h-[0px] transition-[max-height] overflow-hidden'}>
              <li className='cursor-pointer hover:text-[#262626] pt-2'>Contatti BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>Concessionarie & Centri Service BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>Preventivo</li>
              <li className='cursor-pointer hover:text-[#262626] pb-6'>Test Drive Now</li>
            </ul>
          </div>

          <div>
            <div className='text-[#4d4d4d] hover:text-[#262626] cursor-pointer flex justify-between' onClick={() => {if (showInfo === 2) {ShowInfo(!showInfo)} else {ShowInfo(2)}}}>
              <p className='font-semibold text-sm mb-3' >Inside BMW</p>
              <FontAwesomeIcon icon={showInfo === 2 ? faChevronUp : faChevronDown} />
            </div>

            <ul className={showInfo === 2 ? 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-5 max-h-[300px] text-sm transition-[max-height]' : 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-3 text-sm max-h-[0px] transition-[max-height] overflow-hidden'}>
              <li className='cursor-pointer hover:text-[#262626] pt-2'>Gamma BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>Informazioni sugli pneumatici</li>
              <li className='cursor-pointer hover:text-[#262626]'>BMW Business</li>
              <li className='cursor-pointer hover:text-[#262626]'>Lavora con noi</li>
              <li className='cursor-pointer hover:text-[#262626]'>Offerte di lavoro Rete BMW</li>
              <li className='cursor-pointer hover:text-[#262626]'>FAQ</li>
              <li className='cursor-pointer hover:text-[#262626] pb-6'>BMW.com</li>
            </ul>
          </div>

          <div>
            <div className='text-[#4d4d4d] hover:text-[#262626] cursor-pointer flex justify-between' onClick={() => {if (showInfo === 3) {ShowInfo(!showInfo)} else {ShowInfo(3)}}}>
              <p className='font-semibold text-sm mb-3' >Termini di utilizzo</p>
              <FontAwesomeIcon icon={showInfo === 3 ? faChevronUp : faChevronDown} />
            </div>

            <ul className={showInfo === 3 ? 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-5 max-h-[250px] text-sm transition-[max-height]' : 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-3 text-sm max-h-[0px] transition-[max-height] overflow-hidden'}>
              <li className='cursor-pointer hover:text-[#262626] pt-2'>Informazioni legali ConnectedDrive</li>
              <li className='cursor-pointer hover:text-[#262626]'>Codice etico</li>
              <li className='cursor-pointer hover:text-[#262626]'>Licenza SIAE Internet AMC 3880</li>
              <li className='cursor-pointer hover:text-[#262626]'>Partita IVA IT12532500159</li>
              <li className='cursor-pointer hover:text-[#262626]'>Condizioni compravendita</li>
              <li className='cursor-pointer hover:text-[#262626] pb-6'>Garanzia convenzionale <FontAwesomeIcon icon={faFilePdf} style={{color: "#262626",}} /></li>
            </ul>
          </div>

          <div>
            <div className='text-[#4d4d4d] hover:text-[#262626] cursor-pointer flex justify-between' onClick={() => {if (showInfo === 4) {ShowInfo(!showInfo)} else {ShowInfo(4)}}}>
              <p className='font-semibold text-sm mb-3' >Legal</p>
              <FontAwesomeIcon icon={showInfo === 4 ? faChevronUp : faChevronDown} />
            </div>

            <ul className={showInfo === 4 ? 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-5 max-h-[168px] text-sm transition-[max-height]' : 'text-[#4d4d4d] pl-6 font-semibold flex flex-col gap-3 text-sm max-h-[0px] transition-[max-height] overflow-hidden'}>
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
      

      <div className='bg-white max-w-[2600px] mx-auto'>
        <div className='flex flex-col text-center items-center md:flex-row md:justify-between py-8 px-4 md:px-12 xl:px-22'>
          <div className='text-sm px-4 font-light'>© BMW AG 2023</div>
          <div>
            <ul className='flex justify-center py-4 gap-4 md:gap-8 text-xs md:text-sm text-[#262626] font-bold md:font-semibold px-4 flex-wrap'>
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