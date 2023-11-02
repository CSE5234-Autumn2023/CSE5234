import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/viewConfirmation.css";

const ViewConfirmation = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/purchase');
    }

    return (
        <div className="confirmation-container">
            <h1 className="confirmation-title">Confirm Purchase</h1>
            <div className="center confirmation-message">
                <p>Thank you for placing your order. Your confirmation code is 00000001</p>
                <button className="btn btn-primary confirmation-button" onClick={handleSubmit}>
                    Go Back to Products Page
                </button>
            </div>
        </div>
    )
}

export default ViewConfirmation;