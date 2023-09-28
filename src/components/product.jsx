import React from "react";
import Hero from "./hero";
import styles from "../styles/product.module.css";
function Product() {
  
  return (
    <div >
      <Hero
        title="Welcome to our website"
        subtitle="Discover out our amazing content"
      />
      <Hero title="New arrivals" 
      subtitle="Check our latest products" />
      <Hero title="Iphone 15" 
      subtitle="Our new iphone 15" />
    </div>
  );
}

export default Product;
