import "./Nav.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="navigation">
      <div className="icons">
        <FaFacebookF className="icon"/>
        <FaInstagram className="icon"/>
      </div>
      <div className="main-navigation">
        <div className="left-selections">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/content">Content</a>
        </div>
        <div className="logo">
          <h3>LIVING</h3>
          <span>chillin</span>
        </div>
        <div className="right-selections">
          <a href="/rent">Rent</a>
          <a href="/buy">Buy</a>
          <a href="/sell">Sell</a>
        </div>
          </div>
          <div className="explore-button">
             <button>Explore</button> 
          </div>
    </header>
  );
}

export default Nav