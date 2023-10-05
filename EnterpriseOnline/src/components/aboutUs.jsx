import React from 'react';

function AboutUs() {
    return (
        <div>
            <div class="center">
                <h1>Welcome to Enterprise Online</h1>
                <p>We specialize in selling technology and homegoods products that are the best you can buy!</p>
                <p>We offer an array of electronics like cameras and watches, as well as the famous iced milk.</p>

                <h2>The Team</h2>
            </div>

            <div className="offset-md-1 col-md-10">
                <div class="row">
                    <div class="col">
                        <div class="center">
                            <h4>Nicolas Ashbaugh</h4>
                            <p>CEO</p>
                        </div>          
                        <p>Nick is a senior at OSU that studies Computer Science and Engineering</p>
                        <p>He brings 21 years of life experience to the team as well as some professional coding experience.</p>
                    </div>
                    <div class="col">
                        <div class="center">
                            <h4>Paul Koenig</h4>
                            <p>CIO</p>
                        </div>
                        <p></p>
                    </div>
                    <div class="col">
                        <div class="center">
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