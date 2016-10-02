import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import {addToCart} from '../actions';

const ProductsListContainer = connect(
    function mapStateToProps(state) {
        return {
            products: state.products
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            onProductClick: id => dispatch(addToCart(id))
        };
    }
)(ProductsList);

export default ProductsListContainer;