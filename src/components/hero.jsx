import React from "react";
import styles from "../styles/hero.module.css"
function Hero({title, subtitle}) {
  return (
    <div className={styles.hero}>
      <h2>{title}</h2>
      <h4 className={styles.header}>{subtitle}</h4>
    </div>
  );
}

export default Hero;
