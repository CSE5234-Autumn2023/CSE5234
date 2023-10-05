import React from "react";
import { useNavigate } from 'react-router-dom';
import ProductSummary from './productSummary';
import "./styles/paymentEntry.css";


const PaymentEntry = (props) => {

    const navigate = useNavigate();

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
            <div className="col-md-6 total-cost">
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
                    props.order.products.map((product) => {
                        return (
                            (product.quantity > 0)
                                ?
                            <div className="container product-in-cart-summary">
                                <ProductSummary product={product} />
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

            <form onSubmit={handleSubmit}>
                <div className="offset-md-1 col-md-10">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label>Credit Card Number</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter credit card number"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, credit_card_number: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Expiration Date</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter credit card expiration date"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, expir_date: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>cvv</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter credit card cvv"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, cvv: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Credit Card Hold Name</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter credit card holder's name"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, card_holder_name: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Set up shipping</button>
                </div>
            </form>
        </div>
    )
}

export default PaymentEntry;