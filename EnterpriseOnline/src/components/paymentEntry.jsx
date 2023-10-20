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
            cart: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
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

        props.order.products.forEach((product) => {
            console.log(product)
            const matchingProduct = props.products.find((elem) => elem.id === product.id);

            if (matchingProduct) {
                total_cost += matchingProduct.price * product.quantity;
            } else {
                console.warn(`Product with id ${product.id} not found.`);
            }
        });

        // props.order.cart.map((product) => {
        //     console.log(props.products)
        //     total_cost += props.products.find(elem => elem.id === product.id).price * product.quantity;
        // })

        return (
            <div className="center">
                Total Cost: ${total_cost}
            </div>
        )
    }

    const displayCart = () => {

        if (props.order.products.length === 0) {
            navigate('/purchase');
        }

        return (
            props.order.products.map((product, index) => {
                return (
                    <div className="container product-in-cart-summary">
                        <ProductSummary product={props.products.find(elem => elem.id === product.id)} quantity={product.quantity} order={props.order} setOrder={props.setOrder} index={index} editable={false} />
                    </div>
                )
            })
        )
    }
    
    return (
        <div>
            <h1>
                {title}
            </h1>

            <div>
                {(props.products.length > 0) ? displayCart() : <></>}
            </div>

            <div>
                {(props.products.length > 0) ? calculateTotalCost() : <></>}
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
                                <label>CVV</label>
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
                    <button type="submit" disabled={!props.order.cart.reduce((n, {quantity}) => n + quantity, 0)} className="btn btn-primary">Set up shipping</button>
                </div>
            </form>
            <div className="text-center">
                <button onClick={emptyCartClick} disabled={!props.order.cart.reduce((n, {quantity}) => n + quantity, 0)} className="btn btn-secondary">Empty Cart</button>
            </div>
        </div>
    )
}

export default PaymentEntry;