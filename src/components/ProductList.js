// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarTwo from '../components/NavbarTwo';
import '../styles/ProductList.css';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const endpoint = category 
                    ? `http://localhost:5050/products/category/${category}` 
                    : 'http://localhost:5050/products';
                const response = await axios.get(endpoint);
                setProducts(response.data);
            } catch (err) {
                setError('Error fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <NavbarTwo />
            <h1>Products</h1>
            <h2>{category ? `Category: ${category}` : "All Products"}</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Discount Price: ${product.discount_price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
