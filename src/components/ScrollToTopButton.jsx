import React, { useState,useEffect } from 'react';
import { VscChevronUp } from "react-icons/vsc";


function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 300);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    className="fixed bottom-4 right-4 bg-amber-700 hover:bg-amber-600 text-white rounded-full p-3"
                    onClick={scrollToTop}
                >
                    <VscChevronUp size={35} />
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton