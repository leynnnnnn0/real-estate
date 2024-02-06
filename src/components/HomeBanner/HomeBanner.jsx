import "./HomeBanner.css"
import room from "../../images/living-room.jpg"

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="banner-text">
        <h3>
          Finding your <br />
          <span className="bold">new home</span>
          <br /> starts <span className="bold">here.</span>
              </h3>
              <button>Search</button>
      </div>
      <div className="banner-image">
        <img src={room} alt="room" />
      </div>
    </div>
  );
}

export default HomeBanner;