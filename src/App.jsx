import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
import { ScrollTrigger } from "gsap-trial/all";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { gsap, Power3 } from "gsap";
import Footer from "./components/Footer/Footer";
import FarmingProducts from "./pages/Products/components/FarmingProducts";
import AnimalProducts from "./pages/Products/components/AnimalProducts";
import About from "./pages/About/About";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  return (
    <div>
      <Navbar timeline={tl} ease={ease} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route
            path="farmingProducts"
            element={<FarmingProducts timeline2={tl} ease2={ease} />}
          />

          <Route
            path="animalProducts"
            element={<AnimalProducts timeline3={tl} ease3={ease} />}
          />

        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
