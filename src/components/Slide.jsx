import React from 'react';
import hero_illustration from '../assets/Illustration.svg';

function Slide() {
    return (
        <section className="hero-slide" style={{ marginTop: "84px" }}>
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Lessons and insights <br /> <span className="highlight">from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button className="btn-primary" style={{ width: "128px", height: "52px", fontSize: "16px", borderRadius: "4px" }}>Register</button>
                </div>
                <div className="hero-image">
                    <img src={hero_illustration} alt="Hero Illustration" />
                </div>
            </div>
        </section>
    );
}

export default Slide;
