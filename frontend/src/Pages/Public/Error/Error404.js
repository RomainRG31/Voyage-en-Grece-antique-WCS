import React from "react";
import { NavLink } from 'react-router-dom';

import "@/Pages/Public/Error/Error404.css";

const Erreur404 = () => {

    return (
        <>
            <div className="page-404">
                <h1 className="titre-404">404</h1>
                <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
                <NavLink to="/" className="lien-site lien-404">Retourner sur la page d’accueil</NavLink>
            </div>
        </>
    );
}

export default Erreur404;