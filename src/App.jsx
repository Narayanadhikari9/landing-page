import React from "react";

import Hero from "./components/Hero";
import Product from "./components/product";

function App() {
  return (
    <div>
      <Hero
        title="Welcome to our website"
        subtitle="Discover amazing content"
        backgroundColor="#f0f0f0"
      />
      <Hero
        title="New arrivals"
        subtitle="Check out our latest products"
        backgroundColor="#ffcc00"
      />
      <Product
        item_name="iPhone 15"
        imageUrl="https://cdn.wccftech.com/wp-content/uploads/2023/09/iPhone-15-Pro-2-2-728x394.jpg"
        item_description="black color"
        backgroundColor="#ffcc00"
      />
    </div>
  );
}

export default App;
