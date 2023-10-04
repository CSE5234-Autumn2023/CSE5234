import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/header.css";


function Header(props) {

    const navigate = useNavigate();

    const aboutUsClick = (e) => {
        navigate('/aboutUs');
    }

    const contactUsClick = (e) => {
        navigate('/contactUs');
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
                <h1>Enterprise Online</h1>
            </div>
            <div className='aboutUs'>
                <button onClick={aboutUsClick} className='btn btn-light checkout-btn'>About Us</button>
            </div>
            <div className='contactUs'>
                <button onClick={contactUsClick} className='btn btn-light checkout-btn'>Contact Us</button>
            </div>
            <div className='purchase'>
                <button onClick={purchasePageClick} className='btn btn-light checkout-btn'>Purchase</button>
            </div>
            <div className='checkout'>
                <button onClick={checkoutPageClick} disabled={!props.order.products.reduce((n, {quantity}) => n + quantity, 0)} className='btn btn-light checkout-btn'>Checkout</button>
            </div>
        </div >
    )
}

export default Header;