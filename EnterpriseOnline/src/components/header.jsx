import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/header.css";


const Header = (props) => {

    const navigate = useNavigate();

    const purchasePageClick = (e) => {
        navigate('/purchase')
    }

    const checkoutPageClick = () => {
        navigate('/purchase/paymentEntry');
    }


    return (
        <div className="header">
            <div className="d-flex flex-row">
                <div className="p-2">
                    <button onClick={purchasePageClick} className='btn btn-light checkout-btn'>Home</button>
                </div>
            </div>
            <div className="title">
                <h1>Enterprise Online</h1>
            </div>
            <div className="d-flex flex-row-reverse">
                <div className="p-2">
                    <button onClick={checkoutPageClick} disabled={!props.order.products.reduce((n, {quantity}) => n + quantity, 0)} className='btn btn-light checkout-btn'>Checkout</button>
                </div>
            </div>
        </div >
    )
}

export default Header;