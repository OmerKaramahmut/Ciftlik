import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footerPage">
      <div className="footerTittle">
        <h1>Güngördü Çiftliği</h1>
      </div>
      <div className="footerLinks">
        <div className="Links">
          <ul>
            <h1 className="Tittle">Linkler</h1>
            <li>
              <a href="">Ana Sayfa</a>
            </li>
            <li>
              <a href="">Ürünlerimiz</a>
            </li>
            
            <li>
              <a href="">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="Office">
          <ul>
            <h1 className="Tittle">Çiftliklerimiz</h1>
            <li>
              <p>İzmir</p>
            </li>
            <li>
              <p>İstanbul</p>
            </li>
            <li>
              <p>Ankara</p>
            </li>
            <li>
              <p>Antalya</p>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="Farming">
          <ul>
            <h1 className="Tittle">Hayvanlarımız</h1>
            <li>
              <p>Dana</p>
            </li>
            <li>
              <p>İnek</p>
            </li>
            <li>
              <p>Kuzu</p>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="vegetable">
          <ul>
            <h1 className="Tittle">Meyve / Sebze</h1>
            <li>
              <p>Patates</p>
            </li>
            <li>
              <p>Mısır</p>
            </li>
            <li>
              <p>Yonca</p>
            </li>
            <li>
              <p>Karpuz</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="social">
        <FaInstagram size={50} className="icon" />
        <FaFacebookF size={50} className="icon" />
        <FaYoutube size={50} className="icon" />
        <FaXTwitter size={50} className="icon" />
        <IoIosMailUnread size={50} className="icon" />
      </div>
      <div className="copyright">
        <div className="copyrightText"><p> Copyright © Ömer Karamahmutoğlu 2024. Tüm hakları saklıdır.</p></div>
        
      </div>
    </div>
  );
};

export default Footer;
