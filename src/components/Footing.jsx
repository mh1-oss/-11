import React from 'react';
import logo from '../assets/logo.svg';

function Footing() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={logo} className='logo' style={{ filter: 'brightness(0) invert(1)' }} alt="" />
                        <p>Copyright © 2024 Landify UI Kit.</p>
                        <p>All rights reserved</p>
                        <div className="social-links">
                            {/* Social Icons */}
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About us</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact us</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                            </ul>
                        </div>
                        <div className="link-col">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#help">Help center</a></li>
                                <li><a href="#terms">Terms of service</a></li>
                                <li><a href="#legal">Legal</a></li>
                                <li><a href="#privacy">Privacy policy</a></li>
                                <li><a href="#status">Status</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footing;
