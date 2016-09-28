import React from 'react';
import CartItem from './CartItem';

export default class CartList extends React.Component {
    render(){
        return <table className="table"><tbody>{this.props.items.map(item => <CartItem key={item.id} {...item} />)}</tbody></table>;
    }
}