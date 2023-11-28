import React from 'react';
import './styles/aboutUs.css';

function AboutUs() {
    return (
        <div>
            <div className="center about-us-title">
                <h1>The Team</h1>
            </div>

            <div className="offset-md-1 col-md-10 team-intros">
                <div className="row">
                    <div className="col team-mem-bio">
                        <div className="center">
                            <img className="team-mem-img" src={require("../data/AboutUsPhotos/Nick.jpg")} alt="Nick Pic" height="240" width="200" />
                            <h4>Nicolas Ashbaugh - CEO</h4>
                        </div>
                        <div className='center team-mem-desc'>
                            <p>Nick is a Senior at OSU that studies Computer Science & Engineering</p>
                            <p>He brings 21 years of life experience to the team as well as some professional coding experience.</p>
                        </div>
                    </div>
                    <div className="offset-md-1 col team-mem-bio">
                        <div className="center">
                            <img className="team-mem-img" src={require("../data/AboutUsPhotos/Paul.jpg")} alt="Paul Pic" height="240" width="200" />
                            <h4>Paul Koenig - CIO</h4>
                        </div>
                        <div className='center team-mem-desc'>
                            <p>Paul is a Senior at OSU that studies Computer Science & Engineering</p>
                            <p>He brings a great spirit to the team and occasionally codes I guess.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;