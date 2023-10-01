import React from "react";
import "./styles/product.css";

function Product(props) {


    return (
        <div>
            <label>{props.product.name}</label>
            <div className="description">{props.product.description}</div>
            <div>{props.product.price}</div>
            <button
                onClick={() => {
                    console.log(props.order)
                    props.order.buyQuantity[props.index] = props.order.buyQuantity[props.index] + 1;
                }}
                className="btn btn-primary">
                Add to Cart</button>
        </div>
    )
}

export default Product;