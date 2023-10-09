import React from 'react';
import './styles/home.css';

function Home() {
    return (
        <div>
            <div className="center home-page-title">
                <h1>Welcome to Enterprise Online</h1>
                <p>We specialize in selling technology and homegoods products that are the best you can buy!</p>
                <p>We offer an array of electronics like cameras and watches, as well as our famous iced milk</p>
                <p>Our vision is to bring your local superstore to your computer in one click</p>
            </div>
            <div className="center message-to-customers">
                <h3>Message to our Customers:</h3>
                <p>Our only business strategy is to create the highest quality, American-made products for our customers at the cheapest prices possible</p>
                <p>You are our #1 priority, so we can only thrive when you are thriving</p>
            </div>
        </div>
    )
}

export default Home;