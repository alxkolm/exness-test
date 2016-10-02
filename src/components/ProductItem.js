import React from 'react';

const ProductItem = ({id, title, price, onClick}) => {
    return (
        <div>#{id} {title} ${price} <a href="#add-to-cart" onClick={e => {e.preventDefault(); onClick(id)}}>Add to cart</a></div>
    );
};

ProductItem.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default ProductItem;