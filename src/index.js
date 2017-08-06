import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import IndexRoute from './Route/index';

ReactDOM.render(IndexRoute, document.getElementById('root'));
registerServiceWorker();
