import React, { useState, useEffect } from "react";
import "./styles/product.css";

function Product(props) {

    const [addedToCartConfirmation, setAddedToCartConfirmation] = useState(false);
    const HALF_SECOND_IN_MS = 500;

    useEffect(() => {
        if (addedToCartConfirmation) {
            const interval = setInterval(() => {
                setAddedToCartConfirmation(false)
            }, HALF_SECOND_IN_MS);

            return () => clearInterval(interval);
        }
    }, [addedToCartConfirmation])



    return (
        <div className="product-details">
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
                        let updated_products = props.order.products;
                        updated_products[props.index].quantity = props.product.quantity + 1;
                        props.setOrder({ ...props.order, products: updated_products })
                        localStorage.setItem('order', JSON.stringify(props.order));
                    }}
                    className="btn btn-primary add-to-cart-btn"
                >
                    Add to Cart
                </button>
            }
            <div className="product-quantity">Quantity in Cart - {props.product.quantity}</div>
        </div>
    )
}

export default Product;