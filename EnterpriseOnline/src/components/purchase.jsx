import React, { useState, useEffect } from "react"
import Product from "./product";
import "./styles/purchase.css";
import Select from 'react-select'

const Purchase = (props) => {

    const [filter, setFilter] = useState(0);
    const [productList, setProductList] = useState(props.products);

    const options = [
        { value: 0, label: 'All Products' },
        { value: 1, label: 'Basketballs' },
        { value: 2, label: 'Accessories' },
        { value: 3, label: 'Memorabilia' }
    ]

    useEffect(() => {
        if (filter > 0) {
            setProductList(props.products.filter((elem) => elem['product_type'] === filter));
        } else {
            setProductList(props.products);
        }
    }, [filter, props.products])

    console.log(productList)

    return (
        <div className="products-page">
            <div className="filter offset-md-1 col-md-2">
                <Select options={options} placeholder="Filter Products..." onChange={(e) => setFilter(e.value)} />
            </div>
            <div className="product-list offset-md-1 col-md-10">
                {
                    filter > 0
                        ?
                        productList?.map((product, index) => {
                            return (
                                index % 3 === 0
                                    ?
                                    <div className="row">
                                        <div className="col-md-4 product">
                                            <Product product={product} index={product['_id']} order={props.order} setOrder={props.setOrder} />
                                        </div>
                                        {
                                            productList.length !== index + 1
                                                ?
                                                <>
                                                    <div className="col-md-4 product">
                                                        <Product product={productList[index + 1]} index={productList[index + 1]['_id']} order={props.order} setOrder={props.setOrder} />
                                                    </div>
                                                    {
                                                        productList.length !== index + 2
                                                            ?
                                                            <div className="col-md-4 product">
                                                                <Product product={productList[index + 2]} index={productList[index + 2]['_id']} order={props.order} setOrder={props.setOrder} />
                                                            </div>
                                                            :
                                                            <></>
                                                    }
                                                </>
                                                :
                                                <></>
                                        }
                                    </div>
                                    :
                                    <></>
                            )
                        })
                        :
                        productList?.map((product, index) => {
                            return (
                                index % 3 === 0
                                    ?
                                    <div className="row">
                                        <div className="col-md-4 product">
                                            <Product product={product} index={product['_id']} order={props.order} setOrder={props.setOrder} />
                                        </div>
                                        {
                                            productList.length !== index + 1
                                                ?
                                                <>
                                                    <div className="col-md-4 product">
                                                        <Product product={productList[index + 1]} index={productList[index + 1]['_id']} order={props.order} setOrder={props.setOrder} />
                                                    </div>
                                                    {
                                                        productList.length !== index + 2
                                                            ?
                                                            <div className="col-md-4 product">
                                                                <Product product={productList[index + 2]} index={productList[index + 2]['_id']} order={props.order} setOrder={props.setOrder} />
                                                            </div>
                                                            :
                                                            <></>
                                                    }
                                                </>
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