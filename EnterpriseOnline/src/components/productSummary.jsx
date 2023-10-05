import React from "react";
import './styles/productSummary.css'

function ProductSummary(props) {


    return (
        <div className="col-md-6 product-summary-details">
            <div className="product-summary-line">
                <p className="product-summary-name"><strong>{props.product.name}</strong></p>
                <p className="product-summary-quantity">Quantity:
                    <button
                        className="btn btn-outline-primary btn-sm subtract-btn"
                        onClick={() => {
                            let updated_products = props.order.products;
                            updated_products[props.index].quantity = props.product.quantity - 1;
                            props.setOrder({ ...props.order, products: updated_products })
                            localStorage.setItem('order', JSON.stringify(props.order));
                        }}
                    >
                        -
                    </button>
                    <div className="product-summary-quantity-value">
                        {props.product.quantity}
                    </div>
                    <button
                        className="btn btn-outline-primary btn-sm add-btn"
                        onClick={() => {
                            let updated_products = props.order.products;
                            console.log(updated_products)
                            console.log(props.index)
                            updated_products[props.index].quantity = props.product.quantity + 1;
                            props.setOrder({ ...props.order, products: updated_products })
                            localStorage.setItem('order', JSON.stringify(props.order));
                        }}
                    >
                        +
                    </button>
                </p>
            </div>
            <div className="product-summary-line">
                <p className="product-summary-description">{props.product.description}</p>
                <p className="product-summary-cost">Cost: ${props.product.price * props.product.quantity}</p>
            </div>
        </div>
    )
}

export default ProductSummary;