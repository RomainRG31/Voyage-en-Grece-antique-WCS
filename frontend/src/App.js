// import des modules nécessaires
import '@/Normalizer.css'
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/Pages/Public/PublicRouter.js';

// création du routage principal.
const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// export de la fonction app pour appel dans l'index.
export default App;
