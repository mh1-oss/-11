import React from 'react';
import howto_image from '../assets/pana.svg';

function Howto() {
    return (
        <section className="howto-section">
            <div className="container">
                <div className="howto-content">
                    <div className="howto-image">
                        <img src={howto_image} alt="How to" />
                    </div>
                    <div className="howto-text">
                        <h2>How to design your site footer like we did</h2>
                        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className="btn-primary" style={{ width: "151px", height: "52px", borderRadius: "4px" }}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Howto;
