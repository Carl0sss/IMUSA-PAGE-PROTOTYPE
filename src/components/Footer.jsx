import React from 'react'
import Divider from '../images/Divider.png'
import { BiLogoFacebookSquare, BiLogoWhatsapp, BiLogoLinkedinSquare, BiLogoYoutube } from "react-icons/bi";
import { CiInstagram } from 'react-icons/ci'
import { VscMail } from 'react-icons/vsc'

function Footer() {
  return (
    <div className='flex flex-col items-center bg-stone-50 text-center lg:text-left'>
      <img src={Divider} alt="" className='w-full' />
      <div className='container p-6'>
        <div className='grid place-items-center md:grid-cols-2 lg:grid-cols-3'>
          <div className='mb-6 mt-4'>
            <h5 className='mb-2.5 font-bold text-amber-700'>
              Secciones
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <a href="/" className='text-amber-700'>Inicio</a>
              </li>
              <li>
                <a href="/" className='text-amber-700'>Nosotros</a>
              </li>
              <li>
                <a href="/" className='text-amber-700'>Artes Gráficas</a>
              </li>
              <li>
                <a href="/" className='text-amber-700'>Industria</a>
              </li>
              <li>
                <a href="/" className='text-amber-700'>Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className='mb-6 mt-4'>
            <h5 className='mb-2.5 font-bold text-amber-700'>
              Correo electrónico
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <p className='text-amber-700 flex'><VscMail size={25} /><span className='px-1'> correo@correo.com</span></p>
              </li>
            </ul>
          </div>
          <div className='mb-6 mt-4'>
            <h5 className='mb-2.5 font-bold text-amber-700'>
              Redes sociales
            </h5>
            <div className='flex flex-wrap'>
              <a href="/" className='text-amber-700 px-1'>
                <BiLogoFacebookSquare size={30} />
              </a>
              <a href="/" className='text-amber-700 px-1'>
                <CiInstagram size={30} />
              </a>
              <a href="/" className='text-amber-700 px-1'>
                <BiLogoLinkedinSquare size={30} />
              </a>
              <a href="/" className='text-amber-700 px-1'>
                <BiLogoYoutube size={30} />
              </a>
              <a href="/" className='text-amber-700 px-1'>
                <BiLogoWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-3 bg-white text-center  text-amber-700 '>
        <small>Copyright &copy; 2023, INMUSA S.A. DE C.V.</small>
      </div>
    </div>
  )
}

export default Footer