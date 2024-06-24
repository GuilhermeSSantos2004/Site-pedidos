import React from 'react';
import './Footer.css'; // Arquivo CSS para estilização
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h3>Entre em contato</h3>
                    <p><FontAwesomeIcon icon={faPhone} /> (11) xxxxx-xxxx</p> {/* (11) 98765-4321 */}
                    {/* <p><FontAwesomeIcon icon={faEnvelope} /> contato@guitfoods.com</p> */}
                </div>
                <div className="footer-section rights">
                    <p>Todos os direitos reservados &copy; GuitFoods 2024</p>
                </div>
                <div className="footer-section social">
                    <h3>Siga-nos</h3>
                    <div className="social-icons">
                        <button className="social-icon" onClick={() => window.open('https://facebook.com', '_blank')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </button>
                        <button className="social-icon" onClick={() => window.open('https://twitter.com', '_blank')}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                        <button className="social-icon" onClick={() => window.open('https://instagram.com', '_blank')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
