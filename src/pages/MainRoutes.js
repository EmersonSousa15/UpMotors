import React from 'react';
import { Route, Routes} from 'react-router-dom';

import { Main }  from './Main';

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cadastro" element={<Main />} />
        </Routes>
    )
}