import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';

const Panel = () => (
    <Provider store={store}>
        <App />
    </Provider>
);


export default Panel;