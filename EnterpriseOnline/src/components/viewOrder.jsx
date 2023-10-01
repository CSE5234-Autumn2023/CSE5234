import React, {useState} from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import Footer from './footer'

const ViewOrder = () => {

    let title = "view order page"

    let location = useLocation();
    const navigate = useNavigate(); 

    const initialOrder = location.state.order;

    const handleSubmit = (e) => {
        navigate('/purchase/viewConfirmation');
    }

    return (
        <div>
            <main>
                <h1>
                    {title}
                </h1>

                <h2>Products</h2>

                {
                    initialOrder.buyQuantity.map((buyQuantity, index) => {

                        return (
                            <p>Product {index+1}: {buyQuantity}</p>
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

                <button className='button' onClick={handleSubmit}>Place Order</button>
            </main>

            <Footer />
        </div>
    )
}

export default ViewOrder;