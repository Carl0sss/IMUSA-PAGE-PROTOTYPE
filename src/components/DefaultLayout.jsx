import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import HeaderBanner from './HeaderBanner';
import Footer from './Footer';
function DefaultLayout() {
    return (
        <>
            <header>
                <HeaderBanner />
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default DefaultLayout