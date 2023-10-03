import React from "react";
import { useNavigate } from 'react-router-dom';

const ViewConfirmation = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/purchase');
    }

    return (
        <div>
            <h1>
                {"Confirm Purchase"}
            </h1>

            <p>Thank you for placing your order. Your confirmation code is 00000001</p>

            <button className='button' onClick={handleSubmit}>Go Back to Products Page</button>
        </div>
    )
}

export default ViewConfirmation;