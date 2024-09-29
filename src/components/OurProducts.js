import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/OurProducts.css'; // Import your CSS file
import img1 from '../images/delivery.png'; // Ensure these images exist
import img2 from '../images/delivery.png';
import img3 from '../images/delivery.png';
import img4 from '../images/delivery.png';
import productImage from '../images/productslist.png'; // Replace with your product image path
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrow icons

const OurProducts = () => {
    const products = [
        { name: "Tools and Machinery", image: productImage },
        { name: "Irrigation", image: productImage },
        { name: "AGRI-STORE", image: productImage },
        { name: "Greenhouse", image: productImage },
        { name: "Pumps and Sprayers", image: productImage },
        { name: "Animal Husbandry", image: productImage },
        { name: "Landscape and Pool", image: productImage },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 4; // Show 4 products at a time

    const handleNext = () => {
        if (currentIndex < products.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <Container className="our-products-section">
            <h2 className="section-heading-of-assurance">Our Assurance</h2>
            <Row className="assurance-icons">
                <Col md={3} className="assurance-item text-center">
                    <img src={img1} alt="Fast Delivery" className="assurance-icon" />
                    <p>Fast Delivery</p>
                </Col>
                <Col md={3} className="assurance-item text-center">
                    <img src={img2} alt="Genuine and Authentic" className="assurance-icon" />
                    <p>Genuine and Authentic</p>
                </Col>
                <Col md={3} className="assurance-item text-center">
                    <img src={img3} alt="100% Safe & Secure Payment" className="assurance-icon" />
                    <p>100% Safe & Secure Payment</p>
                </Col>
                <Col md={3} className="assurance-item text-center">
                    <img src={img4} alt="Satisfied and Refunded" className="assurance-icon" />
                    <p>Satisfied and Refunded</p>
                </Col>
            </Row>
            <h3 className="products-heading-display">Our Products</h3>
            <div className="products-slider">
                <button className="slider-arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
                    <FaArrowLeft />
                </button>
                <div className="products-list" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
                    {products.map((product, index) => (
                        <div className="product-item text-center" key={index}>
                            <button className="circle-image-container product-button">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </button>
                            <p>{product.name}</p>
                        </div>
                    ))}
                </div>
                <button className="slider-arrow right-arrow" onClick={handleNext} disabled={currentIndex >= products.length - itemsToShow}>
                    <FaArrowRight />
                </button>
            </div>
        </Container>
    );
};

export default OurProducts;
