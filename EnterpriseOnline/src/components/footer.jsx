import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./styles/footer.css";

function Footer() {
    const navigate = useNavigate();

    const aboutUsClick = (e) => {
        navigate('/aboutUs');
    }

    const contactUsClick = (e) => {
        navigate('/contactUs');
    }

    return (
        <div class="footer">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <a href="#" onClick={aboutUsClick} class="nav-link px-2 text-muted">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="#" onClick={contactUsClick} class="nav-link px-2 text-muted">Contact Us</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;