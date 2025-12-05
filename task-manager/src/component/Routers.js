import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';

function Routers(){
    return(
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routers;