import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Assuming you have a CSS file for custom styles
import logo from '../images/logoagrigold.png'; // Import your logo image

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container fluid className="footer-container">
                <Row className="footer-row">
                    {/* Logo and Company Info Section */}
                    <Col md={4} className="footer-logo-section">
                        <img src={logo} alt="Agri Gold Logo" className="footer-logo" />
                        <p>Trade Name: Agrigold</p>
                    </Col>

                    {/* Contact Info Section */}
                    <Col md={5} className="footer-contact-info">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact-list">
                            <li><FaPhone /> <span>+91 9963450143</span></li>
                            <li><FaEnvelope /> <span>support@agrigold.com</span></li>
                            <li><FaClock /> <span>Customer Support Timings: 10:30am - 6:30pm</span></li>
                            <li><FaMapMarkerAlt /> <span>Nagarjuna Sagar Road, Hyderabad, Telangana, Pin - 500074</span></li>
                        </ul>
                        <p>FSSAI: 13624012000094</p>
                    </Col>

                    {/* Helpful Links Section */}
                    <Col md={3} className="footer-helpful-links">
                        <h4>Helpful Links</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                            <li><Link to="/refund-policy">Refund Policy</Link></li>
                            <li><Link to="/terms-of-service">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </Col>
                </Row>

                {/* Footer Bottom Section */}
                <Row className="footer-bottom">
                    <Col className="footer-bottom-text">
                        <p>© 2024, Agrigold.</p>
                        <p> Built by <a href="https://sg.in">SG.in</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
