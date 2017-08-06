import {BrowserRouter , Route , Switch } from 'react-router-dom';
import React from 'react';
import App from '../Componet/Layout/App';
import Home from '../Componet/Views/Home'

const HomeRoutes = (
    <App>
        <Route exact path="/" component={Home} />
    </App>
);

export {HomeRoutes};