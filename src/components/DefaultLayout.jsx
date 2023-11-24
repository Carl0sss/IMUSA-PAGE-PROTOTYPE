import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

function DefaultLayout() {
    return (
        <>
            <header className='z-10'>
                <NavBar />
            </header>
            <main className='z-0'>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
            <ScrollToTopButton />
        </>
    )
}

export default DefaultLayout