import "./About.css";
import pool from "../../images/pool-side.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="about-contents">
        <div className="about-image">
          <img src={pool} alt="pool" />
        </div>
        <div className="about-text">
          <h5>About</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, ad
            voluptates corporis laboriosam temporibus amet, rem qui animi,
            consectetur reiciendis harum atque hic! Nihil tempore, aspernatur
            quidem asperiores error doloribus?
          </p>
          <button>Know more about us</button>
        </div>
      </div>
    </div>
  );
}

export default About