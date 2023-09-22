import React from "react";

import Hero from "./components/Hero";

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
    </div>
  );
}

export default App;
