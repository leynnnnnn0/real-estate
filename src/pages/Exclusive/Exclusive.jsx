import "./Exclusive.css"
import ExclusiveBox from "../../components/Exclusive listing boxes/ExclusiveBox"
import firstImage from "../../images/first-room.jpg";
import secondImage from "../../images/living-room.jpg"
import thirdImage from "../../images/third-room.jpg"

const Exclusive = () => {
  return (
    <div className="exclusive">
      <h3>Exclusive Listing</h3>
      <div className="exclusive-list">
        <ExclusiveBox
          price={"800,000"}
          type={"Building"}
          country={"California, USA"}
          image={firstImage}
        />
        <ExclusiveBox
          price={"800,000"}
          type={"Building"}
          country={"California, USA"}
          image={secondImage}
        />
        <ExclusiveBox
          price={"800,000"}
          type={"Building"}
          country={"California, USA"}
          image={thirdImage}
        />
      </div>
      <button className="more-listing">Show more exlusive listing</button>
    </div>
  );
}

export default Exclusive