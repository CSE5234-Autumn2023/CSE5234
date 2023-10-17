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


    const getCartQuantity = () => {
        let productInCart = props.order.cart.some(elem => elem.id === props.index);
        if (productInCart) {
            return props.order.cart.find(elem => elem.id === props.index).quantity;
        } else {
            return 0;
        }
    }


    return (
        <div className="product-details">
            <div className="product-name"><strong>{props.product.name}</strong></div>
            <div className="product-description">{props.product.description}</div>
            <div className="product-price">${props.product.price}</div>
            <button
                    onClick={() => {
                        setAddedToCartConfirmation(true);

                        let cart = props.order.cart;
                        const id_found = cart.some(elem => elem.id === props.index);

                        if (id_found) {
                            cart.find(elem => elem.id === props.index).quantity += 1;
                        } else {
                            cart.push({ id: props.index, quantity: 1 });
                        }

                        props.setOrder({ ...props.order, cart: cart })
                        localStorage.setItem('order', JSON.stringify(props.order));
                        console.log(props.order)
                    }}
                    className="btn btn-primary add-to-cart-btn"
                >
                    Add to Cart
            </button>
            {
                addedToCartConfirmation
                    ?
                    <div className="product-quantity product-confirmation">Quantity in Cart - {getCartQuantity()}</div>
                    :
                <div className="product-quantity">Quantity in Cart - {getCartQuantity()}</div>
            }
        </div>
    )
}

export default Product;