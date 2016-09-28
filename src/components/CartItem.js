import React from 'react';

export default function CartItem(props) {
    const {id, name} = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{name}</td>
        </tr>
    );
}