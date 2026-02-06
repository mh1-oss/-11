import React from 'react';
import help_image from '../assets/image 9.svg';
import logo1 from '../assets/clients/Logo (1).svg';
import logo2 from '../assets/clients/Logo (2).svg';
import logo3 from '../assets/clients/Logo (3).svg';
import logo4 from '../assets/clients/Logo (4).svg';
import logo5 from '../assets/clients/Logo (5).svg';


function Help() {
    return (
        <section className="help-section">
            <div className="container">
                <div className="help-content">
                    <div className="help-image">
                        <img src={help_image} alt="Help" />
                    </div>
                    <div className="help-text">
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

                        <div className="help-author">
                            <h4>Tim Smith</h4>
                            <p>British Dragon Boat Racing Association</p>
                        </div>
                        <div className="help-links">
                            <img src={logo1} alt="Logo 1" />
                            <img src={logo2} alt="Logo 2" />
                            <img src={logo3} alt="Logo 3" />
                            <img src={logo4} alt="Logo 4" />
                            <img src={logo5} alt="Logo 5" />
                            <a href="#all" className="link-highlight">Meet all customers &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Help;
