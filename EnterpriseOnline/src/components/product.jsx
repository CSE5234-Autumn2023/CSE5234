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
            <div className="product-name"><strong>{props.product.name}</strong></div>
            <div className="product-description">{props.product.description}</div>
            <div className="product-price">${props.product.price}</div>
            <button
                    onClick={() => {
                        setAddedToCartConfirmation(true);
                        const { length } = arr;
                        const id = length + 1;
                        const found = arr.some(el => el.username === name);
                        if (!found) arr.push({ id, username: name });
                        return arr;
                        if ()

                        let updated_products = props.order.products;
                        updated_products[props.index].quantity = props.product.quantity + 1;
                        props.setOrder({ ...props.order, products: updated_products })
                        localStorage.setItem('order', JSON.stringify(props.order));
                    }}
                    className="btn btn-primary add-to-cart-btn"
                >
                    Add to Cart
            </button>
            {
                addedToCartConfirmation
                    ?
                    <div className="product-quantity product-confirmation">Quantity in Cart - {props.product.quantity}</div>
                    :
                <div className="product-quantity">Quantity in Cart - {props.product.quantity}</div>
            }
        </div>
    )
}

export default Product;