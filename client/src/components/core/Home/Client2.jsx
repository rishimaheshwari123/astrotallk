import React from "react";
import c1 from "../../../assets/c1.jpg";
import c2 from "../../../assets/c2.jpg";
import c3 from "../../../assets/c3.jpg";
import c4 from "../../../assets/c4.jpg";
import c5 from "../../../assets/c5.jpg";
import c6 from "../../../assets/c6.jpg";

const Client2 = () => {
  return (
    <div>
      <br />
      <div className="">
        <div className="scroll-container  mx-auto  px-5">
          <div className="scroll-left-to-right flex lg:gap-10 items-center">
            <img src={c1} alt="not found" />
            <img src={c2} alt="not found" />
            <img src={c3} alt="not found" />
            <img src={c4} alt="not found" />
            <img src={c5} alt="not found" />
            <img src={c6} alt="not found" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Client2;
