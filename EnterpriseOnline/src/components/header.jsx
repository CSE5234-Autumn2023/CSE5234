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

    const checkoutPageClick = () => {
        navigate('/purchase/paymentEntry');
    }

    return (
        <div class="header">
            <div className='empty-div'></div>
            <div className="title">
                <h1>CSE 5234</h1>
            </div>
            <div className='aboutUs'>
                <button onClick={aboutUsClick} className='btn btn-light checkout-btn'>About Us</button>
            </div>
            <div className='purchase'>
                <button onClick={purchasePageClick} className='btn btn-light checkout-btn'>Purchase</button>
            </div>
            <div className='checkout'>
                <button onClick={checkoutPageClick} className='btn btn-light checkout-btn'>Checkout</button>
            </div>
        </div >
    )
}

export default Header;