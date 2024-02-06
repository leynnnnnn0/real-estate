import "./RSBBox.css"

const RSBBox = ({number, title, image, text}) => {
  return (
      <div className="rsb-box">
          <h1>{number} <span>/ {title}</span></h1>
          <img src={image} alt="room" />
          <p>{text}</p>
    </div>
  )
}

export default RSBBox