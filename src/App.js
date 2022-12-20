import React from 'react'

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/product/:productId"
            element={<productDetails />}
          />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
