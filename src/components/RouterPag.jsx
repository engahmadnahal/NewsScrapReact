import React from "react";
import { Routes, Route } from "react-router-dom";
import DiscrNews from "./DiscrNews";

import Home from "./Home";
import Single from "./Single";

export const RouterPag = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Single" element={<Single categori="sup_titel" />} />
      <Route path="/DiscrNews" element={<DiscrNews />} />
    </Routes>
  );
};
