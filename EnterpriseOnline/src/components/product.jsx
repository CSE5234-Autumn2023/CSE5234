import React, { useState, useEffect } from "react";
import "./styles/product.css";

function Product(props) {

    const [addedToCartConfirmation, setAddedToCartConfirmation] = useState(false);
    const THREE_QUARTER_SECOND_IN_MS = 750;

    useEffect(() => {
        if (addedToCartConfirmation) {
            const interval = setInterval(() => {
                setAddedToCartConfirmation(false)
            }, THREE_QUARTER_SECOND_IN_MS);

            return () => clearInterval(interval);
        }
    }, [addedToCartConfirmation])


    return (
        <div>
            <label className="product-name">{props.product.name}</label>
            <div className="product-description">{props.product.description}</div>
            <div className="product-price">${props.product.price}</div>
            {
                addedToCartConfirmation
                    ?
                    <button
                        className="btn btn-success add-to-cart-btn product-confirmation"
                    >
                        Added to Cart
                    </button>
                    :
                    <button
                        onClick={() => {
                            setAddedToCartConfirmation(true);
                            props.order.buyQuantity[props.index] = props.order.buyQuantity[props.index] + 1;
                        }}
                        className="btn btn-primary add-to-cart-btn"
                    >
                        Add to Cart
                    </button>
            }
        </div>
    )
}

export default Product;