import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/navbar';
import './styles/style.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

