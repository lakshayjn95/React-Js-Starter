import {BrowserRouter  } from 'react-router-dom';
import React from 'react';
import {HomeRoutes} from './home'

const IndexRoute =
    (
            <BrowserRouter>
                {HomeRoutes}
            </BrowserRouter>
    );

export default IndexRoute;
