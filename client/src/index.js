import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import  thunk from 'redux-thunk';

import reducers from './reducers';

import './index.css';
import App from './App';

const store = configureStore({
    reducer: reducers,
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root'));