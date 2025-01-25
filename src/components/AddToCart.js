import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import '../styles/AddToCart.css';
import suggestedimg from '../images/seeds.jpeg';

const suggestedProducts = [
  { id: 1, name: "Suggested Product A", image: suggestedimg, price: 120 },
  { id: 2, name: "Suggested Product B", image: suggestedimg, price: 135 },
  { id: 3, name: "Suggested Product C", image: suggestedimg, price: 140 },
];

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5050/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      setLoading(false);
    }
  };

  const handleAddToCart = async (product) => {
    const user_id = "12345"; // Replace with actual user ID
    const cartItem = {
      product_id: product.id,
      user_id,
      quantity: 1,
      status: 'active',
    };

    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const response = await axios.post('http://localhost:5050/cart', cartItem, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const addedProduct = response.data;
      const existingItem = cartItems.find((item) => item.product_id === addedProduct.product_id);

      if (existingItem) {
        setCartItems(
          cartItems.map((item) =>
            item.product_id === addedProduct.product_id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...addedProduct, name: product.name, image: product.image, price: product.price }]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      setLoading(false);
    }
  };

  return (
    <Container className="add-to-cart-page">
      <h2 className="mt-4">Items in Your Cart</h2>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length > 0 ? (
        <Row className="cart-items">
          {cartItems.map((item) => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="cart-item-card">
                <Card.Img variant="top" src={item.image || suggestedimg} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.product_id.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${item.product_id.price} <br />
                    <strong>Quantity:</strong> {item.quantity}
                  </Card.Text>
                  <div className="quantity-control d-flex align-items-center">
                    <Button
                      onClick={() =>
                        setCartItems(
                          cartItems.map((cartItem) =>
                            cartItem.product_id === item.product_id && cartItem.quantity > 1
                              ? { ...cartItem, quantity: cartItem.quantity - 1 }
                              : cartItem
                          )
                        )
                      }
                      variant="outline-secondary"
                    >
                      -
                    </Button>
                    <span className="quantity mx-2">{item.quantity}</span>
                    <Button
                      onClick={() =>
                        setCartItems(
                          cartItems.map((cartItem) =>
                            cartItem.product_id === item.product_id
                              ? { ...cartItem, quantity: cartItem.quantity + 1 }
                              : cartItem
                          )
                        )
                      }
                      variant="outline-secondary"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    onClick={() => setCartItems(cartItems.filter((cartItem) => cartItem.product_id !== item.product_id))}
                    variant="danger"
                    className="mt-2"
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h3 className="mt-5">Suggested Products for You</h3>
      <Row className="suggested-products mt-3">
        {suggestedProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="suggested-product-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)} disabled={loading}>
                  {loading ? 'Adding...' : 'Add to Cart'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AddToCart;
