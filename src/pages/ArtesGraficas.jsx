import React from 'react';
import Divider from '../images/Divider.png';
import Carousel from '../components/Carousel';
import AGBanner from '../images/AGBanner.jpg';
import PageBanner from '../components/PageBanner';
import AD1 from '../images/AD1.jpg';
import AD2 from '../images/AD2.jpg';
import AD3 from '../images/AD3.jpg';
import MT1 from '../images/MT1.jpg';
import MT2 from '../images/MT2.jpg';
import MT3 from '../images/MT3.jpg';
import BOPPB1 from '../images/BOPPB1.jpg';
import BOPPB2 from '../images/BOPPB2.jpg';
import BOPPTA1 from '../images/BOPPTA1.jpg';
import BOPPTA2 from '../images/BOPPTA2.jpg';
import BOPPTL1 from '../images/BOPPTL1.jpg';
import BOPPTL2 from '../images/BOPPTL2.jpg';
import PC from '../images/PC.jpg';
import PS1 from '../images/PS1.jpg';
import PS2 from '../images/PS2.jpg';
import PP1 from '../images/PP1.jpg';
import PP2 from '../images/PP2.jpg';
import MA from '../images/MA.jpg';
import MAD from '../images/MAD.jpg';
import GOM1 from '../images/GOM1.jpg';
import GOM2 from '../images/GOM2.jpg';


function ArtesGraficas() {

    const ADS = [
        AD1,
        AD2,
        AD3
    ]
    const boppB1 = [
        BOPPB1,
        BOPPB2
    ]
    const boppT1 = [
        BOPPTA1,
        BOPPTA2
    ]
    const MET = [
        MT1,
        MT2,
        MT3
    ]
    const boppT2 = [
        BOPPTL1,
        BOPPTL2
    ]

    const plcC = [
        PC
    ]
    const plcS = [
        PS1,
        PS2
    ]

    const plcP = [
        PP1,
        PP2
    ]
    const matr = [
        MA
    ]
    const madr = [
        MAD
    ]
    const gom = [
        GOM1,
        GOM2
    ]



    return (
        <>
            <PageBanner image={AGBanner} />

            <div className='mx-auto py-10 sm:py-16 lg:py-20'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        Productos para <strong>Artes Gráficas</strong>
                    </h1>
                </div>
            </div>

            <img src={Divider} alt="" className='w-full' />



            <section className='mx-auto lg:mx-28'>

                <div className='mx-auto py-5 sm:py-6 lg:py-7'>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl text-amber-700'>
                            Materiales para impresión en rollo
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <Carousel images={ADS} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Papel Blanco semibrillante c/adhesivo</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Papel blanco semibrillante con adhesivo, diseñado para la industria de impresión.
                                        Superficie que realza la calidad de impresión, adhesivo de alta calidad para una fácil aplicación en etiquetas y proyectos impresos.
                                        Ideal para producir materiales impresos profesionales.
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
                                    <Carousel images={boppB1} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>BOPP Blanco c/adhesivo</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        BOPP blanco con adhesivo, una solución especializada para la industria de impresión.
                                        Este film de polipropileno biaxialmente orientado ofrece una base resistente y duradera.
                                        Su adhesivo garantiza una aplicación fácil y segura en una variedad de superficies.
                                        Ideal para etiquetas, empaques y productos impresos de alta calidad.
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
                                    <Carousel images={boppT1} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>BOPP Transparente c/adhesivo</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        BOPP transparente con adhesivo, diseñado para la industria de impresión.
                                        Este film de polipropileno ofrece claridad y resistencia.
                                        Su adhesivo de calidad asegura una aplicación fácil en etiquetas y empaques transparentes,
                                        proporcionando una presentación nítida y profesional en productos impresos.
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
                                    <Carousel images={MET} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>BOPP Metalizado c/adhesivo</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        BOPP metalizado con adhesivo, una elección sofisticada para la industria de impresión. Este film de polipropileno metalizado ofrece un acabado brillante y llamativo.
                                        Su adhesivo de alta calidad facilita la aplicación en etiquetas y empaques, agregando un toque de elegancia a productos impresos como etiquetas premium y envases de alta gama.
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
                                    <Carousel images={boppT2} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>BOPP 15um sin adhesivo para laminación</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        BOPP de 15 micrones sin adhesivo, diseñado para laminación en la industria de impresión.
                                        Este film de polipropileno ofrece una capa delgada pero resistente para mejorar y proteger la superficie de impresiones.
                                        Ideal para laminación de documentos, carteles y materiales impresos, proporcionando durabilidad y un acabado profesional.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='mx-auto py-5 sm:py-6 lg:py-7'>
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl text-amber-700'>
                            Insumos para fabricación de troqueles
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='container p-6 py-24'>
                        <div className='grid gap-10 place-items-center lg:grid-cols-2'>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto z-0'>
                                    <Carousel images={plcC} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Pleca de corte</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Pleca de corte, una herramienta esencial en la industria de impresión. Esta pieza precisa y resistente facilita cortes limpios y precisos en diversos materiales,
                                        mejorando la eficiencia en la producción de proyectos impresos. Ideal para la creación de bordes definidos en carteles, etiquetas y otros materiales impresos.
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
                                    <Carousel images={plcS} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Pleca de sisa</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        La pleca de sisa especializada para la industria de impresión es una herramienta diseñada para facilitar cortes precisos en proyectos gráficos.
                                        Esta pleca permite la creación de detalles finos y bordes definidos en materiales impresos, mejorando la calidad y la precisión en la producción de impresos, como tarjetas,
                                        etiquetas u otros proyectos que requieren cortes específicos en los bordes.
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
                                    <Carousel images={plcP} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Pleca de perforación</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        La pleca de perforación es una herramienta esencial en la industria de impresión. Diseñada para facilitar perforaciones precisas en materiales impresos, esta herramienta mejora la eficiencia en la producción al permitir la creación de documentos,
                                        etiquetas u otros proyectos con perforaciones exactas y bien definidas. Ideal para personalizar y agregar funcionalidad a materiales impresos de manera profesional.
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
                                    <Carousel images={matr} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Matrices</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Las matrices son elementos clave en la industria de impresión y troquelado. Estas herramientas especializadas están diseñadas para cortar, dar forma o perforar materiales diversos, permitiendo la producción eficiente de proyectos impresos.
                                        Las matrices son fundamentales para crear formas precisas en etiquetas, empaques y otros materiales impresos, garantizando un acabado de alta calidad en la producción gráfica.
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
                                    <Carousel images={madr} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Madera</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        La madera es un material natural y versátil utilizado en diversas aplicaciones, incluyendo la industria de la impresión.
                                        En esta industria, la madera puede ser empleada para la fabricación de marcos, soportes o componentes estructurales para equipos de impresión.
                                        Su durabilidad y capacidad de ser trabajada la convierten en una elección ideal para crear productos impresos que requieren elementos de presentación o montaje.
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
                                    <Carousel images={gom} />
                                </div>
                            </div>
                            <div className='mb-1 mt-1'>
                                <div className='mx-auto'>
                                    <h1 className='text-2xl bg-amber-700 text-white rounded p-2'>Goma eva</h1>
                                    <p className='text-lg text-gray-700 p-5'>
                                        Diseñados para crear cortes precisos, estos insumos con goma eva
                                        garantizan resultados limpios y eficientes en la producción de materiales impresos, como etiquetas y empaques.
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

export default ArtesGraficas