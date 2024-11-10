import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/Testimonials.css';
import johnFarmer from '../images/usericon.png';
import maryLee from '../images/usericon.png';
import ahmedPatel from '../images/usericon.png';
import emilyOBrien from '../images/usericon.png';
import rajKumar from '../images/usericon.png';
import lilaGupta from '../images/usericon.png';
import { FaLeaf, FaShippingFast, FaAward } from 'react-icons/fa';


const Testimonials = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const testimonials = [
        { quote: "The new irrigation system provided by GreenFarm has revolutionized our crop yield.", author: "John Farmer", position: "Farmer at Green Fields", image: johnFarmer },
        { quote: "The organic seeds from AgroTech have been game-changing for sustainable farming.", author: "Mary Lee", position: "Owner at Green Valley Farms", image: maryLee },
        { quote: "Thanks to the crop management system, we are now saving 30% on water usage.", author: "Ahmed Patel", position: "Agricultural Specialist at Patel Farms", image: ahmedPatel },
        { quote: "The latest farming equipment we received has made harvesting so much easier.", author: "Emily O'Brien", position: "CEO at Farm Fresh Produce", image: emilyOBrien },
        { quote: "The guidance on soil management from AgroFarm has boosted our harvest quality.", author: "Raj Kumar", position: "Manager at Kumar Agro Enterprises", image: rajKumar },
        { quote: "We appreciate how GreenFarm helped us move towards fully organic production.", author: "Lila Gupta", position: "Organic Farmer at Gupta Farms", image: lilaGupta }
    ];

    const faqs = [
        { question: "How long does shipping take?", answer: "Shipping typically takes 4-6 days for your order to arrive." },
        { question: "Do you accept returns and refunds?", answer: "Unfortunately, we do not accept returns or refunds due to the nature of the products." },
        { question: "What payment methods do you accept?", answer: "We currently only offer Cash On Delivery as a payment method." }
    ];

    const nextSlide = useCallback(() => {
        setSlideIndex(prevIndex => (prevIndex + 2) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(autoSlide);
    }, [nextSlide]);

    return (
        <Container className="testimonials-section">
            <h2 className="whyweshine-heading-display">Why We Shine</h2>
            <Row className="why-we-shine-icons">
    <Col className="why-we-shine-item">
        <FaLeaf className="why-we-shine-icon" />
        <div className="why-we-shine-content">
            <h4>Delivering Genuine Products</h4>
            <p>Authentic products, make your cultivation way easy.</p>
        </div>
    </Col>
    <Col className="why-we-shine-item">
        <FaShippingFast className="why-we-shine-icon" />
        <div className="why-we-shine-content">
            <h4>Fast Delivery</h4>
            <p>Quick and efficient delivery of all farm supplies.</p>
        </div>
    </Col>
    <Col className="why-we-shine-item">
        <FaAward className="why-we-shine-icon" />
        <div className="why-we-shine-content">
            <h4>Superior Quality</h4>
            <p>Top-quality products for all your agricultural needs.</p>
        </div>
    </Col>
</Row>


            <h2 className="testimonials-heading-display">Testimonials</h2>
            <div className="testimonial-carousel-container">
            <Row className="testimonial-carousel">
    <Col key={slideIndex} md={12} className="testimonial-col">
        <div className="testimonial-carousel-slide">
            <img src={testimonials[slideIndex].image} alt={`${testimonials[slideIndex].author}'s profile`} className="testimonial-image" />
            <div className="testimonial-text">
                <p>"{testimonials[slideIndex].quote}"</p>
                <h4>{testimonials[slideIndex].author}</h4>
                <p>{testimonials[slideIndex].position}</p>
            </div>
        </div>
    </Col>
</Row>

                <div className="testimonial-controls">
                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`testimonial-dot ${slideIndex === index ? 'active' : ''}`}
                                onClick={() => setSlideIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <h2 className="faq-heading-display">FAQ</h2>
            <div className="faq-container">
                <div className="faq-paragraph">
                    <p className="faq-subtext">Check out the common questions our customers ask, and if you still need help, feel free to reach out to our support team.</p>
                </div>
                <div className="faq-accordion">
                    <Accordion>
                        {faqs.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>{faq.answer}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;
