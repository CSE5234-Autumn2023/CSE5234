import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/header.css";


const Header = (props) => {

    const navigate = useNavigate();

    const homePageClick = () => {
        navigate('/')
    }

    const shopPageClick = () => {
        navigate('/purchase')
    }

    const checkoutPageClick = () => {
        navigate('/purchase/paymentEntry');
    }


    return (
        <div className="header">
            <div className="d-flex flex-row">
                <div className="p-2">
                    <button onClick={homePageClick} className='btn btn-light checkout-btn'>Home</button>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <button onClick={shopPageClick} className='btn btn-light checkout-btn'>Shop</button>
                </div>
            </div>
            <div className="header-title">
                <h1>Enterprise Online</h1>
            </div>
            <div className="d-flex flex-row-reverse">
                <div className="p-2">
                    <button onClick={checkoutPageClick} disabled={!props.order.cart.reduce((n, {quantity}) => n + quantity, 0)} className='btn btn-light checkout-btn'>Checkout</button>
                </div>
            </div>
        </div >
    )
}

export default Header;