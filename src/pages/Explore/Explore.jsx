import "./Explore.css"
import smile from "../../images/smile.jpg"
import building from "../../images/building.jpg"
const Explore = () => {
  return (
    <div className="explore">
      <div className="upper-explore">
        <div className="upper-explore-text">
          <p>Work with us</p>
          <h3>Dedicated, Determined , And Always One Step Ahead.</h3>
          <button>Learn more</button>
        </div>
        <img src={smile} alt="dedicated" />
      </div>
      <div className="bottom-explore">
        <img src={building} alt="building" />
        <div className="bottom-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            unde dolorum porro ducimus voluptatum dolor animi, natus a ex
            debitis eos alias aspernatur, quos explicabo eligendi possimus,
            consequuntur rerum quibusdam temporibus ab nemo nihil repudiandae
            optio sed. Illo quisquam consequatur expedita obcaecati ex magnam
            unde, recusandae laudantium saepe! In, voluptatum!
          </p>
          <div className="cursive">
            <p>The future is us, so the future will be yours</p>
          </div>
          <div className="counties">
            <p>United States of America</p>
            <p>The Great Britain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore