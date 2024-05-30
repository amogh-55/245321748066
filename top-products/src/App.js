// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Routes>
    </Router>
  );
};

export default App;
