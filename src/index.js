import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store'
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
