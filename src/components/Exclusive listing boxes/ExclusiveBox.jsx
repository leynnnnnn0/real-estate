import "./ExclusiveBox.css"
const ExclusiveBox = ({price, type, country, image}) => {
  return (
    <div className="exclusive-box">
      <div className="price-box">
        <p>
          ${price} <span>(New)</span>
        </p>
      </div>
      <div className="information">
        <p>{type}</p>
        <p>{country}</p>
        <img src={image} alt={type} />
      </div>
      <div className="more-details-button">
        <button>More Details</button>
      </div>
    </div>
  );
}

export default ExclusiveBox