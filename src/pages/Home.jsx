import React from 'react';
import Divider from '../images/Divider.png';
import Button from '../components/Button';
import DefaultCarousel from '../components/DefaultCarousel';

function Home() {
    return (
        <section>
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

            <div className='mx-auto py-16 sm:py-48 lg:py-56'>
                <div className='text-center mb-6'>
                    <h1 className='text-2xl text-orange-900 sm:text-6xl'>
                        ¿Por qué trabajar con nosotros?
                    </h1>
                </div>
            </div>

        </section>

    )
}

export default Home