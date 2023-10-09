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
                <div className="offset-md-1 col-md-10">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Address 1</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter address line 1"
                                    required
                                    value={props.order.address_1}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, address_1: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Address 2</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter address line 2"
                                    required
                                    value={props.order.address_2}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, address_2: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter city"
                                    required
                                    value={props.order.city}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, city: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>State</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Enter state"
                                    required
                                    value={props.order.state}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, state: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Zipcode</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    min="10000"
                                    max="99999"
                                    placeholder="Enter zipcode"
                                    required
                                    value={props.order.zip}
                                    onChange={(e) => {
                                        if (!isNaN(+e.target.value)) {
                                            props.setOrder({ ...props.order, zip: e.target.value })
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    className="form-control"
                                    type="string"
                                    placeholder="Confirm email address"
                                    required
                                    value={props.order.email}
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, email: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>
                                    Shipping Method 
                                    <select
                                        required
                                        className="form-control"
                                        value={props.order.shippingMethod}
                                        onChange={(e) => {
                                            props.setOrder({ ...props.order, shippingMethod: e.target.value })
                                        }}
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Expedited">Expedited</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <br></br>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Set up shipping</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingEntry;