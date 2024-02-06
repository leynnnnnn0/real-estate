import "./Content.css";
import Nav from "../../components/Nav/Nav";

import RSB from "../Rent-Sell-Buy/RSB";
import Explore from "../Explore/Explore";
import Home from "../Home/Home";
import About from "../About/About";
import Exclusive from "../Exclusive/Exclusive";
import Footer from "../../components/Footer/Footer";
const Content = () => {
  return (
    <div className="contents">
      <div className="nav-section">
        <Nav />
      </div>
      <div className="home-section">
        <Home />
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="RSB-section">
        <RSB />
      </div>
      <div className="explore-section">
        <Explore />
      </div>
      <div className="exclusive-section">
        <Exclusive />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Content;
