import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo2 from "../Navbar/img/bahadırLogo.jpg";

const Navbar = ({ timeline, ease }) => {
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item4 = useRef(null);
  useEffect(() => {
    timeline.from(logo, 1, {
      opacity: 0,
      y: -200,
    });
    timeline.from([menu_item1, menu_item2, menu_item4], 2, {
      opacity: 0,
      y: -200,
      stagger: {
        amount: 0.4,
      },
      ease: ease,
    });
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={"navbarContent"}>
        <div className="navbarLogo" ref={(el) => (logo = el)}>
          <div className="logo">
            <img src={logo2} alt="" />
          </div>

          <h1>Güngördü Çiftliği</h1>
        </div>
        <div className="navbarLink">
          <ul className="navbarUl">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink menu_item1" : ""
              }
              to="/"
              ref={(el) => (menu_item1 = el)}
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink menu_item2" : ""
              }
              to="/products"
              ref={(el) => (menu_item2 = el)}
            >
              Ürünlerimiz
            </NavLink>
          
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink menu_item4" : ""
              }
              to="/contact"
              ref={(el) => (menu_item4 = el)}
            >
              İletişim
            </NavLink>
          </ul>
        </div>
        <div className="mobileMenuIcon">
          <div onClick={handleClickNav}>
            {!menuOpen ? (
              <GiHamburgerMenu size={30} />
            ) : (
              <IoMdClose size={30} />
            )}
          </div>
        </div>
      </div>
      <div className={!menuOpen ? "mblMenuClose" : "mblMenu"}>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? "activeMbl " : "")}
            to="/"
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeMbl" : "")}
            to="/products"
          >
            Ürünlerimiz
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeMbl" : "")}
            to="/contact"
          >
            İletişim
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
