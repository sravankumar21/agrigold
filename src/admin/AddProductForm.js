import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProductForm.css';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    discount_price: '',
    category: '',
    specifications: '',
    stock_quantity: '',
    description: '',
    image_url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/products', productData); // Corrected URL
      alert('Product added successfully!');
    } catch (error) {
      console.error("There was an error adding the product:", error);
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <input type="number" name="discount_price" placeholder="Discount Price" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        <textarea name="specifications" placeholder="Specifications" onChange={handleChange} />
        <input type="number" name="stock_quantity" placeholder="Stock Quantity" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <input type="url" name="image_url" placeholder="Image URL" onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
