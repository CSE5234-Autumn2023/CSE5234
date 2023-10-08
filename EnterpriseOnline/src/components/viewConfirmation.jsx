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
            <div className="center" >
                <p>Thank you for placing your order. Your confirmation code is 00000001</p>

                <button className='btn btn-primary' onClick={handleSubmit}>Go Back to Products Page</button>
            </div>
        </div>
    )
}

export default ViewConfirmation;