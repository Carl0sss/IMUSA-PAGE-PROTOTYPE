import React from 'react';
import Carousel from '../components/Carousel';
import Divider from '../images/Divider.png';
import INBanner from '../images/INBanner.jpg';
import PageBanner from '../components/PageBanner';
import PORTP1 from '../images/PORTP1.jpg';
import PORTP2 from '../images/PORTP2.jpg';
import RAK from '../images/RAK.jpg';
import TAR from '../images/TAR.jpg';
import FAJ from '../images/FAJ.jpg';
import PFAJ from '../images/PFAJ.jpg';

function Industria() {

    const tar = [
        TAR
    ]
    const portP = [
        PORTP1,
        PORTP2
    ]
    const rack = [
        RAK
    ]
    const faj = [
        FAJ
    ]
    const pafaj = [
        PFAJ
    ]
    return (
        <>

            <PageBanner image={INBanner} />
            <div className='mx-auto py-10 sm:py-16 lg:py-20'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        Productos para <strong>Industria</strong>
                    </h1>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />



            <section className='mx-auto lg:mx-28'>

                <div className='mx-auto py-5 sm:py-6 lg:py-7'>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl text-amber-700'>
                            Almacenaje
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <Carousel images={tar} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Tarimas plasticas</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Tarimas plásticas, indispensables en la logística de la impresión. Fabricadas con polímeros resistentes,
                                        ofrecen durabilidad y estabilidad para el almacenaje y transporte eficiente de materiales impresos. Ligera y resistente,
                                        optimizan el espacio y facilitan la manipulación en la cadena de suministro.
                                    </p>

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
                                    <Carousel images={portP} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Portapallets</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Claves en la logística de impresión, estas robustas estructuras facilitan el almacenaje y transporte eficiente de productos impresos.
                                        Optimizan la manipulación y organización, siendo esenciales para la eficiencia en la cadena logística.
                                    </p>

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
                                    <Carousel images={rack} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Racks</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Elementos esenciales en la organización de la impresión, estos sistemas de almacenaje vertical maximizan el espacio y facilitan el acceso a productos impresos.
                                        Su diseño eficiente optimiza la logística y mejora la gestión del espacio en la industria de la impresión.
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>





                <div className='mx-auto py-5 sm:py-6 lg:py-7'>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl text-amber-700'>
                            Empaque
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <Carousel images={faj} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Maquinas fajadoras</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Estas máquinas robustas y eficientes aplican bandas de sujeción para asegurar y presentar
                                        de manera profesional materiales impresos, optimizando la eficiencia en el embalaje y el almacenamiento.
                                    </p>

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
                                    <Carousel images={pafaj} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Rollos de papel para fajar</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Diseñados para su uso con máquinas fajadoras, estos rollos ofrecen una solución eficiente y confiable para
                                        aplicar bandas de sujeción, asegurando de manera profesional materiales impresos durante el proceso de empaque.
                                    </p>

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