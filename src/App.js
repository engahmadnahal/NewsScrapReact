import React from "react";
import { BrowserRouter } from "react-router-dom";
// ------------------------
// import "bootstrap/dist/css/bootstrap.css";
// -----------------------
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Single from "./components/Single";
import { RouterPag } from "./components/RouterPag";
// -------------

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterPag />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
