// src/components/Products.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Products.css';
import seedsImage from '../images/seedimage.jpg';
import fertilizersImage from '../images/fertilizer.jpg';
import pesticidesImage from '../images/pesticides.jpg';

const Products = () => {
    const categories = [
        {
            name: "Seeds",
            buttons: ["Paddy", "Maize", "Wheat", "Cotton", "Vegetables", "Barley"],
            image: seedsImage,
            bgColor: "#003300"
        },
        {
            name: "Fertilizers",
            buttons: ["Nitrogen", "Phosphorus", "Potassium", "Organic", "Inorganic", "Compost"],
            image: fertilizersImage,
            bgColor: "#007f66"
        },
        {
            name: "Pesticides",
            buttons: ["Herbicides", "Insecticides", "Fungicides", "Bactericides", "Nematicides", "Rodenticides"],
            image: pesticidesImage,
            bgColor: "#007f5c"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCategory = categories[currentIndex];

    const handleNext = () => setCurrentIndex((currentIndex + 1) % categories.length);
    const handlePrev = () => setCurrentIndex((currentIndex - 1 + categories.length) % categories.length);

    return (
        <Container className="unique-products-section">
            <div className="heading-and-arrows">
                <h1 className="unique-main-heading">Products We Offer</h1>
                <div className="unique-arrows-container">
                    <button className="unique-slider-arrow unique-left-arrow" onClick={handlePrev}>
                        <FaArrowLeft />
                    </button>
                    <button className="unique-slider-arrow unique-right-arrow" onClick={handleNext}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className="unique-carousel" style={{ backgroundColor: currentCategory.bgColor }}>
                <div className="unique-carousel-left">
                    <h2 className="unique-subheading">{currentCategory.name}</h2>
                    <div className="unique-buttons-container">
                        {currentCategory.buttons.map((button, index) => (
                            <Link key={index} to={`/products/${button.toLowerCase()}`} className="unique-category-button">
                                {button}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="unique-carousel-right">
                    <img src={currentCategory.image} alt={currentCategory.name} className="unique-category-image" />
                </div>
            </div>
        </Container>
    );
};

export default Products;
