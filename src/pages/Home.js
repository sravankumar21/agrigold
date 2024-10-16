// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Categories />
      <Products />
      <Testimonials />
      < Footer />

    </div>
  );
};

export default Home;
