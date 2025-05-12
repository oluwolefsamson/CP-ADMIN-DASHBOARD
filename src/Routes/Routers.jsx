import React from "react";

import { Routes, Route } from "react-router-dom";
import OnboardingPage from "../Pages/OnboardingPage";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import Overview from "../Pages/DashboardPages/Overview";
import UserManagement from "../Pages/DashboardPages/UserManagement";
import CropManagement from "../Pages/DashboardPages/CropManagement";
import MarketManagement from "@/Pages/DashboardPages/MarketManagement";
import PriceManagement from "@/Pages/DashboardPages/PriceManagement";
import GeoMap from "@/Pages/DashboardPages/GeoMap";
import AnalyticsForecasts from "@/Pages/DashboardPages/AnalyticsForecasts";
import AlertNotification from "@/Pages/DashboardPages/AlertNotification";
import LanguageAccessibility from "@/Pages/DashboardPages/LanguageAccessibility";
import NewsInsights from "@/Pages/DashboardPages/NewsInsights";
import CommunityModeration from "@/Pages/DashboardPages/CommunityModeration";
import PremiumAccess from "@/Pages/DashboardPages/PremiumAccess";
import SystemSecurity from "@/Pages/DashboardPages/SystemSecurity";
import Settings from "@/Pages/DashboardPages/Settings";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />

      <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<Overview />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="crop-management" element={<CropManagement />} />
        <Route path="market-management" element={<MarketManagement />} />
        <Route path="price-management" element={<PriceManagement />} />
        <Route path="geo-map" element={<GeoMap />} />
        <Route path="analytics-forecasts" element={<AnalyticsForecasts />} />
        <Route path="alerts-notifications" element={<AlertNotification />} />
        <Route
          path="languages-accessibility"
          element={<LanguageAccessibility />}
        />
        <Route path="news-insights" element={<NewsInsights />} />
        <Route path="community-moderation" element={<CommunityModeration />} />
        <Route path="premium-access" element={<PremiumAccess />} />
        <Route path="system-security" element={<SystemSecurity />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Routers;
