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
import ConsultationPage from "./pages/CallConsultancy";
import CollaboratePage from "./pages/Collabration";
import About from "./pages/About";
import CustomerSupport from "./pages/CustomerSupport";
import WeeklyHoroscope from "./components/core/horoscop/Test";

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
        <Route path="/call-consultation" element={<ConsultationPage />} />
        <Route path="/collaborations" element={<CollaboratePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route
          path="/horoscope/weekly-horoscope"
          element={<WeeklyHoroscope />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
