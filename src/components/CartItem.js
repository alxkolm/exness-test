import React from 'react';

const CartItem = ({id, title, price, amount, onRemove}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{amount}</td>
            <td><a href="#remove-from-cart" onClick={(e) => {e.preventDefault(); onRemove(id)}}>Remove</a></td>
        </tr>
    );
};

CartItem.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    amount: React.PropTypes.number.isRequired,
    onRemove: React.PropTypes.func.isRequired
};

export default CartItem;