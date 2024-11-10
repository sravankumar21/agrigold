import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarTwo from '../components/NavbarTwo'; // Navbar component
import Footer from '../components/Footer'; // Footer component
import '../styles/ToolsPage.css'; // Ensure proper CSS file

// Import images for tools
import placeholderImage from '../images/looper.webp';

const tools = [
    { name: 'Looper', image: placeholderImage, url: '/tools/looper' },
    { name: 'Hedge Shear', image: placeholderImage, url: '/tools/hedge-shear' },
    { name: 'Pruner', image: placeholderImage, url: '/tools/pruner' },
    { name: 'Pruning Saw', image: placeholderImage, url: '/tools/pruning-saw' },
    { name: 'Folding Saw', image: placeholderImage, url: '/tools/folding-saw' },
    { name: 'Pole Pruner Saw', image: placeholderImage, url: '/tools/pole-pruner-saw' },
    { name: 'Garden Hoe', image: placeholderImage, url: '/tools/garden-hoe' },
    { name: 'Trowel', image: placeholderImage, url: '/tools/trowel' },
    { name: 'Rake', image: placeholderImage, url: '/tools/rake' },
];

const ToolsPage = () => {
    return (
        <div className="tools-page">
            <NavbarTwo />

            {/* Banner Section */}
            <div className="tools-banner">
                <h1 className="tools-heading">Tools and Machinery</h1>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="breadcrumb-container">
                <Link to="/">Home</Link> {'>'} <span>Tools</span>
            </div>

            <Container>
                {/* Tools Grid */}
                <Row>
                    {tools.map((tool, index) => (
                        <Col lg={3} md={4} sm={6} xs={12} key={index} className="tool-card-col">
                            <Card className="tool-card" onClick={() => window.location.href = tool.url}>
                                <Card.Img variant="top" src={tool.image} className="tool-card-image" />
                                <Card.Body>
                                    <Card.Title>{tool.name}</Card.Title>
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

export default ToolsPage;
