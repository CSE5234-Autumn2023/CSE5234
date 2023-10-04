import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/header.css";


function Header() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/purchase/paymentEntry');
    }

    return (
        <div class="header">
            <div className='empty-div'></div>
            <div className="title">
                <h1>CSE 5234</h1>
            </div>
            <div className='checkout'>
                <button onClick={handleSubmit} className='btn btn-light checkout-btn'>Checkout</button>
            </div>
        </div >
    )
}

export default Header;