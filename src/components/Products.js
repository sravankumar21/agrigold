import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
            bgColor: "#003300" // Color for Seeds
        },
        {
            name: "Fertilizers",
            buttons: ["Nitrogen", "Phosphorus", "Potassium", "Organic", "Inorganic", "Compost"],
            image: fertilizersImage,
            bgColor: "#007f66" // Color for Fertilizers
        },
        {
            name: "Pesticides",
            buttons: ["Herbicides", "Insecticides", "Fungicides", "Bactericides", "Nematicides", "Rodenticides"],
            image: pesticidesImage,
            bgColor: "#007f5c" // Color for Pesticides
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCategory = categories[currentIndex];

    const handleNext = () => {
        if (currentIndex < categories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const navigateToPage = (page) => {
        window.location.href = `/${page.toLowerCase()}`;
    };

    const handleMouseMove = (e) => {
        const carousel = e.currentTarget;
        const { left, top } = carousel.getBoundingClientRect();
        const x = ((e.clientX - left) / carousel.clientWidth) * 100;
        const y = ((e.clientY - top) / carousel.clientHeight) * 100;
        carousel.style.setProperty('--x', `${x}%`);
        carousel.style.setProperty('--y', `${y}%`);
    };

    return (
        <Container className="unique-products-section">
            <div className="heading-and-arrows">
                <h1 className="unique-main-heading">Products We Offer</h1>
                <div className="unique-arrows-container">
                    <button className="unique-slider-arrow unique-left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
                        <FaArrowLeft />
                    </button>
                    <button className="unique-slider-arrow unique-right-arrow" onClick={handleNext} disabled={currentIndex >= categories.length - 1}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className="unique-carousel" style={{ backgroundColor: currentCategory.bgColor }} onMouseMove={handleMouseMove}>
                <div className="unique-carousel-left">
                    <h2 className="unique-subheading">{currentCategory.name}</h2>

                    <div className="unique-buttons-container">
                        {currentCategory.buttons.map((button, index) => (
                            <button key={index} className="unique-category-button" onClick={() => navigateToPage(button)}>
                                {button}
                            </button>
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
