import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/Categories.css'; // Ensure the CSS is properly linked
import productImage from '../images/plant image.jpg';
import wheatimg from '../images/irrigation.avif';
import animalimg from '../images/animal.avif';
import tools from '../images/tools.png';
import agristoreimg from '../images/agristore.jpg';
import sprayers from '../images/sprayers.jpg';
import pool from '../images/pool.jpg';



const Categories = () => {
    const products = [
        { name: "Tools", image: tools, url: "/tools" },
        { name: "Irrigation", image: wheatimg, url: "/irrigation" },
        // { name: "Agri Store", image: agristoreimg, url: "/agri-store" },
        // { name: "Greenhouse", image: productImage, url: "/greenhouse" },
        // { name: "Pumps and Sprayers", image: sprayers, url: "/pumps-and-sprayers" },
        // { name: "Animal Husbandry", image: animalimg, url: "/animal-husbandry" },
        // { name: "Landscape and Pool", image: pool, url: "/landscape-and-pool" },
        { name: "Agri Store", image: agristoreimg, url: "/comingsoon" },
        { name: "Greenhouse", image: productImage, url: "/comingsoon" },
        { name: "Pumps and Sprayers", image: sprayers, url: "/comingsoon" },
        { name: "Animal Husbandry", image: animalimg, url: "/comingsoon" },
        { name: "Landscape and Pool", image: pool, url: "/comingsoon" }

    ];

    // Slider settings for different screen sizes with autoplay
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 3000, // Set the speed for automatic sliding (3000ms = 3 seconds)
        nextArrow: <FaArrowRight className="slider-arrow right-arrow" />,
        prevArrow: <FaArrowLeft className="slider-arrow left-arrow" />,
        responsive: [
            {
                breakpoint: 1024, // For tablet devices
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const navigateToProduct = (url) => {
        window.location.href = url; // Redirect to product page
    };

    return (
        <Container className="our-products-section">
            <h3 className="products-heading-display">
                Shop by Category
            </h3>

            <Slider {...sliderSettings}>
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
            </Slider>
        </Container>
    );
};

export default Categories;
