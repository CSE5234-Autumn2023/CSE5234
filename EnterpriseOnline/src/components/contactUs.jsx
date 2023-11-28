import React from 'react';
import "./styles/contactUs.css";

function ContactUs() {
    return (
        <div>
            <div className="center about-us-title">
                <h1>Contact Us</h1>
            </div>
            <div className="offset-md-1 col-md-10 contact-option-title">
                <div className="row">
                    <div className="col mb-4 contact-option">
                        <div className="center">
                            <img className="team-mem-img" src={require("../data/ContactUsPhotos/Shaq_phone.jpg")} alt="Shaq's Shoe Phone" height="240" width="200" />
                            <h4>Phone</h4>
                        </div>
                        <div className='center team-mem-desc'>
                            <p>You can contact us through our 24/7 hotline.</p>
                            <p>1-800-555-1234</p>
                        </div>
                    </div>
                    <div className="col mb-4 contact-option">
                        <div className="center">
                            <img className="team-mem-img" src={require("../data/ContactUsPhotos/Shooting_basketball.jpg")} alt="Shaq's Shoe Phone" height="240" width="200" />
                            <h4>Email</h4>
                        </div>
                        <div className='center team-mem-desc'>
                            <p>Feel free to shoot us an email.</p>
                            <p>help@BasketballRUs.com</p>
                        </div>
                    </div>
                    <div className="col mb-4 contact-option">
                        <div className="center">
                            <img className="team-mem-img" src={require("../data/ContactUsPhotos/Basketball_wall.jpg")} alt="Shaq's Shoe Phone" height="240" width="200" />
                            <h4>Address</h4>
                        </div>
                        <div className='center team-mem-desc'>
                            <p>Or stop by our warehouse.</p>
                            <p>1234 High Street, Columbus Ohio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;