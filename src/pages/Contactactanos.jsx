import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Divider from '../images/Divider.png';
import { BiLogoFacebookSquare, BiLogoWhatsapp } from "react-icons/bi";
import { CiInstagram } from 'react-icons/ci';
import { VscMail, VscChevronDown } from 'react-icons/vsc';
import PageBanner from '../components/PageBanner';
import ContactBanner from '../images/contactbanner.jpg';

function Contactactanos() {

    /* Pequeño scroll al cargar la pagina */
    /* function scrollToTop() {
        window.scrollTo({
            top: 900,
            behavior: 'smooth',
        });
    }
    
    useEffect(() => {
        scrollToTop();
    }, []); */

    const form = useRef();
    const recaptchaRef = useRef(null);

    const handleRecaptchaChange = (value) => {
        // Almacenar el valor de reCAPTCHA si es necesario
        console.log('Recaptcha value:', value);
    };

    const validateForm = () => {
        const requiredFields = ['name', 'email', 'phone', 'company', 'role', 'product', 'message'];

        for (const field of requiredFields) {
            const input = form.current[field];
            if (!input.value.trim()) {
                toast.error(`Por favor, completa el campo ${field}`);
                return false;
            }
        }

        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validación antes de enviar
        if (!validateForm()) {
            return;
        }

        // Manejo de la verificación reCAPTCHA
        const recaptchaValue = recaptchaRef.current.getValue();

        if (!recaptchaValue) {
            toast.error('Por favor, completa la verificación reCAPTCHA.');
            return;
        }

        emailjs.sendForm('service_fqc0tan', 'template_o4pj11m', form.current, 'zdTzRsc2brpTKk7Vh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Resetea el formulario
        form.current.reset();

        // Muestra la notificación de éxito
        toast.success('Mensaje enviado con éxito');
    };

    return (
        <>
            <PageBanner image={ContactBanner} />

            <div className='mx-auto max-w-2xl py-10 sm:py-16 lg:py-20'>
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
                                            8:00 AM - 5:00 PM
                                        </h1>
                                        <p className='text-amber-700'>lunes a viernes</p>
                                        <h1 className='text-4xl text-gray-700 mt-2'>
                                            8:00 AM - 12:00 PM
                                        </h1>
                                        <p className='text-amber-700'>sábados</p>
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
                                            <p className='text-gray-700'><span className='text-amber-700'>+ (503)</span> 6065-9297</p>
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
                                            <p className='text-gray-700'><span className='text-amber-700'>ventas</span>@insumosmultiples.com</p>
                                        </div>
                                        <div className='text-start my-6'>
                                            <h1 className='text-xl font-bold text-gray-700'>
                                                Redes sociales
                                            </h1>
                                        </div>
                                        <div className='flex flex-wrap'>
                                            <a href='https://www.facebook.com/people/Inmusa/61554061884844/' className='text-gray-700 px-1 hover:text-amber-700' target='_blank' rel='noopener noreferrer'>
                                                <BiLogoFacebookSquare size={30} />
                                            </a>
                                            <a href='https://www.instagram.com/insumosmultiples.sv/' className='text-gray-700 px-1 hover:text-amber-700' target='_blank' rel='noopener noreferrer'>
                                                <CiInstagram size={30} />
                                            </a>
                                            <a href="/" className='text-gray-700 px-1 hover:text-amber-700' target='_blank' rel='noopener noreferrer'>
                                                <BiLogoWhatsapp size={30} />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <form ref={form} onSubmit={sendEmail} action=''>
                                        <div className='flex flex-col items-center'>
                                            <div className='container mt-16'>
                                                <div className='grid lg:grid-cols-2 gap-4'>
                                                    <div className='container'>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="name" className='text-gray-700  mb-1'>Nombre completo <span className='text-amber-700'>*</span></label>
                                                            <input id='name' name='name' type="text" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="phone" className='text-gray-700  mb-1'>Número teléfonico <span className='text-amber-700'>*</span></label>
                                                            <input id='phone' name='phone' onInput={(e) => {
                                                                e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Elimina caracteres no numéricos
                                                            }} type="tel" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="email" className='text-gray-700  mb-1'>Correo electrónico <span className='text-amber-700'>*</span></label>
                                                            <input id='email' name='email' type="email" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>

                                                    </div>
                                                    <div className='container'>
                                                        <div className='flex flex-col mt-6'>
                                                            <label htmlFor="company" className='text-gray-700  mb-1'>Empresa <span className='text-amber-700'>*</span></label>
                                                            <input id='company' name='company' type="text" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                                        </div>
                                                        <div className='flex flex-col mt-6 relative'>
                                                            <label htmlFor="role" className='text-gray-700  mb-1'>Rol <span className='text-amber-700'>*</span></label>
                                                            <select id="role" name='role' className='appearance-none rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700'>
                                                                <option value="" selected>Selecciona una opción</option>
                                                                <option value='gerente'>Gerente</option>
                                                                <option value='supervisor'>Supervisor</option>
                                                                <option value='analista'>Analista</option>
                                                                <option value='coordinador'>Coordinador</option>
                                                                <option value='especialista'>Especialista</option>
                                                                <option value='tecnico'>Técnico</option>
                                                            </select>
                                                            <div className='pointer-events-none absolute inset-y-0 top-8 right-0 flex items-center px-2 text-amber-700'>
                                                                <VscChevronDown size={25} />
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col mt-6 relative'>
                                                            <label htmlFor="product" className='text-gray-700  mb-1'>Producto de interés <span className='text-amber-700'>*</span></label>
                                                            <select id="product" name='product' className='appearance-none rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700'>
                                                                <option value="" selected>Selecciona una opción</option>
                                                                <option value="papel-semibrillante">Papel Blanco semibrillante c/adhesivo</option>
                                                                <option value="bopp-blanco">BOPP Blanco c/adhesivo</option>
                                                                <option value="bopp-transparente">BOPP Transparente c/adhesivo</option>
                                                                <option value="bopp-metalizado">BOPP Metalizado c/adhesivo</option>
                                                                <option value="bopp-laminacion">BOPP 15um sin adhesivo para laminación</option>
                                                                <option value="pleca-corte">Pleca de corte</option>
                                                                <option value="pleca-sisa">Pleca de sisa</option>
                                                                <option value="pleca-perforacion">Pleca de perforación</option>
                                                                <option value="matrices">Matrices</option>
                                                                <option value="madera">Madera</option>
                                                                <option value="tarimas-plasticas">Tarimas plasticas</option>
                                                                <option value="portapallets">Portapallets</option>
                                                                <option value="racks">Racks</option>
                                                                <option value="maquinas-fajadoras">Maquinas fajadoras</option>
                                                                <option value="rollos-papel-fajar">Rollos de papel para fajar</option>
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
                                            <textarea id='message' name='message' type="text" className='rounded-lg border-2 p-2 text-gray-800 focus:outline-none focus:border-amber-700' />
                                        </div>
                                        <div className='flex mt-7'>
                                            <div className='mx-auto'>
                                                <ReCAPTCHA
                                                    ref={recaptchaRef}
                                                    sitekey="6LevpRApAAAAAAElkmFCDJQliWjhhMXTfZlngh54"
                                                    onChange={handleRecaptchaChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex mt-7'>
                                            <button type='submit' className='bg-amber-700 text-white hover:bg-amber-600 rounded-full mx-auto py-2 px-8'>
                                                <div className='flex items-center gap-3'>
                                                    <VscMail size={25} />Enviar mensaje
                                                </div>
                                            </button>
                                        </div>
                                        {/* ToastContainer para mostrar notificaciones */}
                                        <ToastContainer />
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