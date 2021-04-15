import React from "react";
import "./App.css";
import RouterApp from "./components/RouterApp";
import CartProvider from "./components/CartProvider";

function App() {
  return (
    <CartProvider>
      <RouterApp />
    </CartProvider>
  );
}

export default App;
