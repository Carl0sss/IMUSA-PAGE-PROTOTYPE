import React from 'react';
import Divider from '../images/Divider.png';
import DefaultCarousel from '../components/DefaultCarousel';

function Industria() {


    return (
        <>
            <div className='mx-auto py-10 sm:py-16 lg:py-20'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        Productos para <strong>Industria</strong>
                    </h1>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />

            <section className='mx-auto lg:mx-28'>
                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <DefaultCarousel />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Producto numero 1</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Descripción general del producto.
                                        material, brillo o mate, adesivo, densidad, espesor, resistencia.
                                    </p>
                                    <ul className='text-lg text-gray-700 pl-14 list-disc'>
                                        <li>
                                            Item numero 1
                                        </li>
                                        <li>
                                            item numero 2
                                        </li>
                                        <li>
                                            item numero 3
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <DefaultCarousel />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Producto numero 2</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Descripción general del producto.
                                        material, brillo o mate, adesivo, densidad, espesor, resistencia.
                                    </p>
                                    <ul className='text-lg text-gray-700 pl-14 list-disc'>
                                        <li>
                                            Item numero 1
                                        </li>
                                        <li>
                                            item numero 2
                                        </li>
                                        <li>
                                            item numero 3
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <DefaultCarousel />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Producto numero 3</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Descripción general del producto.
                                        material, brillo o mate, adesivo, densidad, espesor, resistencia.
                                    </p>
                                    <ul className='text-lg text-gray-700 pl-14 list-disc'>
                                        <li>
                                            Item numero 1
                                        </li>
                                        <li>
                                            item numero 2
                                        </li>
                                        <li>
                                            item numero 3
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industria