import React from "react";
import aboutImage from '../assets/images/about-image.png';
import '../assets/styles/AboutMe.scss';

function AboutMe() {
    return(
    <div id="about">
        <div className="items-container">
        <h1>About Me</h1>
        <div className="about-me-content">
            <div className="about-me-text">
            <p>
            I’m a Product Manager focused on complex problems where technical systems, real users, and meaningful constraints intersect. I work on AI products in healthcare and cloud environments, prioritizing clarity, judgment, and durable execution over surface-level polish.
            </p>
            <p>
            My path into product management emerged from technical work where I bridged gaps between users, engineers, and data. I’m a Dean’s List student at University of Washington and 4X AWS Certified professional with a hands-on, outcome-driven approach.
            </p>
            <p>
            Outside of work, I write on Substack about product thinking and growth. I’m deeply interested in cybersecurity and policy, and spend my time riding my motorcycle, learning about cars, and photography.
            </p>
            </div>
            <div className="about-me-image">
                <img src={aboutImage} alt="About me" />
            </div>
        </div>
        </div>
    </div>
    );
}

export default AboutMe;

