import React from "react";

import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../Pages/OnboardingPage";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />

      <Route path="/admin" element={<AdminDashboard />} />

      {/* Error Page Route */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Routers;
