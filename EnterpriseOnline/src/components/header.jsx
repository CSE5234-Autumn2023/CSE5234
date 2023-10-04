import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./styles/header.css";

function Header() {
    const navigate = useNavigate();

    const aboutUsClick = (e) => {
        navigate('/aboutUs');
    }

    const purchasePageClick = (e) => {
        navigate('/purchase')
    }

    return (
        <div class="header">
            <div>
                <h1>CSE 5234</h1>
                <button onClick={aboutUsClick}>About Us</button>
                <button onClick={purchasePageClick}>Purchase</button>
            </div>
        </div>
    )
}

export default Header;