import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/header.css";


function Header() {

    const navigate = useNavigate();

    const aboutUsClick = (e) => {
        navigate('/aboutUs');
    }

    const purchasePageClick = (e) => {
        navigate('/purchase')
    }

    const handleSubmit = () => {
        navigate('/purchase/paymentEntry');
    }

    return (
        <div class="header">
            <div className='empty-div'></div>
            <div className="title">
                <h1>CSE 5234</h1>
                <button onClick={aboutUsClick}>About Us</button>
                <button onClick={purchasePageClick}>Purchase</button>
            </div>
            <div className='checkout'>
                <button onClick={handleSubmit} className='btn btn-light checkout-btn'>Checkout</button>
            </div>
        </div >
    )
}

export default Header;