import React from "react";
import Advertisement from "./components/advertisement";
import Product from "./components/product";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.propsMainBody}>
        <div className={styles.componentBody}>
          <Hero
            title="Welcome to our electronics shop website"
            subtitle="We sell old and new electronics devices upto 50% off"
          />
          <Hero
            title="New Iphone 15"
            subtitle="Checkout our new Iphone 15 just get release"
          />
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

          <Product
            item_name="iPhone 15"
            imageUrl="https://cdn.wccftech.com/wp-content/uploads/2023/09/iPhone-15-Pro-2-2-728x394.jpg"
            item_description="black color"
            backgroundColor="#ffcc00"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
