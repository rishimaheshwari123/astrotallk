import React from "react";
import Slider from "../components/common/Slider";
import Client from "../components/core/Home/Client";
import Client2 from "../components/core/Home/Client2";
import Services from "../components/core/Home/Services";

const Home = () => {
  return (
    <div>
      <Slider />
      <Client />
      <Client2 />
      <Services />
    </div>
  );
};

export default Home;
