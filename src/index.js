import React from 'react';
import { render } from 'react-dom';
import CartList from './components/CartList';

let items = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'},

];

render(
    <CartList items={items} />,
    document.getElementById('app')
);