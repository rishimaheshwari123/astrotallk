import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/common/Navbar";
import Subbar from "./components/common/Subbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import CoupleKundali from "./pages/CoupleKundali";
import SadeSatiPage from "./pages/SadeSati";
import LoveReportPage from "./pages/LoveReportPage";
import PesonalizedKundli from "./pages/PesonalizedKundli";
import ConsultationPage from "./pages/CallConsultancy";
import CollaboratePage from "./pages/Collabration";
import About from "./pages/About";
import CustomerSupport from "./pages/CustomerSupport";
import Gemstone from "./pages/Gemstone";
import OpenRoute from "./components/admin/auth/OpenRoute";
import PrivateRoute from "./components/admin/auth/PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PaymentSuccess from "./pages/PaymentSuccess";
import MyOrders from "./pages/MyOrders";
import Layout from "./components/admin/pages/Layout";
import Dashboard from "./components/admin/pages/Dashboard";
import Orders from "./components/admin/pages/Orders";
import Appoinment from "./pages/Appoinment";
import GetAllAppointment from "./components/admin/pages/GetAllAppointment";
import WeeklyHoroscope from "./pages/WeeklyHoroscope";
import WeeklyDetail from "./pages/WeeklyDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoveHoroscope from "./pages/LoveHoroscope";
import LoveDetail from "./pages/LoveDetail";
import YearlyHoroscope from "./pages/YearlyHoroscope";
import YearlyDetail from "./pages/YearlyDetail";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const queryClient = new QueryClient();

  return (
    <div>
      {!isAdminRoute && <Subbar />}
      {!isAdminRoute && <Navbar />}
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appoinment />} />
          {/* reports */}
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
          <Route path="/gemstone" element={<Gemstone />} />
          <Route
            path="/horoscope/weekly-horoscope"
            element={<WeeklyHoroscope />}
          />
          <Route
            path="/horoscope/weekly-horoscope/:sign"
            element={<WeeklyDetail />}
          />
          <Route
            path="/horoscope/weekly-love-horoscope"
            element={<LoveHoroscope />}
          />
          <Route
            path="/horoscope/weekly-love-horoscope/:sign"
            element={<LoveDetail />}
          />
          <Route
            path="/horoscope/yearly-horoscope"
            element={<YearlyHoroscope />}
          />
          <Route
            path="/horoscope/yearly-horoscope/:sign"
            element={<YearlyDetail />}
          />

          <Route
            path="/register"
            element={
              <OpenRoute>
                <Register />
              </OpenRoute>
            }
          />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />
          <Route
            path="/payment-success"
            element={
              <PrivateRoute>
                <PaymentSuccess />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <PrivateRoute>
                <MyOrders />
              </PrivateRoute>
            }
          />

          {/* admin routes */}
          {user?.role === "admin" && (
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route
                path="/admin/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/orders"
                element={
                  <PrivateRoute>
                    <Orders />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/appointment"
                element={
                  <PrivateRoute>
                    <GetAllAppointment />
                  </PrivateRoute>
                }
              />
            </Route>
          )}
        </Routes>
      </QueryClientProvider>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
