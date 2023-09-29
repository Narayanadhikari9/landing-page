import React from "react";

function Product(props) {
  return (
    <div>
      <h1>{props.item_name}</h1>
      <img src={props.imageUrl} />
      <p>{props.item_description}</p>
    </div>
  );
}

export default Product;
