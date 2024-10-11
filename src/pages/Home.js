// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';


const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Categories />
      <Products />

    </div>
  );
};

export default Home;
