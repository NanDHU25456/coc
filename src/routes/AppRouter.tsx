import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "../componnets/pages/HomePage";
import React from "react";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </Router>
  );
}
