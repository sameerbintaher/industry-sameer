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
            <h4>Total Wished: {totalWish}</h4>
            <h4>Total Value: ${total} </h4>
            <h4>Selected Person:</h4>
            {
                cart.map(item => <div style={{ border: '1px solid black' }} className='d-flex justify-content-center align-items-center m-1 p-1'>

                    <img style={{ width: "50px", height: "50px", marginRight: "5px" }} src={item.img} alt="" />
                    <h6>{item.name}</h6>

                </div>)
            }
        </div>
    );
};

export default Cart;