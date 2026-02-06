import React from 'react';
import spending_illustration from '../assets/rafiki.svg';

function Spending() {
    return (
        <section className="spending-section">
            <div className="container spending-content">
                <div className="spending-image">
                    <img src={spending_illustration} alt="Spending Analysis" />
                </div>
                <div className="spending-text">
                    <h2>The unseen of spending three years at Pixelgrade</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className="btn-primary" style={{ width: '151px', height: '52px', borderRadius: '4px' }}>Learn More</button>
                </div>
            </div>
        </section>
    );
}

export default Spending;
