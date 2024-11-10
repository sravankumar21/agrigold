import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GiSeedling,GiMedicinePills } from 'react-icons/gi'; // Import seedling icon
import { LiaSprayCanSolid } from "react-icons/lia";
import '../styles/Products.css';

const Products = () => {
    const categories = [
        {
            name: "Seeds",
            buttons: ["Paddy", "Maize", "Wheat", "Cotton", "Vegetables", "Barley"],
            icon: <GiSeedling size={220} color="black" />, // Seedling icon for seeds
            bgColor: "#003300",
            link: "/products/seeds"
        },
        {
            name: "Fertilizers",
            buttons: ["Nitrogen", "Phosphorus", "Potassium", "Organic", "Inorganic", "Compost"],
            icon: <GiMedicinePills size={220} color="black" />, // Droplet icon for fertilizers
            bgColor: "#007f66",
            link: "/products/fertilizers"
        },
        {
            name: "Pesticides",
            buttons: ["Herbicides", "Insecticides", "Fungicides", "Bactericides", "Nematicides", "Rodenticides"],
            icon: <LiaSprayCanSolid size={220} color="black" />, // Cloud icon for pesticides
            bgColor: "#007f5c",
            link: "/products/pesticides"
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

            <Link to={currentCategory.link} className="unique-carousel" style={{ backgroundColor: currentCategory.bgColor }}>
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
                    {currentCategory.icon}
                </div>
            </Link>
        </Container>
    );
};

export default Products;
