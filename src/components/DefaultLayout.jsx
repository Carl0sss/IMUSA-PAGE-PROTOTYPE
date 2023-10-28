import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import HeaderBanner from './HeaderBanner';
import Footer from './Footer';
function DefaultLayout() {
    return (
        <>
            <header className='z-10'>
                <HeaderBanner />
                <NavBar />
            </header>
            <main className='z-0'>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default DefaultLayout