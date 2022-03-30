import React from "react";
import { Routes, Route } from "react-router-dom";
import TermsPage from "./terms";

// The Roster component matches one of two different routes
// depending on the full pathname
const Terms = () => (
  <Routes>
    <Route path="/terms" component={TermsPage} />
  </Routes>
);

export default Terms;
