import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/home.css';

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <div className="center background-home-wallpaper">
                <img className="background-home-image" src={require("../data/kobe_wallpaper_cropped4.jpg")} width="100%" />
                <div class="center-image-text">
                    <strong>Basketballs "R" Us</strong>
                    <button
                        className="btn btn-primary center-image-subtext"
                        onClick={() => navigate('/purchase')}
                    >
                        Upgrade Your Game Today
                    </button>
                </div>

            </div>

            <div className="offset-md-1 col-md-10 our-section-home">
                <div className="row">
                    <div className="col our-section-home-col">
                        <div className="center">
                            <img className='our-section-home-image' src={require("../data/basketballs_assortment.jpg")} alt="Product1" height="240" />
                            <h4>Our Products</h4>
                            <p>We offer the largest array of basketball related products on the internet</p>
                        </div>
                    </div>
                    <div className="col our-section-home-col">
                        <div className="center">
                            <img className='our-section-home-image' src={require("../data/training_vision.jpg")} alt="Meta Quest" height="240" />
                            <h4>Our Vision</h4>
                            <p>Our vision is to make the game of basketball accessible for everyone whether you are picking up the game for the first time or following your NBA dreams</p>
                        </div>
                    </div>
                    <div className="col our-section-home-col">
                        <div className="center">
                            <img className='our-section-home-image' src={require("../data/our_service.jpg")} alt="Customer Service Pic" height="240" />
                            <h4>Our Service</h4>
                            <p>We specialize in bringing the highest quality basketball products to your doorstep</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center message-to-customers">
                <h3>Message to our Customers:</h3>
                <p>Our only business strategy is to create the highest quality, American-made products for our customers at the cheapest prices possible.</p>
                <p>You are our #1 priority, so we can only thrive when you are thriving!</p>
            </div>
        </div>
    )
}

export default Home;