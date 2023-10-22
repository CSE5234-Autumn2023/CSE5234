import React from "react";
import { useNavigate } from 'react-router-dom';
import ProductSummary from './productSummary';
import axios from 'axios';
import "./styles/viewOrder.css";

const ViewOrder = (props) => {

    let title = "Your Order"

    const navigate = useNavigate();

    const initialOrder = props.order;

    const handleSubmit = () => {
        postOrder(props.order.cart);

        props.setOrder({
            cart: [], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
        });
        localStorage.clear();

        navigate('/purchase/viewConfirmation');
    }

    const postOrder = (orderData) => {
        console.log(orderData)
        axios.post('/inventory-management/postOrder', orderData)
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
            const matchingProduct = props.products.find((elem) => elem.id === product.id);
            if (matchingProduct) {
                total_cost += matchingProduct.price * product.quantity;
            }
        }

        return (
            <div className="total-cost">
                <p className="product-in-cart-line">Total Cost: ${total_cost}</p>
            </div>
        )
    }

    const displayCart = () => {
        return (
            props.order.cart.map((product, index) => {
                return (
                    <div className="container product-in-cart-summary" key={index}>
                        <ProductSummary product={props.products.find(elem => elem.id === product.id)} quantity={product.quantity} order={props.order} setOrder={props.setOrder} index={index} editable={false} />
                    </div>
                )
                
            })
        )
    }


    return (
        <div>
            <h1>
                {title}
            </h1>

            <h2>Products</h2>

            <div>
                {(props.products.length > 0) ? displayCart() : <></>}
            </div>

            <div>
                {(props.products.length > 0) ? calculateTotalCost() : <></>}
            </div>

            <div className="center">
                <h2>Payment Information</h2>
            </div>
            <table className="table table-bordered justify-content-center">
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
                <table className="table table-bordered justify-content-center">
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
                <button className='btn btn-primary' disabled={!props.order.cart.reduce((n, {quantity}) => n + quantity, 0)} onClick={handleSubmit}>Place Order</button>
            </div>
        </div>
    )
}

export default ViewOrder;