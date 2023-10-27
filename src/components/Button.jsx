import React from 'react';
/* import { VscChevronRight } from "react-icons/vsc"; */

function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        // Redirigir a otra página
        window.location.href = props.route;
    };


    return (
        <button className='outline outline-offset-2 outline-orange-600 text-orange-600 py-1 px-8 rounded-full md:ml-8 hover:outline-2' onClick={handleClick}>
            {props.children}
        </button>
    )
}

export default Button