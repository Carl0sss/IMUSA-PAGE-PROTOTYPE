import React, { useState, useEffect } from 'react';
import navicon from '../images/navicon.png';
import navicoRed from '../images/navicon_red.png';
import { VscThreeBars } from "react-icons/vsc";

function NavBar() {
    const Links = [
        { name: "Nosotros", link: "/Nosotros" },
        { name: "Artes Gráficas", link: "/ArtesGraficas" },
        { name: "Industria", link: "/Industria" }
    ];

    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [buttonComponent, setButtonComponent] = useState('ButtonWhite'); // Inicialmente, ButtonWhite

    // Escucha el evento de desplazamiento y cambia el estado de scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
                setButtonComponent('Button'); // Cambia a Button cuando se hace scroll
            } else {
                setScrolling(false);
                setButtonComponent('ButtonWhite'); // Vuelve a ButtonWhite cuando se hace scroll hacia arriba
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Button = buttonComponent === 'Button' ? require('./Button').default : null;
    const ButtonWhite = buttonComponent === 'ButtonWhite' ? require('./ButtonWhite').default : null;

    return (
        <div className={`w-full fixed top-0 left-0 ${scrolling ? 'bg-white' : ''}  z-10`}>
            <div className='md:flex items-center justify-between py-4 md:px-9 px-6'>
                <a href='/' className='cursor-pointer flex items-center'>
                    <img src={scrolling ? navicoRed : navicon} alt="inmusa-brand-icon" className='nav-icon-brand' />
                </a>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <VscThreeBars name={open ? 'close' : 'menu'}></VscThreeBars>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className={`${scrolling ? 'text-orange-600' : 'text-gray-50'} hover:text-gray-500 duration-500`}>{link.name}</a>
                            </li>
                        ))
                    }
                    {Button ? <Button route={'/Contactanos'}>Contáctanos</Button> : null}
                    {ButtonWhite ? <ButtonWhite route={'/Contactanos'}>Contáctanos</ButtonWhite> : null}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
