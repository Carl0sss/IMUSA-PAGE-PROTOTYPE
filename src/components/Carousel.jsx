import React, { useState } from 'react';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { RxDotFilled } from 'react-icons/rx';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            <div className='min-w-[620px] h-[480px] w-full m-auto py-5 relative group z-0'>
                <div
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <VscChevronLeft onClick={prevSlide} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <VscChevronRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel