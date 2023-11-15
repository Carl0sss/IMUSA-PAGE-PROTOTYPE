import React, { useState, useEffect } from 'react';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'


function HeaderBanner() {

    //Lista de imagenes en el carousel
    const slides = [
        {
            url: slide1
        },
        {
            url: slide2
        },
        {
            url: slide3
        },
        {
            url: slide4
        },
        {
            url: slide5
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    //Manda al slide previo
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    //Manda al slide posterior
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        // Cambia de diapositiva automáticamente cada 5 segundos (5000 milisegundos)
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]); // Ejecuta el efecto cuando currentIndex cambia

    return (
        <div className='w-full h-[880px] relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={prevSlide}>
                <VscChevronLeft size={30} />
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide}>
                <VscChevronRight size={30} />
            </div>
        </div>
    )
}

export default HeaderBanner;

