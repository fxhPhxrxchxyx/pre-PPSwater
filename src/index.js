import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Packge from "./pages/Packge";
import Navbar from "./components/navbar";
import "./styles/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Notfound";
import Footer from "./components/Footer";
import { Box } from "@mui/system";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Box minHeight="calc(100vh - 64px - 160px)">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packge" element={<Packge />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
