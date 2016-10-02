import actionTypes from './actionTypes';

/**
 * Add item to cart
 * @param {number} productId
 * @returns {{type: string, payload: *}}
 */
export function addToCart(productId) {
    return {
        type: actionTypes.CART_ADD_ITEM,
        payload: productId
    };
}

/**
 * Remove item from cart
 * @param {number} productId
 * @returns {{type: string, payload: *}}
 */
export function removeFromCart(productId) {
    return {
        type: actionTypes.CART_REMOVE_ITEM,
        payload: productId
    };
}

/**
 * Load product
 * @param products
 * @returns {{type: string, payload: *}}
 */
export function loadProducts(products) {
    return {
        type: actionTypes.PRODUCTS_LOAD,
        payload: products
    }
}

/**
 * Set cart sorting
 * @param {string} byKey
 * @returns {{type: string, payload: *}}
 */
export function sortCart(byKey) {
    return {
        type: actionTypes.CART_SET_SORT,
        payload: byKey
    }
}

export function cartSubmit() {
    return {
        type: actionTypes.CART_SUBMIT
    };
}
export function cartSubmitFail() {
    return {
        type: actionTypes.CART_SUBMIT_FAIL
    };
}
export function cartSubmitSuccess() {
    return {
        type: actionTypes.CART_SUBMIT_SUCCESS
    };
}
