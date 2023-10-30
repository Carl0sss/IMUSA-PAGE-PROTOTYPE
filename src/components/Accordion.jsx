import React, { useState } from 'react';
import { VscChevronDown } from 'react-icons/vsc'

function Accordion({ title, content }) {


    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b-2 border-gray-200 mx-6">
            <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={toggleAccordion}>
                <p className="text-lg font-bold text-gray-700">{title}</p>
                <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform text-amber-700`}>
                    <VscChevronDown size={30} />
                </span>
            </button>
            {isOpen && (
                <div className="p-4 mx-3">
                    <p className="text-gray-700">{content}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion