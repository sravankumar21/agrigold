// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import Home component
import AgrigoldIntroduction from './components/AgrigoldIntroduction';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<AgrigoldIntroduction />} /> {/* About Us Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
