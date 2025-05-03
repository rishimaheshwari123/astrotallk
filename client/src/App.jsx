import React from "react";
import Navbar from "./components/common/Navbar";
import Subbar from "./components/common/Subbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import CoupleKundali from "./pages/CoupleKundali";
import SadeSatiPage from "./pages/SadeSati";
import LoveReportPage from "./pages/LoveReportPage";
import PesonalizedKundli from "./pages/PesonalizedKundli";

const App = () => {
  return (
    <div>
      <Subbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* reports  */}
        <Route
          path="/reports/premium-personalized-kundli"
          element={<CoupleKundali />}
        />
        <Route path="/reports/sade-sati" element={<SadeSatiPage />} />
        <Route path="/reports/love" element={<LoveReportPage />} />
        <Route
          path="/reports/premium-couple-kundli"
          element={<PesonalizedKundli />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
