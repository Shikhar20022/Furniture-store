import React from "react";

function Card({ image, text }) {
  return (
    <>
      <div className="product">
        <img
          className="img"
          src={image}
          alt="Example"
          width={"250px"}
          height={"200px"}
        />
        <h3 className="type"> {text}</h3>
        <div />
      </div>
    </>
  );
}

export default Card;
