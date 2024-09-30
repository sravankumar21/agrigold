import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/ToolsPage.css'; // Make sure the CSS file is linked correctly

// Import tool images
import looperImg from '../images/tool1.jpg';
import hedgeShearImg from '../images/tool1.jpg';
import prunerImg from '../images/tool1.jpg';
import pruningSawImg from '../images/tool1.jpg';
import foldingSawImg from '../images/tool1.jpg';
import polePrunerSawImg from '../images/tool1.jpg';
import gardenHoeImg from '../images/tool1.jpg';
import trowelImg from '../images/tool1.jpg';
import rakeImg from '../images/tool1.jpg';
// Add more tool images as required

const ToolsPage = () => {
    const tools = [
        { name: 'Looper', image: looperImg, url: '/tools/looper' },
{ name: 'Hedge Shear', image: hedgeShearImg, url: '/tools/hedge-shear' },
{ name: 'Pruner', image: prunerImg, url: '/tools/pruner' },
{ name: 'Pruning Saw', image: pruningSawImg, url: '/tools/pruning-saw' },
{ name: 'Folding Saw', image: foldingSawImg, url: '/tools/folding-saw' },
{ name: 'Pole Pruner Saw', image: polePrunerSawImg, url: '/tools/pole-pruner-saw' },
{ name: 'Garden Hoe', image: gardenHoeImg, url: '/tools/garden-hoe' },
{ name: 'Trowel', image: trowelImg, url: '/tools/trowel' },
{ name: 'Rake', image: rakeImg, url: '/tools/rake' }

    ];

    return (
        <div className="tools-page">
            {/* Background image section */}
            <div className="tools-banner">
                <h1 className="tools-heading">Tools and Machinery</h1>
            </div>

            {/* Breadcrumb navigation */}
            <div className="breadcrumb-container">
                <Link to="/">Home</Link> {'>'} <span>Tools</span>
            </div>

            {/* Introduction paragraph */}
            <Container>
                {/* <p className="tools-description">
                Welcome to our comprehensive tools and machinery section, where we offer an extensive selection of gardening and agricultural tools that are specifically designed to streamline your tasks, ensuring both ease and efficiency. Whether you are a professional farmer or an avid home gardener, we have the right tools to suit your needs. From pruning shears for delicate trimming to robust cutting tools for managing tougher branches, our collection is thoughtfully curated to enhance your work experience. 
                </p> */}

                {/* Tools cards grid */}
                <Row>
                    {tools.map((tool, index) => (
                        <Col md={4} sm={6} xs={12} key={index} className="tool-card-col">
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
        </div>
    );
};

export default ToolsPage;
