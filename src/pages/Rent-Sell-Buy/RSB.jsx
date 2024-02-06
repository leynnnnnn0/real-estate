import "./RSB.css"
import RSBBox from "../../components/RSB-boxes/RSBBox";
import FirstRoom from "../../images/first-room.jpg"
import SecondRoom from "../../images/second-room.jpg";
import ThirdRoom from "../../images/third-room.jpg"

const RSB = () => {
  return (
    <div className="rsb-boxes-container">
      <div className="rsb-text">
        <h4>What we offer</h4>
        <hr />
      </div>
      <div className="rsb-boxes">
        <RSBBox
          number={"01"}
          title={"Buy"}
          image={FirstRoom}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eveniet incidunt voluptatem esse ullam commodi minima nisi ipsum consequatur perspiciatis?"
          }
        />
        <RSBBox
          number={"02"}
          title={"Sell"}
          image={SecondRoom}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eveniet incidunt voluptatem esse ullam commodi minima nisi ipsum consequatur perspiciatis?"
          }
        />
        <RSBBox
          number={"03"}
          title={"Rent"}
          image={ThirdRoom}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eveniet incidunt voluptatem esse ullam commodi minima nisi ipsum consequatur perspiciatis?"
          }
        />
      </div>
    </div>
  );
}

export default RSB
