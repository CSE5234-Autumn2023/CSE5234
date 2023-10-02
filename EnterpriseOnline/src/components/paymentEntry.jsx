import React, { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'

const PaymentEntry = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/shippingEntry');
    }

    let title = "Enter Payment Information"

    return (
        <div>
            <h1>
                {title}
            </h1>
            {
                props.order.buyQuantity.map((buyQuantity, index) => {

                    return (
                        <p>Product {index+1}: {buyQuantity}</p>
                    )
                })
            }

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Credit Card Number</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, credit_card_number: e.target.value })
                        }}
                    />
                    <br />

                    <label>Expiration Date</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, expir_date: e.target.value })
                        }}
                    />
                    <br />

                    <label>cvv</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, cvv: e.target.value })
                        }}
                    />
                    <br />

                    <label>Card Holder Name</label>
                    <input
                        type="string"
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, card_holder_name: e.target.value })
                        }}
                    />
                    <button className='button'>Set up shipping</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentEntry;