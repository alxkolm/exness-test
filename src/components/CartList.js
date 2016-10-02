import React, { PropTypes } from 'react';
import CartItem from './CartItem';
import stableSort from 'stable';
import api from '../api';
import classnames from 'classnames';

class CartList extends React.Component {
    /**
     * Build items array from product list and cart info
     * @returns {Array}
     */
    getItems(){
        if (!this.props.products.length) {
            return [];
        }

        // Build items for dispaly from product list and cart info
        let items = Object.keys(this.props.cart).sort().map((productId) => {
            let item = this.props.products.find(item => item.id == productId);
            item.amount = this.props.cart[productId];
            return item;
        });

        // sort
        let sortKey = this.props.sort.by;
        let sortReverse = this.props.sort.order === 'asc' ? 1 : -1;
        stableSort.inplace(items, (a, b) => {
            if (a[sortKey] === b[sortKey]){
                return 0;
            }
            if (a[sortKey] > b[sortKey]) {
                return 1 * sortReverse;
            }

            return -1 * sortReverse;
        });

        return items;
    }

    /**
     * Submit cart to backend
     * @param cart
     */
    submit(cart) {
        api.submitCart(cart)
            .then(() => {
                this.props.onSubmitSuccess();
            })
            .catch(() => {
                this.props.onSubmitFail();
            });
    }

    render() {
        return <div>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => this.props.onSort('title')}>Title</th>
                    <th onClick={() => this.props.onSort('price')}>Price</th>
                    <th onClick={() => this.props.onSort('amount')}>Amount</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.getItems().map(item =>
                        <CartItem key={item.id} {...item} onRemove={() => this.props.onProductDelete(item.id)}/>
                    )
                }
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={() => this.submit()}>Submit</button>

            <p className={classnames({'bg-danger': true, show: this.props.submitStatus === 'fail'})} style={{display: 'none', padding: '5px'}}>
                Cart submitting is fail. Try again, it's randomly.
            </p>
            <p className={classnames({'bg-success': true, show: this.props.submitStatus === 'success'})} style={{display: 'none', padding: '5px'}}>
                Cart submitted successfully. Try again, it's randomly.
            </p>
        </div>;
    }
}

CartList.propTypes = {
    products: PropTypes.array.isRequired,
    cart: PropTypes.object.isRequired,
    onProductDelete: React.PropTypes.func.isRequired,
    sort: React.PropTypes.object.isRequired,
    submitStatus: React.PropTypes.string.isRequired,
    onSubmitFail: React.PropTypes.func.isRequired,
    onSubmitSuccess: React.PropTypes.func.isRequired
};

export default CartList;