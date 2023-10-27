import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import HeaderBanner from './HeaderBanner';

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
            </footer>
        </>
    )
}

export default DefaultLayout