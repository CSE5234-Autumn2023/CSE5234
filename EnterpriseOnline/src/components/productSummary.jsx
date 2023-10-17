import React from "react";
import './styles/productSummary.css'

function ProductSummary(props) {


    return (
        <div className="col-md-6 product-summary-details">
            <div className="product-summary-line">
                <p className="product-summary-name"><strong>{props.product.name}</strong></p>
                <div className="product-summary-quantity">Quantity:
                    <button
                        className="btn btn-outline-primary btn-sm subtract-btn"
                        onClick={() => {
                            let updated_cart = props.order.cart;
                            let product = updated_cart.find(elem => elem.id === props.product.id);
                            if (product.quantity === 1) {
                                updated_cart.splice(updated_cart.findIndex(elem => elem.id === props.product.id), 1);
                            } else {
                                product.quantity -= 1;
                            }
                            props.setOrder({ ...props.order, cart: updated_cart })
                            localStorage.setItem('order', JSON.stringify(props.order));
                        }}
                    >
                        -
                    </button>
                    <div className="product-summary-quantity-value">
                        {props.quantity}
                    </div>
                    <button
                        className="btn btn-outline-primary btn-sm add-btn"
                        onClick={() => {
                            let updated_cart = props.order.cart;                            
                            updated_cart.find(elem => elem.id === props.product.id).quantity += 1;
                            props.setOrder({ ...props.order, cart: updated_cart })
                            localStorage.setItem('order', JSON.stringify(props.order));
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="product-summary-line">
                <p className="product-summary-description">{props.product.description}</p>
                <p className="product-summary-cost">Cost: ${props.product.price * props.quantity}</p>
            </div>
        </div>
    )
}

export default ProductSummary;