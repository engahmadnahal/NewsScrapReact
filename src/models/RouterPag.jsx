import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Single from "../components/Single";

export const RouterPag = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Single" element={<Single categori="sup_titel" />} />
    </Routes>
  );
};
