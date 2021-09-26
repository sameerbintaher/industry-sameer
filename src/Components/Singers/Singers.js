import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Singers.css'

const Singers = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, []);

    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }


    return (
        <div>
            <div className="singers-container p-4">
                <div className="singer-container">
                    {
                        singers.map(singer => <Singer
                            key={singer.id}
                            singer={singer}
                            handleAddToCart={handleAddToCart}
                        ></Singer>)
                    }
                </div>
                <div className="cart-container bg-light p-1 border border-1 rounded-3 h-50">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Singers;