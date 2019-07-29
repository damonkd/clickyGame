import React from "react";
import "./Imagecard.css";


const ImageCard  = props => (
    <div className="card" border="primary" onClick={props.imageClick}>
        <div className="img-container">
        <img alt={props.image.replace(".jpg", "")} src={require("../images/" + props.image)} />
        
        </div>
    </div>
);


export default ImageCard;