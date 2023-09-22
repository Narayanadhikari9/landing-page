import React from "react";

function Hero(props) {
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Hero;
