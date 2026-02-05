import React from 'react';
import Nav from './Nav';
import Logo from '../assets/Logo.svg';
function Heading() {
    return (
        <header className="site-header">
            <div className="container header-content">
                <div className="logo">
                    {/* Logo Placeholder */}
                    <img src={Logo} alt="Logo" />
                </div>
                <Nav />
                <div className="header-actions">
                    <button className="btn-primary" style={{ backgroundColor: "#F5F7FA", color: "#4CAF50", width: "91px", height: "40px" }}>Login</button>
                    <button className="btn-primary" style={{ width: "91px", height: "40px" }}>Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Heading;
