import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./styles/product.css";

function Product(props) {

    const [addedToCartConfirmation, setAddedToCartConfirmation] = useState(false);
    const [tempCartQuantity, setTempCartQuantity] = useState(props.tempCart.find(elem => elem._id === props.index).quantity);
    const THREE_QUARTER_SECOND_IN_MS = 750;

    useEffect(() => {
        if (addedToCartConfirmation) {
            const interval = setInterval(() => {
                setAddedToCartConfirmation(false)
            }, THREE_QUARTER_SECOND_IN_MS);

            return () => clearInterval(interval);
        }
    }, [addedToCartConfirmation])


    const getCartQuantity = () => {
        if (props.order.cart) {
            let productInCart = props.order.cart.some(elem => elem._id === props.index);
            if (productInCart) {
                return props.order.cart.find(elem => elem._id === props.index).quantity;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    const [inventoryQuantity, setInventoryQuantity] = useState(null);

    const getInventoryQuantity = (id) => {
        axios
            .get(`/inventory-management/inventory/items/${id}`)
            .then((response) => {
                const inventoryData = response.data;
                if (inventoryData && inventoryData.quantity !== undefined) {
                    setInventoryQuantity(inventoryData.quantity);
                } else {
                    setInventoryQuantity(0);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getInventoryQuantity(props.index);
    }, [props.index]);


    return (
        <div className="product-details">
            <div className="product-img-div"><img className="product-img" src={require(`../data/${props.product.img_url}`)} alt="img_alt_text" /></div>
            <div className="product-name"><strong>{props.product.name}</strong></div>
            <div className="product-description">{props.product.description}</div>
            <div className="product-price">${props.product.price}</div>
            <div className="increment-cart">
                <button
                    className="btn btn-outline-primary btn-sm subtract-btn"
                    onClick={() => {
                        let updated_temp_cart = props.tempCart;
                        updated_temp_cart.find(elem => elem._id === props.index).quantity = tempCartQuantity - 1;
                        props.setTempCart(updated_temp_cart);

                        setTempCartQuantity(tempCartQuantity - 1);
                    }}
                    disabled={tempCartQuantity == 0}
                >
                    -
                </button>
                <div className="product-summary-quantity-value">
                    {
                        tempCartQuantity
                    }
                </div>
                <button
                    className="btn btn-outline-primary btn-sm add-btn"
                    onClick={() => {
                        let updated_temp_cart = props.tempCart;
                        updated_temp_cart.find(elem => elem._id === props.index).quantity = tempCartQuantity + 1;
                        props.setTempCart(updated_temp_cart);

                        setTempCartQuantity(tempCartQuantity + 1);
                    }}
                >
                    +
                </button>
            </div>
            <div className="add-to-cart">
                <button
                    disabled={tempCartQuantity == 0}
                    onClick={() => {
                        setAddedToCartConfirmation(true);

                        let cart = props.order.cart;
                        const id_found = cart.some(elem => elem._id === props.index);

                        if (id_found) {
                            cart.find(elem => elem._id === props.index).quantity += tempCartQuantity;
                        } else {
                            cart.push({ _id: props.index, quantity: tempCartQuantity });
                        }

                        props.setOrder({ ...props.order, cart: cart })
                        localStorage.setItem('order', JSON.stringify(props.order));

                        setTempCartQuantity(0);
                    }}
                    className="btn btn-primary add-to-cart-btn"
                >
                    Add to Cart
                </button>
            </div>
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