import axios from 'axios';

export default class Api {

    /**
     * Get list of products from backend
     * @returns {Promise<R>|Promise.<T>}
     */
    static getProducts() {
        return axios.get('goods.json')
            .then((response) => {
                return response.data;
            })
            .catch(err => {
                console.log('Error', err);
                return Promise.reject(err);
            });
    }

    /**
     * Submit cart
     * @returns {Promise}
     */
    static submitCart(data) {
        // According to task description, we need handle both, success and failure response from backend.
        // So, fake them by randomly resolved promise.
        return axios.post('/cart', data)
            .then((response) => {
                return response.data;
            })
            .catch(err => {
                return (Math.random() > 0.5) ? Promise.resolve() : Promise.reject(err);
            });
    }
}

