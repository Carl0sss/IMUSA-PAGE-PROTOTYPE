import React from 'react'
import Divider from '../images/Divider.png'
import { BiLogoFacebookSquare, BiLogoWhatsapp } from "react-icons/bi";
import { CiInstagram } from 'react-icons/ci'
import { VscMail } from 'react-icons/vsc'

function Footer() {
  return (
    <div className='flex flex-col items-center bg-stone-50 text-center lg:text-left'>
      <img src={Divider} alt="" className='w-full' />
      <div className='container p-6'>
        <div className='grid justify-items-center md:grid-cols-2 lg:grid-cols-3'>
          <div className='mb-6 mt-4'>
            <h5 className='mb-2.5 font-bold text-amber-700'>
              Secciones
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <a href="/" className='text-amber-700 hover:text-gray-500'>Inicio</a>
              </li>
              <li>
                <a href="/Nosotros" className='text-amber-700 hover:text-gray-500'>Nosotros</a>
              </li>
              <li>
                <a href="/ArtesGraficas" className='text-amber-700 hover:text-gray-500'>Artes Gráficas</a>
              </li>
              <li>
                <a href="/Industria" className='text-amber-700 hover:text-gray-500'>Industria</a>
              </li>
              <li>
                <a href="/Contactanos" className='text-amber-700 hover:text-gray-500'>Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className='mb-6 mt-4'>
            <h5 className='mb-2.5 font-bold text-amber-700'>
              Correo electrónico
            </h5>
            <ul className='mb-0 list-none'>
              <li>
                <div className='flex items-center gap-1  text-amber-700'>
                  <VscMail size={25} />
                  <p className='text-amber-700 flex'>ventas@insumosmultiples.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='mb-6 mt-4'>
            <h5 className='mb-2.5 font-bold text-amber-700'>
              Redes sociales
            </h5>
            <div className='flex flex-wrap'>
              <a href='https://www.facebook.com/people/Inmusa/61554061884844/' className='text-amber-700 px-1 hover:text-gray-500' target='_blank' rel='noopener noreferrer'>
                <BiLogoFacebookSquare size={30} />
              </a>
              <a href='https://www.instagram.com/insumosmultiples.sv/' className='text-amber-700 px-1 hover:text-gray-500' target='_blank' rel='noopener noreferrer'>
                <CiInstagram size={30} />
              </a>
              <a href='https://wa.me/50360659297'  className='text-amber-700 px-1 hover:text-gray-500' target='_blank' rel='noopener noreferrer'>
                <BiLogoWhatsapp size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-3 bg-white text-center  text-amber-700 '>
        <small>Copyright &copy; 2023, INSUMOS MULTIPLES S.A. DE C.V.</small>
      </div>
    </div>
  )
}

export default Footer