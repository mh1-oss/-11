import logo1 from '../assets/clients/Logo (1).svg';
import logo2 from '../assets/clients/Logo (2).svg';
import logo3 from '../assets/clients/Logo (3).svg';
import logo4 from '../assets/clients/Logo (4).svg';
import logo5 from '../assets/clients/Logo (5).svg';

function Clients() {
    return (
        <section className="clients-section">
            <div className="container">
                <h3>Our Clients</h3>
                <p>We have been working with some Fortune 500+ clients</p>
                <div className="client-logos">
                    <div><img src={logo1} alt="Logo 1" /></div>
                    <div><img src={logo2} alt="Logo 2" /></div>
                    <div><img src={logo3} alt="Logo 3" /></div>
                    <div><img src={logo4} alt="Logo 4" /></div>
                    <div><img src={logo5} alt="Logo 5" /></div>
                </div>
            </div>
        </section>
    );
}

export default Clients;
