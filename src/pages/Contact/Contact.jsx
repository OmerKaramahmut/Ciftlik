import React from "react";
import { BsTelephoneXFill } from "react-icons/bs";
import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactSocial">
        <div className="containerContact">
          <div className="socialItem-1 social">
            <BsTelephoneXFill color="white" size={50} />
            &nbsp; &nbsp; &nbsp;
            <h3>+90 532 489 31 61</h3>
          </div>
          <div className="socialItem-2 social">
            <BsTelephoneXFill color="white" size={50} />
            &nbsp; &nbsp; &nbsp;
            <h3>+90 532 489 31 61</h3>
          </div>
          <div className="socialItem-3 social">
            <CiMail color="white" size={50} />
            &nbsp; &nbsp; &nbsp;
            <h3>ofluroze6134@hotmail.com</h3>
          </div>
          <div className="socialItem-4 social">
            <FaLocationDot color="white" size={50} />
            &nbsp; &nbsp; &nbsp;
            <h3>
              Ferhatpaşa mahallesi, Atatürk caddesi, birlik APT, no:43, daire:15
            </h3>
          </div>
        </div>
        <div className="socialIcon">
          <div className="social">
            <h3>İnstagram</h3>
            &nbsp; &nbsp; &nbsp;
            <FaInstagram size={50} />
          </div>
          <div className="social">
            <h3>Facebook</h3>
            &nbsp; &nbsp; &nbsp;
            <FaFacebookF size={50} />
          </div>
          <div className="social">
            <h3>Youtube</h3>
            &nbsp; &nbsp; &nbsp;
            <FaYoutube size={50} />
          </div>
          <div className="social">
            <h3>Twitter</h3>
            &nbsp; &nbsp; &nbsp;
            <FaXTwitter size={50} />
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6247.191293146276!2d27.09950468477446!3d38.47389544618916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9d92e4f89d9%3A0xc2f6b58266cfcc14!2zxLBtYmF0bMSxLCAzNTU3NSBLYXLFn8SxeWFrYS_EsHptaXI!5e0!3m2!1str!2str!4v1721321705556!5m2!1str!2str"
          width="1600"
          height="450"
          loading="lazy"
          title="map"
        ></iframe>
      </div>
      <div className="contactForm">
        <h1>Bizimle iletişime geçin!</h1>
        <form>
          <div className="formItem">
            <label htmlFor="">İsim:</label>
            <input type="text" />
          </div>

          <div className="formItem">
            <label htmlFor="">Soyisim:</label>
            <input type="text" />
          </div>
          <div className="formItem">
            <label htmlFor="">Yaş:</label>
            <input type="text" />
          </div>
          <div className="formItem">
            <label htmlFor="">Eposta:</label>
            <input type="text" />
          </div>
          <button className="formBtn">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
