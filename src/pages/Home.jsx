import React from 'react';
import Divider from '../images/Divider.png';
import Button from '../components/Button';
import DefaultCarousel from '../components/DefaultCarousel';
import Accordion from '../components/Accordion';

function Home() {
    return (

        <>
            <div className='mx-auto max-w-2xl py-16 sm:py-48 lg:py-56'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        Nuestros <strong>Rubros</strong>
                    </h1>
                    <br />
                    <a href="/" className='text-orange-600'>Artes Gráficas</a>
                    <br />
                    <a href="/" className='text-orange-600'>Industria</a>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />

            <div className='flex flex-col items-center'>
                <div className='container p-6'>
                    <div className='grid place-items-center lg:grid-cols-2'>
                        <div className='mb-1 mt-1'>
                            <div className='mx-auto py-32'>
                                <h1 className='text-2xl bg-gray-800 text-white rounded p-2'>Artes Gráficas</h1>
                                <p className='text-lg text-gray-700 p-5'>Descubra los diferentes insumos para artes gráficas
                                    que se adapten a tus necesidades
                                </p>
                                <Button>
                                    Descrubrir más
                                </Button>
                            </div>
                        </div>
                        <div className='mb-1 mt-1'>
                            <div className='mx-auto py-32 z-0'>
                                <DefaultCarousel />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='container p-6'>
                    <div className='grid place-items-center lg:grid-cols-2'>
                        <div className='mb-1 mt-1'>
                            <div className='mx-auto py-32'>
                                <h1 className='text-2xl bg-gray-800 text-white rounded p-2'>Industria</h1>
                                <p className='text-lg text-gray-700 p-5'>Descubra los diferentes insumos para industria
                                    que se adapten a tus necesidades
                                </p>
                                <Button>
                                    Descrubrir más
                                </Button>
                            </div>
                        </div>
                        <div className='mb-1 mt-1'>
                            <div className='mx-auto py-32'>
                                <DefaultCarousel />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />

            <div className='mx-auto max-w-2xl py-16 sm:py-48 lg:py-56'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-orange-900 sm:text-6xl'>
                        Corte y Bobinaje especializado
                    </h1>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />

            <section className='mx-auto lg:mx-28'>
                <div className='mx-auto py-16 sm:py-48 lg:py-56'>
                    <div className='text-center mb-6'>
                        <h1 className='text-2xl text-orange-900 sm:text-6xl'>
                            ¿Por qué trabajar con nosotros?
                        </h1>
                    </div>
                    <p className='text-lg text-gray-700 p-5'>
                        <b>Nosotros nos caracterizamos en ofrecer productos de alta calidad con la mejor atención al cliente.</b>
                        Convirtiéndonos en proveedores confiables y seguros en el reabastecimiento de sus plegadizos y etiquetas.
                        <b>Brindamos este servicio por medio de estos aspectos:</b>
                        Asesores capacitados, Vanguardia tecnológica, Calidad en nuestros procesos, Procesos industriales.
                    </p>
                    <p className='text-lg text-gray-700 p-5'>
                        <b>Somos una empresa salvadoreña especializada en la fabricación de plegadizos y etiquetas.</b>
                        Atendiendo a diferentes industrias del mercado, fidelizando grandes clientes nacionales e internacionales..
                    </p>
                    <div className="mt-8 sm:mx-auto">
                        <Accordion title="Consultores Capacitados" content="Nuestros ejecutivos de ventas son constantemente capacitados para que puedan brindar la mejor asesoría técnica y atención al cliente, garantizando que puedan ser su apoyo durante todo el proceso." />
                        <Accordion title="Calidad" content="Contamos con un departamento de calidad que se dedica a auditar los procesos de producción velando para que el producto sea de la mejor calidad en el mercado." />
                        <Accordion title="Vanguardia Tecnológica" content="Estamos en continua renovación de nuestra maquinaría, sistemas y procesos para poder responder ante las nuevas exigencias del mercado. Lo cual nos permite estar en constante mejora de procesos de producción y calidad de impresión." />
                        <Accordion title="Procesos Industriales" content="Conocemos el volumen de producto que mueven nuestros clientes, por lo que nuestros procesos son robustos y optimizados para competir con los mejores tiempos, calidad y precios a los diferentes sectores (farmacéutica, alimentaria, cosmética, textiles, etc.)." />
                    </div>

                </div>
            </section>




        </>


    )
}

export default Home