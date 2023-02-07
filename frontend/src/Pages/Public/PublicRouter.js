// import des modules necessaires
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '@/Pages/Public/index'

import Layout from '@/Layouts/Layout'
import Erreur404 from '@/Pages/Public/Error/Error404'

// fonction de routage des pages publique
const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/accueil" />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="*" element={<Erreur404 />} />
            </Route>
        </Routes>

    );
};
// export du sous routage pour le router principal
export default PublicRouter;