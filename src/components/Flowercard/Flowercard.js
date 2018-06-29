//sets up the reusable Flowercard component
import React from "react";
import "./Flowercard.css";

//pass the image into each card so all 12 are rendered
const Flowercard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Flowercard;