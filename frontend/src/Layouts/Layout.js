// import des modules nécessaires
import React from 'react';
import { Outlet } from 'react-router-dom';

import '@/Layouts/Layout.css'

import Header from '@/Layouts/Header/Header';
import Footer from '@/Layouts/Footer/Footer'

// fonction d'appel du Layout.
const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

// export du Layout pour appel dans le router.
export default Layout;