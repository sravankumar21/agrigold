// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AgrigoldIntroduction from './components/AgrigoldIntroduction';
import ToolsPage from './components/ToolsPage';
import Looper from './tools/Looper';
import Paddy from './components/Paddy';
import AddToCart from './components/AddToCart'; // Import AddToCart component
import AdminDashboard from './admin/AdminDashboard';
import AddProductForm from './admin/AddProductForm';
import ProductList from './components/ProductList';
import Products from './components/Products';
import IrrigationPage from './components/Irrigation';
import ComingSoon from './components/ComingSoon';
import SignUp from './components/SignupPage';
import Login from './components/LoginPage';
import PlaceOrder from './components/PlaceOrder';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AgrigoldIntroduction />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/irrigation" element={<IrrigationPage />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/tools/looper" element={<Looper />} />
          <Route path="/seeds/paddy" element={<Paddy />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AddProductForm />} />
          <Route 
            path="/cart" 
            element={<AddToCart cartItems={cartItems} setCartItems={setCartItems} />} 
          /> {/* Add Cart Page Route */}
          <Route path="/products" element={<Products />} /> {/* Link to Categories */}
          
          {/* Dynamic Route for Category */}
          <Route 
            path="/products/:category" 
            element={<ProductList />} 
          /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
