import React from "react"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Footer from './footer'
import mock_products from "../data/mock_products.json";
import Product from "./product"
import "./styles/purchase.css";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0], credit_card_number: '', expir_date: '', cvv: '', card_holder_name: '', address_1: '',
        address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', { state: { order } });
    }
    console.log('order: ', order);

    return (
        <div class="product-list offset-md-2 col-md-8">
            {
                mock_products.map((product, index) => {

                    return(
                        <div className="product">
                            <Product product={product} order={order} index={index}/>
                        </div>
                    )
                })
            }
            <button onClick={handleSubmit} className='button pay'>Pay</button>
            <Footer />
        </div>
    )
}

export default Purchase;