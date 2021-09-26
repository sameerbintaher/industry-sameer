import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props

    let totalWish = 0;
    let total = 0;
    for (const singer of cart) {
        if (!singer.quantity) {
            singer.quantity = 1;
        }
        total = total + singer.salary * singer.quantity;
        totalWish = totalWish + singer.quantity;
    }


    return (
        <div>
            <h3>My WishList</h3>
            <h4>Total Wished: {totalWish} </h4>
            <h4>Total Value: ${total} </h4>
        </div>
    );
};

export default Cart;