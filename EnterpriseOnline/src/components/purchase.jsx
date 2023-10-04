import React from "react"
import Product from "./product";
import "./styles/purchase.css";

const Purchase = (props) => {

    return (
        <div className="products-page">
            <div className="product-list offset-md-2 col-md-8">
                {
                    props.order.products.map((product, index) => {

                        return (
                                index % 2 === 0
                                ?
                                <div className="row">
                                    <div className="col-md-6 product">
                                        <Product product={product} index={index} />
                                    </div>
                                    {
                                    props.order.products.length !== index+1
                                    ?
                                    <div className="col-md-6 product">
                                        <Product product={props.order.products[index+1]} index={index+1} />
                                    </div>
                                    :
                                    <></>
                                    }
                                </div>
                                :
                                <></>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Purchase;