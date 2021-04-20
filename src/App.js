import React from "react";
import "./App.css";
import RouterApp from "../src/routers/RouterApp";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <RouterApp />
    </CartProvider>
  );
}

export default App;
