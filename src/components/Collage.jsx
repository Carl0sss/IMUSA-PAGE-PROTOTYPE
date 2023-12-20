import React from 'react';
import collage1 from '../images/collage1.jpg';
import collage2 from '../images/collage2.jpg';
import collage3 from '../images/collage3.jpg';
import collage4 from '../images/collage4.jpg';
import collage5 from '../images/collage5.jpg';
import collage6 from '../images/collage6.jpg';
import collage7 from '../images/collage7.jpg';



function Collage() {
    return (
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-2">
                <img className="w-full h-60 object-cover rounded-lg" src={collage3} alt="" />
            </div>
            <div className="col-span-1">
                <img className="w-full h-full object-cover rounded-lg" src={collage2} alt="" />
            </div>
            <div className="col-span-1">
                <img className="w-full h-full object-cover rounded-lg" src={collage1} alt="" />
            </div>
            <div className="col-span-1">
                <img className="w-full h-full object-cover rounded-lg" src={collage4} alt="" />
            </div>  
            <div className="col-span-1">
                <img className="w-full h-full object-cover rounded-lg" src={collage5} alt="" />
            </div>
            <div className="col-span-1">
                <img className="w-full h-full object-cover rounded-lg" src={collage6} alt="" />
            </div>
            <div className="col-span-2">
                <img className="w-full h-60 object-cover rounded-lg" src={collage7} alt="" />
            </div>
        </div>

    )
}

export default Collage

