import React from "react"
import Product from "./product";
import "./styles/purchase.css";

const Purchase = (props) => {

    return (
        <div className="products-page">
            <div className="product-list offset-md-2 col-md-8">
                {
                    props.products.map((product, index) => {

                        return (
                            index % 3 === 0
                                ?
                                <div className="row">
                                    <div className="col-md-4 product">
                                        <Product product={product} index={index} order={props.order} setOrder={props.setOrder} />
                                    </div>
                                    {
                                        props.products !== index + 1
                                        ?
                                        <div className="col-md-4 product">
                                            <Product product={props.products[index + 1]} index={index + 1} order={props.order} setOrder={props.setOrder} />
                                        </div>
                                        :
                                        <></>
                                    }
                                    {
                                        props.products !== index + 2
                                        ?
                                        <div className="col-md-4 product">
                                            <Product product={props.products[index + 2]} index={index + 2} order={props.order} setOrder={props.setOrder} />
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