import React from "react";
import "./App.css";
import AppRouter from "./router";
import { ProductOrderProvider } from "./context/ProductOrderProvider";
import Header from "./components/Header";
function App() {
  return (
    <ProductOrderProvider>
      <Header />
      <AppRouter />
    </ProductOrderProvider>
  );
}

export default App;
