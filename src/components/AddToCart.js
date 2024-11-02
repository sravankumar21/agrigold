import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../styles/AddToCart.css'; // Make sure you have some basic styling here
import suggestedimg from '../images/seeds.jpeg';

const suggestedProducts = [
  { id: 1, name: "Suggested Product A", image: {suggestedimg}, price: 120 },
  { id: 2, name: "Suggested Product B", image: {suggestedimg}, price: 135 },
  { id: 3, name: "Suggested Product C", image: {suggestedimg}, price: 140 },
];

const AddToCart = ({ cartItems, setCartItems }) => {
  // Functions to handle cart item actions
  const handleIncrement = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrement = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Container className="add-to-cart-page">
      <h2 className="mt-4">Items in your cart</h2>
      
      {/* Cart Items */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Row key={item.id} className="cart-item my-3">
            <Col md={3} className="cart-item-image">
              <img src={item.image} alt={item.name} className="product-img" />
            </Col>
            <Col md={6} className="cart-item-info">
              <h5>{item.name}</h5>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <Button onClick={() => handleDecrement(item.id)} variant="outline-secondary">-</Button>
                <span className="quantity">{item.quantity}</span>
                <Button onClick={() => handleIncrement(item.id)} variant="outline-secondary">+</Button>
              </div>
            </Col>
            <Col md={3} className="cart-item-actions">
              <Button onClick={() => handleRemove(item.id)} variant="danger" className="me-2">Remove</Button>
              <Button variant="success">Buy Now</Button>
            </Col>
          </Row>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Suggested Products */}
      <h3 className="mt-5">Suggested products for you</h3>
      <Row className="suggested-products mt-3">
        {suggestedProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="suggested-product-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AddToCart;
