import React from "react"
import {useLocation} from 'react-router-dom'

const PaymentEntry = () => {

    let location = useLocation();

    return (
        <div>
            <h1>
                product 1: {location.state.order.buyQuantity[0]}
            </h1><h1>
                product 2: {location.state.order.buyQuantity[1]}
            </h1>
        </div>
    )
}

export default PaymentEntry;