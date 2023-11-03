import React from 'react';


function PageBanner({image}) {


    return (
        <div className='w-full h-[480px] relative group'>
            <div
                style={{ backgroundImage: `url(${image})` }}
                className='w-full h-full bg-center bg-cover'>
            </div>
        </div>
    )
}

export default PageBanner