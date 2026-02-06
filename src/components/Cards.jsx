import React from 'react';
import img1 from '../assets/images/image 18.svg';
import img2 from '../assets/images/image 19.svg';
import img3 from '../assets/images/image 20.svg';

function Cards() {
    return (
        <section className="cards-section">
            <div className="container">
                <div className="cards-header">
                    <h2>Caring is the new marketing</h2>
                    <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className="cards-content">
                    <div className="card">
                        <img src={img1} alt="Card" />
                        <div className="card-content">
                            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                            <a href="">Readmore &rarr;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="Card" />
                        <div className="card-content">
                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <a href="">Readmore &rarr;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img3} alt="Card" />
                        <div className="card-content">
                            <p>Revamping the Membership Model with Triathlon Australia</p>
                            <a href="">Readmore &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;