// import des modules necessaires
import React from 'react';

import '@/Layouts/Header/Header.css'
import Logo from '@/assets/images/logo.png'

// fonction d'affichage du header
const Header = () => {

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <h1>Les Argonautes</h1>
        </header>
    );

};

// export du header pour l'utiliser dans le layout
export default Header