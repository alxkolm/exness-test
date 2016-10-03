import actionTypes from './actionTypes';

// Restore cart from localStorage
let prevCart;
try {
    prevCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
} catch (e) {
    prevCart = {};
}

/**
 * @typedef {Object} ReduxAppState
 * @property {Object} cart Object where keys are product id and values is amount
 * @property {Object} cartSort
 * @property {string} cartSort.by Key for sorting
 * @property {string} cartSort.order Order of sorting. Allowed 'asc', 'desc'
 * @property {array} products Array of products
 * @property {string} cartStatus Allowed 'new', 'submitting', 'fail', 'success'
 */
let initState = {
    cart: prevCart,
    cartSort: {by: 'title', order: 'asc'},
    products: [],
    cartStatus: 'new' // 'submitting', 'fail', 'success'
};

export default (state = initState, action) => {
    let productId;
    let newCart;
    switch (action.type) {
        case actionTypes.PRODUCTS_LOAD:
            return Object.assign({}, state, {products: action.payload});

        case actionTypes.CART_ADD_ITEM:
            productId = action.payload;
            newCart = Object.assign({}, state.cart);
            if (newCart[productId] === undefined){
                newCart[productId] = 0;
            }
            newCart[productId] += 1;

            return Object.assign({}, state, {cart: newCart, cartStatus: 'new'});

        case actionTypes.CART_REMOVE_ITEM:
            productId = action.payload;
            newCart = Object.assign({}, state.cart);
            delete newCart[productId];
            return Object.assign({}, state, {cart: newCart, cartStatus: 'new'});

        case actionTypes.CART_SET_SORT:
            let sortBy = action.payload;
            let newSort = Object.assign({}, state.cartSort);
            if (newSort.by === sortBy) {
                // change order direction
                newSort.order = newSort.order === 'asc' ? 'desc' : 'asc';
            } else {
                newSort.by = sortBy;
                newSort.order = 'asc';
            }
            return Object.assign({}, state, {cartSort: newSort});

        case actionTypes.CART_SUBMIT:
            return Object.assign({}, state, {cartStatus: 'submitting'});

        case actionTypes.CART_SUBMIT_FAIL:
            return Object.assign({}, state, {cartStatus: 'fail'});

        case actionTypes.CART_SUBMIT_SUCCESS:
            return Object.assign({}, state, {cartStatus: 'success'});

        default:
            return state;
    }
}