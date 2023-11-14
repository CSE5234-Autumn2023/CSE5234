import React from "react"
import Product from "./product";
import "./styles/purchase.css";

const Purchase = (props) => {

    return (
        <div className="products-page">
            <div className="product-list offset-md-1 col-md-10">
                {
                    props.products.map((product, index) => {

                        return (
                            index % 3 === 0
                                ?
                                <div className="row">
                                    <div className="col-md-4 product">
                                        <Product product={product} index={product['_id']} order={props.order} setOrder={props.setOrder} />
                                    </div>
                                    {
                                        props.products !== index + 1
                                        ?
                                        <div className="col-md-4 product">
                                            <Product product={props.products[index + 1]} index={props.products[index + 1]['_id']} order={props.order} setOrder={props.setOrder} />
                                        </div>
                                        :
                                        <></>
                                    }
                                    {
                                        props.products !== index + 2
                                        ?
                                        <div className="col-md-4 product">
                                            <Product product={props.products[index + 2]} index={props.products[index + 2]['_id']} order={props.order} setOrder={props.setOrder} />
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