import { useState } from "react";
import styles from "../styles/hero.module.css";
function Hero({title, subtitle}) {
  return (
    <div className={styles.container}>
      <h1 >{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default Hero;
