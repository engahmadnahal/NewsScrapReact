import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Single from "./components/Single";
// -------------
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Single" element={<Single />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
