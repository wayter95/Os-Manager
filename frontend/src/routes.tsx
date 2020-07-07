import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

const Routes = () => {
    return (

        <BrowserRouter>
            <Route component={Signin} exact path="/"/>
            <Route component={Signup} path="/signup"/>
            <Route component={Home} path="/home"/>
        </BrowserRouter>
    )
}

export default Routes;