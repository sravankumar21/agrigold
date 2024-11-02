// src/components/Paddy.js

import React, { useState } from 'react';
import { Container, Row, Col, Button, Form as BootstrapForm, Modal } from 'react-bootstrap';
import NavbarTwo from '../components/NavbarTwo';
import '../styles/Paddy.css';
import Paddyseedimg from '../images/green2.jpg';
import paddyimg from '../images/wallpaper3.jpg';

const paddyProducts = [
  { id: 1, name: "Paddy Seeds - Company A", image: Paddyseedimg, price: 150, rating: 4, totalSales: 10500, timeLeft: 30 },
  { id: 2, name: "Paddy Seeds - Company B", image: Paddyseedimg, price: 140, rating: 5, totalSales: 9800, timeLeft: 25 },
  { id: 3, name: "Paddy Seeds - Company C", image: Paddyseedimg, price: 160, rating: 4.5, totalSales: 11500, timeLeft: 28 },
  { id: 4, name: "Paddy Seeds - Company D", image: Paddyseedimg, price: 135, rating: 3.8, totalSales: 9200, timeLeft: 20 },
  { id: 5, name: "Paddy Seeds - Company E", image: Paddyseedimg, price: 155, rating: 4.2, totalSales: 11000, timeLeft: 35 }
];

const Paddy = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState({ sortBy: 'price', priceRange: 500 });

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const sortedProducts = [...paddyProducts]
    .filter(product => product.price <= filter.priceRange)
    .sort((a, b) => filter.sortBy === 'price' ? a.price - b.price : b.totalSales - a.totalSales);

  return (
    <Container className="paddy-page">
      <NavbarTwo cartCount={cartCount} />

      <div className="paddy-header">
        <img src={paddyimg} alt="Paddy Seeds Banner" className="paddy-banner" />
        <h1 className="paddy-heading">PADDY SEEDS</h1>
      </div>

      <Row>
        <Col>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/seeds">Seeds</a></li>
              <li className="breadcrumb-item active" aria-current="page">Paddy Seeds</li>
            </ol>
          </nav>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <h4>Filters</h4>
          <div className="filter-section">
            <h5>Sort by</h5>
            <BootstrapForm.Select name="sortBy" value={filter.sortBy} onChange={handleFilterChange}>
              <option value="price">Price</option>
              <option value="sales">Best Selling</option>
            </BootstrapForm.Select>
            <h5>Price Range</h5>
            <BootstrapForm.Range
              name="priceRange"
              min="100"
              max="500"
              value={filter.priceRange}
              onChange={handleFilterChange}
            />
          </div>
        </Col>

        <Col md={9}>
          <h2>Paddy Seeds</h2>
          <p>Showing {sortedProducts.length} products</p>

          {sortedProducts.map((product) => (
            <Row key={product.id} className="product-row mb-4">
              <Col md={5} className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </Col>
              <Col md={7} className="product-info">
                <h5 className="product-title">{product.name}</h5>
                <p className="product-price">
                  ${product.price} <span className="discount">({product.timeLeft} days left)</span>
                </p>
                <p className="product-rating">{product.rating} out of 5 stars</p>
                <p className="product-sales">Total Sales: {product.totalSales}</p>
                <Button variant="secondary" className="me-2" onClick={handleAddToCart}>Add to Cart</Button>
                <Button variant="success" onClick={() => handleBuyNowClick(product)}>Buy Now</Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedProduct && (
            <>
              <h5>{selectedProduct.name}</h5>
              <p>Price: ${selectedProduct.price}</p>
              <p>Rating: {selectedProduct.rating} stars</p>
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Paddy;
