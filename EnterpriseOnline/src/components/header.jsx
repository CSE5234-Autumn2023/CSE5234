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

    const emptyCartClick = () => {
        localStorage.clear();
        props.setOrder({
            cart: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: ''
        });
        localStorage.clear();

        navigate('/purchase');
    }

    const buttonDisabled = () => {
        if (props.order.cart) {
            return !props.order.cart.reduce((n, { quantity }) => n + quantity, 0);
        } else {
            return true;
        }

    }


    return (
        <div className="header">
            <div className="header-title">
                <img className="logo" src={require("../data/logo3.png")} height="50px" />
                <h1>Basketballs "R" Us</h1>
            </div>
            <div className='menu-btns'>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <button onClick={homePageClick} style={{ backgroundColor: '#E47041' }} className='btn btn-light checkout-btn btn-width'>Home</button>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <button onClick={shopPageClick} style={{ backgroundColor: '#E47041' }} className='btn btn-light checkout-btn btn-width'>Shop</button>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        <button
                            onClick={emptyCartClick}
                            disabled={!props.order.cart.reduce((n, { quantity }) => n + quantity, 0)}
                            style={{
                                backgroundColor: props.order.cart.reduce((n, { quantity }) => n + quantity, 0) ? '#E47041' : 'gray',
                            }}
                            className='btn btn-light checkout-btn btn-width'
                        >
                            Empty Cart
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        <button
                            onClick={checkoutPageClick}
                            disabled={buttonDisabled()}
                            style={{
                                backgroundColor: buttonDisabled() ? 'gray' : '#E47041',
                            }}
                            className='btn btn-light checkout-btn btn-width'
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;