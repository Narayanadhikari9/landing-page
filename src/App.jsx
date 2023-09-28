import React from "react";
import Advertisement from "./components/advertisement";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <Header />
      <div className={styles.propsMainBody}>
        <div className={styles.componentBody}>
          <Advertisement
            title="Check out our special offers!"
            description="Do not miss out on this limited deals on our amazing products. 
        This is a life time deals will be available on our website"
          />
          <Advertisement
            title="Introducing the Ultimate Smartphone!"
            description="Experience the future with our cutting-edge smartphone. 
        Stunning design, lightning-fast performance, and a camera that captures 
        memories like never before. Upgrade your life today!"
          />
          <Advertisement
            title="Unleash Your Creative Genius!"
            description="Elevate your artistry with our professional-grade drawing tablet. Precision, sensitivity, and limitless possibilities at your fingertips. 
        Unleash your creativity and create masterpieces like never before!"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
