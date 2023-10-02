import React, {useState} from "react"
import {useLocation, useNavigate} from 'react-router-dom'

const ShippingEntry = (props) => {

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder');
    }

    let title = "Enter Shipping Information"

    return (
        <div>
            <h1>
                {title}
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Address 1</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        props.setOrder({ ...props.order, address1: e.target.value })
                    }}
                />

                <label>Address 2</label>
                <input 
                    type="string"
                    onChange={(e) => {
                        props.setOrder({ ...props.order, address2: e.target.value })
                    }}
                />

                <label>City</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        props.setOrder({ ...props.order, city: e.target.value })
                    }}
                />

                <label>State</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        props.setOrder({ ...props.order, state: e.target.value })
                    }}
                />

                <label>Zipcode</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        props.setOrder({ ...props.order, zip: e.target.value })
                    }}
                />

                <label>Confirm Your Email</label>
                <input 
                    type="string"
                    required
                    onChange={(e) => {
                        props.setOrder({ ...props.order, email: e.target.value })
                    }}
                />

                <label>
                    Shipping Method 
                    <select
                        required
                        onChange={(e) => {
                            props.setOrder({ ...props.order, shippingMethod: e.target.value })
                        }}
                    >
                        <option value="">Select an option</option>
                        <option value="Regular">Regular</option>
                        <option value="Expedited">Expedited</option>
                    </select>
                </label>
                <button className='button'>Confirm order</button>
            </form>
        </div>
    )
}

export default ShippingEntry;