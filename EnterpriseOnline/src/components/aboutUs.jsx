import React from 'react';
import './styles/aboutUs.css';

function AboutUs() {
    return (
        <div>
            <div className="center">
                <h1>Welcome to Enterprise Online</h1>
                <p>We specialize in selling technology and homegoods products that are the best you can buy!</p>
                <p>We offer an array of electronics like cameras and watches, as well as the famous iced milk.</p>

                <h2>The Team</h2>
            </div>

            <div className="offset-md-1 col-md-10 team-intros">
                <div className="row">
                    <div className="col">
                        <div className="center">
                            <img src={require("../data/AboutUsPhotos/Nick.jpg")} alt="Nick Pic" height="240" width="200"/>
                            <h4>Nicolas Ashbaugh</h4>
                            <p>CEO</p>
                        </div>
                        <p>Nick is a Senior at OSU that studies Computer Science & Engineering</p>
                        <p>He brings 21 years of life experience to the team as well as some professional coding experience.</p>
                    </div>
                    <div className="col">
                        <div className="center">
                            <img src={require("../data/AboutUsPhotos/Paul.jpg")} alt="Paul Pic" height="240" width="200"/>
                            <h4>Paul Koenig</h4>
                            <p>CIO</p>
                        </div>
                        <div>
                            <p>Paul is a Senior at OSU that studies Computer Science & Engineering</p>
                            <p>He brings a great spirit to the team and occasionally codes I guess.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="center">
                            <h4>Jason Weible</h4>
                            <p>CFO</p>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;