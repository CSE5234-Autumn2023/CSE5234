import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/paymentEntry.css";

const PaymentEntry = (props) => {

    const navigate = useNavigate();

    const emptyCartClick = () => {
        localStorage.clear();
        props.setOrder({
            cart: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: ''
        });
        localStorage.clear();

        navigate('/purchase');
    }

    const handleSubmit = () => {
        navigate('/purchase/shippingEntry');
    }

    let title = "Enter Payment Information"

    const calculateTotalCost = () => {
        let total_cost = 0

        props.order.cart.forEach((product) => {
            const matchingProduct = props.products.find((elem) => elem['_id'] === product['_id']);

            if (matchingProduct) {
                total_cost += matchingProduct.price * product.quantity;
            } else {
                console.warn(`Product with id ${product['_id']} not found.`);
            }
        });

        return (
            <div className="center">
                Total Cost: ${total_cost}
            </div>
        )
    }

    const displayCart = () => {
        return (
            <table className="table equal-width-table-three table-bordered">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.order.cart.map((product, index) => {
                    const productData = props.products.find((elem) => elem['_id'] === product['_id']);

                    if (productData) {
                        return (
                        <tr key={index}>
                            <td>{productData.name}</td>
                            <td>{product.quantity}</td>
                            <td>${productData.price * product.quantity}</td>
                        </tr>
                        );
                    }

                    return null;
                    })}
                </tbody>
            </table>
        );
    };
    
    return (
        <div>
            <h1>
                {title}
            </h1>

            {displayCart()}

            <div>
                {calculateTotalCost()}
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
                    <button 
                        type="submit" 
                        disabled={!props.order.cart.reduce((n, {quantity}) => n + quantity, 0)} 
                        style={{ 
                            backgroundColor: !props.order.cart.reduce((n, {quantity}) => n + quantity, 0) ? 'gray' : '#E47041',
                            color: 'white',
                            borderColor: 'white',
                            outline: 'none'
                        }} 
                        className='btn btn-primary'
                    >
                        Set up shipping
                    </button>
                </div>
            </form>
            <div className="text-center">
                <div className="p-2">
                    <button 
                        onClick={emptyCartClick} 
                        disabled={!props.order.cart.reduce((n, {quantity}) => n + quantity, 0)} 
                        style={{ 
                            backgroundColor: !props.order.cart.reduce((n, {quantity}) => n + quantity, 0) ? 'gray' : '#EF7F4D',
                        }} 
                        className='btn btn-secondary'
                    >
                        Empty Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentEntry;