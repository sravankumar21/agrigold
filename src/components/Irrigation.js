import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/IrrigationPage.css';
import NavbarTwo from '../components/NavbarTwo';
import Footer from '../components/Footer';
import placeholderImage from '../images/drip pipe water.avif';

const irrigationProducts = [
    { name: 'AIR RELEASE VALVE - ARV', url: '/irrigation/air-release-valve', image: placeholderImage },
    { name: 'DRIP - EMITTER', url: '/irrigation/drip-emitter', image: placeholderImage },
    { name: 'DRIP-FITTINGS and ACCESSORIES', url: '/irrigation/drip-fittings', image: placeholderImage },
    { name: 'FOGGER', url: '/irrigation/fogger', image: placeholderImage },
    { name: 'FLUSH VALVE', url: '/irrigation/flush-valve', image: placeholderImage },
    { name: 'IRRIGATION - AUTOMATION', url: '/irrigation/automation', image: placeholderImage },
    { name: 'MICRO-TUBE', url: '/irrigation/micro-tube', image: placeholderImage },
    { name: 'PRESSURE GAUGE and ACCESSORIES', url: '/irrigation/pressure-gauge', image: placeholderImage },
    { name: 'QUICK COUPLING VALVE - ORC / QCV', url: '/irrigation/quick-coupling-valve', image: placeholderImage },
    { name: 'RAIN PIPE AND FITTINGS', url: '/irrigation/rain-pipe', image: placeholderImage },
    { name: 'MISTERS-AND-SPRAYERS', url: '/irrigation/misters-sprayers', image: placeholderImage },
    { name: 'SPRINKLER - MICRO and MINI', url: '/irrigation/micro-mini-sprinkler', image: placeholderImage },
    { name: 'SPRINKLER - RAIN GUN (LONG-RANGE-SPRINKLERS)', url: '/irrigation/rain-gun', image: placeholderImage },
    { name: 'SPRINKLER-POP-UP (LANDSCAPE)', url: '/irrigation/pop-up-sprinkler', image: placeholderImage },
    { name: 'DRIP/SPRINKLER - STAKES and SUPPORT', url: '/irrigation/stakes-support', image: placeholderImage },
    { name: 'VALVES - BALL VALVE- PLASTIC', url: '/irrigation/ball-valve', image: placeholderImage },
    { name: 'VALVES - BUTTERFLY VALVE', url: '/irrigation/butterfly-valve', image: placeholderImage },
    { name: 'VALVES-NON-RETURN VALVE (NRV)', url: '/irrigation/non-return-valve', image: placeholderImage },
    { name: 'PRESSURE CONTROL VALVE', url: '/irrigation/pressure-control-valve', image: placeholderImage },
    { name: 'IRRIGATION-AUTOMATION- SOLENOID VALVE- ACCESSORIES', url: '/irrigation/solenoid-valve', image: placeholderImage },
];

const IrrigationPage = () => {
    return (
        <div className="irrigation-page">
            <NavbarTwo />
            <div className="irrigation-banner">
                <h1 className="irrigation-heading">Irrigation Products</h1>
            </div>

            <div className="breadcrumb-container">
                <Link to="/">Home</Link> {'>'} <span>Irrigation</span>
            </div>

            <Container>
                <Row>
                    {irrigationProducts.map((product, index) => (
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

export default IrrigationPage;
