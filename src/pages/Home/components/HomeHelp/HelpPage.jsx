import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import "./HelpPage.css";
import price from "../image/priceIcon.png";
import security from "../image/security.png";
import delivery from "../image/delivery.png";
import refund from "../image/refund.png";
import installment from "../image/installment.png";
import helpIcon from "../image/helpIcon.png";
const HelpPage = () => {
  return (
    <div className="HelpPage">
      <div className="Price">
        <div className="Icon">
          {" "}
          <img src={price} alt="" />
        </div>
        <div className="Text">
          <div className="Tittle">
            <h1>Ödeme</h1>
          </div>
          <div className="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              hic? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="Security">
        <div className="Icon">
          <img src={security} alt="" />
        </div>
        <div className="Text">
          <div className="Tittle">
            <h1>Güvenlik</h1>
          </div>
          <div className="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              hic? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="Transit">
        {" "}
        <div className="Icon">
          <img src={delivery} alt="" />
        </div>
        <div className="Text">
          <div className="Tittle">
            <h1>Ulaşım</h1>
          </div>
          <div className="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              hic? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="Transit">
        {" "}
        <div className="Icon">
          <img src={refund} alt="" />
        </div>
        <div className="Text">
          <div className="Tittle">
            <h1>İade</h1>
          </div>
          <div className="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              hic? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="installment">
        {" "}
        <div className="Icon">
          <img src={installment} alt="" />
        </div>
        <div className="Text">
          <div className="Tittle">
            <h1>Taksit</h1>
          </div>
          <div className="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              hic? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="helpIcon">
        {" "}
        <div className="Icon">
          <img src={helpIcon} alt="" />
        </div>
        <div className="Text">
          <div className="Tittle">
            <h1>Canlı Yardım</h1>
          </div>
          <div className="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              hic? Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
