import React from 'react';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
    addHandler(){
        console.log('click');
    }
    render(){
        return <div>
            <p>Pick product to cart</p>
            {this.props.products.map(item => <ProductItem key={item.id} {...item} onClick={() => {this.props.onProductClick(item.id)}} />)}
            </div>;
    }
}

ProductsList.propTypes = {
    products: React.PropTypes.array.isRequired,
    onProductClick: React.PropTypes.func.isRequired
};

export default ProductsList;