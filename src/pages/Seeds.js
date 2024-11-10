import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarTwo from '../components/NavbarTwo';
import Footer from '../components/Footer';
import '../styles/Products.css';
import bannerImage from '../images/seeds-banner.avif'; // Placeholder banner image

const seedsProducts = [
    { name: 'Paddy', url: '/seeds/paddy', image: bannerImage },
    { name: 'Maize', url: '/seeds/maize', image: bannerImage },
    { name: 'Wheat', url: '/seeds/wheat', image: bannerImage },
    { name: 'Cotton', url: '/seeds/cotton', image: bannerImage },
    { name: 'Vegetables', url: '/seeds/vegetables', image: bannerImage },
    { name: 'Barley', url: '/seeds/barley', image: bannerImage },
];

const Seeds = () => {
    return (
        <div className="product-page">
            <NavbarTwo />
            <div className="product-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
                <h1 className="product-heading">Seeds</h1>
            </div>

            <div className="breadcrumb-container">
                <Link to="/">Home</Link> {'>'} <span>Seeds</span>
            </div>

            <Container>
                <Row>
                    {seedsProducts.map((product, index) => (
                        <Col lg={3} md={4} sm={6} xs={12} key={index} className="product-card-col">
                            <Card className="product-card" onClick={() => window.location.href = product.url}>
                                <Card.Img variant="top" src={product.image} className="product-card-image" />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default Seeds;
