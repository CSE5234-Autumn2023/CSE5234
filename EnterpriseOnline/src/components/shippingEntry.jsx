import React, {useState} from "react"
import {useLocation, useNavigate} from 'react-router-dom'
import Footer from './footer'

const ShippingEntry = () => {

    let location = useLocation();
    const navigate = useNavigate(); 

    const initialOrder = location.state.order;
    const [order, setOrder] = useState(initialOrder)

    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder', { state: { order } });
    }

    console.log('order: ', initialOrder);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Address 1</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        setOrder({ ...order, address1: e.target.value })
                    }}
                />

                <label>Address 2</label>
                <input 
                    type="string"
                    onChange={(e) => {
                        setOrder({ ...order, address2: e.target.value })
                    }}
                />

                <label>City</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        setOrder({ ...order, city: e.target.value })
                    }}
                />

                <label>State</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        setOrder({ ...order, state: e.target.value })
                    }}
                />

                <label>Zipcode</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        setOrder({ ...order, zip: e.target.value })
                    }}
                />
                <button className='button'>Confirm order</button>
            </form>
        </div>
    )
}

export default ShippingEntry;