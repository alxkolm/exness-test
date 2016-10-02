require("babel-polyfill");
import React from 'react';
import { render } from 'react-dom';
import CartList from './components/CartList';
import ProductsList from './components/ProductsList';
import { createStore } from 'redux';
import reducer from './reducer.js';
import {loadProducts, addToCart} from './actions';
import CartListContainer from './components/CartListContainer';
import ProductsListContainer from './components/ProductsListContainer';
import { Provider } from 'react-redux';
import Api from './api';


const store = createStore(reducer);

// Get produts
Api.getProducts().then(products => {
    store.dispatch(loadProducts(products));
});

/**
 * Persist cart in localStorage
 */
store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});




render(
    <Provider store={store}>
        <div>
            <CartListContainer/>
            <ProductsListContainer/>
        </div>
    </Provider>
    ,
    document.getElementById('app')
);