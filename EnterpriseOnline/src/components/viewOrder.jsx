import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/viewOrder.css";

const ViewOrder = (props) => {

    let title = "Your Order"

    const navigate = useNavigate();

    const initialOrder = props.order;

    const handleSubmit = () => {
        postOrder(props.order);

        props.setOrder({
            cart: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
        });
        localStorage.clear();

        navigate('/purchase/viewConfirmation');
    }

    const postOrder = (orderData) => {

        axios.post('/inventory-management/inventory/place-order', orderData.cart)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios.post('/order-processing/order', orderData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const calculateTotalCost = () => {
        let total_cost = 0

        for (const product of props.order.cart) {
            const matchingProduct = props.products.find((elem) => elem['_id'] === product['_id']);
            if (matchingProduct) {
                total_cost += matchingProduct.price * product.quantity;
            }
        }

        return (
            <div className="total-cost">
                <h4 className="product-in-cart-line">Total Cost: ${total_cost}</h4>
            </div>
        )
    }

    const displayCart = () => {
        return (
            <table className="table equal-width-table-three table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.order.cart.map((product, index) => {
                        const productData = props.products.find((elem) => elem['_id'] === product['_id']);

                        if (productData) {
                            return (
                                <tr key={index}>
                                    <td>{productData.description}</td>
                                    <td>{product.quantity}</td>
                                    <td>${productData.price * product.quantity}</td>
                                </tr>
                            );
                        }

                        return null;
                    })}
                </tbody>
            </table>
        );
    };



    return (
        <div>
            <h1>
                {title}
            </h1>

            {displayCart()}

            <div>
                {calculateTotalCost()}
            </div>

            <div className="center">
                <h2>Payment Information</h2>
            </div>
            <table className="table table-bordered equal-width-table justify-content-center">
                <tbody>
                    <tr>
                        <th className="text-center" scope="row">
                            Credit Card Number:
                        </th>
                        <td className="textStart">{initialOrder.credit_card_number}</td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            Expiration Date:
                        </th>
                        <td className="textStart">{initialOrder.expir_date}</td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            CVV:
                        </th>
                        <td className="textStart">{initialOrder.cvv}</td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            Credit Card Holder Name:
                        </th>
                        <td className="textStart">{initialOrder.card_holder_name}</td>
                    </tr>
                </tbody>
            </table>


            <h2 className="center">Shipping Information</h2>
            <table className="table table-bordered equal-width-table justify-content-center">
                <tbody>
                    <tr>
                        <th className="text-center" scope="row">
                            Address 1:
                        </th>
                        <td>{initialOrder.address_1}</td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            Address 2:
                        </th>
                        <td>{initialOrder.address_2}</td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            City:
                        </th>
                        <td>{initialOrder.city}</td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            State:
                        </th>
                        <td>{initialOrder.state}</td>
                    </tr>
                    <tr>


                        <th className="text-center" scope="row">
                            Zip Code:
                        </th>
                        <td>
                            {initialOrder.zip}
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            Email Address:
                        </th>
                        <td>
                            {initialOrder.email}
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center" scope="row">
                            Zip Code:
                        </th>
                        <td>{initialOrder.shippingMethod}</td>
                    </tr>
                </tbody>
            </table>
            <div className="center">
                <button 
                    type="submit"
                    disabled={!props.order.cart.reduce((n, { quantity }) => n + quantity, 0)}
                    style={{ 
                        backgroundColor: !props.order.cart.reduce((n, {quantity}) => n + quantity, 0) ? 'gray' : '#E47041',
                        color: 'white',
                        borderColor: 'white',
                        outline: 'none'
                    }} 
                    className='btn btn-primary'
                    onClick={handleSubmit}
                >
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default ViewOrder;