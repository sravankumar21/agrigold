import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AddToCart.css';

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.product_id.price, 0);
  const deliveryCharge = 40;
  const totalPayable = totalPrice + deliveryCharge;
  const totalDiscount = cartItems.reduce((total, item) => total + (item.product_id.originalPrice - item.product_id.price) * item.quantity, 0);

  return (
    <Container className="add-to-cart-page-unique">
      <h2 className="add-to-cart-heading">Items in Your Cart</h2>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length > 0 ? (
        <>
          <Row className="cart-items-container">
            <Col md={8}>
              {cartItems.map((item) => (
                <Card className="cart-item-card-unique" key={item.id}>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <Card.Img src={item.image} alt={item.name} />
                    </Col>
                    <Col md={7}>
                      <Card.Body>
                        <Card.Title>{item.product_id.name}</Card.Title>
                        <Card.Text>
                          <strong>Price:</strong> ${item.product_id.price} <br />
                          <strong>Quantity:</strong> {item.quantity}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col md={3}>
                      <div className="quantity-control-unique d-flex align-items-center justify-content-between">
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
                        <span className="quantity-display">{item.quantity}</span>
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
                        <Button
                          onClick={() => setCartItems(cartItems.filter((cartItem) => cartItem.product_id !== item.product_id))}
                          variant="danger"
                          className="remove-item-btn-unique"
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              ))}
              <Button
                className="place-order-btn-unique mt-4"
                onClick={() => navigate('/placeorder')}
                variant="primary"
              >
                Place Order
              </Button>
            </Col>

            <Col md={4}>
              <div className="price-details-card-unique">
                <h3>Price Details</h3>
                <p>
                  <strong>Price ({totalItems} items):</strong> ${totalPrice}
                </p>
                <p>
                  <strong>Delivery Charges:</strong> ${deliveryCharge}
                </p>
                <p>
                  <strong>Total Payable:</strong> <b>${totalPayable}</b>
                </p>
                <p>
                  <strong>You Saved:</strong> ${totalDiscount}
                </p>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};

export default AddToCartPage;
