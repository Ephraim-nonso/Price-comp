import React from "react";
import "./App.css";
import Header from "./components/Header";
import PriceDisplay from "./components/PriceDisplay";
import bottomImg from "./components/images/bg-bottom.svg";
import topImg from "./components/images/bg-top.svg";

function App() {
  return (
    <div className="main-container">
      <Header />
      <PriceDisplay />
      <img src={bottomImg} alt="bottomImage" className="bottom-img" />
      <img src={topImg} alt="topImg" className="topImg" />
    </div>
  );
}

export default App;
