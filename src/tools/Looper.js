import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Looper.css'; // Assuming you have a separate CSS file
import looperImage from '../images/toolimage1.jpg'; // Replace with your actual image path

const Looper = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const filters = {
        price: ['Below $20', '$20-$50', 'Above $50'],
        brand: ['Brand A', 'Brand B', 'Brand C'],
        availability: ['In Stock', 'Out of Stock']
    };

    // Fetch data from the backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5002/products'); // Replace with your actual backend endpoint
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading products: {error.message}</p>;
    }

    return (
        <Container className="looper-page">
            <Row>
                <Col>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/tools">Tools</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Looper</li>
                        </ol>
                    </nav>
                </Col>
            </Row>

            <Row>
                {/* Filter Section */}
                <Col md={3}>
                    <h4>Filters</h4>
                    <div className="filter-section">
                        <h5>Price</h5>
                        {filters.price.map((price, index) => (
                            <Form.Check key={index} type="checkbox" label={price} />
                        ))}

                        <h5>Brand</h5>
                        {filters.brand.map((brand, index) => (
                            <Form.Check key={index} type="checkbox" label={brand} />
                        ))}

                        <h5>Availability</h5>
                        {filters.availability.map((availability, index) => (
                            <Form.Check key={index} type="checkbox" label={availability} />
                        ))}
                    </div>
                </Col>

                {/* Product Display Section */}
                <Col md={9}>
                    <h2>Looper</h2>
                    <p>Showing {products.length} products</p>

                    {/* Display products dynamically from backend */}
                    {products.map((product) => (
                        <Row key={product._id} className="product-row mb-4">
                            <Col md={5} className="product-image-container">
                                <img src={looperImage} alt={product.name} className="product-image" /> {/* Replace with product.image_url if available */}
                            </Col>
                            <Col md={7} className="product-info">
                                <h5 className="product-title">{product.name}</h5>
                                <p className="product-price">${product.discount_price || product.price} <span className="previous-price">${product.price}</span> <span className="discount">({Math.round(((product.price - product.discount_price) / product.price) * 100)}% off)</span></p>
                                <p className="product-company">{product.description}</p>
                                <p className="product-rating">4.5 out of 5 stars <span>(345 reviews)</span></p> {/* Assuming static for now */}
                                <p className="product-seller">Sold by: {product.category}</p>

                                {/* Add to Cart and Buy Now Buttons */}
                                <div className="product-actions">
                                    <Button variant="primary" className="add-to-cart-btn">Add to Cart</Button>
                                    <Button variant="success" className="buy-now-btn">Buy Now</Button>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Looper;
