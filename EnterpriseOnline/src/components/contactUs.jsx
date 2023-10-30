import React from 'react';
import "./styles/contactUs.css";

function ContactUs() {
    return (
        <div>
            <h1 className="contact-us-title">Contact Us</h1>
            <div className="offset-md-1 col-md-10 company-discussion">
                <div className="row">
                    <div className="col">
                        <div className="center">
                            <h4>Phone</h4>
                            <p>555-555-1234</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="center">
                            <h4>Email</h4>
                            <p>help@EnterpriseOnline.com</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="center">
                            <h4>Address</h4>
                            <p>1234 High Street, Columbus Ohio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;