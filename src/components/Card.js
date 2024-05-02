import React, { useState } from "react";
import "../css/card.css";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { Flipper, Flipped } from "react-flip-toolkit";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLogoFlipped, setIslogoFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handlelogoClick = () => {
    setIslogoFlipped(!isLogoFlipped);
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="card" onClick={handleClick}>
          <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
            <div className="card-front">
              <img src="../assets/me.jpeg" alt="me"></img>
            </div>
            <div className="card-back">
              <p>css 사용</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card" onClick={handlelogoClick}>
          <Flipper flipKey={isLogoFlipped}>
            <Flipped>
              <div className="logo" id="logo">
                {isLogoFlipped ? <CardFront /> : <CardBack />}
              </div>
            </Flipped>
          </Flipper>
        </div>
      </div>
    </div>
  );
};

export default Card;
