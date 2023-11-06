import React from 'react';
import Divider from '../images/Divider.png';
import { BiLogoFacebookSquare, BiLogoWhatsapp, BiLogoLinkedinSquare, BiLogoYoutube, BiPhoneCall } from "react-icons/bi";
import { CiInstagram } from 'react-icons/ci';
import { VscMail, VscChevronDown } from 'react-icons/vsc';
import PageBanner from '../components/PageBanner';
import ContactBanner from '../images/contactbanner.jpg'

function Contactactanos() {

    /* function scrollToTop() {
        window.scrollTo({
            top: 900,
            behavior: 'smooth',
        });
    }

    
    useEffect(() => {
        scrollToTop();
    }, []); */


    return (
        <>
            <PageBanner image={ContactBanner} />

            <div className='mx-auto max-w-2xl py-16 sm:py-20 lg:py-32'>
                <div className='text-center mb-6'>
                    <h1 id='title' className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        Contáctenos
                    </h1>
                </div>
            </div>
            <img src={Divider} alt="" className='w-full' />

            <section className='pb-24 mx-auto  bg-stone-50'>
                <div className='lg:mx-28'>
                    <div className='flex flex-col items-center'>
                        <div className='container py-6'>
                            <div className='grid lg:grid-cols-2 gap-16'>
                                <div>
                                    <div>
                                        <div className='text-start mb-6 mt-16'>
                                            <h1 className='text-2xl font-bold text-amber-700'>
                                                Nuestra dirección
                                            </h1>
                                        </div>
                                        <p className='text-gray-700'>
                                            Parque industrial Sante Elena 2, calle el progreso #18, carretera al puerto. Antiguo Cuscatlan, Libertad.
                                            <b>San Salvador. El Salvador.</b>
                                        </p>
                                        <hr className='border-b-2 mt-6' />
                                    </div>
                                    <div>
                                        <div className='text-start my-6'>
                                            <h1 className='text-xl font-bold text-gray-700'>
                                                Horario de Atención
                                            </h1>
                                        </div>
                                        <h1 className='text-4xl text-gray-700'>
                                            08:00 AM - 04:00 PM
                                        </h1>
                                        <p className='text-amber-700'>lunes a viernes</p>
                                        <hr className='border-b-2 mt-6' />
                                    </div>
                                    <div>
                                        <div className='text-start my-6'>
                                            <h1 className='text-xl font-bold text-gray-700'>
                                                Atención mediante
                                            </h1>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='text-amber-700'>
                                                <BiLogoWhatsapp />
                                            </div>
                                            <p className='text-gray-700'><span className='text-amber-700'>+ (503)</span> 2555-9008</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='text-amber-700'>
                                                <BiPhoneCall />
                                            </div>
                                            <p className='text-gray-700'><span className='text-amber-700'>+ (503)</span> 2555-9009</p>
                                        </div>
                                        <hr className='border-b-2 mt-6' />
                                    </div>
                                    <div>
                                        <div className='text-start my-6'>
                                            <h1 className='text-xl font-bold text-gray-700'>
                                                Correo electrónico
                                            </h1>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='text-amber-700'>
                                                <VscMail />
                                            </div>
                                            <p className='text-gray-700'><span className='text-amber-700'>info</span>@correo.com</p>
                                        </div>
                                        <div className='text-start my-6'>
                                            <h1 className='text-xl font-bold text-gray-700'>
                                                Redes sociales
                                            </h1>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <a href="/" className='text-gray-700 px-1'>
                                                <BiLogoFacebookSquare size={30} />
                                            </a>
                                            <a href="/" className='text-gray-700 px-1'>
                                                <CiInstagram size={30} />
                                            </a>
                                            <a href="/" className='text-gray-700 px-1'>
                                                <BiLogoLinkedinSquare size={30} />
                                            </a>
                                            <a href="/" className='text-gray-700 px-1'>
                                                <BiLogoYoutube size={30} />
                                            </a>
                                            <a href="/" className='text-gray-700 px-1'>
                                                <BiLogoWhatsapp size={30} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <form action="">
                                        <div className='flex flex-col items-center'>
                                            <div className='container mt-16'>
                                                <div className='grid lg:grid-cols-2 gap-4'>
                                                    <div className='container'>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="name" className='text-gray-700  mb-1'>Nombre completo <span className='text-amber-700'>*</span></label>
                                                            <input id='name' type="text" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="phone" className='text-gray-700  mb-1'>Número teléfonico <span className='text-amber-700'>*</span></label>
                                                            <input id='phone' onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Elimina caracteres no numéricos
                                                            }} type="tel" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="company" className='text-gray-700  mb-1'>Empresa <span className='text-amber-700'>*</span></label>
                                                            <input id='company' type="text" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6 relative'>
                                                            <label htmlFor="product" className='text-gray-700  mb-1'>Producto de interés <span className='text-amber-700'>*</span></label>
                                                            <select id="product" className='appearance-none rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700'>
                                                                <option value="" selected>Selecciona una opción</option>
                                                                <option value='opcion1'>Opción 1</option>
                                                                <option value='opcion2'>Opción 2</option>
                                                                <option value='opcion3'>Opción 3</option>
                                                            </select>
                                                            <div className='pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-amber-700'>
                                                                <VscChevronDown size={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='container'>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="email" className='text-gray-700  mb-1'>Correo electrónico <span className='text-amber-700'>*</span></label>
                                                            <input id='email' type="email" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6 relative'>
                                                            <label htmlFor="category" className='text-gray-700  mb-1'>Rubro de la empresa <span className='text-amber-700'>*</span></label>
                                                            <select id="category" className='appearance-none rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700'>
                                                                <option value="" selected>Selecciona una opción</option>
                                                                <option value='opcion1'>Opción 1</option>
                                                                <option value='opcion2'>Opción 2</option>
                                                                <option value='opcion3'>Opción 3</option>
                                                            </select>
                                                            <div className='pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-amber-700'>
                                                                <VscChevronDown size={25} />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col mt-6 relative'>
                                                            <label htmlFor="role" className='text-gray-700  mb-1'>Rol <span className='text-amber-700'>*</span></label>
                                                            <select id="role" className='appearance-none rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700'>
                                                                <option value="" selected>Selecciona una opción</option>
                                                                <option value='opcion1'>Opción 1</option>
                                                                <option value='opcion2'>Opción 2</option>
                                                                <option value='opcion3'>Opción 3</option>
                                                            </select>
                                                            <div className='pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-amber-700'>
                                                                <VscChevronDown size={25} />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col mt-6 relative'>
                                                            <label htmlFor="time" className='text-gray-700  mb-1'>Tiempo de entrega estimado <span className='text-amber-700'>*</span></label>
                                                            <select id="time" className='appearance-none rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700'>
                                                                <option value="" selected>Selecciona una opción</option>
                                                                <option value='opcion1'>Opción 1</option>
                                                                <option value='opcion2'>Opción 2</option>
                                                                <option value='opcion3'>Opción 3</option>
                                                            </select>
                                                            <div className='pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-amber-700'>
                                                                <VscChevronDown size={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col mt-6'>
                                            <label htmlFor="message" className='text-gray-700  mb-1'>Mensaje <span className='text-amber-700'>*</span></label>
                                            <textarea id='message' type="text" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                        </div>
                                        <div className='flex mt-7'>
                                            <button type='submit' className='bg-amber-700 text-white hover:bg-amber-600 rounded-full mx-auto py-2 px-8'>
                                                <div className='flex items-center gap-3'>
                                                    <VscMail size={25} />Enviar mensaje
                                                </div>
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contactactanos