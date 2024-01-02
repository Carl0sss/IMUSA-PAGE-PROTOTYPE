import React from 'react';
import { BiLogoFacebookSquare, BiLogoWhatsapp } from "react-icons/bi";
import { CiInstagram } from 'react-icons/ci'

function WidgetWrap() {
    return (
        <div className="fixed top-1/4 right-4 transform -translate-y-1/4 bg-amber-700 w-auto rounded-lg">
            <div className="flex flex-col items-center space-y-4 text-white h-full">
                <a className='w-full h-full hover:bg-amber-600 p-2 hover:rounded-t-lg' href='https://www.facebook.com/people/Inmusa/61554061884844/' target='_blank' rel='noopener noreferrer'>
                    <BiLogoFacebookSquare size={30} />
                </a>
                <a className='w-full h-full hover:bg-amber-600 p-2' href='https://www.instagram.com/insumosmultiples.sv/' target='_blank' rel='noopener noreferrer'>
                    <CiInstagram size={30} />
                </a>
                <a className='w-full h-full hover:bg-amber-600 p-2' href='https://wa.me/50360659297'  target='_blank' rel='noopener noreferrer'>
                    <BiLogoWhatsapp size={30} />
                </a>
                <hr className='border-b-0 border-white w-2/3 mx-auto' />
                <div className='flex items-center h-20'>
                    <span className='text-center -rotate-90 mt-2 w-8'>Síguenos</span>
                </div>
            </div>
        </div>

    )
}

export default WidgetWrap