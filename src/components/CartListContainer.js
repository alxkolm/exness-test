import { connect } from 'react-redux';
import CartList from './CartList';
import {removeFromCart, sortCart, cartSubmitFail, cartSubmitSuccess} from '../actions';

const CartListContainer = connect(
    function mapStateToProps(state) {
        return {
            products: state.products,
            cart: state.cart,
            submitStatus: state.cartStatus,
            sort: state.cartSort
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            onProductDelete: id => dispatch(removeFromCart(id)),
            onSort: sortBy => dispatch(sortCart(sortBy)),
            onSubmitFail: () => dispatch(cartSubmitFail()),
            onSubmitSuccess: () => dispatch(cartSubmitSuccess()),
        };
    }
)(CartList);

export default CartListContainer;