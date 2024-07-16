import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import PublicRoute from './components/PublicRoute';

const App = () => {
  const location = useLocation();

  // Determine if Header and Footer should be shown
  const showHeaderFooter = !['/', '/register'].includes(location.pathname);

  return (
    <AuthProvider>
    <div className="flex flex-col min-h-screen">
      {showHeaderFooter && <Header />}
      <div className="flex-1">

        <Routes>

          <Route path="/" element={<PublicRoute><Login/></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
          <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/booking/:tourid" element={<PrivateRoute><Booking /></PrivateRoute>}  />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}  />

        </Routes>
        
      </div>
      {showHeaderFooter && <Footer />}
    </div>
    </AuthProvider>
  );
};

export default App;
