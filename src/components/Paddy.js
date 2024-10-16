// src/pages/Paddy.js
import React from 'react';
import NavbarTwo from '../components/NavbarTwo';
import { ProductsDisplay } from '../components/ProductsDisplay';
import '../styles/Paddy.css'; // CSS for this page
import Paddyseedimg from '../images/green2.jpg';
import paddyimg from '../images/wallpaper3.jpg';


const paddyProducts = [
  {
    id: 1,
    name: "Paddy Seeds - Company A",
    image: Paddyseedimg,
    price: 150,
    rating: 4,
    totalSales: 10500,
    timeLeft: 30
  },
  {
    id: 2,
    name: "Paddy Seeds - Company B",
    image: Paddyseedimg,
    price: 140,
    rating: 5,
    totalSales: 9800,
    timeLeft: 25
  },
  {
    id: 3,
    name: "Paddy Seeds - Company C",
    image: Paddyseedimg,
    price: 160,
    rating: 4.5,
    totalSales: 11500,
    timeLeft: 28
  }
];

const Paddy = () => {
  return (
    <>
      <NavbarTwo />

      {/* Full-width image with heading */}
      <div className="paddy-header">
        <img src={paddyimg} alt="Paddy Seeds Banner" className="paddy-banner" />
        <h1 className="paddy-heading">PADDY SEEDS</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="breadcrumb">
        <span>Home</span> &gt; <span>Seeds</span> &gt; <span>Paddy Seeds</span>
      </div>

      {/* Filters */}
      <div className="filters">
        <label>
          Sort by: 
          <select>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="sales">Best Selling</option>
          </select>
        </label>
        <label>
          Price Range:
          <input type="range" min="100" max="500" />
        </label>
      </div>

      {/* Product Cards */}
      <div className="product-container">
        {paddyProducts.map((product) => (
          <ProductsDisplay
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            rating={product.rating}
            totalSales={product.totalSales}
            timeLeft={product.timeLeft}
          />
        ))}
      </div>
    </>
  );
};

export default Paddy;
