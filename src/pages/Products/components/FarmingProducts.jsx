import React, { useRef, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Products.css";
import corn from "./img/corn.jpg";
import grass from "./img/grass.jpg";
import patato from "./img/patato.jpg";
import watermelon from "./img/watermelon.jpg";
import { useGSAP } from "@gsap/react";
import gsap, { Power3 } from "gsap";

const FarmingProducts = ({ timeline2, ease2 }) => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useGSAP(() => {
    timeline2.from(".cardItemEmpty", 0.1, {
      opacity: 0,
      y: -200,
    });
    timeline2.from([".cardItem1 , .cardItem2 , .cardItem3 , .cardItem4"], 1.5, {
      opacity: 0,
      y: -200,
      stagger: {
        amount: 0.4,
      },
      ease: ease2,
    });
  });

  return (
    <div className="farmingPage">
      <div className="Container">
        <div className="Card2 cardItemEmpty">
          <div className="cardImg2"></div>
          <div className="cardText2">
         
          </div>
        </div>

        <div className="Card cardItem1">
          <div className="cardImg">
            <img src={corn} alt="" />
          </div>
          <div className="cardText">
            <h1>Mısır</h1>
          </div>
        </div>

        <div className="Card cardItem2">
          <div className="cardImg">
            <img src={grass} alt="" />
          </div>
          <div className="cardText">
            <h1>Yonca</h1>
          </div>
        </div>

        <div className="Card cardItem3">
          <div className="cardImg">
            <img src={patato} alt="" />
          </div>
          <div className="cardText">
            <h1>Patates</h1>
          </div>
        </div>

        <div className="Card cardItem4">
          <div className="cardImg">
            <img src={watermelon} alt="" />
          </div>
          <div className="cardText">
            <h1>Karpuz</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingProducts;
