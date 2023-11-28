import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/home.css';

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            <div className="center banner-under-header">
                <p><strong>Shop Christmas Deals Now and Use Code SANTA for 40% Off. Ends 12/25.</strong></p>
            </div>

            <div className="offset-md-1 col-md-10 center background-home-wallpaper">
                <img className="background-home-image" src={require("../data/kobe_wallpaper_cropped4.jpg")} width="100%" />
                <div class="center-image-text">
                    <div><strong>Basketballs "R" Us</strong></div>
                    <button
                        className="btn btn-primary center-image-subtext"
                        onClick={() => navigate('/purchase')}
                    >
                        Upgrade Your Game Today
                    </button>
                </div>
            </div>

            <div className="offset-md-1 col-md-10 features-deals">
                <h4>Championship Size Christmas Deals</h4>
                <div className='christmas-deals'>
                    <div className='christmas-deals-message center'>
                        <h1 className='christmas-deal-text'>Biggest Deals of the Year</h1>
                        <h5 className='christmas-deal-text'>Win the holidays with the best gifts of the year.</h5>
                        <button
                            className="btn btn-primary christmas-deal-btn"
                            onClick={() => navigate('/purchase')}
                        >
                            Use Code <strong>SANTA</strong> at Checkout For 40% Off EVERYTHING
                        </button>
                    </div>
                    <img className='christmas-deals-image left-deal' src={require("../data/santa-basketball.jpg")} width="25%" />
                    <img className='christmas-deals-image' src={require("../data/dunking-santa3.jpg")} width="25%" />
                </div>
            </div>

            <div className="offset-md-1 col-md-10 our-section-home">
                <h4>Who We Are</h4>
                <div className='who-we-are-cols'>
                    <div className="row">
                        <div className="col our-section-home-col">
                            <div className="center inner">
                                <img className='our-section-home-image' src={require("../data/basketballs_assortment.jpg")} alt="Product1" height="200" />
                                <h4>Our Products</h4>
                                <p>We offer the largest array of basketball related products on the internet</p>
                            </div>
                        </div>
                        <div className=" offset-md-1 col our-section-home-col">
                            <div className="center inner">
                                <img className='our-section-home-image' src={require("../data/training_vision.jpg")} alt="Meta Quest" height="200" />
                                <h4>Our Vision</h4>
                                <p>Our vision is to make the game of basketball accessible for everyone whether you are picking up the game for the first time or following your NBA dreams</p>
                            </div>
                        </div>
                        <div className="offset-md-1 col our-section-home-col">
                            <div className="center inner">
                                <img className='our-section-home-image' src={require("../data/our_service.jpg")} alt="Customer Service Pic" height="200" />
                                <h4>Our Service</h4>
                                <p>We specialize in bringing the highest quality basketball products to your doorstep</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offset-md-3 col-md-6 center message-to-customers">
                <h1>Message to our Customers</h1>
                <h5 className='first-customer-message'>
                    Our only business strategy is to distribute the highest quality, American-made
                    products at the cheapest prices possible.
                </h5>
                <h5>You are our #1 priority, so we can only thrive when you are thriving!</h5>
            </div>
        </div>
    )
}

export default Home;