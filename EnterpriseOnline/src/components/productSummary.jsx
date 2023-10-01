import React from "react"
import {useLocation} from 'react-router-dom'

const ViewOrder = () => {

    let title = "Product Summary"

    let location = useLocation();

    const initialOrder = location.state.order;

    return (
        <div>
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
        </div>
    )
}

export default ViewOrder;