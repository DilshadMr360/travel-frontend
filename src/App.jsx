import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Dashboard from './components/Dashboard';

const App = () => {
  const location = useLocation();

  // Determine if Header and Footer should be shown
  const showHeaderFooter = !['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Header />}
      <div className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
