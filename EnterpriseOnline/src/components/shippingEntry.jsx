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
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label>Address 1</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter address line 1"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, address_1: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Address 2</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter address line 2"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, address_2: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>City</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter city"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, city: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>State</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter state"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, state: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label>Zipcode</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Enter zipcode"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, zip: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Email Address</label>
                                <input
                                    class="form-control"
                                    type="string"
                                    placeholder="Confirm email address"
                                    required
                                    onChange={(e) => {
                                        props.setOrder({ ...props.order, email: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>
                                    Shipping Method 
                                    <select
                                        required
                                        class="form-control"
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
                        <div class="col"></div>
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

export default ShippingEntry;