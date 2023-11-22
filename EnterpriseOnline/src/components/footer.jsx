import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div className="footer">
            <div className="footer-btns">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a href="#" onClick={aboutUsClick} className="nav-link px-2" style={{ color: 'white' }}>About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={contactUsClick} className="nav-link px-2" style={{ color: 'white' }}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;