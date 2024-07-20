import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./Home.css";
import "./Home.css";
import { gsap, Power3 } from "gsap";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import Container from "./components/Container/Container";
import FarmingPage from "./components/Farming/FarmingPage";
import HelpPage from "./components/HomeHelp/HelpPage";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
const Home = () => {
  return (
    <div className="homePage">
      <HeroContainer />
      <Container />
      <FarmingPage />
      <HelpPage />
    </div>
  );
};

export default Home;
