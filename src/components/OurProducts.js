import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/OurProducts.css'; // Ensure the CSS is properly linked
import productImage from '../images/plant image.jpg';
import wheatimg from '../images/irrigation.avif';
import animalimg from '../images/animal.avif';
import tools from '../images/tools.png'; // Replace with your actual product image paths
import agristoreimg from '../images/agristore.jpg';
import sprayers from '../images/sprayers.jpg';
import pool from '../images/pool.jpg';

const OurProducts = () => {
    const products = [
        { name: "Tools", image: tools, url: "/tools" },
        { name: "Irrigation", image: wheatimg, url: "/irrigation" },
        { name: "Agri Store", image: agristoreimg, url: "/agri-store" },
        { name: "Greenhouse", image: productImage, url: "/greenhouse" },
        { name: "Pumps and Sprayers", image: sprayers, url: "/pumps-and-sprayers" },
        { name: "Animal Husbandry", image: animalimg, url: "/animal-husbandry" },
        { name: "Landscape and Pool", image: pool, url: "/landscape-and-pool" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Show 3 products at a time

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

    const navigateToProduct = (url) => {
        window.location.href = url; // Redirect to product page
    };

    return (
        <Container className="our-products-section">
            <h3 className="products-heading-display">
                Shop by Category
                <div className="arrows-container">
                    <button className="slider-arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
                        <FaArrowLeft />
                    </button>
                    <button className="slider-arrow right-arrow" onClick={handleNext} disabled={currentIndex >= products.length - itemsToShow}>
                        <FaArrowRight />
                    </button>
                </div>
            </h3>

            <div className="products-slider">
                <div className="products-list" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
                    {products.map((product, index) => (
                        <div className="product-item" key={index}>
                            <div className="square-image-container" onClick={() => navigateToProduct(product.url)}>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <div className="black-small-div">
                                    <span>{product.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default OurProducts;
