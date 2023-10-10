import React from "react";
import { useNavigate } from 'react-router-dom';
import ProductSummary from './productSummary';
import "./styles/paymentEntry.css";
import mock_products from "../data/mockProducts.json";


const PaymentEntry = (props) => {

    const navigate = useNavigate();

    const emptyCartClick = () => {
        localStorage.clear();
        props.setOrder({
            products: mock_products, credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: ''
        });

        navigate('/purchase');
    }

    const handleSubmit = () => {
        navigate('/purchase/shippingEntry');
    }

    let title = "Enter Payment Information"

    const calculateTotalCost = () => {
        let total_cost = 0

        props.order.products.map((product) => {
            total_cost += product.price * product.quantity;
        })

        return (
            <div className="center">
                Total Cost: ${total_cost}
            </div>
        )
    }
    
    return (
        <div>
            <h1>
                {title}
            </h1>
            <div>
                {
                    props.order.products.map((product, index) => {
                        return (
                            (product.quantity > 0)
                                ?
                            <div className="container product-in-cart-summary">
                                <ProductSummary product={product} order={props.order} setOrder={props.setOrder} index={index}  editable={true} />
                            </div>
                                :
                            <></>
                        )
                    })
                }
            </div>

            <div>
                {
                    calculateTotalCost()
                }
            </div>

            <br />

            <form onSubmit={handleSubmit}>
                <div className="offset-md-1 col-md-10">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Credit Card Number</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter credit card number"
                                    required
                                    value={props.order.credit_card_number}
                                    minLength={16}
                                    maxLength={16}
                                    onChange={(e) => {
                                        if (!isNaN(+e.target.value)) {
                                            props.setOrder({ ...props.order, credit_card_number: e.target.value });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Credit Card Expiration Date</label>
                                <input
                                    className="form-control"
                                    type="month"
                                    min={String(new Date().getFullYear())+"-"+String(new Date().getMonth()+1)}
                                    required
                                    value={props.order.expir_date}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, expir_date: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Credit card CVV</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter credit card cvv"
                                    required
                                    value={props.order.cvv}
                                    minLength={3}
                                    maxLength={3}
                                    onChange={(e) => {
                                        if (!isNaN(+e.target.value)) {
                                            props.setOrder({ ...props.order, cvv: e.target.value });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Credit Card Hold Name</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter credit card holder's name"
                                    required
                                    value={props.order.card_holder_name}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, card_holder_name: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="text-center">
                    <button type="submit" disabled={!props.order.products.reduce((n, {quantity}) => n + quantity, 0)} className="btn btn-primary">Set up shipping</button>
                </div>
            </form>
            <div className="text-center">
                <button onClick={emptyCartClick} disabled={!props.order.products.reduce((n, {quantity}) => n + quantity, 0)} className="btn btn-secondary">Empty Cart</button>
            </div>
        </div>
    )
}

export default PaymentEntry;