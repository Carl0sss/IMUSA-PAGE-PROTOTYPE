import React from 'react';
import Divider from '../images/Divider.png';

function Nosotros() {
    return (
        <section>
            <div className='mx-auto max-w-2xl py-16 sm:py-48 lg:py-56'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl'>
                        ¿Quiénes <strong>somos?</strong>
                    </h1>
                    <br />

                </div>
            </div>
            <img src={Divider} alt="" className='w-full' />
        </section>
    )
}

export default Nosotros