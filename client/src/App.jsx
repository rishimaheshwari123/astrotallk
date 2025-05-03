import React from "react";
import Navbar from "./components/common/Navbar";
import Subbar from "./components/common/Subbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div>
      <Subbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
