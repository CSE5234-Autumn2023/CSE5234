import React from "react"
import { useNavigate } from "react-router-dom";
import mock_products from "../data/mock_products.json";
import Product from "./product";
import "./styles/purchase.css";

const Purchase = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry');
    }

    return (
        <div className="product-list offset-md-2 col-md-8">
            {
                mock_products.map((product, index) => {

                    return (
                        <div className="product">
                            <Product product={product} products={props.order.products} order={props.order} index={index} />
                        </div>
                    )
                })
            }
            <button onClick={handleSubmit} className='button pay'>Pay</button>
        </div>
    )
}

export default Purchase;