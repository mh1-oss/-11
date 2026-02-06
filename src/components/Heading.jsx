import React, { useState } from 'react';
import Nav from './Nav';
import Logo from '../assets/Logo.svg';

function Heading() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="site-header">
            <div className="container header-content">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                {/* Mobile Menu Toggle Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation Wrapper - Toggles on mobile, always visible on desktop */}
                <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
                    <Nav />
                    <div className="header-actions">
                        <button className="btn-primary" style={{ backgroundColor: "#F5F7FA", color: "#4CAF50", width: "91px", height: "40px" }}>Login</button>
                        <button className="btn-primary" style={{ width: "91px", height: "40px" }}>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Heading;
