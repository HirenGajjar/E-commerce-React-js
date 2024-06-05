import React from "react";
import "../../index.css";
import Exclusive_image from "../../Assets/exclusive_image.png";
function Offers() {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers for you</h1>
          <p>Only on best selling products</p>
          <button>Check now!</button>
        </div>
        <div className="offers-right">
          <img src={Exclusive_image} alt="Exclusive Image" />
        </div>
      </div>
    </>
  );
}

export default Offers;
