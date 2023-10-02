import React from "react"
import { useLocation, useNavigate } from 'react-router-dom'

const ViewOrder = (props) => {

    let title = "Your Order"

    const navigate = useNavigate();

    const initialOrder = props.order;

    const handleSubmit = (e) => {
        props.setOrder({
            buyQuantity: [0, 0, 0, 0, 0], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
        })
        navigate('/purchase/viewConfirmation');
    }

    return (
        <div>
            <h1>
                {title}
            </h1>

            <h2>Products</h2>

            {
                initialOrder.buyQuantity.map((buyQuantity, index) => {

                    return (
                        <p>Product {index + 1}: {buyQuantity}</p>
                    )
                })
            }

            <h2>Payment Information</h2>
            <p>
                Credit Card Number: {initialOrder.credit_card_number}
            </p>
            <p>
                Experation Date: {initialOrder.expir_date}
            </p>
            <p>
                cvv: {initialOrder.cvv}
            </p>
            <p>
                Credit Card Holder Name: {initialOrder.credit_holder_name}
            </p>

            <h2>Shipping Information</h2>
            <p>
                Address 1: {initialOrder.address_1}
            </p>
            <p>
                Address 2: {initialOrder.address_2}
            </p>
            <p>
                City: {initialOrder.city}
            </p>
            <p>
                State: {initialOrder.state}
            </p>
            <p>
                Zip Code: {initialOrder.zip}
            </p>
            <p>
                Email Address: {initialOrder.email}
            </p>
            <p>
                Zip Code: {initialOrder.shippingMethod}
            </p>

            <button className='button' onClick={handleSubmit}>Place Order</button>
        </div>
    )
}

export default ViewOrder;