import React from 'react';
import Divider from '../images/Divider.png';

function Nosotros() {


    return (
        <>
            <div className='mx-auto max-w-2xl py-16 sm:py-48 lg:py-56'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        ¿Quiénes <strong>somos?</strong>
                    </h1>
                </div>
            </div>
            <img src={Divider} alt="" className='w-full' />

            <section className='mx-auto lg:mx-28'>
                <div className='text-start mb-6 mt-56'>
                    <h1 className='text-2xl text-orange-700 sm:text-6xl'>
                        Nuestra <b className='text-orange-700'>Historia</b>
                    </h1>
                </div>
                <hr className='border-b-2 mt-6' />

                <div className='flex flex-col'>
                    <div className='container py-6'>
                        <div className='grid lg:grid-cols-2 gap-10'>
                            <div>
                                <p className='text-justify mb-4'><b>Insumos multiples</b> es una empresa 100% salvadoreña que nació en 1985 como un centro de copias ubicado en Antiguo Cuscatlán.
                                    Se constituyó como persona jurídica el 14 de octubre de 1992 convirtiéndose en Impresos Múltiples S.A de C.V. dedicándose a las artes gráficas.
                                </p>
                                <p className='text-justify mb-4'>
                                    Este camino de evolución en la industria de las artes gráficas ha sido marcado por la tenacidad y visión de nuestros fundadores,
                                    enfocándose en la innovación de procesos, alta calidad de producto y excelente servicio al cliente.
                                </p>
                                <p className='text-justify mb-4'>
                                    Gracias a la bendición de Dios, a la confianza que han depositado nuestros clientes, proveedores y al apoyo de nuestros colaboradores
                                    hemos tomado trabajos retadores que nos permiten ir creciendo.
                                </p>
                            </div>
                            <div>
                                <p className='text-justify mb-4'>
                                    <b>
                                        Actualmente, somos uno de los mayores fabricantes de empaque plegadizo y etiquetas en el país, atendiendo a grandes clientes nacionales y regionales.

                                    </b>
                                </p>
                                <p className='text-justify mb-4'>
                                    Ahora, con más de 30 años de experiencia en el rubro, seguimos con la misma pasión y el mismo entusiasmo del primer día, con nuevos retos y proyectos que nos permitan siempre servirle mejor a nuestros clientes.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                <hr className='border-b-2 mt-6' />

                <div className='flex flex-col'>
                    <div className='container py-6'>
                        <div className='grid lg:grid-cols-2 gap-10'>
                            <div>
                                <div className='text-start mb-6 mt-10'>
                                    <h1 className=' text-orange-700 text-center text-4xl'>
                                        <b>Visión</b>
                                    </h1>
                                </div>
                                <div className='flex w-[614px] h-[109px] bg-orange-600 rounded-full p-6'>
                                    <div className='flex'>
                                        <div className='mx-2'>
                                            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M56.3367 55.7463C56.005 56.2173 55.5604 56.3433 54.9898 56.3367C51.5331 56.3168 48.0763 56.3234 44.6129 56.3234C43.631 56.3234 43.339 56.0315 43.339 55.0432C43.339 46.3138 43.339 37.5843 43.339 28.8483C43.339 27.8533 43.6243 27.568 44.6063 27.5614C46.0129 27.5614 47.4195 27.5614 48.8659 27.5614V9.97649H42.4102C42.4102 10.8189 42.4168 11.6481 42.4102 12.4706C42.4035 13.3329 42.085 13.6513 41.2159 13.6513C37.6795 13.6513 34.1431 13.6513 30.6068 13.658C30.1556 13.658 29.7575 13.585 29.5319 13.1406C29.2997 12.6895 29.4855 12.3313 29.7575 11.9731C30.494 11.0047 31.2172 10.0296 31.9735 9.01466C31.2437 8.03957 30.5205 7.06447 29.7907 6.09601C29.5054 5.72454 29.2864 5.35308 29.5385 4.88211C29.784 4.41778 30.2087 4.37135 30.6797 4.37135C33.0152 4.37798 35.3507 4.37798 37.779 4.37798C37.779 3.57535 37.8056 2.79262 37.7724 2.00989C37.7459 1.43943 37.8852 0.988362 38.3629 0.66333H50.1928C50.6639 0.988362 50.7833 1.43943 50.7833 2.00326C50.7701 10.2816 50.7767 18.5666 50.7767 26.845V27.5614C52.2297 27.5614 53.6164 27.5813 55.0031 27.5481C55.5737 27.5349 56.0182 27.6675 56.3433 28.1385V55.7463H56.3367ZM45.2233 54.4196H54.4524V29.4585H45.2233V54.4196ZM48.8725 2.56709H39.67V8.05947H48.8791V2.56709H48.8725ZM40.5391 9.93669C40.0083 9.93669 39.524 9.93669 39.0463 9.93669C38.0643 9.93669 37.779 9.64483 37.779 8.64983C37.779 7.8472 37.779 7.04457 37.779 6.25521H32.2389C32.7963 6.99814 33.2939 7.67474 33.8048 8.3447C34.1431 8.78913 34.1498 9.22693 33.8048 9.66473C33.6256 9.89689 33.4531 10.1224 33.2806 10.3546C32.9489 10.8057 32.6171 11.2567 32.2588 11.7542H40.5391V9.93669Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M10.8746 30.3473C10.8746 33.1532 10.8746 35.8728 10.8746 38.5991C10.8746 39.1431 10.9144 39.687 10.8613 40.2177C10.8215 40.6289 10.6623 41.0269 10.5495 41.478C11.0869 41.478 11.7703 41.478 12.4471 41.478C13.3494 41.4846 13.6546 41.7897 13.6546 42.7051C13.6546 46.8377 13.6546 50.9769 13.6546 55.1094C13.6546 56.0116 13.3428 56.3233 12.4338 56.3233C8.91733 56.3233 5.40086 56.3233 1.88439 56.3233C0.975412 56.3233 0.663574 56.0116 0.663574 55.1028C0.663574 50.9702 0.663574 46.8311 0.663574 42.6985C0.663574 41.7897 0.968777 41.4846 1.87775 41.478C2.54787 41.478 3.22463 41.478 3.76868 41.478C3.66253 41.007 3.46348 40.5493 3.46348 40.0983C3.43694 37.0867 3.45021 34.0686 3.45021 31.0571V30.3473C2.86634 30.3473 2.30902 30.3539 1.75832 30.3473C1.00195 30.334 0.670209 30.0024 0.663574 29.2395C0.663574 24.7156 0.663574 20.1983 0.670209 15.6744C0.670209 14.9182 1.01522 14.5799 1.77159 14.5799C5.36768 14.5733 8.95714 14.5733 12.5532 14.5799C13.3096 14.5799 13.648 14.9249 13.6546 15.6811C13.6612 20.205 13.6612 24.7223 13.6546 29.2462C13.6546 30.0024 13.3096 30.3407 12.5599 30.3473C12.0158 30.3539 11.4784 30.3473 10.8746 30.3473ZM2.54787 54.4262H11.757V43.3685H2.54787V54.4262ZM3.47012 28.4701V19.2498H5.30797V39.5875H6.26339V29.4518H8.10124V39.6008H9.01685V19.2564H10.8945V28.4634H11.7637V16.4771H2.54787V28.4634H3.47012V28.4701Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M3.45027 9.91671C3.46354 7.86702 5.14216 6.21533 7.19897 6.22859C9.2425 6.24186 10.8946 7.93335 10.868 9.98968C10.8481 12.0128 9.17615 13.6513 7.14589 13.6446C5.10235 13.6513 3.437 11.9664 3.45027 9.91671ZM7.15252 11.7939C8.16102 11.8006 8.99701 10.978 9.01691 9.96978C9.03018 8.96815 8.20746 8.11245 7.2056 8.09255C6.16393 8.06602 5.30803 8.90845 5.30803 9.94325C5.30803 10.9515 6.13739 11.7873 7.15252 11.7939Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M27.5281 5.33325H22.0344V7.11761H27.5281V5.33325Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M23.839 9.05444H18.3254V10.8322H23.839V9.05444Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M32.8094 25.399C32.3251 25.7439 31.9071 26.0491 31.4493 26.3807C31.0578 25.9496 30.6597 25.5184 30.2019 25.0209C30.7592 24.6096 31.29 24.2183 31.8805 23.7871C32.2123 24.3576 32.5042 24.8683 32.8094 25.399Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M35.8746 22.5996C35.9144 23.2961 35.9476 23.84 35.9874 24.4437C35.45 24.5432 34.9325 24.6427 34.3685 24.7488C34.196 24.185 34.0235 23.6211 33.8245 22.9578C34.5012 22.845 35.1448 22.7323 35.8746 22.5996Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M29.0872 32.3772C28.4436 32.4236 27.873 32.4568 27.2029 32.5032C27.2361 31.8133 27.2692 31.1566 27.3024 30.4336C27.9593 30.5331 28.5232 30.626 29.0872 30.7122V32.3772Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M37.9579 22.6792C38.648 22.8716 39.2717 23.044 39.9617 23.2364C39.7096 23.8533 39.4906 24.3972 39.265 24.9611C38.7143 24.8085 38.2101 24.6692 37.666 24.5166C37.7589 23.9263 37.8518 23.3624 37.9579 22.6792Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M41.8062 24.2183C42.3702 24.7224 42.8545 25.1469 43.3588 25.6046C42.8744 26.0491 42.4498 26.4404 42.0053 26.8451C41.5873 26.4869 41.1825 26.1419 40.7446 25.7638C41.0896 25.2663 41.4214 24.7821 41.8062 24.2183Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                                <path d="M30.3281 27.6409C30.0627 28.1516 29.8305 28.6027 29.5717 29.1068C29.021 28.8879 28.4769 28.669 27.8533 28.417C28.1784 27.8133 28.4836 27.2495 28.8286 26.626C29.3527 26.9775 29.8238 27.2959 30.3281 27.6409Z" fill="white" stroke="white" stroke-width="0.8" stroke-miterlimit="10" />
                                            </svg>
                                        </div>
                                        <div className='flex text-white mx-2'>
                                            Ser la empresa líder en la fabricación de empaques y etiquetas en Centroamérica.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-start mb-6 mt-10'>
                                    <h1 className=' text-orange-700 text-center text-4xl'>
                                        <b>Misión</b>
                                    </h1>
                                </div>
                                <div className='flex w-[614px] h-[109px] bg-orange-600 rounded-full p-6'>
                                    <div className='flex'>
                                        <div className='mx-2'>
                                            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.1843 57.0001H27.7297C27.5897 56.969 27.4496 56.9223 27.3018 56.9068C22.0033 56.4868 17.226 54.6747 12.9934 51.486C2.31081 43.4287 -1.04259 29.2973 4.84726 17.2658C5.01065 16.9313 4.95618 16.7602 4.70721 16.5191C3.48567 15.3292 2.27969 14.1237 1.08927 12.9027C0.692465 12.4905 0.357903 12.0239 0 11.5883V10.7017C0.30344 9.9862 0.871417 9.61289 1.58722 9.36401C3.33784 8.7496 5.07289 8.09631 6.79238 7.42746C7.04914 7.31858 7.31368 7.05415 7.41482 6.80527C8.12285 4.99316 8.78419 3.16548 9.46888 1.34559C10.0213 -0.139878 11.3595 -0.435417 12.4799 0.676741C13.8104 1.99889 15.1486 3.31325 16.448 4.65873C16.767 4.98538 16.9848 5.00093 17.3894 4.8065C24.4308 1.4467 31.6667 0.980056 38.9881 3.68656C51.6159 8.35296 58.8595 21.0533 56.6032 34.3059C54.7203 45.2641 45.905 54.3014 34.9734 56.4402C33.7207 56.6812 32.4447 56.8135 31.1843 57.0001ZM7.60156 19.2723C2.85545 29.3984 5.53194 42.3476 15.9189 49.4794C25.8002 56.2691 39.5561 54.5969 47.4378 45.6686C55.7007 36.3124 55.794 22.7877 47.57 13.486C39.416 4.24653 27.1462 3.71767 19.4279 7.583C19.5057 7.66855 19.5602 7.76966 19.6458 7.83188C20.8673 8.70294 21.0541 9.84621 20.6572 11.2228C20.4316 12.0005 20.3616 12.8327 20.2138 13.7038C28.8346 8.79627 38.9492 11.5028 44.2011 18.619C49.3751 25.642 48.9083 35.3403 43.0651 41.7332C37.1052 48.2584 27.4963 49.6817 20.027 45.1086C16.3313 42.8532 13.7015 39.6878 12.2776 35.5969C10.4259 30.3006 10.9705 25.1753 13.7015 20.2289C13.4992 20.2523 13.3513 20.2523 13.2035 20.2834C12.2699 20.4545 11.344 20.61 10.4181 20.8045C9.60893 20.9678 8.90868 20.8122 8.35626 20.1667C8.12285 19.8945 7.89722 19.6223 7.60156 19.2723ZM17.8485 20.2134C13.4914 25.2997 12.9779 34.4225 19.2879 40.3955C25.2944 46.0808 35.1056 45.6763 40.5909 39.4778C46.3018 33.0226 45.5627 23.3243 38.9492 17.9191C32.5692 12.7083 24.1974 14.2248 20.2371 17.8724C21.5364 19.1712 22.8436 20.4545 24.1274 21.7688C24.3997 22.041 24.5631 21.8855 24.7887 21.7455C26.7416 20.5789 28.8501 20.1823 31.0987 20.5789C36.1016 21.4655 39.4394 26.4119 38.3579 31.3194C37.2375 36.4058 32.2346 39.5322 27.2551 38.2568C21.3653 36.748 18.6032 29.9895 21.7465 24.7864C21.8788 24.5687 22.0577 24.3976 21.7776 24.1254C20.4705 22.8499 19.179 21.5433 17.8485 20.2134ZM26.8428 24.452C27.0061 24.6231 27.1306 24.7553 27.2551 24.8876C28.3522 25.9919 29.457 27.0963 30.5618 28.1929C30.9975 28.6207 31.2387 29.1262 31.1298 29.7406C31.0131 30.3939 30.6396 30.8528 30.0016 31.0627C29.3325 31.2883 28.749 31.1016 28.2666 30.6272C27.1306 29.5073 26.0102 28.3718 24.8821 27.2519C24.742 27.1196 24.602 26.9874 24.4464 26.8474C23.1159 29.3128 23.8317 32.3849 26.0803 34.0648C28.3599 35.768 31.5577 35.5269 33.5495 33.5048C35.5414 31.4827 35.7514 28.3407 34.0553 26.0775C32.3825 23.8298 29.278 23.1143 26.8428 24.452ZM11.7797 4.70539C11.3907 5.75533 11.0561 6.70417 10.6749 7.64522C10.527 8.00298 10.5737 8.22852 10.8538 8.50851C12.6744 10.2973 14.4717 12.1172 16.2846 13.9215C16.4013 14.0382 16.5258 14.1393 16.6892 14.2793C16.9226 13.0194 17.1482 11.8216 17.3505 10.6239C17.3739 10.4684 17.3038 10.2506 17.1949 10.1417C15.421 8.34518 13.647 6.56417 11.7797 4.70539ZM14.3161 16.6747C12.2621 14.6215 10.2858 12.646 8.3018 10.6784C8.224 10.6006 8.06061 10.5462 7.96724 10.5773C6.90131 10.9584 5.83538 11.355 4.68387 11.7828C6.55897 13.6493 8.34848 15.4459 10.1613 17.2191C10.2703 17.3202 10.5037 17.3669 10.6593 17.3435C11.8419 17.1413 13.0246 16.9158 14.3161 16.6747Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className='flex text-white mx-2'>
                                            Buscar soluciones innovadoras en nuestros procesos de fabricación y servicio al cliente.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='border-b-2 mt-6' />

                <div className='flex flex-col '>
                    <div className='container py-6'>
                        <div className='grid lg:grid-cols-2 gap-10'>
                            <div>
                                <div className='text-start mb-6 mt-10'>
                                    <h1 className=' text-orange-700 text-center text-4xl'>
                                        Promesa de <b>Valor</b>
                                    </h1>
                                </div>
                                <hr className='border-b-2 mt-6' />
                                <p className='text-justify my-6'>
                                    <b>Prometemos brindarles a nuestros clientes un servicio y asesoría personalizada </b>
                                    que nos permita crear relaciones comerciales duraderas donde los resultados obtenidos nos posicionan como su socio estratégico en la fabricación de empaques y etiquetas.
                                </p>
                            </div>
                            <div>
                                <div className='text-start mb-6 mt-10'>
                                    <h1 className=' text-orange-700 text-center text-4xl'>
                                        Pólitica de <b>Valor</b>
                                    </h1>
                                </div>
                                <hr className='border-b-2 mt-6' />
                                <p className='text-justify my-6'>
                                    <b>Estamos comprometidos con la constante innovación de procesos, </b>
                                    renovación de maquinaria y capacitaciones a nuestros colaboradores que nos permitan estar a la vanguardia de los avances tecnológicos, para una mejor calidad en nuestros productos y servicios.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <hr className='border-b-2 mt-6' />

                <div className='text-start mb-6 mt-20'>
                    <h1 className='text-4xl text-orange-700'>
                        Promesa con la <b className='text-orange-700'>Comunidad</b>
                    </h1>
                </div>
                <hr className='border-b-2 mt-6' />
                <p className='text-justify mt-6 mb-24'>
                    <b>Nos comprometemos a ser una empresa socialmente responsable</b>, donde nuestra actividad tomará en consideración el bienestar y desarrollo de nuestros colaboradores, y la comunidad en la que operamos.
                    Haciendo negocios justos con nuestros proveedores y clientes que permitan el desarrollo y beneficio para todas las partes involucradas. 
                </p>

            </section>
        </>
    )
}

export default Nosotros