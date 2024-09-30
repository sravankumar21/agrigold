import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/Looper.css'; // Assuming you have a separate CSS file
import looperImage from '../images/toolimage1.jpg'; // Replace with your actual image path

const Looper = () => {
    const filters = {
        price: ['Below $20', '$20-$50', 'Above $50'],
        brand: ['Brand A', 'Brand B', 'Brand C'],
        availability: ['In Stock', 'Out of Stock']
    };

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
                    <p>Showing 1-8 of 8 products</p>

                    {/* Single product per row */}
                    {[...Array(8)].map((_, index) => (
                        <Row key={index} className="product-row mb-4">
                            <Col md={5} className="product-image-container">
                                <img src={looperImage} alt="Looper" className="product-image" />
                            </Col>
                            <Col md={7} className="product-info">
                                <h5 className="product-title">High-Quality Looper</h5>
                                <p className="product-price">$150 <span className="previous-price">$200</span> <span className="discount">(25% off)</span></p>
                                <p className="product-company">
                                    Durable Looper Tool with ergonomic design. Ideal for trimming branches and pruning trees.
                                </p>
                                <p className="product-rating">4.5 out of 5 stars <span>(345 reviews)</span></p>
                                <p className="product-seller">Sold by: GardenPro Tools</p>

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
