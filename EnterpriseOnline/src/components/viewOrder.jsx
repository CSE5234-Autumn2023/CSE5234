import React from "react";
import { useNavigate } from 'react-router-dom';
import mock_products from "../data/mockProducts.json";
import ProductSummary from './productSummary';
import "./styles/viewOrder.css";

const ViewOrder = (props) => {

    let title = "Your Order"

    const navigate = useNavigate();

    const initialOrder = props.order;

    const handleSubmit = () => {
        props.setOrder({
            products: mock_products, credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
            address_2: '', city: '', state: '', zip: '', shippingMethod: '', email: '',
        });

        navigate('/purchase/viewConfirmation');
    }


    const calculateTotalCost = () => {
        let total_cost = 0

        props.order.products.map((product) => {
            total_cost += product.price * product.quantity;
        })

        return (
            <div className="total-cost">
                <p className="product-in-cart-line">Total Cost: ${total_cost}</p>
            </div>
        )
    }


    return (
        <div>
            <h1>
                {title}
            </h1>

            <h2>Products</h2>

            <div>
                {
                    props.order.products.map((product, index) => {
                        return (
                            (product.quantity > 0)
                                ?
                            <div className="container product-in-cart-summary" key={index}>
                                <ProductSummary product={product} order={props.order} setOrder={props.setOrder} index={index} editable={false} />
                            </div>
                                :
                            <></>
                        )
                    })
                }
            </div>

            <div className="center">
                {
                    calculateTotalCost()
                }
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
                        cvv:
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
                <button className='btn btn-primary' disabled={!props.order.products.reduce((n, {quantity}) => n + quantity, 0)} onClick={handleSubmit}>Place Order</button>
            </div>
        </div>
    )
}

export default ViewOrder;