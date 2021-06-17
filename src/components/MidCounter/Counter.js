import React from "react";
import "./counter.css";
import cryptoImg from "../../img/cryptonews.54869ee3.png";
const Counter = () => {
  return (
    <div className="counter-wrapper">
      <div className="counter">
        <div className="counter-div">
          <div className="percentage">0.86 %</div>
          <div className="time">5 Mins</div>
        </div>
        <div className="counter-div">
          <div className="percentage">1.78 %</div>
          <div className="time">1 Hour</div>
        </div>
        <div className="counter-div-main">
          <div className="avg-head">Best Price to Trade</div>
          <div className="avg-price">₹ 45,61,388</div>
          <div className="avg-subtitle">
            Average BTC/INR net price including commission
          </div>
        </div>
        <div className="counter-div">
          <div className="percentage">6.35 %</div>
          <div className="time">1 Day</div>
        </div>
        <div className="counter-div">
          <div className="percentage">7.76 %</div>
          <div className="time">7 Days</div>
        </div>
      </div>
      <a href="/" className="img-counter">
        <img className="cryptoImg" src={cryptoImg} alt="" />
      </a>
    </div>
  );
};

export default Counter;
