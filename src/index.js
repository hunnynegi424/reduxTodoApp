import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './edit/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './edit/reducers';


const routers = (
    <HashRouter>
        <div>
            <Routes />
        </div>
    </HashRouter>
)

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {routers}
    </Provider>,
    document.getElementById('root')
);