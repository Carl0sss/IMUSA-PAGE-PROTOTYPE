import React from 'react';
import Divider from '../images/Divider.png';
import Button from '../components/Button';
import DefaultCarousel from '../components/DefaultCarousel';

function Home() {
    return (
        <section>
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        Línea de <strong>Productos</strong>
                    </h1>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Para comprender cuál es el que mejor se ajusta a sus necesidades
                    </p>
                    <a href="/" className='text-orange-600'>Ver productos</a>

                </div>
            </div>
            <img src={Divider} alt="" className='w-full' />

            <div className=''>
                <div className='m-3 p-3 mx-auto py-32 mt-6'>
                    <h1 className='text-2xl bg-gray-800 text-white rounded p-2'>Artes Gráficas</h1>
                    <p className='text-lg text-gray-700 p-5'>Descubra los diferentes insumos para industria
                        que se adapten a tus necesidades
                    </p>
                    <Button>
                        Descrubrir más
                    </Button>
                </div>
                <DefaultCarousel />
            </div>

            <img src={Divider} alt="" className='w-full' />

            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-orange-900 sm:text-6xl'>
                        Corte y Bobinaje especializado
                    </h1>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />

            <div className='mx-auto py-32 sm:py-48 lg:py-56'>
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