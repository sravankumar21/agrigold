// src/components/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <h2>Admin Dashboard</h2>
      </nav>

      <div className="dashboard-cards">
        {/* Products Management Card */}
        <div className="dashboard-card">
          <h3>Manage Products</h3>
          <button onClick={() => navigate('/admin/add-product')}>Add New Product</button>
          <button onClick={() => navigate('/admin/manage-products')}>View All Products</button>
        </div>

        {/* Orders Management Card */}
        <div className="dashboard-card">
          <h3>Manage Orders</h3>
          <button onClick={() => navigate('/admin/manage-orders')}>View All Orders</button>
        </div>

        {/* Farmers Management Card */}
        <div className="dashboard-card">
          <h3>Manage Farmers</h3>
          <button onClick={() => navigate('/admin/add-farmer')}>Add New Farmer</button>
          <button onClick={() => navigate('/admin/manage-farmers')}>View All Farmers</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
