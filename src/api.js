import axios from 'axios';

export default class Api {
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

    static submitCart() {
        // According to task description, we need handle both, success and failure response from backend.
        // So, fake them by randomly resolved promise.
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.5) {
                return reject();
            } else {
                return resolve();
            }
        });


        /**
         * This is example how real code looks like
         */
        // return axios.post('/cart')
        //     .then((response) => {
        //         return response.data;
        //     })
        //     .catch(err => {
        //         console.log('Error', err);
        //         return Promise.reject(err);
        //     });
    }
}

