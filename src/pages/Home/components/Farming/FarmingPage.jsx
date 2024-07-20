import React, { useRef } from "react";
import "./FarmingPage.css";
import calf from "../image/calf.jpg";
import cow from "../image/cow.jpg";
import lamb from "../image/lamb.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
const FarmingPage = () => {
  useGSAP(() => {
    gsap.from(".tittle", {
      y: -200,
      scrollTrigger: {
        trigger: ".tittle",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
       
      
      },
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(".oneText", {
      x: 200,
      scrollTrigger: {
        trigger: ".oneText",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
    });
  });
  useGSAP(() => {
    gsap.from(".oneImg", {
      x: -200,
      scrollTrigger: {
        trigger: ".oneImg",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(".twoText", {
      x: 200,
      scrollTrigger: {
        trigger: ".twoText",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
    });
  });
  useGSAP(() => {
    gsap.from(".twoImg", {
      x: -100,
      scrollTrigger: {
        trigger: ".twoImg",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(".threeText", {
      x: 200,
      scrollTrigger: {
        trigger: ".threeText",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
    });
  });
  useGSAP(() => {
    gsap.from(".threeImg", {
      x: -200,
      scrollTrigger: {
        trigger: ".threeImg",
        start: "0px bottom",
        end: "bottom+=400px bottom",
        scrub: true,
      },
      opacity: 0,
    });
  });



  return (
    <div className="FarmingPage">
      <div className="tittle">
        <h1>Hayvancılık</h1>
      </div>
      <div className="card">
        <div className="cardText oneText">
          <div className="cardTittle">Dana</div>
          <div className="cardAbout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            repellat harum. Inventore est quasi deserunt sint quas sunt! Sint,
            reprehenderit.
          </div>
        </div>
        <div className="cardImage oneImg">
          <img src={calf} alt="" />
        </div>
      </div>

      <div className="card">
        <div className="cardText twoText">
          <div className="cardTittle">İnek</div>
          <div className="cardAbout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            repellat harum. Inventore est quasi deserunt sint quas sunt! Sint,
            reprehenderit.
          </div>
        </div>
        <div className="cardImage twoImg">
          <img src={cow} alt="" />
        </div>
      </div>

      <div className="card">
        <div className="cardText threeText">
          <div className="cardTittle ">Kuzu</div>
          <div className="cardAbout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            repellat harum. Inventore est quasi deserunt sint quas sunt! Sint,
            reprehenderit.
          </div>
        </div>
        <div className="cardImage threeImg">
          <img src={lamb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FarmingPage;
