import React from "react";
import './styles/productSummary.css'

function ProductSummary(props) {


    return (
        <div className="col-md-6 product-summary-details">
            <div className="product-summary-line">
                <p className="product-summary-name">{props.product.name}</p>
                <p className="product-summary-quantity">Quantity - {props.product.quantity}</p>
            </div>
            <div className="product-summary-line">
                <p className="product-summary-description">{props.product.description}</p>
                <p className="product-summary-cost">Cost - ${props.product.price * props.product.quantity}</p>
            </div>
        </div>
    )
}

export default ProductSummary;