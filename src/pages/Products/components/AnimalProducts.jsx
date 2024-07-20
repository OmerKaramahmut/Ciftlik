import React, { useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Products.css";
import corn from "./img/corn.jpg";
import grass from "./img/grass.jpg";
import patato from "./img/patato.jpg";
import watermelon from "./img/watermelon.jpg";
import gsap, { Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import lamb from "./img/lamb.jpg"
import calf from "./img/calf.jpg"
import cow from "./img/cow.jpg"

const AnimalProducts = ({ timeline3, ease3 }) => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useEffect(() => {
    timeline3.from(".cardItemEmpty", .1, {
      opacity: 0,
      y: -200,
    });
    timeline3.from([".cardItem1, .cardItem2, .cardItem3"], 1.5, {
      opacity: 0,
      y: -200,
      stagger: {
        amount: 0.4,
      },
      ease: ease3,
    });
  });
  return (
    <div className="animalPage">
      <div className="Container">
        <div className="Card2 cardItemEmpty ">
          <div className="cardImg2">
           
          </div>
          <div className="cardText2">
           
          </div>
        </div>

        <div className="Card cardItem1 ">
          <div className="cardImg">
            <img src={lamb} alt="" />
          </div>
          <div className="cardText">
            <h1>Kuzu</h1>
          </div>
        </div>

        <div className="Card cardItem2">
          <div className="cardImg">
            <img src={calf} alt="" />
          </div>
          <div className="cardText">
            <h1>Dana</h1>
          </div>
        </div>

        <div className="Card cardItem3">
          <div className="cardImg">
            <img src={cow} alt="" />
          </div>
          <div className="cardText">
            <h1>İnek</h1>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default AnimalProducts;
