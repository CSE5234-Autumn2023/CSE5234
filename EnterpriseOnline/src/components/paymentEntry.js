import React, { useState } from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import Footer from './footer'

const PaymentEntry = () => {
    let location = useLocation();
    const navigate = useNavigate(); 

    const initialOrder = location.state.order;
    const [order, setOrder] = useState(initialOrder)

    const handleSubmit = (e) => {
        navigate('/purchase/shippingEntry', { state: { order } });
    }

    console.log('order: ', initialOrder);

    return (
        <div>
            <main>
                <h1>
                    product 1: {order.buyQuantity[0]}
                </h1><h1>
                    product 2: {order.buyQuantity[1]}
                </h1>

                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Credit Card Number</label>
                        <input 
                            type="string"
                            required
                            onChange={(e) => {
                                setOrder({ ...order, credit_card_number: e.target.value })
                            }}
                        />
                        <br/>

                        <label>Expiration Date</label>
                        <input 
                            type="string"
                            required
                            onChange={(e) => {
                                setOrder({ ...order, expir_date: e.target.value })
                            }}
                        />
                        <br/>

                        <label>cvv</label>
                        <input 
                            type="string"
                            required
                            onChange={(e) => {
                                setOrder({ ...order, cvv: e.target.value })
                            }}
                        />
                        <br/>

                        <label>Card Holder Name</label>
                        <input 
                            type="string"
                            required
                            onChange={(e) => {
                                setOrder({ ...order, card_holder_name: e.target.value })
                            }}
                        />
                        <button className='button'>Set up shipping</button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default PaymentEntry;