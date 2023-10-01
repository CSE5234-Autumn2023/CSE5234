import React from "react"
import Footer from './footer'

const viewConfirmation = () => {

    let title = "view confirmation page"

    return (
        <div>
            <h1>
                {title}
            </h1>

            <p>Thank you for placing your order. Your confirmation code is 00000001</p>
        </div>
    )
}

export default viewConfirmation;