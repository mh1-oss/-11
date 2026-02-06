import React from 'react';
import customer_image from '../assets/Counts.svg';

function Customer() {
    return (
        <section className="customer-section">
            <div className="container">
                <div className="customer-content">
                    <div className="customer-text">
                        <h2>Helping a local <br /><span className="highlight" style={{ color: "var(--primary)" }}>business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className="customer-image">
                        <img src={customer_image} alt="Customer" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customer;
