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
            <hr />
            <div className="text-cart">
                <h4>Total Wished: <span className="text-primary">{totalWish}</span></h4>
                <h4>Total Value: <span className="text-primary">${total}</span> </h4>
                <h4>Selected Person:</h4>
            </div>
            {
                cart.map(item => <div style={{ border: '1px solid black', borderRadius: '10px' }} className='bg-dark text-white d-flex justify-content-center align-items-center m-1 p-1' key={item.id}>

                    <img style={{ width: "50px", height: "50px", marginRight: "5px" }} src={item.img} alt="" />
                    <h6>{item.name}</h6>

                </div>)
            }
        </div>
    );
};

export default Cart;