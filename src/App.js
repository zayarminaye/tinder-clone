import React from "react";
import './App.css';
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    // following the BEM class naming convension
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
