import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Singer.css'
const Singer = (props) => {

    const { name, famous_as, sun_sign, birthplace, img, salary } = props.singer;
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div>
            <div className="singer bg-light p-3">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4 className="singer-name">{name}</h4>
                    <p>Famous As: {famous_as}</p>
                    <p>Demand: ${salary}</p>
                    <p>Sun Sign: {sun_sign}</p>
                    <p>Born in: {birthplace}</p>

                    <button disabled={isClicked} onClick={() => {
                        props.handleAddToCart(props.singer)
                        setIsClicked(true)
                    }}
                        className="btn-regular"
                    ><FontAwesomeIcon icon={faCoffee} /> Add to wishlist
                    {isClicked ? "✓" : <i className="fas fa-user-plus"></i>}
                    </button>

                </div>
            </div>
        </div >
    );
};

export default Singer;