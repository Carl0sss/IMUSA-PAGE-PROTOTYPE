import React from 'react'
function ButtonSolid(props) {
    const handleClick = (event) => {
        event.preventDefault();
        // Redirigir a otra página
        window.location.href = props.route;
    };

    return (
        <button className='bg-amber-700 text-white py-1 px-8 rounded-full md:ml-8 hover:bg-amber-500' onClick={handleClick}>
            {props.children}
        </button>
    )
}

export default ButtonSolid