import React from "react";
import "./style.scss";
import imgaes from '../../assets/images.jpeg'

export const Cards = () => {
  return (

 <div className="div1">
      <div id="images">
        <img src={imgaes} alt="" />
      </div>
      <div className="text">
        <p className="p1">Gift Shop Lyon</p>
        <h3 className="p2">New Balance Store</h3>
        <div id="icon">
          <i
            className="fa-solid fa-location-dot"
            style={{ color: "rgba(0, 0, 0, 0.346)" }}
          ></i>
          <span>&nbsp;&nbsp;7 Rule Emile Duclaux,92150 Suresnes,France</span>
        </div>
        <div className="last">
          <p>
            <span style={{ color: "rgb(0, 221, 221)" }}>
              5.0 <i className="fa-solid fa-star"></i>
              <span style={{ color: "black" }}>(1 review)</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  
  
  
  ); 
};
