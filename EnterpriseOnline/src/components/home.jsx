import React from 'react';
import './styles/home.css';

function Home() {
    return (
        <div>
            <div className="center">
                <h3>Message to our Customers:</h3>
                <p>Our only business strategy is to create the highest quality, American-made products for our customers at the cheapest prices possible.</p>
                <p>You are our #1 priority, so we can only thrive when you are thriving!</p>
            </div>
            <div className="offset-md-1 col-md-10">
                <div className="row">
                    <div className="col">
                        <div className="center">
                            <img src={require("../data/CustomerServicePhoto.jpg")} alt="Customer Service Pic" height="240" width="200"/>
                            <h4>Our Service</h4>
                        </div>
                        <p>We specialize in selling technology and homegoods products that are the best you can buy!</p>
                    </div>
                    <div className="col">
                        <div className="center">
                            <img src={require("../data/product1.jpg")} alt="Product1" height="240" width="200"/>
                            <h4>Our Products</h4>
                        </div>
                        <div>
                            <p>We offer an array of electronics like cameras and watches, as well as our famous iced milk!</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="center">
                            <img src={require("../data/Meta-Quest-3.jpeg")} alt="Meta Quest" height="240" width="200"/>
                            <h4>Our Vision</h4>
                        </div>
                        <div>
                            <p>Our vision is to bring your local superstore to your computer in one click!</p>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;