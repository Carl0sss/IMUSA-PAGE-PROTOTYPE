import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import WidgetWrap from './WidgetWrap';

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
            <WidgetWrap />
            <ScrollToTopButton />
        </>
    )
}

export default DefaultLayout